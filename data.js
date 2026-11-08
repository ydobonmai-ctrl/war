// ============================================================
// War Impact Desk — Data Models (실데이터: live-data.js / 예비: 시나리오)
// ============================================================

const INDUSTRIES = [
  { id: "semiconductor", label: "반도체" },
  { id: "automotive", label: "자동차" },
  { id: "consumer", label: "소비재" },
  { id: "energy", label: "에너지" },
  { id: "manufacturing", label: "제조업" },
  { id: "chemical", label: "화학/소재" },
];

const CATEGORIES = {
  supply_chain: { label: "공급망", color: "#f59e0b", icon: "🔗" },
  oil_commodity: { label: "유가/원자재", color: "#ef4444", icon: "⛽" },
  maritime: { label: "해상 물류", color: "#3b82f6", icon: "🚢" },
  insurance: { label: "보험/운임", color: "#8b5cf6", icon: "🛡" },
  sanctions: { label: "제재/수출통제", color: "#ec4899", icon: "🚫" },
  fx_macro: { label: "환율/거시", color: "#10b981", icon: "📈" },
  cyber: { label: "사이버/인프라", color: "#06b6d4", icon: "🖥" },
};

const RISK_LEVELS = {
  low: { label: "낮음", color: "#10b981", bg: "rgba(16,185,129,0.12)" },
  medium: { label: "중간", color: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
  high: { label: "높음", color: "#ef4444", bg: "rgba(239,68,68,0.12)" },
};

// ── Events ─────────────────────────────────────────────────
// 갱신 실패 시에만 쓰는 예비 시나리오 (과거 사례로 작성)
const SCENARIO_EVENTS = [
  {
    id: "EVT-001",
    lat: 13.0, lng: 43.5,
    title: "홍해 후티 반군 공격 재개 — 컨테이너선 피격 확인",
    source: "Reuters / Maritime Executive",
    region: "중동 (홍해/아덴만)",
    category: "maritime",
    summary: "2026년 3월 14일, 후티 반군이 수에즈 운하 접근로인 홍해에서 컨테이너선 2척에 대해 드론 공격을 재개했습니다. 글로벌 주요 선사들은 희망봉(Cape of Good Hope) 우회를 지속하고 있으며, 이에 따라 아시아-유럽 구간 운항 일수는 평균 9~12일 연장되고 있습니다.",
    impact_industries: ["semiconductor", "automotive", "consumer", "chemical"],
    risk_score: 87,
    risk_level: "high",
    prev_score: 72,
    created_at: "2026-03-14T07:30:00Z",
    insight: {
      why_it_matters: "수에즈 운하는 아시아-유럽 해상 교역량의 약 12%를 처리하는 핵심 관문입니다. 우회 항로 전환 시 편도당 약 $300,000~500,000의 추가 연료비가 발생하며, 적시 재고(JIT) 방식을 채택한 제조업체에 직접적인 리드타임 리스크가 더해집니다.",
      business_impact: "유럽향 컨테이너 운임이 30~45% 상승할 가능성이 있습니다. 운항 일수 연장으로 인한 재고 적치 비용이 증가하며, 선박 보험(War Risk Premium) 할증료가 3~8배 급등할 것으로 예상됩니다.",
      recommended_actions: [
        "유럽향 해상 화물 운임 재협상 또는 항공 전환 검토",
        "재고안전재고(Safety Stock) 수준을 현재 대비 15~20% 상향 조정",
        "주요 부품/원자재의 유럽 공급처와 조달 일정 재확인",
        "물류 보험 갱신 시 War Risk 조항 포함 여부 점검",
        "고객사 납기 지연 가능성 사전 커뮤니케이션 준비",
      ],
      confidence: 0.91,
    },
  },
  {
    id: "EVT-002",
    lat: 55.75, lng: 37.6,
    title: "러시아, EU의 제12차 대러 제재 패키지 보복 조치 확대",
    source: "Financial Times / OFAC",
    region: "유럽 / 러시아",
    category: "sanctions",
    summary: "EU가 러시아산 LNG와 티타늄 수입 제한을 포함한 추가 제재 패키지를 승인했습니다. 이에 대응하여 러시아는 희귀금속 및 비료 원자재 수출 제한 조치를 취했으며, 글로벌 공급망에서 팔라듐 및 티타늄의 대체 공급처 확보가 긴급 현안으로 부상하고 있습니다.",
    impact_industries: ["semiconductor", "automotive", "chemical", "manufacturing"],
    risk_score: 82,
    risk_level: "high",
    prev_score: 80,
    created_at: "2026-03-14T05:15:00Z",
    insight: {
      why_it_matters: "러시아는 전 세계 팔라듐 공급의 약 40%, 티타늄 스폰지의 약 20%를 차지하고 있습니다. 반도체 제조 및 자동차 배기 촉매에 필수적인 팔라듐 가격이 급등할 경우, 수익성에 직접적인 타격이 예상됩니다.",
      business_impact: "팔라듐 현물 가격이 단기적으로 20~35% 상승할 여지가 있습니다. 이에 따라 자동차 촉매 부품 조달 비용이 상승하고, 화학 공정에 사용되는 비료 원료(암모니아) 가격의 연쇄적인 증가 우려도 존재합니다.",
      recommended_actions: [
        "팔라듐/티타늄 재고 현황 즉시 파악 및 3개월치 이상 확보 검토",
        "대체 공급처(남아공, 캐나다 등) 긴급 소싱 착수",
        "수입 계약의 제재 위반 리스크 법무 검토(OFAC SDN List 업데이트 확인)",
        "제3국 경유 공급망(우회 거래) 컴플라이언스 재점검",
        "원자재 가격 헷징 포지션 재검토",
      ],
      confidence: 0.88,
    },
  },
  {
    id: "EVT-003",
    lat: 26.6, lng: 56.4,
    title: "이란 호르무즈 해협 봉쇄 위협 발언 — 유가 반응",
    source: "Bloomberg / IRNA",
    region: "중동 (페르시아만)",
    category: "oil_commodity",
    summary: "이란 혁명수비대(IRGC) 고위 인사가 미국의 이란 석유 제재 강화에 대응하고자 호르무즈 해협의 '접근 제한' 가능성을 공개적으로 경고했습니다. 해당 발언 직후 WTI 선물은 배럴당 $4.2 급등했으며, 아시아 지역 정유사들을 중심으로 대체 원유를 확보하려는 움직임이 뚜렷해지고 있습니다.",
    impact_industries: ["energy", "chemical", "automotive", "manufacturing"],
    risk_score: 79,
    risk_level: "high",
    prev_score: 55,
    created_at: "2026-03-13T22:00:00Z",
    insight: {
      why_it_matters: "호르무즈 해협은 전 세계 석유 수출의 약 20%가 통과하는 가장 핵심적인 전략 요충지입니다. 물리적인 봉쇄가 발생하지 않은 '위협' 단계에서도 이미 시장의 선물 가격과 보험료는 즉각적으로 반응하게 됩니다.",
      business_impact: "유가가 $5~15/bbl 가량 추가로 상승할 경우 항공, 해운, 화학 부문의 전반적인 원가가 동반 상승합니다. 에너지 집약 산업의 경우 분기 COGS 추정치가 0.5~2%p 악화될 수 있으며, 중동 의존도가 높은 정유·화학사에 직접적인 재무 리스크가 집중됩니다.",
      recommended_actions: [
        "원유 및 에너지 원가 민감도 분석 즉시 실시($5, $10, $15 시나리오)",
        "중동 의존 조달 비중 점검 및 대체 원산지(캐나다/미국 셰일) 비율 재검토",
        "에너지 비용 헷징 비율(현재 대비) 적정성 검토",
        "고객사 에너지 가격 연동 조항 계약 현황 파악",
      ],
      confidence: 0.75,
    },
  },
  {
    id: "EVT-004",
    lat: 39.9, lng: 116.4,
    title: "미국 반도체 수출 통제 강화 — 추가 엔티티 리스트 지정",
    source: "BIS (미 상무부) / WSJ",
    region: "미국 / 중국",
    category: "sanctions",
    summary: "미국 BIS(산업안보국)가 AI 및 HPC용 반도체와 관련된 중국 기업 23곳을 추가로 엔티티 리스트(수출통제 명단)에 등재했습니다. 특히 HBM 메모리를 비롯한 첨단 패키징 공정 관련 장비와 소재의 대중(對中) 수출이 사실상 전면 제한됨에 따라, 국내 반도체 소재·부품·장비(소부장) 기업들의 실적에 즉각적인 파장이 예상됩니다.",
    impact_industries: ["semiconductor", "manufacturing"],
    risk_score: 91,
    risk_level: "high",
    prev_score: 88,
    created_at: "2026-03-13T18:00:00Z",
    insight: {
      why_it_matters: "중국을 타깃으로 한 첨단 반도체 수출 통제 범위가 HBM, GAA 공정은 물론 CoWoS 패키징 등으로 전방위 확대되었습니다. 이로 인해 대중 수출 비중이 높은 국내 반도체 관련 벤더들은 즉각적인 주문 취소 및 매출 감소 리스크를 감수해야 합니다.",
      business_impact: "엔티티 리스트에 지정된 기업을 대상으로는(별도 상무부 허가 전까지) 기존 계약을 이행할 수 없어 심각한 단기 매출 공백이 발생할 수 있습니다. 수입 라이선스 신청 절차가 지연될 경우 분기매출 감소분이 누적되며, 대체 수주처 발굴 등 공급망 재편 비용 상승으로 인해 단기 수익성이 크게 악화될 우려가 있습니다.",
      recommended_actions: [
        "전체 고객사/거래처 BIS 엔티티 리스트 대조 즉시 실시",
        "중국 관련 진행 중 계약·PO의 법적 효력 법무팀 긴급 검토",
        "미 상무부 임시 일반 라이선스(TGL) 적용 가능 여부 확인",
        "중국 외 대체 고객 파이프라인 가속화 계획 수립",
        "컴플라이언스 교육 및 내부 수출통제 절차 즉시 점검",
      ],
      confidence: 0.94,
    },
  },
  {
    id: "EVT-005",
    lat: 23.8, lng: 120.5,
    title: "대만해협 긴장 고조 — 중국 PLA 훈련 확대",
    source: "BBC / 로이터 / 대만 국방부",
    region: "아시아 (대만해협)",
    category: "supply_chain",
    summary: "중국 인민해방군(PLA)이 대만해협 인근 해상에서 대규모 군사훈련을 재개했습니다. 해당 훈련 기간 동안 일부 민항기 노선이 불가피하게 우회 운항을 실시했으며, 대만 주요 항만의 일시적인 입출항 통제 가능성에 대비해 반도체 업계와 IT 인프라 제조사들의 선제적인 부품 재고 확보 움직임이 포착되고 있습니다.",
    impact_industries: ["semiconductor", "automotive", "consumer", "manufacturing"],
    risk_score: 85,
    risk_level: "high",
    prev_score: 70,
    created_at: "2026-03-13T14:30:00Z",
    insight: {
      why_it_matters: "대만은 전 세계 첨단 초미세 반도체(7nm 이하) 제조량의 90% 이상을 비롯해, 산업 전반에 걸친 고부가가치 PCB 및 수동 수동부품의 핵심 공급처입니다. TSMC나 ASE와 같은 핵심 칩메이커들의 생산이나 출하 차질은 글로벌 전자기기 공급망 붕괴로 직결될 만큼 파급력이 큽니다.",
      business_impact: "가장 최신 생산 공정인 3nm·5nm 칩의 조달이 마비될 경우, 차세대 스마트폰, AI 서버 인프라, 자동차 전장부품 생산 라인이 동시에 멈출 수 있는 치명적 치명적 위험이 대두됩니다. 또한, 대만산 반도체 기판 및 고성능 커패시터 재고 소진 시 이를 완전히 대체할 수 있는 공급처 확보와 생산성 검증까지 최대 6개월~1년의 시간이 소요됩니다.",
      recommended_actions: [
        "대만산 핵심 부품 의존도 긴급 파악 및 재고 현황 점검",
        "Critical 부품 기준 최소 3개월치 안전재고 확보 검토",
        "TSMC 이외 대체 파운드리(삼성, 인텔 파운드리) 활용 가능성 사전 협의",
        "Korea/Japan 내 dualization 전략 가속화",
        "사업연속성계획(BCP) 비상시나리오 업데이트 필요",
      ],
      confidence: 0.82,
    },
  },
  {
    id: "EVT-006",
    lat: 9.1, lng: -79.5,
    title: "파나마 운하 수위 위기 재발 우려 — 통항 예약 지연 급증",
    source: "Panama Canal Authority / Lloyd's List",
    region: "중미 (파나마)",
    category: "maritime",
    summary: "엘니뇨 기후 패턴의 후속 영향으로 중미 파나마 운하의 수위가 재차 하락하여 일평균 통항 가능한 선박 편수가 평시대비 약 20% 감소했습니다. 이에 따라 아시아에서 미국 동부 해안으로 향하는 구간의 예약 대기일이 15일~21일 수준으로 급증했으며, 일부 대형 선사들은 자구책으로 미국 서부 항만 하역으로의 라우팅 전환이나 수에즈 운하 우회 항로를 적극 검토 중입니다.",
    impact_industries: ["consumer", "automotive", "manufacturing", "chemical"],
    risk_score: 63,
    risk_level: "medium",
    prev_score: 40,
    created_at: "2026-03-13T10:00:00Z",
    insight: {
      why_it_matters: "파나마 운하는 통상적으로 아시아→미국 동부 노선에서 운송 시간과 비용을 획기적으로 절약할 수 있는 최적 경로로 간주됩니다. 통항 횟수가 제한될 경우, 미국 동부 시장으로 수입 품목을 직납해야 하는 소비재 창고, 화학 원료 배급상, 자동차 부품 소싱망 전체의 리드타임이 2~4주 가량 지연됩니다.",
      business_impact: "기존 파나마 운하 통과 노선이 우회하거나 미국 서부로 정박기지가 변경될 경우 대서양 횡단 환적 및 육상 내륙 수송망 부하로 직결되며, 종합 컨테이너 운송 비용이 20~40% 치솟을 수 있습니다. 미국 동부향 B2B 납품 고객사들의 컴플레인 및 패널티 부과 리스크는 물론, 긴급 안전재고 조달과 변동성 대응 과정에서 전체 물류 운영비용 부하 및 예측 정확도 훼손이 야기될 가능성이 큽니다.",
      recommended_actions: [
        "미국 동부 향 화물 납기 일정 여유분 2주 추가 반영",
        "파나마 우회(수에즈/희망봉) 및 미 서부 항구 전환 비용 비교 분석",
        "파나마 운하 우선 예약(Priority Booking) 가능 여부 선사와 즉시 협의",
        "미국 동부 지역 고객사에 잠재 납기 지연 사전 통보 검토",
      ],
      confidence: 0.80,
    },
  },
  {
    id: "EVT-007",
    lat: 49.0, lng: 31.4,
    title: "러-우크라이나 에너지 인프라 추가 피해 — 유럽 가스 가격 재상승",
    source: "European Commission / Bloomberg Energy",
    region: "동유럽 (우크라이나)",
    category: "oil_commodity",
    summary: "러시아군의 우크라이나 에너지 인프라 표적 공습이 산발적으로 재개됨에 따라 북유럽 및 귄역 내 주요 천연가스 지표인 TTF 현물 가격이 주간 기준 18% 가량 급등했습니다. 생산 라인을 중부 유럽과 서유럽 거점에 두고 있는 기업들의 경우 즉각적인 에너지 소요 비용 인상 압박에 대응하고 있으며, 최대 공업국가인 독일과 폴란드 등지에서 핵심 부품 조달 및 제조업 가동률 하락에 대한 우려가 확산되고 있습니다.",
    impact_industries: ["chemical", "manufacturing", "automotive", "energy"],
    risk_score: 74,
    risk_level: "high",
    prev_score: 68,
    created_at: "2026-03-12T16:00:00Z",
    insight: {
      why_it_matters: "유럽 권역 천연가스 가격 급상승은 화학/정밀소재, 금속제련, 유리/실리콘 가공 등 에너지를 대량 소모하는 산업의 생산 원가 및 제조 이익률에 곧바로 충격을 줍니다. 특히 독일 주요 화학 산업 단지(BASF 등)에서의 공정 스케쥴 지연 및 설비 가동률 저하는 글로벌 화학계 중간재 원료 배분의 병목 현상을 유발합니다.",
      business_impact: "유럽 내 로컬 오퍼레이션(공장, 사업장)을 운영하는 경우 가스 및 전력 에너지 제반 비용이 단기 분기 기준 20~30% 폭증할 리스크를 검토해야 합니다. 나아가 유럽산 에틸렌, 폴리머 등 소재수급 지연과 대체 밴더 발굴 어려움에 더해, 유럽 현지 파트너사들의 불가항력 선언 또는 판매 단가 수직 인상이라는 직접적 조달 리스크를 짊어지게 됩니다.",
      recommended_actions: [
        "유럽 공급사 생산 차질 가능성 점검(이메일/콜 컨택 즉시)",
        "유럽산 원자재·부품의 아시아/미주 대체 소싱 가능성 분석",
        "에너지 비용 증가분 제품 가격에 전가 가능성 계약 검토",
        "유럽 법인/파트너의 BCP(사업연속성계획) 현황 확인",
      ],
      confidence: 0.85,
    },
  },
  {
    id: "EVT-008",
    lat: 19.7, lng: 96.1,
    title: "미얀마 군사정권 추가 제재 — 동남아 공급망 재편 압력",
    source: "US Treasury (OFAC) / EU",
    region: "동남아 (미얀마)",
    category: "sanctions",
    summary: "미국 재무부(OFAC)와 유럽 연합(EU)이 미얀마 군사정권과 직간접적 연계가 확인된 주요 핵심 기업 및 개인 인사에 대한 강화된 경제 제재를 동시 발표했습니다. 그로 인해 미얀마에 생산법인을 진출했거나 현지 봉제/가공 도급(OEM) 계약을 맺고 있는 소비재 유통, 의류/아웃도어 용품 및 특수화학 조제 산업 분야 기업들은 글로벌 수출 규제 저촉 위험과 함께 서구권 조달시장 접근 제한 가능성을 즉시 전수조사해야 하는 시점입니다.",
    impact_industries: ["consumer", "manufacturing"],
    risk_score: 56,
    risk_level: "medium",
    prev_score: 56,
    created_at: "2026-03-12T08:00:00Z",
    insight: {
      why_it_matters: "미얀마는 인도중국 국경의 인접성과 인건비 잇점을 매력 삼아 다수 다국적 브랜드들이 저비용 봉제·조립 가공의 해외 전진기지로 운용해오던 국가입니다. 하지만 정치적 분쟁에 대한 직접 제재조치가 빈번해짐에 따라, 이제 해당 역내 소규모 사업장을 보유한 사실만으로 최혜국 혜택 박탈 및 수출제한 위반 등의 치명적 제재 파급력에 동시 노출될 수 있는 사안입니다.",
      business_impact: "현지 파트너사 또는 하청 벤더가 제재 리스트에 적발되는 즉시 모든 거래의 이행이 강제 블로킹되어 납기를 포기해야 하는 위약위기 상태로 내몰립니다. 특히 EU의 GSP(일반특혜관세) 자격상실 시 관세율이 대폭 인상되며, 글로벌 바이어로부터 인권 및 공급망 투명성 감사를 수행해야 하는 등 극심한 ESG 리스크 관리 압박에 처하게 됩니다.",
      recommended_actions: [
        "미얀마 관련 전체 공급망(1차·2차 협력사) OFAC/EU 제재 대상 여부 스크리닝",
        "현지 OEM 계약의 Force Majeure / Sanctions 조항 법무 검토",
        "대체 생산 거점(베트남, 방글라데시, 인도네시아) 전환 타임라인 수립",
      ],
      confidence: 0.78,
    },
  },
  {
    id: "EVT-009",
    lat: 55.7, lng: 12.6,
    title: "글로벌 사이버 공격 급증 — 항만·물류 인프라 타깃 확대",
    source: "CISA / IMO Cybersecurity Bulletin",
    region: "글로벌",
    category: "cyber",
    summary: "국제해사기구(IMO)와 미 사이버보안 & 인프라보안국(CISA)에서 해상 항만 운영 제어망(항만 운영/화물추적 시스템) 등을 지능적으로 노린 타깃형 OT 시스템 해킹과 초대형 랜섬웨어 랜섬웨어 시도가 직전 분기 대비 무려 47% 이상 증가했다고 합동 경보를 발령했습니다. 특히 최근 북유럽 주요 하역 관문 및 아시아권 관문 항만에서 화물 추적 컨테이너 데이터베이스의 원격 접근이 간헐적으로 마비되거나 접속 불량을 일으키는 공격 배후 사례가 다수 확인되었습니다.",
    impact_industries: ["automotive", "semiconductor", "manufacturing", "consumer"],
    risk_score: 68,
    risk_level: "medium",
    prev_score: 52,
    created_at: "2026-03-11T12:00:00Z",
    insight: {
      why_it_matters: "물동 항해와 보관을 제어하는 핵심 전산망과 스마트 항구의 OT(운영기술망) 시스템 등 디지털 시스템이 침해될 경우 갠트리 크레인 조작이 불가능하고, 통관 처리나 트럭 상하역 수속 스케쥴 처리가 지연될 뿐만이 아니라 하역 정보 자체가 소실되어 즉 적시 생산 시스템(JIT, Just in time)에 절대적으로 의존하고 있는 조립 가공 제조업 파트너들의 부품 조달이 올스탑될 수 있는 구조적 맹점을 안고 있습니다.",
      business_impact: "랜섬웨어 침해로 인한 통관 및 하역 적체 시 3~5일 이상의 조업 연쇄 마비 및 긴급 생산 중단 발생 가능 리스크로 작용하게 됩니다. 항만의 책임소재 여부 다툼과 사이버 공격 특성상 피해보상 범위 산정 갈등과 보험 커버 특약 제외 가능성이 항상 농후하므로 물류 추적 및 화물 적기 적시 납품 일정을 전혀 통제하거나 추정할 수 없게 되는 치명적인 배송지연 부작용을 마주하게 됩니다.",
      recommended_actions: [
        "주요 물류 파트너(선사/항만)의 사이버 복구 계획(BCP) 문서 요청",
        "자사 SCM 시스템의 물류 파트너 API 연계 보안 취약점 점검",
        "물류 차질 대비 대체 운송 경로 확보 프로세스 사전 수립",
      ],
      confidence: 0.70,
    },
  },
  {
    id: "EVT-010",
    lat: 37.5, lng: 126.9,
    title: "달러 강세 심화 — 아시아 통화 동반 약세, 수입 원가 압박",
    source: "IMF / Bloomberg FX",
    region: "글로벌 (아시아)",
    category: "fx_macro",
    summary: "미국 연방준비제도(FED)의 예상 밖의 매파적 스탠스와 글로벌 지정학 리스크에 따른 극단적 안전 자산 선호 강화로 미 달러 인덱스(DXY) 지수가 연중 최고점 경신에 근접했습니다. 특히 원/달러 시장에서 한화 가치가 가파르게 평가절하(환율 상승)되어 1,430원대 후반 턱밑까지 육박하는 등, 결제 수입을 담당하는 주요 국내 산업계의 원자재 및 기초 기초부품수입 원가 부담율이 전 분기 단가 환산 대비 약 8%를 고공 돌파하며 급증 추세에 진입했습니다.",
    impact_industries: ["automotive", "consumer", "manufacturing", "chemical", "semiconductor"],
    risk_score: 71,
    risk_level: "high",
    prev_score: 64,
    created_at: "2026-03-11T06:00:00Z",
    insight: {
      why_it_matters: "환율의 등락은 해외 수주, 송금, 수출입 대금 결제의 절대 변수입니다. 1달러당 10원이 상승할 경우, 달러 기준 결제를 이행하는 내수 및 수출입 가공 기업들의 전체 영업 원가율이 평균적으로 약 0.7~1%가량 대폭 나빠집니다. 상대적인 수출 환산 금액 증가 수혜가 동반 발생하더라도, 제품의 공정 단가 내 직접 해외 조달 부품 단가 비중이 높은 경우 수익성 상쇄 및 원가 부담 리스크가 더욱 뼈아프게 직결됩니다.",
      business_impact: "글로벌 달러로 결제하는 필수 에너지 및 화학재, 자동차 부품 등의 수입 청구 원가가 일시적으로 평균 분기 5~10% 상회할 것으로 진단됩니다. 더불어 역외 대금 조달이나 해외 영업 법인의 자금 조달 비용 또한 동반 상승 압력을 맞게 되며, 환 포지션 익스포저 관리 미비 또는 헷징 전략이 결여된 기업일 경우 단기 거시 회계 충당에서 상당폭 환차손 적자를 인식할 재무 위험이 대폭 증대됩니다.",
      recommended_actions: [
        "달러 결제 계약 비중 파악 및 환 익스포저 규모 산출",
        "외환 헷징 비율 및 헷징 수단(선도환, 옵션) 점검·조정",
        "주요 원자재 공급계약의 통화 조항(KRW vs USD) 재검토",
        "분기 환율 시나리오별 P&L 영향 분석 보고서 준비",
      ],
      confidence: 0.87,
    },
  },
  {
    id: "EVT-011",
    lat: 20.5, lng: 78.9,
    title: "인도 희토류 수출 쿼터 긴급 축소 — 중국 의존 리스크 재부각",
    source: "Ministry of Mines India / Nikkei",
    region: "아시아 (인도)",
    category: "supply_chain",
    summary: "인도 광물 통제 정부 당국이 3분기 연속으로 주요 핵심 희토류 광물 요소(Rare Earth Metals)에 대한 수출 허가 쿼터를 공격적으로 축소함에 따라, 중국 이외의 대안 생산지로 큰 기대가 몰렸던 인도산 희토류 원광석 및 중간 제재의 국제 수급난이 가속화되고 있습니다. 특히 고부가가치 영구자석, 하이브리드 자동자 EV 모터 등과 주요 공정에 필수적으로 투입되는 정밀 희토류의 원자재 시장 매입 가격이 공급망 불안 요인 증폭으로 단기 20% 이상 치솟은 상태입니다.",
    impact_industries: ["semiconductor", "automotive", "manufacturing"],
    risk_score: 77,
    risk_level: "high",
    prev_score: 60,
    created_at: "2026-03-10T09:00:00Z",
    insight: {
      why_it_matters: "전략적 희토 광물 리소스는 최신식 전기차 구동계 모터 배후 핵심 원자재(네오디뮴)에 직결될 뿐 아니라 반도체 연마 웨이퍼 슬러리(CMP 소재)와 더불어 군수용 정밀 센서 및 레이저 기기에 전 방위적으로 도입되고 있습니다. 전 세계 총 수요 채굴 및 제련량의 약 60~65% 이상의 락인 의존성을 중국 국영사에 전가하고 있는 지정학 구조상 대안 국가의 부재는 가장 취약한 글로벌 공급망 쇼크의 원점이 될 수 있습니다.",
      business_impact: "순환 모터, 하이브리드 전환 차량에 탑재되는 핵심 구동모터용 희토류 자석의 시황가 급상승으로 인하여 평균 차체제조 단가(Bill Of Material) 조달 단가가 파생적으로 상승합니다. 메모리 반도체 및 화학 소재업계의 경우에도 기초 가공 단계 웨이퍼 표면 연마원가 상승 및 재료 대체 불능에 따른 직접적인 분기 손익 타격을 가늠해야 하는 불가피한 상황이 우려됩니다.",
      recommended_actions: [
        "희토류 관련 원자재·부품 현재 재고 및 조달 계약 즉시 파악",
        "중국산 vs 비중국산 조달 비중 재검토",
        "호주(Lynas), 캐나다 대체 공급처 장기계약 체결 가능성 타진",
        "희토류 함유 부품의 설계 대체(reduction/substitution) 중장기 R&D 검토",
      ],
      confidence: 0.81,
    },
  },
  {
    id: "EVT-012",
    lat: 31.3, lng: 32.3,
    title: "수에즈 운하 인근 이집트 항만 파업 — 화물 처리 지연",
    source: "Port Said Authority / TradeWinds",
    region: "북아프리카 (이집트)",
    category: "maritime",
    summary: "초주요 관문인 이집트 수에즈 운하 연안의 주요 제1 항구, 포트사이드 터미널 컨테이너 조작 노조 노동자 파업이 현재 만 3일, 약 72시간 지속되면서 수에즈 운하 진입 부근에 발 묶인 대기 적체 처리 컨테이너 체적이 약 12,000 TEU급에 달하는 심각한 정체를 누적하고 있습니다. 후티 도발 리스크로 희망봉 등 아프리카 루트 우회가 폭증한 시기에 맞물려, 아시아-유럽 통과 우회로 배정 및 항만 패스 배분마저 병목 현상이 치명적으로 악화되어 총 대기 환적일 지연 규모가 최장 5일까지 부과되고 있는 양상입니다.",
    impact_industries: ["consumer", "automotive", "manufacturing"],
    risk_score: 54,
    risk_level: "medium",
    prev_score: 30,
    created_at: "2026-03-10T04:00:00Z",
    insight: {
      why_it_matters: "아프리카 희망봉 우회 결정 등으로 혼란스러운 서브 라우트 우회 선단들이 항해 정박 대피 장소로 사용하는 북아프리카 관문 터미널에서마저 예상치 못한 파업 공백과 로테이션 병목이 겹겹이 중첩되어 적체 충격의 시너지를 내고 있는 실정입니다. 유럽 수입 단지에서 방출된 뒤 돌아와 다시 원자재 공정 및 내수 물류로 가공되는 컨테이너의 아시아 역회전 인계 사이클이 지연 파행되면서, 화주의 핵심 화물 용기 수급 비용마저 큰 타격을 주고 있습니다.",
      business_impact: "물류 대란 여파로 아시아 지역에서 유럽이나 북미 동부 지역으로 출항해야 할 긴급 제조품의 탑재 순서나 기본 컨테이너를 예약하기가 일시적으로 매우 타이트해질 전망이며 화주들은 필연적으로 막대한 추가 용선료 및 선박 해상 운임을 부과당하게 됩니다. 부품 파트들의 내수 도착 또한 기존 여유 스케줄 대비 약 2~5일 이내 이상의 누적 지연 배송을 선제 반영하고 공정 라인 일정을 강제 재편해야 하는 충격 비용이 예상됩니다.",
      recommended_actions: [
        "유럽발 입항 화물 ETA(예상 도착일) 재확인 및 생산 스케줄 조정",
        "공컨테이너 사전 예약 물량 확보 가능 여부 선사에 즉시 확인",
      ],
      confidence: 0.73,
    },
  },
];

// ── 실데이터 선택 ─────────────────────────────────────────────
// live-data.js(GitHub Actions가 하루 1회 GDELT + Gemini로 갱신)가 있으면 실데이터, 없으면 시나리오
const LIVE = (typeof window !== "undefined" && window.LIVE_DATA && Array.isArray(window.LIVE_DATA.events)
  && window.LIVE_DATA.events.length) ? window.LIVE_DATA : null;
const DATA_MODE = LIVE ? "live" : "scenario";
const EVENTS = LIVE ? LIVE.events : SCENARIO_EVENTS;

/** 각 화면 상단에 데이터 출처와 갱신 시각을 표시 */
function renderDataBanner() {
  const host = document.querySelector(".page-body");
  if (!host || document.getElementById("data-banner")) return;
  const el = document.createElement("div");
  el.id = "data-banner";
  el.style.cssText = "margin-bottom:16px;padding:10px 14px;border-radius:8px;font-size:12.5px;line-height:1.6;";
  if (LIVE) {
    const at = new Date(LIVE.generatedAt);
    const hours = (Date.now() - at.getTime()) / 3600000;
    const stale = hours > 30;
    el.style.background = stale ? "rgba(245,158,11,0.12)" : "rgba(16,185,129,0.12)";
    el.style.color = stale ? "#f59e0b" : "#10b981";
    el.innerHTML = `<b>${stale ? "⚠ 갱신 지연" : "● 실데이터"}</b> · GDELT 최근 ${LIVE.window.hours}시간 사건 `
      + `${LIVE.stats.matched_events}건 중 상위 사건을 ${LIVE.model}가 정리 · 마지막 갱신 `
      + `${at.toLocaleString("ko-KR")} (매일 오전 자동 갱신)`;
  } else {
    el.style.background = "rgba(148,163,184,0.15)";
    el.style.color = "#94a3b8";
    el.innerHTML = "<b>시연용 시나리오</b> · 실데이터 파일을 불러오지 못해 과거 사례로 작성한 예시를 보여 줍니다.";
  }
  host.prepend(el);
}
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", renderDataBanner);
}


