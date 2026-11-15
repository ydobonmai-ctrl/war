// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-15T07:10:50.143754+00:00",
 "window": {
  "hours": 24,
  "files": 92,
  "until": "2026-11-15T07:15:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 207,
  "by_category": {
   "supply_chain": 35,
   "maritime": 83,
   "sanctions": 40,
   "fx_macro": 14,
   "oil_commodity": 8,
   "cyber": 27
  },
  "top_places": [
   "United States",
   "China",
   "Yemen",
   "Israel",
   "Saudi Arabia",
   "Iran",
   "Canada",
   "United Kingdom"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-002",
   "lat": 35.4421,
   "lng": 47.3506,
   "title": "호르무즈 해협 유조선 피격 및 후티 반군 공격 위협 지속",
   "source": "hindustantimes.com / i24news.tv / middleeasteye.net / zerohedge.com",
   "sources": [
    {
     "url": "https://www.hindustantimes.com/world-news/three-tankers-caught-fire-in-strait-of-hormuz-after-hitting-naval-mines-irans-navy-101794697806467.html",
     "domain": "hindustantimes.com"
    },
    {
     "url": "https://www.i24news.tv/en/news/middle-east/artc-saudi-arabia-intercepts-two-ballistic-missiles-launched-by-yemen-s-houthis-live-blog",
     "domain": "i24news.tv"
    },
    {
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-intercepts-third-drone-houthis-claim-downing",
     "domain": "middleeasteye.net"
    },
    {
     "url": "https://www.zerohedge.com/geopolitical/your-shopping-bag-runs-through-hormuz",
     "domain": "zerohedge.com"
    }
   ],
   "region": "호르무즈 해협, 사우디아라비아, 예멘",
   "category": "maritime",
   "summary": "호르무즈 해협에서 유조선 3척이 기뢰에 피격되어 화재가 발생했으며, 예멘 후티 반군이 사우디아라비아를 향해 탄도 미사일과 드론을 발사하는 등 해상 안보 위협이 지속되고 있다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 60,
    "consumer": 50,
    "energy": 90,
    "manufacturing": 70,
    "chemical": 80
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-15T07:10:50.143754+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 전 세계 원유 및 액화천연가스(LNG) 운송의 핵심 통로로, 이곳의 안보 불안정은 글로벌 에너지 시장과 해상 물류에 즉각적이고 광범위한 영향을 미친다.",
    "business_impact": "원유 및 가스 가격 상승, 해상 운송 보험료 인상, 운송 지연 및 경로 변경으로 인한 물류 비용 증가가 예상된다. 중동 지역에서 원자재를 수입하거나 제품을 수출하는 기업은 직접적인 영향을 받을 수 있다.",
    "recommended_actions": [
     "중동발 원유 및 가스 가격 변동 추이를 면밀히 모니터링한다.",
     "호르무즈 해협을 통과하는 선박의 운항 상황 및 보험료 변화를 확인한다.",
     "에너지 및 원자재 재고 수준을 점검하고 비상 공급망 계획을 검토한다.",
     "대체 운송 경로 또는 공급처 확보 가능성을 평가한다.",
     "해상 운송 파트너와 긴밀히 소통하여 최신 정보를 공유한다."
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-007",
   "lat": 35.0,
   "lng": 105.0,
   "title": "미국 의회, 중국 반도체 스파이 의혹 조사 준비",
   "source": "nypost.com",
   "sources": [
    {
     "url": "https://nypost.com/2026/11/14/world-news/congress-prepares-to-rake-lutnick-and-huang-over-chip-spy-fiasco/",
     "domain": "nypost.com"
    }
   ],
   "region": "미국, 중국",
   "category": "sanctions",
   "summary": "미국 의회가 중국의 반도체 스파이 의혹에 대해 조사를 준비하고 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 80,
    "automotive": 50,
    "consumer": 40,
    "energy": 10,
    "manufacturing": 60,
    "chemical": 10
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-15T07:10:50.143754+00:00",
   "insight": {
    "why_it_matters": "미중 간 반도체 기술 패권 경쟁이 심화되는 가운데, 스파이 의혹 조사는 양국 간의 기술 및 무역 제재를 더욱 강화할 수 있다. 이는 글로벌 반도체 공급망에 큰 불확실성을 초래한다.",
    "business_impact": "반도체 산업 전반에 걸쳐 불확실성이 증대되며, 추가적인 수출 통제나 제재가 발생할 경우 한국 기업의 대중국 반도체 수출 및 관련 부품 수입에 차질이 생길 수 있다. 이는 생산 비용 증가 및 공급망 재편 압력으로 이어진다.",
    "recommended_actions": [
     "미국 의회의 조사 진행 상황 및 발표 내용을 면밀히 모니터링한다.",
     "미국과 중국의 반도체 관련 정책 및 제재 변화를 주시한다.",
     "반도체 부품 및 장비의 공급망 다변화 전략을 검토하고 비상 계획을 수립한다.",
     "관련 법규 및 규제 준수 여부를 재확인한다."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-008",
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
   "summary": "러시아의 한 에너지 터미널이 공격을 받아 화재가 발생했으며, 이는 우크라이나 전쟁의 범위가 확대되고 있음을 시사한다.",
   "impact_industries": [
    "energy",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 30,
    "consumer": 20,
    "energy": 70,
    "manufacturing": 40,
    "chemical": 30
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 75,
   "created_at": "2026-11-15T07:10:50.143754+00:00",
   "insight": {
    "why_it_matters": "러시아의 에너지 인프라에 대한 공격은 글로벌 에너지 공급 안정성에 영향을 미치고, 국제 유가 및 가스 가격의 변동성을 증가시킬 수 있다. 이는 에너지 의존도가 높은 한국 기업들에게 중요한 리스크 요인이다.",
    "business_impact": "에너지 가격 상승으로 인한 생산 및 운송 비용 증가가 예상된다. 러시아산 에너지에 대한 의존도가 높은 유럽 시장의 불안정성이 심화될 수 있으며, 이는 간접적으로 한국 기업의 수출 환경에 영향을 미칠 수 있다.",
    "recommended_actions": [
     "국제 유가 및 가스 가격 변동 추이를 면밀히 모니터링한다.",
     "러시아-우크라이나 전쟁의 전개 상황 및 에너지 인프라 공격 소식을 주시한다.",
     "에너지 비용 증가에 대비하여 생산 효율화 방안을 검토한다.",
     "에너지 공급망 다변화 및 비상 계획을 재검토한다."
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-005",
   "lat": 38.8951,
   "lng": -77.0364,
   "title": "미국, 미얀마와 희토류 관련 제재 해제 논의 재개",
   "source": "rnz.co.nz",
   "sources": [
    {
     "url": "https://www.rnz.co.nz/news/world/2607794/donald-trump-s-quest-for-rare-earths-reopens-us-talks-with-once-isolated-myanmar-regime",
     "domain": "rnz.co.nz"
    }
   ],
   "region": "미국, 미얀마",
   "category": "sanctions",
   "summary": "도널드 트럼프 전 대통령의 희토류 확보 노력의 일환으로, 미국이 한때 고립되었던 미얀마 정권과 희토류 관련 논의를 재개했다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "energy",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 60,
    "automotive": 50,
    "consumer": 30,
    "energy": 40,
    "manufacturing": 40,
    "chemical": 20
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-15T07:10:50.143754+00:00",
   "insight": {
    "why_it_matters": "희토류는 첨단 산업의 핵심 광물로, 중국 의존도가 높은 상황에서 미얀마와의 관계 변화는 글로벌 희토류 공급망 다변화에 중요한 영향을 미칠 수 있다. 이는 지정학적 리스크 관리와 직결된다.",
    "business_impact": "희토류를 사용하는 반도체, 전기차, 전자제품 등 첨단 제조 기업들은 미얀마산 희토류의 공급 가능성 및 가격 변화를 주시해야 한다. 공급처 다변화는 장기적인 공급 안정성 확보에 긍정적일 수 있다.",
    "recommended_actions": [
     "미국-미얀마 희토류 관련 논의 진행 상황을 면밀히 모니터링한다.",
     "글로벌 희토류 시장 동향 및 가격 변동을 주시한다.",
     "희토류 공급망 다변화 전략을 검토하고 미얀마산 희토류의 품질 및 공급 안정성을 평가한다.",
     "관련 제재 해제 여부 및 조건에 대한 정보를 수집한다."
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-006",
   "lat": 33.3811,
   "lng": -117.573,
   "title": "캘리포니아 원자력 발전소 해체 후속 조치 불확실성",
   "source": "nypost.com",
   "sources": [
    {
     "url": "https://nypost.com/2026/11/14/opinion/california-is-clueless-about-what-comes-next-after-iconic-nuclear-plant-demolition/",
     "domain": "nypost.com"
    }
   ],
   "region": "미국 캘리포니아",
   "category": "supply_chain",
   "summary": "캘리포니아의 상징적인 원자력 발전소 해체 이후, 주 정부가 다음 단계에 대해 명확한 계획을 제시하지 못하고 있어 불확실성이 커지고 있다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 20,
    "consumer": 10,
    "energy": 50,
    "manufacturing": 30,
    "chemical": 10
   },
   "risk_score": 50,
   "risk_level": "medium",
   "prev_score": 50,
   "created_at": "2026-11-15T07:10:50.143754+00:00",
   "insight": {
    "why_it_matters": "대규모 발전소의 해체는 지역 전력 공급 안정성에 영향을 미칠 수 있으며, 이는 해당 지역에 생산 시설을 둔 기업들의 운영 비용 및 생산 계획에 영향을 줄 수 있다.",
    "business_impact": "캘리포니아에 생산 시설을 운영하거나 전력 의존도가 높은 기업들은 장기적인 전력 공급 안정성 및 전기 요금 변동에 대비해야 한다. 잠재적인 전력 부족 사태는 생산 차질로 이어질 수 있다.",
    "recommended_actions": [
     "캘리포니아 주정부의 에너지 정책 및 전력 공급 계획 발표를 주시한다.",
     "캘리포니아 내 사업장의 전력 소비량 및 비상 전력 공급 계획을 검토한다.",
     "장기적인 에너지 비용 변동 가능성을 고려하여 사업 계획을 조정한다."
    ],
    "confidence": 0.6
   }
  },
  {
   "id": "LIVE-001",
   "lat": 32.7673,
   "lng": -89.6812,
   "title": "미국 미시시피 강 유조선-유람선 충돌 및 소송",
   "source": "cotswoldjournal.co.uk / newson6.com / foxbusiness.com / knoe.com / wbrz.com / cb",
   "sources": [
    {
     "url": "https://www.cotswoldjournal.co.uk/news/national/26729940.port-sues-get-control-tanker-crashed-cruise-ship-mississippi/",
     "domain": "cotswoldjournal.co.uk"
    },
    {
     "url": "https://www.newson6.com/tulsa-oklahoma-news/port-new-orleans-tanker-riverboat-cruise",
     "domain": "newson6.com"
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
   "region": "미국 미시시피 강",
   "category": "maritime",
   "summary": "미시시피 강에서 유조선과 유람선이 충돌하여 뉴올리언스 항만 당국이 유조선 소유주를 상대로 소송을 제기했다. 이 사고로 페리 운항이 중단되었다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 30,
    "energy": 40,
    "manufacturing": 20,
    "chemical": 30
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-15T07:10:50.143754+00:00",
   "insight": {
    "why_it_matters": "미시시피 강은 미국 내륙 물류의 주요 동맥으로, 이번 사고는 해당 지역을 통한 상품 운송에 지연을 초래할 수 있다. 특히 유조선 관련 사고는 에너지 및 화학 제품 운송에 직접적인 영향을 미친다.",
    "business_impact": "미국 중부 및 남부 지역으로 향하는 또는 해당 지역에서 출발하는 해상 운송 경로에 의존하는 기업은 운송 지연 및 비용 증가를 겪을 수 있다. 특히 벌크 화물이나 액체 화물 운송에 영향을 미칠 수 있다.",
    "recommended_actions": [
     "미시시피 강을 이용하는 운송 경로의 현재 상황 및 지연 여부를 확인한다.",
     "대체 운송 경로 또는 운송 수단(철도, 트럭)의 가용성을 검토한다.",
     "관련 해상 보험 약관을 검토하고 잠재적 손실에 대비한다.",
     "미국 내륙 물류 파트너와 소통하여 상황 변화를 주시한다."
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-004",
   "lat": 49.25,
   "lng": -123.133,
   "title": "미국 시스템 장애로 인한 캐나다 항공편 지연 발생",
   "source": "mybancroftnow.com",
   "sources": [
    {
     "url": "https://www.mybancroftnow.com/75168/news/national/canadian-travellers-face-weekend-flight-delays-after-u-s-outage/",
     "domain": "mybancroftnow.com"
    }
   ],
   "region": "캐나다, 미국",
   "category": "cyber",
   "summary": "미국 시스템 장애로 인해 캐나다 여행객들이 주말 항공편 지연을 겪었다.",
   "impact_industries": [
    "semiconductor"
   ],
   "industry_scores": {
    "semiconductor": 40,
    "automotive": 30,
    "consumer": 20,
    "energy": 10,
    "manufacturing": 30,
    "chemical": 10
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-15T07:10:50.143754+00:00",
   "insight": {
    "why_it_matters": "항공 시스템 장애는 항공 화물 운송에 직접적인 영향을 미쳐, 특히 긴급하거나 고부가가치 제품의 공급망에 차질을 줄 수 있다. 이는 북미 지역의 물류 흐름에 영향을 미칠 수 있다.",
    "business_impact": "항공 운송을 통해 북미 지역으로 부품이나 완제품을 수출입하는 기업은 운송 지연 및 비용 증가를 겪을 수 있다. 특히 Just-In-Time(JIT) 재고 시스템을 운영하는 기업에 더 큰 영향을 미칠 수 있다.",
    "recommended_actions": [
     "북미 지역으로 향하는 항공 화물 운송 상황을 확인하고 잠재적 지연을 파악한다.",
     "항공 운송 파트너와 소통하여 대체 경로 또는 운송 수단 옵션을 논의한다.",
     "긴급 물품의 경우, 재고 수준을 점검하고 비상 계획을 수립한다."
    ],
    "confidence": 0.6
   }
  },
  {
   "id": "LIVE-003",
   "lat": 40.3363,
   "lng": -89.0022,
   "title": "미국 일리노이 에탄올 공장 폭탄 위협 발생 및 해체",
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
    }
   ],
   "region": "미국 일리노이",
   "category": "supply_chain",
   "summary": "미국 일리노이주의 한 에탄올 공장에서 폭탄 위협이 발생했으나, 당국이 폭발물을 성공적으로 해체하여 추가 피해는 없었다.",
   "impact_industries": [],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 10,
    "energy": 30,
    "manufacturing": 20,
    "chemical": 30
   },
   "risk_score": 30,
   "risk_level": "low",
   "prev_score": 35,
   "created_at": "2026-11-15T07:10:50.143754+00:00",
   "insight": {
    "why_it_matters": "에탄올은 바이오 연료뿐만 아니라 다양한 화학 제품의 원료로 사용된다. 주요 생산 시설의 가동 중단 위협은 관련 산업의 공급망에 단기적인 불안정성을 초래할 수 있다.",
    "business_impact": "에탄올을 원료로 사용하는 화학, 제약, 식품 산업의 기업들은 잠재적인 공급 차질에 대비해야 한다. 지역 내 연료 공급에도 영향을 미칠 수 있으나, 폭탄이 해체되어 즉각적인 대규모 영향은 제한적일 것으로 보인다.",
    "recommended_actions": [
     "미국 일리노이 지역의 에탄올 공급망 상황을 주시한다.",
     "에탄올을 원료로 사용하는 경우, 현재 재고 수준과 대체 공급처를 확인한다.",
     "관련 산업의 시장 동향 및 가격 변동을 모니터링한다."
    ],
    "confidence": 0.6
   }
  }
 ]
};
