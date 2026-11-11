// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-11T02:52:02.018451+00:00",
 "window": {
  "hours": 24,
  "files": 94,
  "until": "2026-11-11T03:00:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 418,
  "by_category": {
   "maritime": 148,
   "supply_chain": 51,
   "fx_macro": 12,
   "sanctions": 80,
   "oil_commodity": 89,
   "cyber": 38
  },
  "top_places": [
   "United States",
   "Iran",
   "United Kingdom",
   "China",
   "India",
   "Saudi Arabia",
   "Russia",
   "Yemen"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-002",
   "lat": 35.0,
   "lng": 105.0,
   "title": "미국 상무부, 제재 대상과 연루된 중국 기업에 엔비디아 칩 판매 승인 논란",
   "source": "investmentwatchblog.com",
   "sources": [
    {
     "url": "https://www.investmentwatchblog.com/commerce-approved-nvidia-chip-sales-to-chinese-firms-with-empty-offices-and-ties-to-sanctioned-military-suppliers/",
     "domain": "investmentwatchblog.com"
    },
    {
     "url": "https://www.investmentwatchblog.com/nvidias-jensen-huang-faces-fbi-scrutiny-while-shareholders-take-the-fight-to-court/",
     "domain": "investmentwatchblog.com"
    }
   ],
   "region": "중국",
   "category": "sanctions",
   "summary": "미국 상무부가 빈 사무실을 가진 중국 기업 및 제재 대상 군사 공급업체와 연루된 기업에 엔비디아 칩 판매를 승인하여 논란이 일고 있다. 엔비디아 CEO는 FBI 조사를 받고 있으며 주주들은 소송을 제기했다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 90,
    "automotive": 50,
    "consumer": 40,
    "energy": 20,
    "manufacturing": 60,
    "chemical": 20
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-11T02:52:02.018451+00:00",
   "insight": {
    "why_it_matters": "이는 미국의 대중국 반도체 수출 통제 정책의 실효성에 대한 의문을 제기하며, 향후 제재 집행의 불확실성을 높인다. 한국 반도체 기업에 대한 미국의 압박 또는 규제 변화 가능성을 시사한다.",
    "business_impact": "한국 반도체 기업은 대중국 수출 전략 및 미국 제재 준수 여부를 재검토해야 할 수 있다. 불확실한 규제 환경은 투자 및 사업 계획에 영향을 미칠 수 있다.",
    "recommended_actions": [
     "미국 상무부의 대중국 반도체 수출 통제 정책 및 집행 동향 면밀히 주시.",
     "자사 대중국 수출 품목 및 거래처에 대한 제재 리스크 재평가.",
     "법률 및 규제 전문가와 협력하여 준수 전략 강화.",
     "미중 기술 경쟁 심화에 따른 공급망 다변화 전략 검토."
    ],
    "confidence": 0.85
   }
  },
  {
   "id": "LIVE-003",
   "lat": 39.9289,
   "lng": 116.388,
   "title": "국제 유가, 8월 이후 최저 수준으로 하락",
   "source": "oilprice.com",
   "sources": [
    {
     "url": "https://oilprice.com/Energy/Crude-Oil/Oil-Falls-to-Lowest-Level-Since-August.html",
     "domain": "oilprice.com"
    }
   ],
   "region": "전 세계 (중국 베이징에서 보도)",
   "category": "oil_commodity",
   "summary": "국제 유가가 8월 이후 최저 수준으로 떨어졌다.",
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
    "automotive": 70,
    "consumer": 60,
    "energy": 80,
    "manufacturing": 80,
    "chemical": 90
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-11T02:52:02.018451+00:00",
   "insight": {
    "why_it_matters": "유가 하락은 원자재 및 운송 비용 감소로 이어져 제조 및 소비재 기업의 생산 비용 절감에 긍정적인 영향을 미친다. 그러나 에너지 기업의 수익성에는 부정적일 수 있다.",
    "business_impact": "제조, 화학, 자동차, 소비재 산업의 생산 비용 감소 및 마진 개선 가능성. 물류 및 운송 비용 절감. 에너지 기업의 수익성 악화 우려.",
    "recommended_actions": [
     "유가 변동성 추이 지속 모니터링 및 원자재 구매 전략 재검토.",
     "운송 및 물류 비용 절감 기회 모색.",
     "에너지 관련 기업은 유가 하락에 대비한 리스크 헤징 전략 강화.",
     "생산 비용 절감분을 활용한 가격 경쟁력 확보 방안 검토."
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-004",
   "lat": 26.0,
   "lng": 56.25,
   "title": "걸프만 및 UAE 해역에서 유조선 공격 발생, 미군 유조기 기지 철수",
   "source": "gcaptain.com / gulfnews.com / redstate.com / washingtonexaminer.com",
   "sources": [
    {
     "url": "https://gcaptain.com/adnoc-vessel-damaged-in-gulf-attack-as-ukmto-reports-fresh-tanker-strike-near-hormuz/",
     "domain": "gcaptain.com"
    },
    {
     "url": "https://gulfnews.com/business/markets/adnoc-logistics-vessel-damaged-in-attack-in-uae-territorial-waters-1.500742780",
     "domain": "gulfnews.com"
    },
    {
     "url": "https://redstate.com/wardclark/2026/11/10/us-moves-tankers-from-raf-mildenhall-over-possible-iran-threat-n2209232",
     "domain": "redstate.com"
    },
    {
     "url": "http://www.washingtonexaminer.com/policy/defense/4798312/us-evacuates-air-tankers-uk-base-security-concern/",
     "domain": "washingtonexaminer.com"
    }
   ],
   "region": "걸프만, UAE 해역, 영국 (이란 위협 관련)",
   "category": "maritime",
   "summary": "아드녹(ADNOC) 물류 선박이 걸프만 및 UAE 영해에서 공격을 받아 손상되었으며, 호르무즈 해협 근처에서 새로운 유조선 공격이 보고되었다. 이란의 위협 가능성으로 인해 미군이 영국 기지에서 공중 급유기를 철수했다.",
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
    "energy": 80,
    "manufacturing": 70,
    "chemical": 80
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-11T02:52:02.018451+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 세계 석유 운송의 핵심 통로이며, 이 지역의 해상 안보 불안정은 유가 상승 및 해상 운송 비용 증가로 직결된다. 중동 정세 불안은 공급망 전반에 큰 영향을 미칠 수 있다.",
    "business_impact": "중동발 원유 및 LNG 수입 의존도가 높은 한국 기업의 에너지 조달 비용 증가. 해상 운송 보험료 상승 및 운송 지연 가능성. 중동 지역 사업 불확실성 증대.",
    "recommended_actions": [
     "걸프만 해상 안보 상황 및 이란 관련 지정학적 리스크 실시간 모니터링.",
     "해상 운송 보험 조건 및 비용 변화 확인.",
     "중동발 원자재 및 에너지 수입 시 대체 경로 또는 재고 확보 방안 검토.",
     "운송 계약 시 전쟁 위험 조항 등 비상 계획 점검."
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-001",
   "lat": 60.0,
   "lng": -96.0,
   "title": "한국 조선사, LNG 운반선 가격 압박 직면",
   "source": "hellenicshippingnews.com",
   "sources": [
    {
     "url": "https://www.hellenicshippingnews.com/korea-shipbuilders-face-lng-carrier-price-squeeze-as-north-america-orders-seen-next-year/",
     "domain": "hellenicshippingnews.com"
    }
   ],
   "region": "캐나다 (북미)",
   "category": "oil_commodity",
   "summary": "북미 지역의 LNG 운반선 발주가 내년에 예상되는 가운데, 한국 조선사들이 가격 경쟁 심화로 압박을 받고 있다.",
   "impact_industries": [
    "energy",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 10,
    "energy": 60,
    "manufacturing": 70,
    "chemical": 30
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-11T02:52:02.018451+00:00",
   "insight": {
    "why_it_matters": "LNG 운반선은 글로벌 에너지 공급망의 핵심이며, 한국 조선 산업의 주요 수익원이다. 가격 압박은 수익성 악화 및 수주 경쟁 심화를 의미한다.",
    "business_impact": "한국 조선사들의 수익성 감소 및 신규 수주 마진 하락. 장기적으로는 LNG 운반선 운임에도 영향을 미쳐 에너지 수입 기업의 물류 비용에 간접적 영향 가능.",
    "recommended_actions": [
     "LNG 운반선 시장 동향 및 경쟁사 가격 전략 모니터링.",
     "수주 전략 재검토 및 고부가가치 기술 개발 투자 강화.",
     "에너지 기업은 LNG 운반선 운임 변동성 주시 및 장기 운송 계약 조건 검토."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-006",
   "lat": 43.6667,
   "lng": -79.4167,
   "title": "캐나다 온타리오주, 전기 자전거·스쿠터 배터리 개조 금지 추진",
   "source": "lfpress.com",
   "sources": [
    {
     "url": "https://lfpress.com/news/queens-park/ontario-eyes-ban-on-e-bike-e-scooter-battery-modifications-to-prevent-fires/",
     "domain": "lfpress.com"
    }
   ],
   "region": "캐나다 온타리오주",
   "category": "supply_chain",
   "summary": "캐나다 온타리오주가 화재 예방을 위해 전기 자전거 및 전기 스쿠터 배터리 개조를 금지하는 방안을 검토 중이다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 40,
    "consumer": 60,
    "energy": 10,
    "manufacturing": 50,
    "chemical": 20
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-11T02:52:02.018451+00:00",
   "insight": {
    "why_it_matters": "이는 전기 자전거 및 스쿠터 제조업체와 수입업체에 직접적인 영향을 미치며, 제품 설계, 생산, 유통 과정에서 새로운 규제 준수 요구사항을 발생시킨다.",
    "business_impact": "관련 제품을 캐나다에 수출하는 한국 기업은 제품 사양 변경, 인증 절차 강화, 재고 관리 등 추가 비용 및 시간 소요가 발생할 수 있다.",
    "recommended_actions": [
     "온타리오주의 배터리 규제 법안 발효 여부 및 세부 내용 면밀히 확인.",
     "관련 제품의 설계 및 제조 공정에서 규제 준수 여부 사전 검토.",
     "캐나다 시장 수출 전략 및 제품 포트폴리오 조정 가능성 분석.",
     "배터리 안전성 강화 기술 개발 및 적용 검토."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-005",
   "lat": -26.9167,
   "lng": -65.2833,
   "title": "아르헨티나, 영국 유전 탐사 중단 요구하며 국제해양법재판소에 제소",
   "source": "buenosairesherald.com",
   "sources": [
    {
     "url": "https://buenosairesherald.com/world/international-relations/malvinas-argentina-asks-law-of-the-sea-tribunal-to-halt-uk-oil-exploration",
     "domain": "buenosairesherald.com"
    }
   ],
   "region": "말비나스 (포클랜드)",
   "category": "oil_commodity",
   "summary": "아르헨티나가 말비나스(포클랜드) 제도 인근에서 영국의 석유 탐사를 중단할 것을 요구하며 국제해양법재판소에 제소했다.",
   "impact_industries": [
    "energy",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 30,
    "consumer": 20,
    "energy": 50,
    "manufacturing": 30,
    "chemical": 40
   },
   "risk_score": 50,
   "risk_level": "medium",
   "prev_score": 50,
   "created_at": "2026-11-11T02:52:02.018451+00:00",
   "insight": {
    "why_it_matters": "남대서양의 잠재적 유전 개발에 대한 국제 분쟁은 장기적으로 해당 지역의 에너지 공급 안정성에 영향을 미칠 수 있다. 이는 국제법적 선례를 남길 수도 있다.",
    "business_impact": "당장 직접적인 영향은 적으나, 분쟁 장기화 시 해당 지역의 에너지 개발 지연 및 국제 유가에 간접적인 상승 압력으로 작용할 수 있다.",
    "recommended_actions": [
     "아르헨티나-영국 간 해양 분쟁 진행 상황 및 국제해양법재판소 결정 추이 주시.",
     "남대서양 지역의 에너지 개발 동향 및 잠재적 공급망 영향 분석.",
     "장기적인 관점에서 에너지원 다변화 및 공급처 안정성 확보 전략 검토."
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-007",
   "lat": 32.0,
   "lng": 53.0,
   "title": "이란, 프랑스 겨냥 사이버 공격 부인",
   "source": "independent.co.uk / wknofm.org",
   "sources": [
    {
     "url": "https://www.independent.co.uk/news/world/europe/france-iran-fridge-cyberattack-hack-b3081934.html",
     "domain": "independent.co.uk"
    },
    {
     "url": "https://www.wknofm.org/politics-npr-news/2026-11-09/iran-denies-it-was-behind-cyber-fridge-attacks-targeting-france",
     "domain": "wknofm.org"
    }
   ],
   "region": "이란, 프랑스",
   "category": "cyber",
   "summary": "이란이 프랑스를 겨냥한 '냉장고 사이버 공격' 배후설을 부인했다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 30,
    "consumer": 20,
    "energy": 40,
    "manufacturing": 30,
    "chemical": 20
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-11T02:52:02.018451+00:00",
   "insight": {
    "why_it_matters": "국가 간 사이버 공격은 지정학적 긴장을 고조시키고, 중요 인프라 및 산업 시스템에 대한 사이버 위협을 증가시킨다. 이는 간접적으로 공급망 안정성에 영향을 줄 수 있다.",
    "business_impact": "직접적인 영향은 낮으나, 사이버 공격이 확산될 경우 중요 산업 시설 또는 물류 시스템 마비로 이어질 수 있다. 기업의 사이버 보안 투자 및 대비 필요성 증대.",
    "recommended_actions": [
     "국가 간 사이버 공격 동향 및 지정학적 긴장 고조 여부 모니터링.",
     "자사 및 협력사의 사이버 보안 시스템 점검 및 강화.",
     "공급망 내 사이버 보안 취약점 분석 및 대응 계획 수립.",
     "비상 상황 발생 시 데이터 백업 및 복구 절차 점검."
    ],
    "confidence": 0.75
   }
  }
 ]
};
