"""War Impact Desk — 실데이터 갱신 (GitHub Actions에서 하루 1회 실행)

1) GDELT 2.0 '15분 단위 사건 파일'(정적 파일, 검색 API가 아니라 요청 제한 없음, 키 불필요)을 최근 24시간치 받는다
2) 제재·위협·무력 사용 같은 사건 중 공급망·에너지·해상·사이버와 관련된 것만 기사 주소의 단어로 골라 집계한다
3) 기사가 많이 쓰인 상위 사건만 Gemini가 산업별 영향과 이번 주 확인할 일로 정리한다 (한 번 호출)
4) live-data.js 로 저장 → 사이트의 대시보드·이벤트·지도·브리핑이 이 파일을 읽는다

실패하면 기존 live-data.js 를 건드리지 않고 끝낸다 (사이트는 마지막 성공본과 그 시각을 계속 보여 준다).

    GEMINI_API_KEY=... python scripts/update_live.py
"""
import csv
import io
import json
import os
import re
import sys
import urllib.error
import urllib.request
import zipfile
from collections import Counter, defaultdict
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'live-data.js'
HOURS = 24
MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite']
INDUSTRIES = ['semiconductor', 'automotive', 'consumer', 'energy', 'manufacturing', 'chemical']
CATEGORIES = ['supply_chain', 'oil_commodity', 'maritime', 'insurance', 'sanctions', 'fx_macro', 'cyber']

# CAMEO 사건 대분류: 13 위협, 15 무력 과시, 16 관계 축소(제재·금수 포함), 17 강압(봉쇄 등), 18 공격, 19 교전, 20 대량 폭력
ROOT_CODES = {'13', '15', '16', '17', '18', '19', '20'}
KEYWORDS = {
    'sanctions': ['sanction', 'embargo', 'tariff', 'export-control', 'export-ban', 'blacklist', 'entity-list', 'trade-war'],
    'maritime': ['ship', 'shipping', 'vessel', 'tanker', 'port', 'strait', 'red-sea', 'houthi', 'navy', 'maritime', 'freight', 'suez', 'hormuz'],
    'oil_commodity': ['oil', 'crude', 'opec', 'lng', 'pipeline', 'refinery', 'energy', 'natural-gas', 'wheat', 'grain', 'copper'],
    'supply_chain': ['chip', 'semiconductor', 'supply-chain', 'rare-earth', 'lithium', 'factory', 'plant', 'automaker', 'battery', 'shortage'],
    'cyber': ['cyber', 'hack', 'ransomware', 'malware', 'outage'],
    'fx_macro': ['currency', 'inflation', 'interest-rate', 'yuan', 'ruble', 'bond', 'stocks', 'market'],
}

SCHEMA = {
    'type': 'ARRAY',
    'items': {
        'type': 'OBJECT',
        'properties': {
            'source_ids': {'type': 'ARRAY', 'items': {'type': 'INTEGER'}},
            'title': {'type': 'STRING', 'description': '한국어 사건 제목'},
            'region': {'type': 'STRING', 'description': '한국어 지역명'},
            'category': {'type': 'STRING', 'enum': CATEGORIES},
            'summary': {'type': 'STRING'},
            'scores': {'type': 'OBJECT', 'properties': {k: {'type': 'INTEGER'} for k in INDUSTRIES},
                       'required': INDUSTRIES, 'description': '산업별 영향도 0~100'},
            'why_it_matters': {'type': 'STRING'},
            'business_impact': {'type': 'STRING'},
            'recommended_actions': {'type': 'ARRAY', 'items': {'type': 'STRING'}},
            'confidence': {'type': 'NUMBER'},
        },
        'required': ['source_ids', 'title', 'region', 'category', 'summary', 'scores', 'why_it_matters',
                     'business_impact', 'recommended_actions', 'confidence'],
    },
}


def get(url, timeout=60):
    req = urllib.request.Request(url, headers={'User-Agent': 'war-impact-desk-updater/1.0'})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def slug_title(url):
    """기사 주소 마지막 부분을 제목 대용으로 쓴다 (사건 파일에는 제목이 없음)"""
    path = urlparse(url).path.rstrip('/')
    seg = path.split('/')[-1] if path else ''
    seg = re.sub(r'\.(html?|php|aspx?)$', '', seg, flags=re.I)
    seg = re.sub(r'[-_]?\d{5,}[-_]?', ' ', seg)
    words = [w for w in re.split(r'[-_+]+', seg) if w]
    alpha = [w for w in words if re.fullmatch(r'[A-Za-z][A-Za-z\']*', w)]
    if len(alpha) < 4 or len(alpha) < len(words) * 0.7:
        return None
    return ' '.join(words)


