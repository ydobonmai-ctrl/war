// War Impact Desk — 실시간 AI 분석 (Vercel 서버리스 함수, Node 18+)
//
// GET /api/live-analysis?industry=semiconductor
//   1) GDELT DOC 2.0 API에서 최근 24시간 분쟁·제재·해상물류 기사 목록을 받는다 (실데이터, 키 불필요)
//   2) 제목만 Gemini에 넘겨, 선택한 산업 기준으로 영향이 큰 사건을 최대 5개 골라 구조화한다
//   3) 응답을 JSON 스키마로 강제하고, 근거 기사 번호가 실제 목록에 없는 항목은 버린다
//
// API 키(GEMINI_API_KEY)는 서버 환경변수에만 두고 브라우저로 보내지 않는다.
// GDELT는 요청 간격 제한이 있어 산업별 결과를 30분 캐시한다.

const INDUSTRIES = {
  semiconductor: '반도체', automotive: '자동차', consumer: '소비재',
  energy: '에너지', manufacturing: '제조업', chemical: '화학/소재',
};
const CATEGORIES = ['supply_chain', 'oil_commodity', 'maritime', 'insurance', 'sanctions', 'fx_macro', 'cyber'];
const MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite'];
const GDELT_QUERY =
  '(sanctions OR "export controls" OR blockade OR "shipping attack" OR "red sea" OR tariffs OR war) sourcelang:english';
const TTL_MS = 30 * 60_000;
const cache = new Map();

const SCHEMA = {
  type: 'ARRAY',
  items: {
    type: 'OBJECT',
    properties: {
      source_ids: { type: 'ARRAY', items: { type: 'INTEGER' }, description: '근거 기사 번호' },
      title: { type: 'STRING', description: '한국어 사건 제목' },
      region: { type: 'STRING' },
      category: { type: 'STRING', enum: CATEGORIES },
      risk_score: { type: 'INTEGER', description: '선택 산업 기준 영향도 0~100' },
      why_it_matters: { type: 'STRING' },
      business_impact: { type: 'STRING' },
      recommended_actions: { type: 'ARRAY', items: { type: 'STRING' } },
      confidence: { type: 'NUMBER', description: '제목만으로 판단한 확신도 0~1' },
    },
    required: ['source_ids', 'title', 'region', 'category', 'risk_score', 'why_it_matters',
      'business_impact', 'recommended_actions', 'confidence'],
  },
};

async function fetchArticles() {
  const url = 'https://api.gdeltproject.org/api/v2/doc/doc?' + new URLSearchParams({
    query: GDELT_QUERY, mode: 'artlist', format: 'json', maxrecords: '60', timespan: '24h', sort: 'hybridrel',
  });
  let res;
  let lastError = '';
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      res = await fetch(url, { headers: { 'User-Agent': 'war-impact-desk/1.0' }, signal: AbortSignal.timeout(20000) });
      if (res.status !== 429) break;
      lastError = 'HTTP 429 (요청 제한)';
    } catch (e) {
      res = undefined; // 제한 중에는 연결을 끊기도 해서 네트워크 오류도 재시도
      lastError = e.message;
    }
    await new Promise(r => setTimeout(r, 6000)); // GDELT 권장 간격(5초)보다 길게 쉬고 재시도
  }
  if (!res || !res.ok) throw new Error(`GDELT 수집 실패: ${res ? `HTTP ${res.status}` : lastError}`);
  const text = await res.text();
  let body;
  try { body = JSON.parse(text); } catch { throw new Error(`GDELT 응답 오류: ${text.slice(0, 80)}`); }
  return normalizeArticles(body.articles);
}

