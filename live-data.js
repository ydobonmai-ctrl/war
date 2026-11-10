// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-10T04:40:57.714022+00:00",
 "window": {
  "hours": 24,
  "files": 96,
  "until": "2026-11-10T04:45:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 427,
  "by_category": {
   "sanctions": 89,
   "oil_commodity": 98,
   "maritime": 104,
   "supply_chain": 71,
   "cyber": 14,
   "fx_macro": 51
  },
  "top_places": [
   "United States",
   "Saudi Arabia",
   "Iran",
   "Ukraine",
   "China",
   "Russia",
   "Canada",
   "United Kingdom"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-001",
   "lat": 24.6408,
   "lng": 46.7728,
   "title": "사우디 석유 인프라 공격, 유가 변동성 우려",
   "source": "investmentwatchblog.com / aljazeera.com / thepeninsulaqatar.com",
   "sources": [
    {
     "url": "https://www.investmentwatchblog.com/saudi-airstrikes-in-yemen-leave-dozens-dead-the-fight-is-reaching-the-oil-infrastructure-again/",
     "domain": "investmentwatchblog.com"
    },
    {
     "url": "https://www.aljazeera.com/news/2026/11/9/saudi-arabia-reports-new-attack-on-key-east-west-pipeline",
     "domain": "aljazeera.com"
    },
    {
     "url": "http://thepeninsulaqatar.com/article/09/11/2026/saudi-arabia-says-east-west-pipeline-targeted",
     "domain": "thepeninsulaqatar.com"
    }
   ],
   "region": "사우디아라비아",
   "category": "oil_commodity",
   "summary": "사우디아라비아의 주요 동서 파이프라인과 석유 인프라가 공격받았다는 보도가 나왔다. 이는 예멘 후티 반군의 소행으로 추정되며, 중동 지역의 지정학적 긴장을 고조시키고 있다.",
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
    "automotive": 80,
    "consumer": 70,
    "energy": 95,
    "manufacturing": 85,
    "chemical": 90
   },
   "risk_score": 95,
   "risk_level": "high",
   "prev_score": 95,
   "created_at": "2026-11-10T04:40:57.714022+00:00",
   "insight": {
    "why_it_matters": "세계 최대 산유국 중 하나인 사우디아라비아의 석유 생산 및 운송 시설에 대한 공격은 국제 유가에 직접적인 영향을 미쳐 에너지 비용 상승을 초래할 수 있다.",
    "business_impact": "유가 상승은 원자재 및 운송 비용 증가로 이어져 제조 및 소비재 기업의 생산 비용을 높이고 수익성을 악화시킬 수 있다. 특히 에너지 집약 산업과 운송 의존도가 높은 산업에 큰 타격을 줄 수 있다.",
    "recommended_actions": [
     "국제 유가 및 중동 정세 모니터링 강화",
     "에너지 구매 계약 조건 검토 및 헤징 전략 고려",
     "운송 경로 및 비용 변동성 분석",
     "비상시 대체 에너지원 또는 운송 수단 확보 방안 검토"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-002",
   "lat": 38.4104,
   "lng": 27.142,
   "title": "튀르키예 철강 공장 폭발, 17명 사망",
   "source": "investmentwatchblog.com / bianet.org",
   "sources": [
    {
     "url": "https://www.investmentwatchblog.com/17-workers-killed-in-turkey-steel-factory-explosion-safety-complaints-at-the-plant-go-back-years/",
     "domain": "investmentwatchblog.com"
    },
    {
     "url": "https://bianet.org/haber/explosion-at-izmir-steel-factory-kills-17-325239",
     "domain": "bianet.org"
    }
   ],
   "region": "튀르키예 이즈미르",
   "category": "supply_chain",
   "summary": "튀르키예 이즈미르의 한 철강 공장에서 폭발 사고가 발생하여 17명의 근로자가 사망했다. 해당 공장은 수년 전부터 안전 문제에 대한 불만이 제기되어 왔다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 80,
    "consumer": 60,
    "energy": 20,
    "manufacturing": 90,
    "chemical": 40
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-10T04:40:57.714022+00:00",
   "insight": {
    "why_it_matters": "주요 철강 생산 시설의 가동 중단은 철강 공급망에 차질을 빚을 수 있으며, 이는 철강을 원자재로 사용하는 다양한 산업에 영향을 미친다.",
    "business_impact": "철강 가격 상승 또는 공급 부족으로 인해 자동차, 건설, 기계 등 철강 의존도가 높은 산업의 생산 비용이 증가하고 생산 계획에 차질이 발생할 수 있다.",
    "recommended_actions": [
     "철강 재고 수준 및 대체 공급처 확보 여부 확인",
     "주요 철강 공급망의 위험 요소 재평가",
     "튀르키예 철강 시장 동향 및 복구 상황 지속 모니터링",
     "원자재 가격 변동에 대비한 구매 전략 재검토"
    ],
    "confidence": 0.85
   }
  },
  {
   "id": "LIVE-003",
   "lat": 25.4489,
   "lng": 57.7939,
   "title": "오만만 선박 피격 사건, 이란-미국 긴장 고조",
   "source": "hellenicshippingnews.com",
   "sources": [
    {
     "url": "https://www.hellenicshippingnews.com/iran-us-strikes-ship-after-hormuz-blockade-breach/",
     "domain": "hellenicshippingnews.com"
    }
   ],
   "region": "오만만, 이란",
   "category": "maritime",
   "summary": "오만만에서 선박 피격 사건이 발생했으며, 이란과 미국 간의 긴장이 고조되고 있다. 이는 호르무즈 해협 봉쇄 위반 이후 발생한 것으로 알려졌다.",
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
    "energy": 85,
    "manufacturing": 75,
    "chemical": 80
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-10T04:40:57.714022+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 세계 석유 운송의 주요 길목으로, 이 지역에서의 긴장 고조는 해상 운송의 안전성을 위협하고 유가 및 해상 운임에 직접적인 영향을 미친다.",
    "business_impact": "해상 운송 보험료 인상, 운송 지연, 또는 항로 변경으로 인한 추가 비용 발생 가능성이 있다. 이는 에너지 및 원자재 수입 의존도가 높은 한국 기업에 특히 부담이 될 수 있다.",
    "recommended_actions": [
     "중동 해상 운송 경로의 안전성 평가 및 대체 경로 검토",
     "해상 운송 보험 조건 및 비용 변동 모니터링",
     "선박 운항사와의 비상 계획 공유 및 협력 강화",
     "원유 및 가스 수입 다변화 전략 재검토"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-004",
   "lat": 39.828175,
   "lng": -98.5795,
   "title": "미국 숙련 노동자 부족 심화, H1B 비자 논의",
   "source": "ibtimes.com",
   "sources": [
    {
     "url": "https://www.ibtimes.com/skilled-immigration-us-labor-shortage-h1b-3809587",
     "domain": "ibtimes.com"
    }
   ],
   "region": "미국",
   "category": "supply_chain",
   "summary": "미국에서 숙련 노동자 부족 문제가 심화되고 있으며, H1B 비자 정책이 논의되고 있다. 이는 미국 내 다양한 산업의 생산 및 서비스 제공에 영향을 미치고 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 80,
    "automotive": 75,
    "consumer": 70,
    "energy": 60,
    "manufacturing": 85,
    "chemical": 65
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-10T04:40:57.714022+00:00",
   "insight": {
    "why_it_matters": "미국은 한국 기업의 주요 수출 시장이자 생산 기지 중 하나이다. 숙련 노동자 부족은 현지 생산 및 운영 비용을 증가시키고, 투자 환경에도 영향을 줄 수 있다.",
    "business_impact": "미국 내 생산 시설을 운영하는 기업은 인력 확보의 어려움과 인건비 상승에 직면할 수 있다. 이는 생산량 감소, 납기 지연, 제품 가격 인상으로 이어질 수 있다.",
    "recommended_actions": [
     "미국 현지 인력 수급 동향 및 임금 인상률 모니터링",
     "자동화 및 생산성 향상 기술 도입 검토",
     "현지 인력 채용 및 유지 전략 재검토",
     "H1B 비자 정책 변화가 사업 운영에 미칠 영향 분석"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-007",
   "lat": 43.6833,
   "lng": -79.7667,
   "title": "스텔란티스 캐나다 공장 생산 차량 확보 요구",
   "source": "cp24.com",
   "sources": [
    {
     "url": "https://www.cp24.com/local/toronto/2026/11/09/unacceptable-premier-ford-says-stellantis-must-find-vehicle-to-be-manufactured-at-brampton-plant/",
     "domain": "cp24.com"
    }
   ],
   "region": "캐나다 온타리오",
   "category": "supply_chain",
   "summary": "캐나다 온타리오 주 총리가 스텔란티스(Stellantis)에 브램턴 공장에서 생산할 차량 모델을 확보할 것을 요구하며, 그렇지 않을 경우 공장 폐쇄 가능성을 시사했다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 85,
    "consumer": 40,
    "energy": 20,
    "manufacturing": 70,
    "chemical": 30
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-10T04:40:57.714022+00:00",
   "insight": {
    "why_it_matters": "주요 자동차 제조 공장의 생산 계획 불확실성은 해당 지역의 자동차 부품 공급망에 직접적인 영향을 미치며, 이는 글로벌 자동차 산업 전반에 파급될 수 있다.",
    "business_impact": "스텔란티스 브램턴 공장에 부품을 공급하는 한국 기업들은 주문량 감소 또는 생산 계획 변경에 직면할 수 있다. 이는 매출 감소 및 재고 관리 문제로 이어질 수 있다.",
    "recommended_actions": [
     "스텔란티스 캐나다 공장의 생산 계획 및 정책 변화 모니터링",
     "해당 공장에 대한 부품 공급량 및 계약 조건 재검토",
     "잠재적 생산 중단 시나리오에 대비한 비상 계획 수립",
     "다른 북미 지역 고객사와의 관계 강화 및 신규 고객 발굴"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-006",
   "lat": 15.5,
   "lng": 47.5,
   "title": "후티 반군, 사우디아라비아에 미사일 공격 시도",
   "source": "ksevradio.com / middleeasteye.net / aljazeera.com / radio.gov.pk / thenationalne",
   "sources": [
    {
     "url": "https://ksevradio.com/saudi-led-coalition-says-it-intercepts-two-houthi-missiles-fired-towards-riyadh/",
     "domain": "ksevradio.com"
    },
    {
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-houthi-missiles-launched-towards-riyadh-destroyed-saudi-led",
     "domain": "middleeasteye.net"
    },
    {
     "url": "https://www.aljazeera.com/news/2026/11/9/yemen-government-forces-claim-new-advances-as-houthi-border-attacks-resume",
     "domain": "aljazeera.com"
    },
    {
     "url": "https://www.radio.gov.pk/09-11-2026/pakistan-condemns-houthi-attempted-attack-on-saudi-aramco-building-in-riyadh",
     "domain": "radio.gov.pk"
    },
    {
     "url": "https://www.thenationalnews.com/news/mena/2026/11/09/syria-has-no-plans-to-send-troops-to-fight-houthis-in-yemen-in-near-future/",
     "domain": "thenationalnews.com"
    },
    {
     "url": "https://arynews.tv/pakistan-condemns-attempted-houthi-attack-on-saudi-aramco-building",
     "domain": "arynews.tv"
    }
   ],
   "region": "사우디아라비아, 예멘",
   "category": "maritime",
   "summary": "예멘 후티 반군이 사우디아라비아 수도 리야드를 향해 미사일을 발사했으나 사우디 주도 연합군에 의해 요격되었다. 파키스탄 등 국제사회는 이를 규탄하고 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 40,
    "automotive": 60,
    "consumer": 50,
    "energy": 80,
    "manufacturing": 65,
    "chemical": 70
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-10T04:40:57.714022+00:00",
   "insight": {
    "why_it_matters": "중동 지역의 지속적인 무력 충돌은 해상 운송의 안전성을 위협하고, 특히 홍해 및 아라비아해를 지나는 선박에 대한 위험을 증가시켜 물류 비용 상승 및 운송 지연을 야기할 수 있다.",
    "business_impact": "중동 지역을 경유하는 해상 운송에 대한 보험료 인상, 운송 지연, 또는 항로 변경이 발생할 수 있다. 이는 에너지 및 원자재 수급에 영향을 미치고, 수출입 기업의 물류 비용을 증가시킬 수 있다.",
    "recommended_actions": [
     "중동 지역 해상 운송 위험 평가 및 비상 계획 수립",
     "선박 운항사와의 긴밀한 소통 및 정보 공유",
     "물류 비용 변동성 분석 및 대응 전략 마련",
     "지정학적 리스크에 대한 정기적인 브리핑 및 시나리오 분석"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-005",
   "lat": 46.1026,
   "lng": 2.76841,
   "title": "프랑스, 이란의 슈퍼마켓 사이버 공격 비난 및 제재 시사",
   "source": "katv.com / theguardian.com",
   "sources": [
    {
     "url": "https://katv.com/news/nation-world/france-foreign-minister-jean-noel-barrot-groupd-of-seven-blames-iran-linked-hackers-for-supermarket-fridge-attack-vows-sanctions-islamic-revolutionary-guard-corps-shahid-kaveh-ip-addresses",
     "domain": "katv.com"
    },
    {
     "url": "https://www.theguardian.com/world/2026/nov/09/france-blames-irans-revolutionary-guards-for-cyber-attacks-on-supermarket-fridges",
     "domain": "theguardian.com"
    }
   ],
   "region": "프랑스, 이란",
   "category": "cyber",
   "summary": "프랑스 외무장관은 이란과 연계된 해커들이 프랑스 슈퍼마켓 냉장고 시스템을 공격했다고 비난하며, 이란 혁명수비대 관련 IP 주소를 언급하고 제재를 시사했다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 40,
    "automotive": 40,
    "consumer": 60,
    "energy": 30,
    "manufacturing": 50,
    "chemical": 30
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-10T04:40:57.714022+00:00",
   "insight": {
    "why_it_matters": "국가 주도 사이버 공격은 중요 인프라를 넘어 일반 기업의 운영 시스템 및 공급망으로 확산될 수 있으며, 이는 광범위한 비즈니스 중단을 초래할 수 있다. 또한, 이란에 대한 추가 제재는 특정 산업에 영향을 줄 수 있다.",
    "business_impact": "사이버 공격은 생산 시스템 마비, 데이터 유출, 평판 손상 등 직접적인 피해를 줄 수 있다. 제재가 현실화될 경우, 이란과의 거래 또는 이란 관련 기업과의 간접적인 거래에 제약이 생길 수 있다.",
    "recommended_actions": [
     "사이버 보안 시스템 전반에 대한 점검 및 강화",
     "공급망 내 협력사의 사이버 보안 수준 확인",
     "이란 관련 제재 동향 지속 모니터링",
     "비상시 사이버 공격 대응 계획 수립 및 훈련"
    ],
    "confidence": 0.75
   }
  },
  {
   "id": "LIVE-008",
   "lat": 39.9272,
   "lng": 32.8644,
   "title": "불가리아-튀르키예 네 번째 화물 국경 통과 지점 개설",
   "source": "english.pravda.ru",
   "sources": [
    {
     "url": "https://english.pravda.ru/news/world/172050-bulgaria-turkey-fourth-freight-border-crossing/",
     "domain": "english.pravda.ru"
    }
   ],
   "region": "불가리아, 튀르키예",
   "category": "maritime",
   "summary": "불가리아와 튀르키예 간에 네 번째 화물 국경 통과 지점이 개설될 예정이다. 이는 양국 간의 무역 및 물류 흐름을 개선할 것으로 기대된다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 50,
    "consumer": 50,
    "energy": 20,
    "manufacturing": 60,
    "chemical": 40
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-10T04:40:57.714022+00:00",
   "insight": {
    "why_it_matters": "유럽과 아시아를 잇는 주요 육상 운송 경로의 효율성 증대는 물류 비용 절감 및 운송 시간 단축으로 이어져, 해당 경로를 이용하는 기업들에게 긍정적인 영향을 미칠 수 있다.",
    "business_impact": "튀르키예를 경유하여 유럽으로 수출하는 한국 기업들은 물류 효율성 증대와 운송 비용 절감 효과를 기대할 수 있다. 이는 경쟁력 강화에 기여할 수 있다.",
    "recommended_actions": [
     "불가리아-튀르키예 국경 통과 지점의 실제 운영 효율성 모니터링",
     "해당 경로를 이용한 운송 비용 및 시간 절감 효과 분석",
     "유럽향 수출 물류 전략 재검토 및 최적화",
     "새로운 물류 인프라 활용 방안 모색"
    ],
    "confidence": 0.65
   }
  }
 ]
};
