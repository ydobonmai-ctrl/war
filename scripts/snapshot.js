// GDELT 수집이 될 때 실행해 '마지막 성공 결과'를 snapshot/latest.json 으로 저장한다.
// 실시간 분석이 GDELT 요청 제한(429)으로 실패하면 live.html 이 이 파일을 대신 보여 준다 (수집 시각 명시).
//
//   GEMINI_API_KEY=... node scripts/snapshot.js
const fs = require('fs');
const path = require('path');
const { fetchArticles, analyze, INDUSTRIES } = require('../api/live-analysis.js');

(async () => {
  const articles = await fetchArticles();            // GDELT 1회 (산업 공통 기사 목록)
  const results = {};
  for (const industry of Object.keys(INDUSTRIES)) {
    results[industry] = await analyze(industry, articles);   // 산업별 Gemini 분석
    console.log(industry, results[industry].events.length, 'events');
  }
  const out = path.join(__dirname, '..', 'snapshot', 'latest.json');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify({ fetchedAt: new Date().toISOString(), articleCount: articles.length, results }, null, 1));
  console.log('saved', out);
})().catch(e => { console.error('snapshot 실패:', e.message); process.exit(1); });
