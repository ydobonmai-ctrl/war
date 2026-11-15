// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-15T02:47:10.094022+00:00",
 "window": {
  "hours": 24,
  "files": 96,
  "until": "2026-11-15T02:30:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 208,
  "by_category": {
   "maritime": 75,
   "supply_chain": 39,
   "cyber": 31,
   "sanctions": 42,
   "oil_commodity": 6,
   "fx_macro": 15
  },
  "top_places": [
   "United States",
   "China",
   "Iran",
   "Canada",
   "Yemen",
   "Israel",
   "United Kingdom",
   "India"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-003",
   "lat": 35.0,
   "lng": 105.0,
   "title": "미국 의회, 중국 반도체 스파이 스캔들 조사 준비",
   "source": "nypost.com",
   "sources": [
    {
     "url": "https://nypost.com/2026/11/14/world-news/congress-prepares-to-rake-lutnick-and-huang-over-chip-spy-fiasco/",
     "domain": "nypost.com"
    }
   ],
   "region": "중국, 미국",
   "category": "sanctions",
   "summary": "미국 의회가 중국의 반도체 스파이 스캔들과 관련하여 주요 인물들을 조사할 준비를 하고 있습니다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 85,
    "automotive": 40,
    "consumer": 30,
    "energy": 10,
    "manufacturing": 60,
    "chemical": 20
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-15T02:47:10.094022+00:00",
   "insight": {
    "why_it_matters": "미중 기술 패권 경쟁의 핵심인 반도체 분야에서 스파이 스캔들이 부각되면서, 미국 의회의 강경한 대응은 중국에 대한 추가적인 제재나 수출 통제 강화로 이어질 수 있습니다. 이는 글로벌 반도체 공급망에 큰 불확실성을 초래합니다.",
    "business_impact": "중국 관련 반도체 기술 및 제품 수출입에 대한 규제 강화, 공급망 재편 압력 증가, 특정 반도체 부품의 수급 불안정 심화, 기술 유출 방지 노력 강화.",
    "recommended_actions": [
     "미국 및 중국의 반도체 관련 규제 동향 실시간 모니터링",
     "중국 의존도가 높은 반도체 부품의 대체 공급선 발굴",
     "기술 유출 방지 및 보안 시스템 강화",
     "미중 기술 갈등 시나리오별 공급망 위험 평가 및 대응 계획 수립",
     "정부 및 산업 협회와 협력하여 정보 공유 및 공동 대응 방안 모색"
    ],
    "confidence": 0.85
   }
  },
  {
   "id": "LIVE-001",
   "lat": 35.4421,
   "lng": 47.3506,
   "title": "호르무즈 해협 유조선 피격 및 이란의 공격 주장",
   "source": "hindustantimes.com / breitbart.com",
   "sources": [
    {
     "url": "https://www.hindustantimes.com/world-news/three-tankers-caught-fire-in-strait-of-hormuz-after-hitting-naval-mines-irans-navy-101794697806467.html",
     "domain": "hindustantimes.com"
    },
    {
     "url": "https://www.breitbart.com/middle-east/2026/11/13/iran-claims-attacks-on-u-s-radar-station-in-bahrain-lng-tanker-in-strait-of-hormuz/",
     "domain": "breitbart.com"
    }
   ],
   "region": "호르무즈 해협, 이란",
   "category": "maritime",
   "summary": "호르무즈 해협에서 유조선 3척이 기뢰에 피격되어 화재가 발생했으며, 이란은 바레인 주둔 미군 레이더 기지와 호르무즈 해협의 LNG 유조선에 대한 공격을 주장했습니다.",
   "impact_industries": [
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 30,
    "consumer": 40,
    "energy": 80,
    "manufacturing": 50,
    "chemical": 60
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-15T02:47:10.094022+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 전 세계 원유 및 LNG 해상 운송의 핵심 통로로, 이곳에서의 사건은 국제 에너지 시장과 해상 물류에 즉각적이고 광범위한 영향을 미칩니다. 이란의 공격 주장은 지역 긴장을 고조시키고 공급망 불안정성을 심화시킵니다.",
    "business_impact": "해상 운송 보험료 인상, 운송 지연, 유가 및 LNG 가격 상승으로 인한 생산 비용 증가, 원자재 수급 불안정. 특히 중동 의존도가 높은 한국 기업에 직접적인 타격이 예상됩니다.",
    "recommended_actions": [
     "중동발 원유 및 LNG 수입선 다변화 가능성 검토",
     "해상 운송 보험 조건 및 비용 변동 추이 모니터링",
     "호르무즈 해협 경유 선박의 안전 조치 강화 여부 확인",
     "에너지 가격 변동에 대비한 헤징 전략 재검토",
     "중동 지역 정세 변화에 대한 실시간 정보 수집 및 분석 강화"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-005",
   "lat": 55.3875,
   "lng": 36.7331,
   "title": "러시아 에너지 터미널 공격으로 화재 발생",
   "source": "redstate.com",
   "sources": [
    {
     "url": "https://redstate.com/streiff/2026/11/14/russian-corvette-mauled-energy-terminal-ablaze-as-ukraine-expands-wars-reach-n2209398",
     "domain": "redstate.com"
    }
   ],
   "region": "러시아",
   "category": "oil_commodity",
   "summary": "러시아의 한 에너지 터미널이 공격을 받아 화재가 발생했습니다.",
   "impact_industries": [
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 15,
    "automotive": 25,
    "consumer": 30,
    "energy": 75,
    "manufacturing": 40,
    "chemical": 50
   },
   "risk_score": 75,
   "risk_level": "high",
   "prev_score": 75,
   "created_at": "2026-11-15T02:47:10.094022+00:00",
   "insight": {
    "why_it_matters": "러시아의 에너지 인프라에 대한 공격은 글로벌 에너지 시장의 불안정성을 가중시키고 유가 및 가스 가격에 영향을 미칠 수 있습니다. 이는 에너지 의존도가 높은 한국 제조 기업의 생산 비용에 직접적인 영향을 미칩니다.",
    "business_impact": "유가 및 가스 가격 상승으로 인한 생산 비용 증가, 에너지 수급 불안정, 러시아 관련 에너지 공급망 리스크 증대.",
    "recommended_actions": [
     "에너지 소비 효율화 및 절감 방안 모색",
     "에너지원 다변화 및 대체 에너지 사용 검토",
     "유가 및 가스 가격 변동에 대비한 헤징 전략 강화",
     "러시아-우크라이나 전쟁 동향 및 에너지 시장 영향 지속 모니터링",
     "에너지 공급망 비상 계획 재점검"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-004",
   "lat": 24.0,
   "lng": 121.0,
   "title": "대만 드론 업체, 중국산 칩 사용으로 기소",
   "source": "econotimes.com",
   "sources": [
    {
     "url": "https://econotimes.com/Taiwan-Prosecutors-Indict-Drone-Firm-Owner-and-Wife-Over-Chinese-Chips-1776624",
     "domain": "econotimes.com"
    }
   ],
   "region": "대만",
   "category": "supply_chain",
   "summary": "대만 검찰이 중국산 칩을 사용한 혐의로 드론 업체 소유주와 배우자를 기소했습니다.",
   "impact_industries": [
    "semiconductor",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 70,
    "automotive": 30,
    "consumer": 40,
    "energy": 10,
    "manufacturing": 50,
    "chemical": 15
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-15T02:47:10.094022+00:00",
   "insight": {
    "why_it_matters": "이는 대만이 중국산 기술 및 부품 사용에 대해 엄격한 입장을 취하고 있음을 보여주며, 글로벌 공급망 내에서 부품의 원산지 및 보안에 대한 중요성이 더욱 커지고 있음을 시사합니다. 특히 첨단 기술 분야에서 국가 안보와 연계된 공급망 재편 압력이 강화될 수 있습니다.",
    "business_impact": "부품 원산지 추적 및 관리의 중요성 증대, 중국산 부품 사용에 대한 잠재적 위험 증가, 공급망 투명성 요구 강화, 특정 국가의 부품 사용 제한으로 인한 공급선 다변화 필요성.",
    "recommended_actions": [
     "사용 중인 모든 부품의 원산지 및 공급망 경로 재확인",
     "중국산 부품 의존도 높은 제품에 대한 대체 공급선 확보 방안 검토",
     "부품 원산지 관련 규제 및 법규 변화에 대한 지속적인 모니터링",
     "공급망 내 보안 취약점 및 리스크 평가 강화",
     "협력업체와의 계약 시 부품 원산지 및 보안 관련 조항 강화"
    ],
    "confidence": 0.75
   }
  },
  {
   "id": "LIVE-007",
   "lat": 49.25,
   "lng": -123.133,
   "title": "마이크로소프트 서비스 장애로 인한 광범위한 영향",
   "source": "mybancroftnow.com / eadt.co.uk / siasat.com",
   "sources": [
    {
     "url": "https://www.mybancroftnow.com/75168/news/national/canadian-travellers-face-weekend-flight-delays-after-u-s-outage/",
     "domain": "mybancroftnow.com"
    },
    {
     "url": "https://www.eadt.co.uk/news/26728070.microsoft-outage-disrupts-emergency-services-across-suffolk/",
     "domain": "eadt.co.uk"
    },
    {
     "url": "https://www.siasat.com/microsoft-outage-an-urgent-wakeup-call-for-greater-digital-resilience-3577194/",
     "domain": "siasat.com"
    }
   ],
   "region": "캐나다, 미국, 영국 (광범위)",
   "category": "cyber",
   "summary": "마이크로소프트 서비스 장애로 인해 캐나다 여행객들이 항공편 지연을 겪고, 영국 서퍽 지역의 응급 서비스가 중단되는 등 광범위한 서비스 중단이 발생했습니다. 이는 디지털 복원력의 중요성을 부각시켰습니다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 40,
    "consumer": 50,
    "energy": 30,
    "manufacturing": 60,
    "chemical": 40
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-15T02:47:10.094022+00:00",
   "insight": {
    "why_it_matters": "주요 IT 서비스 제공업체의 장애는 전 세계적으로 다양한 산업의 운영에 심각한 영향을 미칠 수 있습니다. 이는 기업의 디지털 의존도가 높아짐에 따라 사이버 복원력과 비상 계획의 중요성을 강조합니다.",
    "business_impact": "업무 마비, 생산 지연, 물류 차질, 고객 서비스 중단, 재정적 손실 발생 가능성. 특히 클라우드 기반 서비스에 크게 의존하는 기업에 큰 영향을 미칩니다.",
    "recommended_actions": [
     "주요 IT 시스템 및 서비스의 이중화 및 백업 시스템 점검",
     "클라우드 서비스 제공업체의 서비스 수준 협약(SLA) 및 비상 대응 계획 확인",
     "사이버 보안 및 IT 재해 복구 훈련 강화",
     "핵심 업무에 대한 오프라인 또는 대체 수동 프로세스 준비",
     "다중 클라우드 전략 또는 하이브리드 클라우드 도입 검토"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-008",
   "lat": 31.5,
   "lng": 34.75,
   "title": "이란의 프랑스 대상 사이버 사보타주 공격",
   "source": "fdd.org",
   "sources": [
    {
     "url": "https://www.fdd.org/analysis/france-is-latest-victim-of-iranian-cyber-sabotage-first-unleashed-on-israel/",
     "domain": "fdd.org"
    }
   ],
   "region": "프랑스, 이스라엘",
   "category": "cyber",
   "summary": "이란이 이스라엘에 이어 프랑스를 대상으로 사이버 사보타주 공격을 감행했습니다.",
   "impact_industries": [
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 25,
    "automotive": 35,
    "consumer": 30,
    "energy": 40,
    "manufacturing": 50,
    "chemical": 45
   },
   "risk_score": 50,
   "risk_level": "medium",
   "prev_score": 50,
   "created_at": "2026-11-15T02:47:10.094022+00:00",
   "insight": {
    "why_it_matters": "국가 주도 사이버 공격은 특정 기업이나 산업을 넘어 국가 기반 시설 및 공급망 전체에 심각한 위협을 가할 수 있습니다. 이는 지정학적 긴장이 사이버 공간으로 확산되고 있음을 보여주며, 기업의 사이버 보안 리스크를 증대시킵니다.",
    "business_impact": "생산 시스템 마비, 데이터 유출, 운영 중단, 재정적 손실, 기업 이미지 손상. 특히 유럽에 사업장을 두거나 유럽 기업과 거래하는 한국 기업에 대한 간접적인 사이버 위협 증가.",
    "recommended_actions": [
     "사이버 위협 인텔리전스 강화 및 최신 공격 동향 파악",
     "OT/ICS(운영 기술/산업 제어 시스템) 보안 강화",
     "공급망 전체에 걸친 사이버 보안 감사 및 취약점 점검",
     "직원 대상 사이버 보안 교육 및 훈련 강화",
     "국가 정보 기관 및 사이버 보안 전문 기관과의 협력 체계 구축"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-006",
   "lat": 40.3363,
   "lng": -89.0022,
   "title": "일리노이 에탄올 공장 폭탄 위협 및 해체",
   "source": "cedarnews.net / pjmedia.com / tmz.com",
   "sources": [
    {
     "url": "https://cedarnews.net/newstasks/1147992/investigate-credible-bomb-authorities-threat-illinois-plant/",
     "domain": "cedarnews.net"
    },
    {
     "url": "https://pjmedia.com/catherinesalgado/2026/11/14/authorities-neutralize-bomb-at-illinois-ethanol-plant-n4959342",
     "domain": "pjmedia.com"
    },
    {
     "url": "https://www.tmz.com/2026/11/14/bomb-found-at-combustible-industrial-plant/",
     "domain": "tmz.com"
    },
    {
     "url": "https://cedarnews.net/newstasks/1145171/bomb-threat-at-ethanol-plant-prompts-evacuations-in-peoria-and-east-peoria-illinois/",
     "domain": "cedarnews.net"
    }
   ],
   "region": "미국 일리노이",
   "category": "supply_chain",
   "summary": "미국 일리노이주의 에탄올 공장에서 폭탄 위협이 발생하여 대피령이 내려졌고, 당국이 폭탄을 성공적으로 해체했습니다.",
   "impact_industries": [],
   "industry_scores": {
    "semiconductor": 5,
    "automotive": 10,
    "consumer": 10,
    "energy": 20,
    "manufacturing": 20,
    "chemical": 35
   },
   "risk_score": 35,
   "risk_level": "low",
   "prev_score": 35,
   "created_at": "2026-11-15T02:47:10.094022+00:00",
   "insight": {
    "why_it_matters": "주요 산업 시설에 대한 물리적 위협은 생산 중단 및 공급망 차질을 야기할 수 있습니다. 에탄올은 연료뿐만 아니라 다양한 화학 제품의 원료로 사용되므로, 생산 중단은 관련 산업에 영향을 미칠 수 있습니다.",
    "business_impact": "에탄올 및 관련 화학 제품의 일시적 공급 지연, 생산 비용 증가 가능성, 산업 시설 보안 강화 필요성 부각.",
    "recommended_actions": [
     "미국 내 에탄올 및 관련 화학 제품 공급망 현황 확인",
     "주요 생산 시설의 물리적 보안 리스크 평가 및 강화",
     "공급업체와의 비상 연락망 및 대체 공급 계획 점검",
     "산업 시설에 대한 테러 위협 동향 지속 모니터링",
     "재고 관리 전략 재검토를 통한 단기 공급 차질 대비"
    ],
    "confidence": 0.65
   }
  },
  {
   "id": "LIVE-002",
   "lat": 32.7673,
   "lng": -89.6812,
   "title": "미시시피강 유조선-유람선 충돌 및 소송 제기",
   "source": "cotswoldjournal.co.uk / foxbusiness.com / knoe.com / wbrz.com / cbsnews.com / ru",
   "sources": [
    {
     "url": "https://www.cotswoldjournal.co.uk/news/national/26729940.port-sues-get-control-tanker-crashed-cruise-ship-mississippi/",
     "domain": "cotswoldjournal.co.uk"
    },
    {
     "url": "https://www.foxbusiness.com/economy/new-orleans-port-seeks-tanker-seizure-cruise-ship-crash-sparks-lawsuit",
     "domain": "foxbusiness.com"
    },
    {
     "url": "https://www.knoe.com/2026/11/14/port-new-orleans-sues-tanker-owners-federal-court-after-crash-mississippi-river/",
     "domain": "knoe.com"
    },
    {
     "url": "https://www.wbrz.com/news/report-port-of-new-orleans-sues-tanker-owners-for-over-1-million-after-crash-on-mississippi-river",
     "domain": "wbrz.com"
    },
    {
     "url": "https://www.cbsnews.com/news/port-of-new-orleans-sues-tanker-riverboat-crash/",
     "domain": "cbsnews.com"
    },
    {
     "url": "https://www.rustourismnews.com/2026/11/14/new-orleans-ferry-suspended-after-american-heritage-cruise-ship-collision/",
     "domain": "rustourismnews.com"
    },
    {
     "url": "https://www.dailymail.com/news/article-16292257/cruise-ship-couple-film-tanker-crash-Mississippi.html",
     "domain": "dailymail.com"
    }
   ],
   "region": "미국 미시시피강, 뉴올리언스",
   "category": "maritime",
   "summary": "미시시피강에서 유조선과 유람선이 충돌하여 뉴올리언스 항만이 유조선 소유주를 상대로 소송을 제기했습니다. 이 사고로 페리 운항이 중단되었습니다.",
   "impact_industries": [],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 20,
    "energy": 15,
    "manufacturing": 25,
    "chemical": 30
   },
   "risk_score": 30,
   "risk_level": "low",
   "prev_score": 30,
   "created_at": "2026-11-15T02:47:10.094022+00:00",
   "insight": {
    "why_it_matters": "미시시피강은 미국 내륙 물류의 중요한 수로이며, 이러한 사고는 내륙 운송에 지연을 초래하고 물류 비용을 증가시킬 수 있습니다. 소송은 추가적인 불확실성을 야기합니다.",
    "business_impact": "미국 내륙으로 운송되는 원자재 및 완제품의 운송 지연 및 비용 증가. 특히 미시시피강을 이용하는 벌크 화물 및 액체 화물 운송에 영향을 미칠 수 있습니다.",
    "recommended_actions": [
     "미국 내륙 운송 경로 및 대체 수단 검토",
     "미시시피강 운송을 이용하는 공급업체 및 고객과의 소통 강화",
     "운송 지연에 대비한 재고 수준 점검",
     "해상 및 내륙 운송 보험 조건 확인",
     "미국 내륙 물류 동향 및 항만 운영 상황 지속 모니터링"
    ],
    "confidence": 0.7
   }
  }
 ]
};
