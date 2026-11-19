// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-19T04:15:24.966410+00:00",
 "window": {
  "hours": 24,
  "files": 96,
  "until": "2026-11-19T04:15:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 544,
  "by_category": {
   "cyber": 46,
   "maritime": 206,
   "sanctions": 155,
   "supply_chain": 50,
   "oil_commodity": 48,
   "fx_macro": 39
  },
  "top_places": [
   "United States",
   "Iran",
   "Saudi Arabia",
   "Israel",
   "India",
   "Yemen",
   "United Kingdom",
   "Australia"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-002",
   "lat": 24.4667,
   "lng": 54.3667,
   "title": "호르무즈 해협 인근 선박 공격 및 이란의 해협 관련 조치",
   "source": "tradearabia.com:443 / siasat.com / gulfnews.com / hellenicshippingnews.com",
   "sources": [
    {
     "url": "https://tradearabia.com:443/News/489872/ADNOC-LandS-vessel-attacked-while-transiting-Strait-of-Hormuz",
     "domain": "tradearabia.com:443"
    },
    {
     "url": "https://www.siasat.com/oil-tanker-carrying-3-indians-targeted-near-strait-of-hormuz-3580725/",
     "domain": "siasat.com"
    },
    {
     "url": "https://gulfnews.com/world/gulf/oman/tanker-hit-by-unknown-projectile-near-oman-in-latest-hormuz-attack-1.500752860",
     "domain": "gulfnews.com"
    },
    {
     "url": "https://www.hellenicshippingnews.com/irans-hormuz-blacklist-reshapes-flows-but-exports-hold/",
     "domain": "hellenicshippingnews.com"
    }
   ],
   "region": "호르무즈 해협, 오만, 아랍에미리트, 이란",
   "category": "maritime",
   "summary": "호르무즈 해협 인근에서 ADNOC 선박 및 유조선이 공격받는 사건이 발생했으며, 이란의 호르무즈 관련 조치가 해상 물류 흐름에 영향을 미치고 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 60,
    "automotive": 70,
    "consumer": 60,
    "energy": 90,
    "manufacturing": 80,
    "chemical": 80
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-19T04:15:24.966410+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 세계 석유 및 가스 운송의 핵심 통로로, 이곳에서의 불안정은 에너지 가격 상승과 해상 운송 보험료 인상으로 직결된다. 이는 한국 기업의 원자재 수급 및 물류 비용에 막대한 영향을 미친다.",
    "business_impact": "유가 및 가스 가격 상승으로 인한 생산 비용 증가, 해상 운송 지연 및 운임 상승, 보험료 인상. 중동발 원자재 수급에 차질 발생 가능성.",
    "recommended_actions": [
     "중동발 원유 및 가스 수급 다변화 방안 검토",
     "해상 운송 경로 및 보험 조건 재검토",
     "물류 파트너사와 비상 계획 수립 및 공유",
     "에너지 비축량 점검 및 추가 확보 방안 논의"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-006",
   "lat": 0,
   "lng": 0,
   "title": "엔비디아 공급망 대상 랜섬웨어 공격 가능성",
   "source": "investmentwatchblog.com",
   "sources": [
    {
     "url": "https://www.investmentwatchblog.com/the-gentlemen-may-have-been-targeting-companies-in-nvidias-supply-chain-before-putting-the-chip-giant-on-its-ransomware-leak-site/",
     "domain": "investmentwatchblog.com"
    }
   ],
   "region": "글로벌",
   "category": "supply_chain",
   "summary": "'The Gentlemen'이라는 해킹 그룹이 엔비디아의 공급망 내 기업들을 표적으로 삼아 랜섬웨어 공격을 시도했을 가능성이 제기되었다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 90,
    "automotive": 70,
    "consumer": 60,
    "energy": 40,
    "manufacturing": 80,
    "chemical": 50
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-19T04:15:24.966410+00:00",
   "insight": {
    "why_it_matters": "주요 기술 기업의 공급망에 대한 사이버 공격은 전체 산업에 파급 효과를 미칠 수 있다. 특히 반도체와 같은 핵심 부품의 공급망 교란은 한국 제조 기업의 생산에 직접적인 타격을 줄 수 있다.",
    "business_impact": "반도체 및 관련 부품 수급 불안정, 생산 지연 또는 중단, 공급망 전체의 보안 취약성 노출.",
    "recommended_actions": [
     "공급망 내 IT 및 OT 보안 취약점 점검 강화",
     "주요 공급업체의 사이버 보안 프로토콜 확인 및 협력",
     "공급망 리스크 관리 시스템 고도화",
     "비상 시 대체 공급처 확보 계획 수립"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-007",
   "lat": 35.3001,
   "lng": -81.1998,
   "title": "리튬 공장 폭발 사고 발생",
   "source": "isssource.com",
   "sources": [
    {
     "url": "https://www.isssource.com/blast-hurts-3-workers-at-lithium-plant/",
     "domain": "isssource.com"
    }
   ],
   "region": "미국 노스캐롤라이나",
   "category": "supply_chain",
   "summary": "미국 노스캐롤라이나의 한 리튬 공장에서 폭발 사고가 발생하여 3명의 작업자가 부상을 입었다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 70,
    "automotive": 80,
    "consumer": 70,
    "energy": 90,
    "manufacturing": 80,
    "chemical": 90
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-19T04:15:24.966410+00:00",
   "insight": {
    "why_it_matters": "리튬은 전기차 배터리, 에너지 저장 시스템 등 첨단 산업의 핵심 원자재이다. 리튬 생산 시설의 사고는 글로벌 리튬 공급망에 차질을 초래하여 관련 산업의 생산 비용 증가 및 공급 부족을 야기할 수 있다.",
    "business_impact": "리튬 가격 상승 및 수급 불안정, 전기차 및 배터리 생산 비용 증가, 관련 제품 생산 지연.",
    "recommended_actions": [
     "리튬 공급망 현황 및 재고 수준 점검",
     "리튬 공급업체 다변화 방안 검토",
     "리튬 대체 소재 개발 동향 모니터링",
     "생산 계획에 잠재적 리튬 수급 차질 반영"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-001",
   "lat": 38.889,
   "lng": -77.0003,
   "title": "미국 및 일본의 광범위한 기술 장애 및 사이버 위협 증가",
   "source": "fox23maine.com / grandforksherald.com / investmentwatchblog.com / dailymail.com ",
   "sources": [
    {
     "url": "https://fox23maine.com/news/nation-world/cascade-of-tech-outages-raises-alarm-over-reliability-of-digital-infrastructure",
     "domain": "fox23maine.com"
    },
    {
     "url": "https://www.grandforksherald.com/news/national/us-senators-warn-white-house-that-ai-enabled-cyber-threats-are-outpacing-defenses",
     "domain": "grandforksherald.com"
    },
    {
     "url": "https://www.investmentwatchblog.com/japans-largest-bank-leaks-6-5-million-customer-records-one-hack-hits-companies-across-the-country/",
     "domain": "investmentwatchblog.com"
    },
    {
     "url": "https://www.dailymail.com/news/article-16304393/Trump-tells-US-relax-amid-tech-outages-failures-promising-country-launches-cyber-attack-hit-hard.html",
     "domain": "dailymail.com"
    },
    {
     "url": "https://fortune.com/2026/11/18/jd-vance-stock-up-supplies-outages-allies-prepare-pentagon/",
     "domain": "fortune.com"
    }
   ],
   "region": "미국, 일본",
   "category": "cyber",
   "summary": "미국에서 광범위한 기술 인프라 장애가 발생하고 AI 기반 사이버 위협이 증가하고 있으며, 일본 최대 은행에서 대규모 고객 정보 유출 사고가 발생했다. 이는 디지털 인프라의 신뢰성에 대한 우려를 증폭시키고 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 70,
    "automotive": 60,
    "consumer": 80,
    "energy": 50,
    "manufacturing": 70,
    "chemical": 50
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-19T04:15:24.966410+00:00",
   "insight": {
    "why_it_matters": "디지털 인프라의 취약성은 모든 산업의 운영 연속성에 직접적인 위협이 된다. 특히 공급망 전반의 디지털화가 가속화되는 상황에서 사이버 공격은 생산 중단, 데이터 유출, 재정적 손실로 이어질 수 있다.",
    "business_impact": "기업의 IT 시스템 마비, 생산 라인 중단, 고객 데이터 유출로 인한 신뢰도 하락 및 법적 문제 발생 가능성. 공급망 파트너 간의 정보 교환에도 차질이 생길 수 있다.",
    "recommended_actions": [
     "사이버 보안 시스템 전반에 대한 긴급 점검 실시",
     "공급망 파트너사의 사이버 보안 수준 확인 및 협력 강화",
     "데이터 백업 및 복구 계획 재검토 및 모의 훈련 실시",
     "임직원 대상 사이버 보안 교육 강화"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-003",
   "lat": 15.3547,
   "lng": 44.2067,
   "title": "예멘 후티 반군 관련 사우디 및 연합군의 군사 작전",
   "source": "sconeadvocate.com.au / arabnews.com",
   "sources": [
    {
     "url": "https://www.sconeadvocate.com.au/story/9394288/saudi-forces-launch-major-yemen-attack-on-houthi-rebels/",
     "domain": "sconeadvocate.com.au"
    },
    {
     "url": "https://www.arabnews.com/saudi-arabia/coalition-forces-intercept-houthi-missile-launched-towards-riyadh-debris-causes-damage-3012860",
     "domain": "arabnews.com"
    }
   ],
   "region": "예멘, 사우디아라비아",
   "category": "maritime",
   "summary": "사우디 군이 예멘 후티 반군에 대한 대규모 공격을 개시했으며, 연합군이 리야드를 향한 후티 미사일을 요격하여 잔해가 피해를 입혔다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 50,
    "automotive": 60,
    "consumer": 50,
    "energy": 80,
    "manufacturing": 70,
    "chemical": 70
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-19T04:15:24.966410+00:00",
   "insight": {
    "why_it_matters": "예멘 후티 반군의 활동은 홍해 및 아라비아해의 해상 안보를 위협하며, 이는 중동 지역의 지정학적 불안정성을 심화시킨다. 간접적으로 해상 운송 경로의 안전성에 대한 우려를 높여 운임 및 보험료에 영향을 줄 수 있다.",
    "business_impact": "중동 지역을 경유하는 해상 운송의 잠재적 위험 증가, 운송 지연 및 비용 상승 가능성. 에너지 및 원자재 시장의 불확실성 증대.",
    "recommended_actions": [
     "중동 지역 해상 운송 경로의 위험도 지속 모니터링",
     "선박 보험 조건 및 비상 계획 재검토",
     "물류 파트너사와 비상 시 대체 경로 논의",
     "지정학적 리스크 분석 보고서 정기 구독"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-005",
   "lat": 49.0,
   "lng": 32.0,
   "title": "글로벌 원유 시장 공급 과잉으로 안정화 추세",
   "source": "gtreview.com",
   "sources": [
    {
     "url": "https://www.gtreview.com/news/global/global-oil-market-straightening-out-as-supply-outstrips-demand/",
     "domain": "gtreview.com"
    }
   ],
   "region": "전 세계",
   "category": "oil_commodity",
   "summary": "글로벌 원유 시장에서 공급이 수요를 초과하면서 시장이 안정화되는 추세를 보이고 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 50,
    "automotive": 70,
    "consumer": 60,
    "energy": 80,
    "manufacturing": 70,
    "chemical": 80
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-19T04:15:24.966410+00:00",
   "insight": {
    "why_it_matters": "원유 시장의 공급 과잉은 유가 하락 압력으로 작용하여, 에너지 비용에 민감한 한국 제조 기업들의 생산 비용 절감에 긍정적인 영향을 줄 수 있다.",
    "business_impact": "유가 안정화 또는 하락으로 인한 원자재 및 운송 비용 부담 완화. 생산 비용 절감으로 인한 수익성 개선 기대.",
    "recommended_actions": [
     "유가 변동성 지속 모니터링 및 구매 전략 검토",
     "에너지 효율 개선 투자 계획 재검토",
     "원자재 구매 계약 조건 유연성 확보 방안 논의",
     "장기적인 에너지 수급 계획 업데이트"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-004",
   "lat": 33.0,
   "lng": 66.0,
   "title": "미국 및 호주의 미얀마, 이스라엘 관련 제재 부과",
   "source": "theguardian.com / news.az",
   "sources": [
    {
     "url": "https://www.theguardian.com/world/2026/nov/18/us-sanctions-icj-judges-myanmar-genocide-ruling-israel-gaza-court",
     "domain": "theguardian.com"
    },
    {
     "url": "https://news.az/news/australia-announces-fresh-sanctions-targeting-west-bank-settlers",
     "domain": "news.az"
    }
   ],
   "region": "미얀마, 이스라엘, 서안 지구",
   "category": "sanctions",
   "summary": "미국이 미얀마 및 이스라엘-가자 분쟁 관련 국제사법재판소(ICJ) 판사들에 대한 제재를 부과했으며, 호주도 서안 지구 정착민들을 대상으로 새로운 제재를 발표했다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 40,
    "automotive": 40,
    "consumer": 40,
    "energy": 30,
    "manufacturing": 40,
    "chemical": 30
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-19T04:15:24.966410+00:00",
   "insight": {
    "why_it_matters": "특정 국가 및 개인에 대한 제재는 해당 지역과의 거래를 복잡하게 만들고, 우회 제재(secondary sanctions) 위험을 증가시킨다. 이는 한국 기업의 글로벌 공급망 및 시장 접근성에 영향을 줄 수 있다.",
    "business_impact": "제재 대상 국가/지역과의 거래 제한, 금융 거래 어려움, 법적 및 평판 리스크 증가. 공급망 내 제재 대상 기업/개인 포함 여부 확인 필요.",
    "recommended_actions": [
     "제재 대상 국가/지역과의 거래 현황 점검",
     "공급망 내 제재 대상 기업/개인 포함 여부 실사 강화",
     "제재 준수 프로그램 업데이트 및 임직원 교육",
     "법무팀과 제재 관련 최신 동향 검토"
    ],
    "confidence": 0.6
   }
  }
 ]
};