def category_of(url):
    # 단어 단위로만 맞춘다 ('port'가 report·support에, 'ship'이 relationship에 걸리지 않게)
    tokens = [t for t in re.split(r'[^a-z0-9]+', urlparse(url).path.lower()) if t]
    text = '-' + '-'.join(tokens) + '-'
    for cat, kws in KEYWORDS.items():
        if any(f'-{k}-' in text or f'-{k}s-' in text for k in kws):
            return cat
    return None


def fetch_events():
    last = get('http://data.gdeltproject.org/gdeltv2/lastupdate.txt').decode().split()
    newest = re.search(r'/(\d{14})\.export', next(x for x in last if x.endswith('.export.CSV.zip'))).group(1)
    t = datetime.strptime(newest, '%Y%m%d%H%M%S')
    rows, ok = [], 0
    for i in range(HOURS * 4):
        stamp = (t - timedelta(minutes=15 * i)).strftime('%Y%m%d%H%M%S')
        try:
            data = get(f'http://data.gdeltproject.org/gdeltv2/{stamp}.export.CSV.zip')
        except urllib.error.HTTPError:
            continue  # 가끔 빠진 파일이 있다
        z = zipfile.ZipFile(io.BytesIO(data))
        text = z.read(z.namelist()[0]).decode('utf-8', 'replace')
        rows.extend(csv.reader(io.StringIO(text), delimiter='\t'))
        ok += 1
    if ok == 0:
        raise RuntimeError('GDELT 사건 파일을 하나도 받지 못함')
    return rows, ok, t


def pick_candidates(rows):
    by_url = {}
    stats_cat, stats_country, total = Counter(), Counter(), 0
    for r in rows:
        if len(r) < 61 or r[28] not in ROOT_CODES or r[25] != '1':
            continue
        url = r[60]
        cat = 'sanctions' if r[26].startswith('163') else category_of(url)
        if not cat:
            continue
        total += 1
        stats_cat[cat] += 1
        country = r[52].split(',')[-1].strip() if r[52] else ''
        if country:
            stats_country[country] += 1
        title = slug_title(url)
        if not title:
            continue
        cur = by_url.get(url)
        arts = int(r[33] or 0)
        if cur is None or arts > cur['articles']:
            try:
                lat, lng = float(r[56]), float(r[57])
            except ValueError:
                lat = lng = None
            by_url[url] = {'url': url, 'domain': urlparse(url).netloc.replace('www.', ''), 'title': title,
                           'category': cat, 'place': r[52], 'lat': lat, 'lng': lng, 'articles': arts,
                           'goldstein': float(r[30] or 0)}
    # 같은 제목(재배포) 제거 후 기사 수 상위 30개
    seen, cands = set(), []
    for c in sorted(by_url.values(), key=lambda c: -c['articles']):
        key = c['title'].lower()[:60]
        if key in seen:
            continue
        seen.add(key)
        cands.append(c)
        if len(cands) >= 30:
            break
    stats = {'matched_events': total, 'by_category': dict(stats_cat),
             'top_places': [p for p, _ in stats_country.most_common(8)]}
    return cands, stats


def call_gemini(cands, api_key):
    lines = '\n'.join(f"[{i + 1}] {c['title']} ({c['domain']}, {c['place'] or '위치 미상'}, 분류 힌트 {c['category']})"
                      for i, c in enumerate(cands))
    prompt = f"""너는 한국 제조·소비재 기업의 공급망·지정학 리스크 분석가다.
아래는 GDELT에서 받은 최근 {HOURS}시간 실제 사건의 기사 주소 제목(영문, 주소에서 추출)이다.

{lines}

기업 공급망·에너지·해상 물류·제재에 영향이 큰 사건을 최대 8개 골라 한국어로 정리하라.
규칙:
- 같은 사건은 하나로 묶고 source_ids에 번호를 모두 넣는다.
- 제목에 없는 수치(금액·%·물량·날짜)를 만들지 않는다. 영향은 방향과 경로로 설명한다.
- scores는 6개 산업(semiconductor, automotive, consumer, energy, manufacturing, chemical)별 영향도 0~100.
- recommended_actions는 실무자가 이번 주에 확인할 행동 3~5개.
- 제목만 보고 판단하므로 confidence(0~1)는 보수적으로 매긴다. 기업 영향이 불분명한 정치·사건 사고는 고르지 않는다."""
    last = ''
    for model in MODELS:
        body = json.dumps({'contents': [{'role': 'user', 'parts': [{'text': prompt}]}],
                           'generationConfig': {'responseMimeType': 'application/json',
                                                'responseSchema': SCHEMA, 'temperature': 0.2}}).encode()
        req = urllib.request.Request(
            f'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent',
            data=body, headers={'Content-Type': 'application/json', 'x-goog-api-key': api_key})
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                out = json.loads(r.read())
            return model, json.loads(out['candidates'][0]['content']['parts'][0]['text'])
        except urllib.error.HTTPError as e:
            last = f'{model} HTTP {e.code}'
            if e.code in (429, 503):
                continue
            raise RuntimeError(last + ': ' + e.read().decode()[:200])
    raise RuntimeError('모든 모델 한도 초과 (' + last + ')')