// ── Computed helpers ────────────────────────────────────────

/**
 * Return events filtered by industry
 * @param {string|null} industryId
 */
function getEventsByIndustry(industryId) {
  if (!industryId || industryId === "all") return EVENTS;
  return EVENTS.filter((e) => e.impact_industries.includes(industryId));
}

/**
 * Sort events by relevance to a given industry (exact match first, then score)
 */
function sortEventsByIndustry(events, industryId) {
  if (!industryId || industryId === "all") {
    return [...events].sort((a, b) => b.risk_score - a.risk_score);
  }
  return [...events].sort((a, b) => {
    const aMatch = a.impact_industries.includes(industryId) ? 1 : 0;
    const bMatch = b.impact_industries.includes(industryId) ? 1 : 0;
    if (bMatch !== aMatch) return bMatch - aMatch;
    return b.risk_score - a.risk_score;
  });
}

/** Overall risk score for user's industry (0~100) */
function calcOverallRiskScore(industryId) {
  const relevant = getEventsByIndustry(industryId);
  if (!relevant.length) return 0;
  const avg = relevant.reduce((s, e) => s + e.risk_score, 0) / relevant.length;
  return Math.round(avg);
}

/** Count events by risk level */
function countByRiskLevel(events) {
  return events.reduce(
    (acc, e) => {
      acc[e.risk_level] = (acc[e.risk_level] || 0) + 1;
      return acc;
    },
    { high: 0, medium: 0, low: 0 }
  );
}

/** Events that are new (score increased significantly) */
function getNewRisks(events) {
  return events.filter((e) => e.risk_score - e.prev_score >= 15);
}

/** Events whose score went up */
function getEscalatedRisks(events) {
  return events.filter((e) => e.risk_score > e.prev_score);
}

// ── User Preferences ────────────────────────────────────────
const DEFAULT_PREFERENCES = {
  industry: "semiconductor",
  regionsOfInterest: ["아시아", "중동", "유럽"],
  watchKeywords: ["반도체", "희토류", "운임", "제재"],
  reportLanguage: "ko",
  riskThreshold: "medium",
};

function loadPreferences() {
  try {
    const saved = localStorage.getItem("wid_preferences");
    return saved ? { ...DEFAULT_PREFERENCES, ...JSON.parse(saved) } : { ...DEFAULT_PREFERENCES };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

function savePreferences(prefs) {
  localStorage.setItem("wid_preferences", JSON.stringify(prefs));
}
