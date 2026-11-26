// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-26T05:10:21.004186+00:00",
 "window": {
  "hours": 24,
  "files": 96,
  "until": "2026-11-26T05:15:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 568,
  "by_category": {
   "fx_macro": 26,
   "sanctions": 175,
   "maritime": 237,
   "supply_chain": 46,
   "oil_commodity": 63,
   "cyber": 21
  },
  "top_places": [
   "United States",
   "Saudi Arabia",
   "Yemen",
   "Iran",
   "China",
   "India",
   "Russia",
   "Djibouti"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-005",
   "lat": 35.0,
   "lng": 105.0,
   "title": "미국, 중국 AI 산업에 대한 반도체 수출 규제 강화",
   "source": "article.wn.com",
   "sources": [
    {
     "url": "https://article.wn.com/view/2026/11/26/US_chip_curbs_close_pathways_for_Chinese_AI/",
     "domain": "article.wn.com"
    }
   ],
   "region": "미국, 중국",
   "category": "supply_chain",
   "summary": "미국이 중국의 인공지능(AI) 산업 발전을 저해하기 위해 반도체 수출 규제를 강화하고 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 95,
    "automotive": 60,
    "consumer": 50,
    "energy": 20,
    "manufacturing": 70,
    "chemical": 20
   },
   "risk_score": 95,
   "risk_level": "high",
   "prev_score": 95,
   "created_at": "2026-11-26T05:10:21.004186+00:00",
   "insight": {
    "why_it_matters": "미국의 대중국 반도체 규제는 글로벌 반도체 공급망에 지속적인 불확실성을 야기하며, 한국 반도체 기업의 대중국 수출 및 기술 협력에 직접적인 영향을 미칠 수 있다. 또한, AI 관련 산업 전반에 파급 효과를 미칠 것이다.",
    "business_impact": "중국향 반도체 수출 감소 가능성, 기술 개발 및 투자 전략 재검토, 글로벌 반도체 시장 경쟁 구도 변화.",
    "recommended_actions": [
     "미국 및 중국의 반도체 정책 변화 면밀히 주시",
     "규제 대상 품목 및 기술 범위 확인",
     "공급망 내 중국 의존도 재평가 및 다변화 전략 수립",
     "기술 개발 로드맵 조정",
     "법률 및 규제 준수 여부 재검토"
    ],
    "confidence": 0.85
   }
  },
  {
   "id": "LIVE-004",
   "lat": 21.5169,
   "lng": 39.2192,
   "title": "사우디아라비아 주요 항만 및 유전 시설 피격, 홍해/걸프 해상 안보 위협 증가",
   "source": "freemalaysiatoday.com / investinglive.com / samaa.tv / oilprice.com / dailysabah",
   "sources": [
    {
     "url": "https://www.freemalaysiatoday.com/category/world/2026/11/26/saudis-down-missiles-targeting-capital-after-yemen-port-strikes",
     "domain": "freemalaysiatoday.com"
    },
    {
     "url": "https://investinglive.com/commodities/projectile-explodes-near-tanker-50-nautical-miles-off-dubai-as-gulf-shipping-attacks-mount/",
     "domain": "investinglive.com"
    },
    {
     "url": "https://www.samaa.tv/2087361024-saudi-led-coalition-reports-projectile-strike-on-jazan-port",
     "domain": "samaa.tv"
    },
    {
     "url": "https://oilprice.com/Latest-Energy-News/World-News/Oil-Jumps-Over-2-as-Saudi-Arabia-Downs-Drones-Over-Ras-Tanura.html",
     "domain": "oilprice.com"
    },
    {
     "url": "https://www.dailysabah.com/politics/diplomacy/turkiye-strongly-condemns-houthi-attack-on-riyadh-financial-hub",
     "domain": "dailysabah.com"
    }
   ],
   "region": "사우디아라비아, 예멘, 중동 해역",
   "category": "maritime",
   "summary": "예멘 반군의 공격으로 사우디아라비아의 주요 항만과 유전 시설이 피격되었으며, 두바이 인근 해상에서 유조선 근처에 발사체가 폭발하는 등 걸프 해상 안보 위협이 고조되고 있다.",
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
    "consumer": 60,
    "energy": 90,
    "manufacturing": 70,
    "chemical": 80
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-26T05:10:21.004186+00:00",
   "insight": {
    "why_it_matters": "중동 지역의 해상 안보 불안정은 원유 및 가스 운송에 직접적인 위협이 되며, 이는 국제 유가 상승과 해상 운임 증가로 이어져 한국 기업의 에너지 비용 및 물류 비용에 막대한 영향을 미칠 수 있다.",
    "business_impact": "원유 및 LNG 조달 비용 상승, 중동발 해상 운송 지연 및 보험료 증가, 에너지 집약 산업의 생산 비용 증가.",
    "recommended_actions": [
     "중동 해상 운송 경로의 안전성 지속 모니터링",
     "대체 운송 경로 및 비상 계획 검토",
     "원유 및 LNG 재고 수준 점검",
     "해상 보험 조건 및 비용 재확인",
     "선박 운항사와의 긴밀한 소통 유지"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-003",
   "lat": 38.8951,
   "lng": -77.0364,
   "title": "미국, 중국 및 13개 무역 파트너에 대한 신규 관세 부과 예정",
   "source": "goulburnpost.com.au / hellenicshippingnews.com / livemint.com / theepochtimes.co",
   "sources": [
    {
     "url": "https://www.goulburnpost.com.au/story/9398042/trump-administration-set-to-unveil-new-us-tariffs/",
     "domain": "goulburnpost.com.au"
    },
    {
     "url": "https://www.hellenicshippingnews.com/the-us-tariff-wall-keeps-changing-but-it-isnt-coming-down/",
     "domain": "hellenicshippingnews.com"
    },
    {
     "url": "https://www.livemint.com/market/indian-shares-set-to-extend-gains-on-strong-foreign-flows-us-tariffs-in-focus-11795662523778.html",
     "domain": "livemint.com"
    },
    {
     "url": "https://www.theepochtimes.com/epochtv/us-to-impose-new-tariffs-on-china-13-trade-partners-holiday-travel-disruptions-what-to-know-6129547",
     "domain": "theepochtimes.com"
    }
   ],
   "region": "미국, 중국, 기타 13개국",
   "category": "sanctions",
   "summary": "미국이 중국 및 13개 무역 파트너에 대해 새로운 관세를 부과할 예정이며, 기존 관세 장벽은 유지될 것으로 보인다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 80,
    "automotive": 70,
    "consumer": 70,
    "energy": 30,
    "manufacturing": 85,
    "chemical": 60
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-26T05:10:21.004186+00:00",
   "insight": {
    "why_it_matters": "미국의 신규 관세 부과는 글로벌 공급망 재편을 가속화하고, 관련 국가들과의 무역 관계에 불확실성을 증대시켜 한국 기업의 수출 전략 및 생산 기지 운영에 직접적인 영향을 미칠 수 있다.",
    "business_impact": "대미 수출 기업의 비용 증가 및 경쟁력 약화, 글로벌 생산 기지 재편 압박, 특정 부품 및 원자재 조달 비용 상승.",
    "recommended_actions": [
     "미국 관세 정책 변화 면밀히 모니터링",
     "관세 부과 대상 품목 및 국가 확인",
     "공급망 다변화 및 생산 기지 재배치 검토",
     "무역 분쟁 장기화에 대비한 시나리오 플래닝",
     "관세 영향 분석 및 비용 절감 방안 모색"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-006",
   "lat": 26.6439,
   "lng": 50.1592,
   "title": "미국 원유 생산량 및 재고 지속 증가",
   "source": "oilprice.com",
   "sources": [
    {
     "url": "https://oilprice.com/Energy/Crude-Oil/US-Rig-Count-Holds-Steady-as-Oil-Production-Hits-Fifth-Straight-Record.html",
     "domain": "oilprice.com"
    },
    {
     "url": "https://oilprice.com/Energy/Crude-Oil/Oil-Inventories-Continue-to-Rise-in-the-US.html",
     "domain": "oilprice.com"
    }
   ],
   "region": "미국",
   "category": "oil_commodity",
   "summary": "미국 원유 생산량이 5회 연속 최고치를 기록하고 원유 재고가 지속적으로 증가하며 글로벌 원유 공급 안정화에 기여하고 있다.",
   "impact_industries": [
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 15,
    "automotive": 35,
    "consumer": 25,
    "energy": 75,
    "manufacturing": 45,
    "chemical": 55
   },
   "risk_score": 75,
   "risk_level": "high",
   "prev_score": 75,
   "created_at": "2026-11-26T05:10:21.004186+00:00",
   "insight": {
    "why_it_matters": "미국 원유 생산량 및 재고 증가는 글로벌 원유 공급 안정화에 기여하여 국제 유가 상승 압력을 완화할 수 있다. 이는 한국 기업의 에너지 비용 부담을 줄이는 긍정적인 요인으로 작용할 수 있다.",
    "business_impact": "원유 가격 안정화 또는 하락에 따른 에너지 비용 절감 기대, 석유화학 제품 원가 부담 완화.",
    "recommended_actions": [
     "국제 유가 동향 및 원유 재고 변화 지속 모니터링",
     "원유 및 에너지 관련 구매 전략 재검토",
     "에너지 효율 개선 투자 지속",
     "장기적인 에너지 수급 계획 수립"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-001",
   "lat": 29.0744,
   "lng": 31.0978,
   "title": "이집트 카이로 인근 연료 운반선 충돌 및 대형 화재 발생",
   "source": "thetelegraphandargus.co.uk / cbsnews.com / irishtimes.com / news.az",
   "sources": [
    {
     "url": "https://www.thetelegraphandargus.co.uk/news/national/26763777.dozens-killed-fuel-tanker-crash-ignites-massive-fire-major-road-near-cairo/",
     "domain": "thetelegraphandargus.co.uk"
    },
    {
     "url": "https://www.cbsnews.com/news/egypt-fuel-tanker-crash-cairo-highway-fire/",
     "domain": "cbsnews.com"
    },
    {
     "url": "https://www.irishtimes.com/world/africa/2026/11/25/at-least-31-killed-in-egypt-as-fuel-tanker-crash-ignites-huge-fire-near-cairo/",
     "domain": "irishtimes.com"
    },
    {
     "url": "https://news.az/news/fuel-tanker-fire-injures-at-least-10-on-egypts-giza-ring-road",
     "domain": "news.az"
    }
   ],
   "region": "이집트",
   "category": "maritime",
   "summary": "이집트 카이로 인근 도로에서 연료 운반선 충돌로 대형 화재가 발생하여 다수의 사상자가 발생했다.",
   "impact_industries": [
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 30,
    "consumer": 20,
    "energy": 70,
    "manufacturing": 40,
    "chemical": 60
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-26T05:10:21.004186+00:00",
   "insight": {
    "why_it_matters": "이집트 주요 도로에서의 연료 운반선 사고는 해당 지역의 육상 물류 및 연료 공급망에 즉각적인 차질을 야기할 수 있다.",
    "business_impact": "이집트 내륙 운송 지연, 연료 가격 변동성 증가, 현지 사업장의 운영 차질 가능성.",
    "recommended_actions": [
     "이집트 내륙 운송 경로 및 대체 수단 확인",
     "현지 연료 재고 수준 점검",
     "비상 운송 계획 수립",
     "현지 파트너사와 소통하여 상황 업데이트 확인"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-002",
   "lat": 57.1667,
   "lng": -2.66667,
   "title": "영국 가정 에너지 요금 급등",
   "source": "milfordmercury.co.uk",
   "sources": [
    {
     "url": "https://www.milfordmercury.co.uk/news/national/26760098.misery-households-energy-bills-jump-26-january/",
     "domain": "milfordmercury.co.uk"
    }
   ],
   "region": "영국",
   "category": "oil_commodity",
   "summary": "영국에서 가정의 에너지 요금이 급등하여 가계에 부담을 주고 있다.",
   "impact_industries": [
    "consumer",
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 5,
    "automotive": 10,
    "consumer": 60,
    "energy": 40,
    "manufacturing": 20,
    "chemical": 10
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-26T05:10:21.004186+00:00",
   "insight": {
    "why_it_matters": "영국 내 에너지 비용 증가는 소비 심리 위축 및 전반적인 경제 활동 둔화로 이어질 수 있으며, 이는 한국 기업의 대영국 수출 및 현지 사업 운영에 간접적인 영향을 미칠 수 있다.",
    "business_impact": "영국 시장 내 소비재 수요 감소 가능성, 현지 사업장 운영 비용 증가 압박.",
    "recommended_actions": [
     "영국 시장 소비 동향 모니터링",
     "현지 에너지 비용 상승에 따른 사업 계획 재검토",
     "에너지 효율 개선 방안 모색",
     "영국 내 사업장 에너지 사용량 분석"
    ],
    "confidence": 0.6
   }
  },
  {
   "id": "LIVE-007",
   "lat": 60.0,
   "lng": 100.0,
   "title": "러시아 선박 침몰, 러시아-우크라이나 전쟁의 전 세계적 확산 시사",
   "source": "theconversation.com",
   "sources": [
    {
     "url": "https://theconversation.com/recent-sinking-of-russian-vessels-abroad-shows-the-russia-ukraine-war-has-officially-gone-global-297352",
     "domain": "theconversation.com"
    }
   ],
   "region": "러시아, 우크라이나, 국제 해역",
   "category": "maritime",
   "summary": "러시아 선박의 침몰 사건이 발생하며 러시아-우크라이나 전쟁이 전 세계적으로 확산되고 있음을 시사한다.",
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
    "automotive": 40,
    "consumer": 40,
    "energy": 60,
    "manufacturing": 50,
    "chemical": 50
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-26T05:10:21.004186+00:00",
   "insight": {
    "why_it_matters": "러시아-우크라이나 전쟁의 해상 확전은 흑해 등 주요 해상 운송로의 위험을 증대시키고, 글로벌 해상 물류 시스템에 추가적인 부담을 줄 수 있다. 이는 국제 무역 및 공급망 안정성에 부정적인 영향을 미친다.",
    "business_impact": "특정 해역 운송 지연 및 비용 증가, 해상 보험료 상승, 국제 정세 불안정성 증대에 따른 사업 불확실성 증가.",
    "recommended_actions": [
     "흑해 및 인근 해역의 해상 운송 위험도 평가",
     "대체 운송 경로 및 비상 계획 수립",
     "러시아 관련 제재 준수 여부 재확인",
     "지정학적 리스크 모니터링 강화",
     "선박 보험 약관 검토 및 필요시 보완"
    ],
    "confidence": 0.75
   }
  }
 ]
};
