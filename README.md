# War Impact Desk ⚡

> **전쟁·제재·공급망 리스크를 업무 액션으로 바꾸는 AI Agent**
>
> 단순한 뉴스 모니터링을 넘어, 지정학 이벤트를 기업의 산업과 공급망 기준으로 판단하고 즉각적인 대응 액션과 경영진 보고서 초안까지 자동 생성하는 B2B 리스크 인텔리전스 프로토타입입니다.



---

## 🚀 아키텍처 및 데이터 파이프라인

```
[GitHub Actions · 매일 08:17 KST]  scripts/update_live.py
  ① GDELT 2.0 사건 파일(15분 단위 정적 공개 파일) 최근 24시간치 96개 다운로드
  ② CAMEO 사건 분류(위협·무력 과시·제재·봉쇄·공격·교전) + 기사 주소 단어로 공급망·에너지·해상·제재·사이버 관련 사건만 선별
  ③ 기사 수 상위 30건을 Gemini가 사건 최대 8개로 묶고 산업별 영향도·이번 주 확인할 일 정리 (1회 호출)
  ④ 검증을 통과한 결과만 live-data.js 로 저장 → 변경 시 커밋 → Vercel 자동 배포
[사이트]  대시보드·이벤트 모니터·지도·브리핑이 live-data.js 를 읽고, 화면 상단에 출처·갱신 시각 표시
```

### 1. 실데이터 갱신 (`scripts/update_live.py`, `.github/workflows/update-live.yml`)
- **왜 이 구조인가:** 처음에는 방문자가 열 때마다 GDELT **검색 API**를 불렀는데, 요청 제한(429)이 서버·로컬 IP 모두에서 길게 이어져 화면이 자주 실패했습니다. 검색 API 대신 GDELT가 15분마다 공개하는 **정적 사건 파일**(요청 제한 없음, 키 불필요)을 하루 한 번 받아 저장해 두고, 사이트는 저장본을 읽도록 바꿨습니다.
- **제목 처리:** 사건 파일에는 기사 제목이 없어 기사 주소의 마지막 부분(slug)을 제목 대용으로 쓰고, 숫자 위주·짧은 주소는 버립니다.
- **분류:** 키워드는 단어 단위로만 맞춥니다. (`port`가 report·support에 걸려 해상 물류가 3배로 부풀었던 문제를 고쳤습니다.)
- **LLM 통제:** JSON 스키마로 응답 강제, 근거 기사 번호가 후보 목록에 없거나 카테고리 밖이면 폐기, 주어지지 않은 수치 생성 금지, 확신도 표시. 429·503이면 `gemini-2.5-flash` → `gemini-2.5-flash-lite`.
- **실패 시:** 기존 `live-data.js`를 건드리지 않습니다. 화면은 마지막 성공본과 그 시각을 계속 보여 주고, 30시간 넘게 갱신되지 않으면 "갱신 지연"으로 표시합니다.
- **주기:** Gemini 무료 한도를 넉넉히 남기려고 하루 1회(호출 1번)로 정했습니다. 더 자주 필요하면 워크플로의 cron만 바꾸면 됩니다.
- **설정:** GitHub 저장소 Settings → Secrets and variables → Actions에 `GEMINI_API_KEY` 등록. 수동 실행은 Actions 탭의 *Update live data* → *Run workflow*.
- **로컬 실행:** `GEMINI_API_KEY=... python scripts/update_live.py`

### 2. 세계 리스크 지도 (`map.html`)
- 위 실데이터 사건과 함께, GDELT GEO API의 최근 24시간 분쟁·제재 지점을 지도에 겹쳐 보여 줍니다. (이 레이어는 브라우저가 직접 요청하므로 GDELT 제한 중에는 비어 있을 수 있습니다.)

### 3. 시나리오 데이터 (`data.js`의 `SCENARIO_EVENTS`) — 예비용
- 과거 실제 사건 12종을 바탕으로 **사전에 작성한 시나리오**입니다. `live-data.js`를 불러오지 못할 때만 쓰며, 그때는 화면 상단에 "시연용 시나리오"라고 표시합니다.

---

## 🛠 기술 스택 (Tech Stack)

### Frontend
- **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Map & Dataviz:** Leaflet.js, CartoDB Dark Matter BaseMap
- **Architecture:** Zero-dependency (최소한의 외부 라이브러리로 가볍고 빠른 성능 유지)
- **State Management:** LocalStorage API (사용자 산업/키워드 설정 저장)

### Deployment
- **Vercel:** 정적 파일 빌드 및 글로벌 Edge Network 배포 (`vercel.json` 커스텀 라우팅 적용)

---

## 🎯 핵심 기능 (Key Features)

- 📊 **산업 맞춤형 대시보드:** 소속 산업군(반도체, 에너지 등)에 따라 리스크 중요도와 대응 액션이 동적으로 재설정됩니다.
- 🗺️ **글로벌 실시간 관제:** Leaflet DarkMap 기반으로 실시간 분쟁 이슈 산발 지점을 추적하고, 리스크 심각도에 따라 펄스 애니메이션이 적용된 관제 환경을 제공합니다.
- 📋 **AI 보고서 자동 생성:** 선택한 모니터링 이벤트를 종합하여 3가지 유형(경영진 브리핑, 실무 상세, 액션 체크리스트)의 리포트를 자동 생성합니다.
- ⚡ **실행 가능한 액션 도출:** "우려된다"가 아닌, "물류 경로 B플랜을 확보하라" 같은 실무적 대응 체크리스트를 도출합니다.

---

## 📁 프로젝트 구조 (Directory Structure)

```text
war-impact-desk/
├── index.html       # 제품 소개 랜딩 페이지
├── dashboard.html   # 메인 리스크 대시보드 (KPI, 리스트)
├── map.html         # 글로벌 실시간 관제 (GDELT API + Leaflet)
├── events.html      # 전체 이벤트 모니터 (필터 및 정렬)
├── report.html      # AI 리포트/브리핑 생성기
├── settings.html    # 사용자 환경설정 (로컬 스토리지)
├── styles.css       # 다크모드 B2B SaaS 디자인 시스템
└── data.js          # 핵심 데이터 구조 및 비즈니스 로직(스코어링, 필터) 함수
```

