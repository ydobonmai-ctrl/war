// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-24T07:00:05.155548+00:00",
 "window": {
  "hours": 24,
  "files": 96,
  "until": "2026-11-24T07:00:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 495,
  "by_category": {
   "maritime": 198,
   "supply_chain": 42,
   "oil_commodity": 57,
   "fx_macro": 53,
   "sanctions": 104,
   "cyber": 41
  },
  "top_places": [
   "United States",
   "Russia",
   "Iran",
   "Ukraine",
   "China",
   "Singapore",
   "Libya",
   "Yemen"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-006",
   "lat": 27.1865,
   "lng": 56.2808,
   "title": "이란군, 호르무즈 해협 상공에서 미국 드론 격추",
   "source": "presstv.co.uk",
   "sources": [
    {
     "url": "https://www.presstv.co.uk/Detail/2026/11/23/781432/iranian-army-shoots-down-us-lucas-drone-over-strait-of-hormuz",
     "domain": "presstv.co.uk"
    }
   ],
   "region": "호르무즈 해협, 이란",
   "category": "maritime",
   "summary": "이란군이 호르무즈 해협 상공에서 미국 드론을 격추했다. 이는 세계 주요 원유 수송로인 호르무즈 해협에서의 군사적 긴장이 고조되고 있음을 나타낸다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 70,
    "consumer": 60,
    "energy": 90,
    "manufacturing": 75,
    "chemical": 80
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-24T07:00:05.155548+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 전 세계 해상 원유 수송량의 상당 부분이 통과하는 핵심 길목이다. 이곳에서의 군사적 충돌은 국제 유가 폭등과 해상 운송 마비로 이어져 한국 경제 및 기업 활동에 치명적인 영향을 미칠 수 있다.",
    "business_impact": "유가 급등으로 인한 에너지 및 원자재 비용 폭증. 중동발 원유 및 가스 수입 차질. 해상 운송 보험료 및 운임 급등, 운항 지연 또는 중단.",
    "recommended_actions": [
     "호르무즈 해협을 통과하는 선박의 운항 계획 및 안전성 긴급 점검",
     "원유 및 가스 등 에너지원 수급 비상 계획 재검토 및 다변화 방안 모색",
     "해상 보험의 전쟁 위험 담보 조건 및 보상 범위 즉시 확인",
     "중동 지역 지정학적 리스크에 대한 최고 경영진 보고 및 대응 전략 수립"
    ],
    "confidence": 0.95
   }
  },
  {
   "id": "LIVE-001",
   "lat": 1.366667,
   "lng": 103.8,
   "title": "미국, AI 기업 메가스피드에 대한 제재 강화",
   "source": "straitstimes.com / cbc.ca / 2paragraphs.com / themunicheye.com / foxbusiness.com",
   "sources": [
    {
     "url": "https://www.straitstimes.com/business/economy/megaspeed-on-us-blacklist-what-this-means-for-the-operations-of-the-spore-based-firm",
     "domain": "straitstimes.com"
    },
    {
     "url": "https://www.cbc.ca/news/world/trump-megaspeed-blacklist-nvidia-9.7433587",
     "domain": "cbc.ca"
    },
    {
     "url": "https://2paragraphs.com/2026/11/ex-nsc-director-says-commerce-adding-megaspeed-to-entity-list-has-zero-effect/",
     "domain": "2paragraphs.com"
    },
    {
     "url": "https://themunicheye.com/breaking-news/us-plans-to-blacklist-singapore-ai-firm-megaspeed-over-nvidia-chip-concerns-1107",
     "domain": "themunicheye.com"
    },
    {
     "url": "https://www.foxbusiness.com/politics/trump-admin-adds-megaspeed-commerce-department-trade-blacklist-after-nvidia-scandal",
     "domain": "foxbusiness.com"
    }
   ],
   "region": "싱가포르, 중국, 대만, 미국",
   "category": "sanctions",
   "summary": "미국이 엔비디아 칩 관련 우려로 싱가포르 AI 기업 메가스피드를 무역 블랙리스트에 추가하고 제재를 강화할 계획이다. 이는 트럼프 행정부 시절부터 이어진 조치로, AI 기술 분야에 대한 미국의 통제 의지를 보여준다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 85,
    "automotive": 60,
    "consumer": 40,
    "energy": 20,
    "manufacturing": 75,
    "chemical": 15
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-24T07:00:05.155548+00:00",
   "insight": {
    "why_it_matters": "한국 기업들은 AI 기술 개발 및 도입에 있어 미국 제재 대상 기업과의 협력 여부를 면밀히 검토해야 한다. 특히 엔비디아 칩 등 핵심 반도체 부품의 공급망 안정성에 영향을 미칠 수 있다.",
    "business_impact": "AI 관련 기술 및 부품 조달에 제약이 발생할 수 있으며, 제재 대상 기업과의 거래 관계가 있는 경우 사업 연속성에 위험이 따를 수 있다. AI 기반 솔루션 도입을 계획 중인 기업은 공급처 다변화를 고려해야 한다.",
    "recommended_actions": [
     "AI 관련 기술 및 부품 공급망 내 제재 대상 기업 여부 확인 및 리스크 평가",
     "엔비디아 등 핵심 반도체 공급업체와의 계약 조건 및 공급 안정성 재검토",
     "AI 솔루션 도입 시 제재 리스크가 적은 대안 기술 또는 공급처 탐색",
     "미국 수출 통제 정책 변화에 대한 지속적인 모니터링"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-003",
   "lat": 25.0,
   "lng": 17.0,
   "title": "유가, 공급 전망 우려로 3개월래 최저치 근접",
   "source": "news.az",
   "sources": [
    {
     "url": "https://news.az/news/oil-prices-hover-near-three-month-lows-as-supply-outlook-weighs",
     "domain": "news.az"
    }
   ],
   "region": "리비아 (글로벌 유가 시장)",
   "category": "oil_commodity",
   "summary": "글로벌 공급 전망에 대한 우려가 커지면서 유가가 3개월래 최저치에 근접하고 있다. 이는 리비아 등 주요 산유국의 상황과 맞물려 시장에 영향을 미치고 있다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 70,
    "consumer": 60,
    "energy": 80,
    "manufacturing": 75,
    "chemical": 85
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-24T07:00:05.155548+00:00",
   "insight": {
    "why_it_matters": "유가 하락은 단기적으로 기업의 에너지 및 운송 비용 부담을 줄여줄 수 있지만, 장기적으로는 글로벌 경기 둔화 신호일 수 있으며, 산유국들의 재정 불안정으로 이어져 지정학적 리스크를 키울 수도 있다.",
    "business_impact": "원자재 및 물류 비용 절감 효과를 기대할 수 있으나, 글로벌 수요 감소 가능성에 대비해야 한다. 유가 변동성이 커질 경우 사업 계획 수립에 어려움이 있을 수 있다.",
    "recommended_actions": [
     "유가 하락에 따른 원가 절감 효과 분석 및 가격 경쟁력 확보 방안 검토",
     "글로벌 경기 둔화 가능성에 대비한 재고 및 생산 계획 조정",
     "유가 변동성 심화에 대비한 유류 구매 계약 조건 재검토",
     "에너지 효율 개선 및 대체 에너지원 활용 방안 모색"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-007",
   "lat": -25.0,
   "lng": 135.0,
   "title": "호주, 배터리 제조 역량 강화 촉구",
   "source": "singletonargus.com.au",
   "sources": [
    {
     "url": "https://www.singletonargus.com.au/story/9397528/australia-urged-to-charge-up-battery-manufacturing/",
     "domain": "singletonargus.com.au"
    }
   ],
   "region": "호주",
   "category": "supply_chain",
   "summary": "호주가 배터리 제조 역량을 강화해야 한다는 목소리가 커지고 있다. 이는 전기차 및 에너지 저장 시스템 수요 증가에 따라 핵심 광물 생산국으로서의 이점을 활용하려는 움직임으로 보인다.",
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
    "automotive": 80,
    "consumer": 60,
    "energy": 70,
    "manufacturing": 85,
    "chemical": 60
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-24T07:00:05.155548+00:00",
   "insight": {
    "why_it_matters": "호주의 배터리 제조 역량 강화는 한국 기업에게 핵심 광물 공급망 다변화 및 배터리 생산 기지 확장의 기회를 제공할 수 있다. 특히 중국 의존도를 줄이고 안정적인 공급망을 구축하는 데 기여할 수 있다.",
    "business_impact": "호주와의 배터리 관련 협력 기회 모색. 핵심 광물 조달 비용 및 안정성 개선 가능성. 장기적으로 배터리 공급망의 지정학적 리스크 분산.",
    "recommended_actions": [
     "호주의 배터리 산업 육성 정책 및 투자 동향 분석",
     "호주 내 핵심 광물 공급업체 및 배터리 제조 파트너십 가능성 탐색",
     "배터리 소재 및 부품 공급망 다변화 전략에 호주 포함 여부 검토",
     "호주 정부 및 관련 기관과의 협력 채널 구축 검토"
    ],
    "confidence": 0.75
   }
  },
  {
   "id": "LIVE-008",
   "lat": 44.2394,
   "lng": -114.51,
   "title": "유럽 식품 공급망에 대한 사이버 공격 발생",
   "source": "thenewamerican.com",
   "sources": [
    {
     "url": "https://thenewamerican.com/us/tech/computers/cyber-attacks-target-european-food-supply/",
     "domain": "thenewamerican.com"
    }
   ],
   "region": "유럽, 미국",
   "category": "cyber",
   "summary": "유럽의 식품 공급망을 대상으로 한 사이버 공격이 발생했다. 이는 식품 생산 및 유통 시스템의 취약성을 드러내며, 공급망 전반에 걸친 사이버 보안 강화의 필요성을 강조한다.",
   "impact_industries": [
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 15,
    "consumer": 75,
    "energy": 10,
    "manufacturing": 60,
    "chemical": 20
   },
   "risk_score": 75,
   "risk_level": "high",
   "prev_score": 75,
   "created_at": "2026-11-24T07:00:05.155548+00:00",
   "insight": {
    "why_it_matters": "식품 공급망에 대한 사이버 공격은 생산 지연, 재고 손실, 유통 마비 등을 초래하여 소비자 물가 상승 및 식량 안보 위협으로 이어질 수 있다. 한국 기업도 유사한 공격에 대비하여 자체 공급망의 사이버 보안을 강화해야 한다.",
    "business_impact": "식품 관련 제조 및 유통 기업은 생산 차질, 재고 손실, 브랜드 이미지 손상 등의 직접적인 피해를 입을 수 있다. 다른 산업군도 공급망 전반의 사이버 보안 취약성 점검 필요.",
    "recommended_actions": [
     "자사 및 주요 협력사의 IT/OT 시스템에 대한 사이버 보안 취약점 점검",
     "공급망 전반의 사이버 보안 프로토콜 및 비상 대응 계획 강화",
     "데이터 백업 및 복구 시스템 점검",
     "사이버 보안 위협 정보 공유 네트워크 참여 검토"
    ],
    "confidence": 0.75
   }
  },
  {
   "id": "LIVE-002",
   "lat": 39.828175,
   "lng": -98.5795,
   "title": "미국, 이란의 '그림자 금융 네트워크'에 대한 추가 제재 부과",
   "source": "themunicheye.com / news.az / moneycontrol.com",
   "sources": [
    {
     "url": "https://themunicheye.com/breaking-news/us-imposes-new-sanctions-on-iranian-shadow-banking-networks-1108",
     "domain": "themunicheye.com"
    },
    {
     "url": "https://news.az/news/us-vows-to-cut-off-iran-s-financial-lifelines-after-new-sanctions",
     "domain": "news.az"
    },
    {
     "url": "https://www.moneycontrol.com/world/us-imposes-sanctions-on-dozens-linked-to-iran-s-shadow-banking-networks-article-14087519.html",
     "domain": "moneycontrol.com"
    }
   ],
   "region": "이란, 미국",
   "category": "sanctions",
   "summary": "미국이 이란의 '그림자 금융 네트워크'와 관련된 수십 개 개인 및 단체에 대해 새로운 제재를 부과하며 이란의 금융 생명줄을 차단하겠다고 밝혔다. 이는 이란의 석유 판매 및 기타 불법 활동 자금 조달을 막기 위한 조치다.",
   "impact_industries": [
    "energy",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 20,
    "energy": 70,
    "manufacturing": 30,
    "chemical": 40
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-24T07:00:05.155548+00:00",
   "insight": {
    "why_it_matters": "이란 제재 강화는 국제 유가 변동성을 높이고, 중동 지역의 지정학적 긴장을 고조시킬 수 있다. 이는 에너지 비용 상승 및 해상 운송 리스크 증가로 이어져 한국 기업의 원가 부담을 가중시킬 수 있다.",
    "business_impact": "유가 상승으로 인한 에너지 및 원자재 비용 증가, 중동 지역을 경유하는 해상 운송 보험료 및 운임 상승 가능성. 이란과의 간접적인 거래 관계가 있는 경우 추가적인 실사 필요.",
    "recommended_actions": [
     "국제 유가 및 중동 지역 정세 변화에 대한 실시간 모니터링 강화",
     "에너지 및 원자재 구매 계약 시 유가 변동성 헤지 방안 검토",
     "중동 지역 해상 운송 경로 및 보험 조건 재검토",
     "이란 관련 제재 대상 기업 리스트 업데이트 및 내부 컴플라이언스 점검"
    ],
    "confidence": 0.85
   }
  },
  {
   "id": "LIVE-005",
   "lat": 25.0,
   "lng": 45.0,
   "title": "예멘 후티 반군 및 사우디 공습으로 17명 사망",
   "source": "channelnewsasia.com",
   "sources": [
    {
     "url": "https://www.channelnewsasia.com/world/yemen-houthis-saudi-strikes-kill-seventeen-6575956",
     "domain": "channelnewsasia.com"
    }
   ],
   "region": "아라비아 반도, 사우디아라비아",
   "category": "maritime",
   "summary": "예멘 후티 반군과 사우디아라비아 간의 공습으로 17명이 사망했다. 이는 아라비아 반도 지역의 지정학적 긴장이 지속되고 있음을 보여준다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 30,
    "consumer": 20,
    "energy": 65,
    "manufacturing": 35,
    "chemical": 30
   },
   "risk_score": 65,
   "risk_level": "medium",
   "prev_score": 65,
   "created_at": "2026-11-24T07:00:05.155548+00:00",
   "insight": {
    "why_it_matters": "예멘 분쟁은 홍해 및 바브엘만데브 해협의 해상 안보에 직접적인 위협이 된다. 이 해협은 수에즈 운하를 통해 아시아와 유럽을 잇는 주요 해상 무역로이자 원유 수송로이므로, 한국 기업의 물류 및 에너지 공급망에 심각한 영향을 미칠 수 있다.",
    "business_impact": "홍해를 통과하는 선박의 운항 지연, 보험료 인상, 운임 상승 가능성. 최악의 경우 운항 중단 또는 경로 우회로 인한 비용 및 시간 증가.",
    "recommended_actions": [
     "홍해 및 아라비아 반도 인근 해상 운송 경로의 안전성 및 리스크 평가",
     "해상 보험 계약의 전쟁 위험 담보 조건 확인 및 필요시 강화",
     "중동 지역 정세 변화에 대한 실시간 모니터링 및 비상 계획 수립",
     "대체 운송 경로(예: 희망봉 우회)의 비용 및 시간 영향 분석"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-004",
   "lat": 32.8925,
   "lng": 13.18,
   "title": "리비아 벵가지 항구 공격에 대한 조사 촉구",
   "source": "eurasiareview.com",
   "sources": [
    {
     "url": "https://www.eurasiareview.com/24112026-libya-un-mission-urges-probe-into-benghazi-port-attacks/",
     "domain": "eurasiareview.com"
    }
   ],
   "region": "리비아",
   "category": "maritime",
   "summary": "유엔 리비아 지원단(UNSMIL)이 리비아 벵가지 항구 공격에 대한 즉각적인 조사를 촉구했다. 이는 리비아 내 불안정한 정세가 항만 시설에까지 영향을 미치고 있음을 시사한다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 15,
    "energy": 60,
    "manufacturing": 25,
    "chemical": 20
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-24T07:00:05.155548+00:00",
   "insight": {
    "why_it_matters": "리비아 항구의 불안정은 지중해 동부 해상 운송에 영향을 미칠 수 있으며, 리비아산 원유 공급에 차질을 빚어 국제 유가에 영향을 줄 수 있다. 이는 한국 기업의 물류 비용 및 에너지 수급에 간접적인 영향을 미친다.",
    "business_impact": "리비아를 경유하거나 리비아와 거래하는 해상 운송에 지연 및 추가 비용 발생 가능성. 국제 유가 변동성 증가.",
    "recommended_actions": [
     "리비아 및 지중해 동부 지역 해상 운송 경로의 안전성 점검",
     "해상 보험 조건 및 커버리지 재확인",
     "리비아 정세 변화에 대한 지속적인 모니터링",
     "대체 운송 경로 또는 항구 활용 가능성 검토"
    ],
    "confidence": 0.7
   }
  }
 ]
};