// 브라우저가 보낸 목록이든 서버가 받은 목록이든 같은 규칙으로 정리·검증한다.
// (브라우저 입력은 믿지 않는다: 개수·길이 제한, http(s) 링크만, 중복 제거)
function normalizeArticles(list) {
  const seen = new Set();
  const articles = [];
  for (const a of Array.isArray(list) ? list : []) {
    const title = String((a && a.title) || '').replace(/\s+/g, ' ').trim().slice(0, 300);
    const url = String((a && a.url) || '');
    const key = title.toLowerCase().replace(/\W+/g, ' ').trim().slice(0, 60);
    if (!key || seen.has(key) || !/^https?:\/\//.test(url)) continue; // 같은 기사 재배포 제거
    seen.add(key);
    articles.push({ id: articles.length + 1, title, url: url.slice(0, 500), domain: String(a.domain || '').slice(0, 100) });
    if (articles.length >= 25) break;
  }
  if (articles.length === 0) throw Object.assign(new Error('분석할 기사가 없음'), { status: 400 });
  return articles;
}

function buildPrompt(industryLabel, articles) {
  const list = articles.map(a => `[${a.id}] ${a.title} (${a.domain})`).join('\n');
  return `너는 한국 ${industryLabel} 기업의 공급망·지정학 리스크 분석가다.
아래는 GDELT에서 받은 최근 24시간 실제 뉴스 제목 목록이다.

${list}

${industryLabel} 산업에 영향이 큰 사건을 최대 5개 골라 한국어로 정리하라.
규칙:
- 같은 사건을 다룬 기사는 하나로 묶고 source_ids에 기사 번호를 모두 넣는다.
- 제목에 없는 수치(금액, %, 날짜, 물량)를 만들지 않는다. 영향은 방향과 경로로 설명한다.
- recommended_actions는 실무자가 이번 주에 확인할 수 있는 행동 3~5개.
- 제목만 보고 판단하므로 confidence는 보수적으로 매긴다.
- 산업과 관련 없는 사건은 고르지 않는다.`;
}

async function callGemini(prompt, apiKey) {
  let last = '';
  for (const model of MODELS) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json', responseSchema: SCHEMA, temperature: 0.2 },
      }),
      signal: AbortSignal.timeout(45000),
    });
    if (res.status === 429 || res.status === 503) { last = `${model} ${res.status}`; continue; }
    if (!res.ok) {
      const detail = await res.json().then(b => b && b.error && b.error.message).catch(() => undefined);
      throw new Error(`${model} HTTP ${res.status}${detail ? `: ${String(detail).slice(0, 120)}` : ''}`);
    }
    const body = await res.json();
    const text = body?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error(`${model} 빈 응답`);
    return { model, data: JSON.parse(text) };
  }
  throw new Error(`모든 모델 한도 초과 (${last})`);
}

function validate(data, articles) {
  if (!Array.isArray(data)) throw new Error('배열이 아닌 응답');
  const byId = new Map(articles.map(a => [a.id, a]));
  const events = [];
  for (const e of data.slice(0, 5)) {
    const sources = (e.source_ids || []).map(id => byId.get(id)).filter(Boolean);
    if (sources.length === 0) continue;                 // 근거 기사가 없는 항목은 버림
    if (!CATEGORIES.includes(e.category)) continue;
    const score = Math.max(0, Math.min(100, Math.round(Number(e.risk_score) || 0)));
    events.push({
      title: String(e.title).slice(0, 120),
      region: String(e.region).slice(0, 40),
      category: e.category,
      risk_score: score,
      risk_level: score >= 70 ? 'high' : score >= 40 ? 'medium' : 'low',
      why_it_matters: String(e.why_it_matters).slice(0, 400),
      business_impact: String(e.business_impact).slice(0, 400),
      recommended_actions: (e.recommended_actions || []).slice(0, 5).map(a => String(a).slice(0, 150)),
      confidence: Math.max(0, Math.min(1, Number(e.confidence) || 0)),
      sources: sources.map(s => ({ title: s.title, url: s.url, domain: s.domain })),
    });
  }
  return events.sort((a, b) => b.risk_score - a.risk_score);
}

async function analyze(industry, articles) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw Object.assign(new Error('서버에 GEMINI_API_KEY가 설정되지 않음'), { status: 503 });
  const { model, data } = await callGemini(buildPrompt(INDUSTRIES[industry], articles), apiKey);
  const events = validate(data, articles);
  return {
    generatedAt: new Date().toISOString(),
    industry, industryLabel: INDUSTRIES[industry], model,
    articleCount: articles.length,
    events,
  };
}

// POST: 브라우저가 GDELT에서 직접 받은 기사 목록을 보낸다 (GDELT가 클라우드 IP를 자주 제한해서 기본 경로로 사용)
// GET : 서버가 GDELT를 직접 호출한다 (예비 경로)
module.exports = async function handler(req, res) {
  const body = req.method === 'POST'
    ? (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {}))
    : {};
  const industry = String(body.industry || (req.query && req.query.industry) || 'semiconductor');
  if (!INDUSTRIES[industry]) {
    res.status(400).json({ error: `industry는 ${Object.keys(INDUSTRIES).join(', ')} 중 하나` });
    return;
  }
  try {
    const articles = req.method === 'POST' ? normalizeArticles(body.articles) : await fetchArticles();
    // 같은 산업·같은 기사 묶음이면 30분 동안 Gemini를 다시 부르지 않는다 (무료 한도 보호)
    const key = industry + '|' + articles.map(a => a.title).join('|');
    const hit = cache.get(key);
    if (hit && hit.expires > Date.now()) {
      res.setHeader('X-Cache', 'HIT');
      res.status(200).json(await hit.value);
      return;
    }
    const value = analyze(industry, articles);
    cache.set(key, { expires: Date.now() + TTL_MS, value });
    try {
      res.status(200).json(await value);
    } catch (e) {
      cache.delete(key); // 실패는 캐시하지 않음
      throw e;
    }
  } catch (e) {
    res.status(e.status || 502).json({ error: e.message });
  }
};

module.exports.validate = validate; // 테스트용
module.exports.normalizeArticles = normalizeArticles;
module.exports.fetchArticles = fetchArticles;   // scripts/snapshot.js 에서 재사용
module.exports.analyze = analyze;
module.exports.INDUSTRIES = INDUSTRIES;