def previous_scores():
    if not OUT.exists():
        return {}
    text = OUT.read_text(encoding='utf-8')
    try:
        data = json.loads(text[text.index('{'):text.rindex('}') + 1])
    except ValueError:
        return {}
    return {(e['category'], e['region']): e['risk_score'] for e in data.get('events', [])}


def build(model, data, cands, stats, files_ok, newest):
    prev = previous_scores()
    now = datetime.now(timezone.utc)
    events = []
    for item in (data if isinstance(data, list) else [])[:8]:
        srcs = [cands[i - 1] for i in item.get('source_ids', []) if isinstance(i, int) and 1 <= i <= len(cands)]
        if not srcs or item.get('category') not in CATEGORIES:
            continue  # 근거 기사 번호가 맞지 않거나 분류 밖이면 버림
        scores = {k: max(0, min(100, int((item.get('scores') or {}).get(k) or 0))) for k in INDUSTRIES}
        risk = max(scores.values())
        region = str(item.get('region', ''))[:40]
        geo = next((s for s in srcs if s['lat'] is not None), None)
        events.append({
            'id': f'LIVE-{len(events) + 1:03d}',
            'lat': geo['lat'] if geo else 0, 'lng': geo['lng'] if geo else 0,
            'title': str(item['title'])[:120],
            'source': ' / '.join(dict.fromkeys(s['domain'] for s in srcs))[:80],
            'sources': [{'url': s['url'], 'domain': s['domain']} for s in srcs],
            'region': region,
            'category': item['category'],
            'summary': str(item.get('summary', ''))[:400],
            'impact_industries': [k for k, v in scores.items() if v >= 40],
            'industry_scores': scores,
            'risk_score': risk,
            'risk_level': 'high' if risk >= 70 else 'medium' if risk >= 40 else 'low',
            'prev_score': prev.get((item['category'], region), risk),
            'created_at': now.isoformat(),
            'insight': {
                'why_it_matters': str(item.get('why_it_matters', ''))[:400],
                'business_impact': str(item.get('business_impact', ''))[:400],
                'recommended_actions': [str(a)[:150] for a in (item.get('recommended_actions') or [])[:5]],
                'confidence': max(0.0, min(1.0, float(item.get('confidence') or 0))),
            },
        })
    if not events:
        raise RuntimeError('검증을 통과한 사건이 없음')
    return {
        'generatedAt': now.isoformat(),
        'window': {'hours': HOURS, 'files': files_ok, 'until': newest.replace(tzinfo=timezone.utc).isoformat()},
        'source': 'GDELT 2.0 Events (15분 단위 공개 파일)',
        'model': model,
        'stats': {**stats, 'candidates': len(cands)},
        'events': sorted(events, key=lambda e: -e['risk_score']),
    }


def main():
    api_key = os.environ.get('GEMINI_API_KEY')
    if not api_key:
        sys.exit('GEMINI_API_KEY 없음')
    rows, files_ok, newest = fetch_events()
    cands, stats = pick_candidates(rows)
    if len(cands) < 3:
        sys.exit(f'후보 사건이 너무 적음 ({len(cands)}건) — 기존 파일 유지')
    model, data = call_gemini(cands, api_key)
    result = build(model, data, cands, stats, files_ok, newest)
    OUT.write_text('// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요\nwindow.LIVE_DATA = '
                   + json.dumps(result, ensure_ascii=False, indent=1) + ';\n', encoding='utf-8')
    print(f"saved {OUT.name}: files {files_ok}, matched {stats['matched_events']}, candidates {len(cands)}, "
          f"events {len(result['events'])}, model {model}")


if __name__ == '__main__':
    try:
        main()
    except Exception as e:  # 실패해도 기존 파일은 그대로 둔다
        sys.exit(f'갱신 실패: {e}')
