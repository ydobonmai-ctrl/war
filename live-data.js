// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-28T04:45:59.718955+00:00",
 "window": {
  "hours": 24,
  "files": 95,
  "until": "2026-11-28T04:45:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 443,
  "by_category": {
   "maritime": 198,
   "sanctions": 92,
   "oil_commodity": 60,
   "cyber": 25,
   "fx_macro": 28,
   "supply_chain": 40
  },
  "top_places": [
   "United States",
   "Iran",
   "Saudi Arabia",
   "China",
   "Yemen",
   "Russia",
   "Israel",
   "Australia"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-002",
   "lat": 32.0,
   "lng": 53.0,
   "title": "중동 불안정 및 OPEC 관련 이슈로 인한 국제 유가 변동성 심화",
   "source": "rigzone.com / zerohedge.com / businessworld.in / thedailystar.net",
   "sources": [
    {
     "url": "https://www.rigzone.com/news/wire/oil_swings_with_rising_me_attacks_in_focus-27-nov-2026-185191-article/",
     "domain": "rigzone.com"
    },
    {
     "url": "https://www.zerohedge.com/energy/us-lobbied-iraq-venezuela-exit-opec-sparking-saudi-intervention",
     "domain": "zerohedge.com"
    },
    {
     "url": "https://www.businessworld.in/article/oil-prices-fall-despite-middle-east-supply-disruption-concerns-brent-ends-week-3-1-higher-635591",
     "domain": "businessworld.in"
    },
    {
     "url": "https://www.thedailystar.net/news/crime-justice/news/crude-bombs-explode-parts-dhaka-4334721",
     "domain": "thedailystar.net"
    }
   ],
   "region": "중동, 방글라데시",
   "category": "oil_commodity",
   "summary": "중동 지역의 공격 증가 및 미국이 이라크, 베네수엘라의 OPEC 탈퇴를 로비했다는 소식 등 지정학적 요인으로 국제 유가가 불안정한 움직임을 보이고 있습니다. 방글라데시에서는 원유 관련 폭발 사건도 발생했습니다.",
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
   "created_at": "2026-11-28T04:45:59.718955+00:00",
   "insight": {
    "why_it_matters": "유가 변동성은 제조 및 운송 비용에 직접적인 영향을 미치며, 특히 에너지 집약 산업과 석유화학 산업에 큰 부담을 줄 수 있습니다.",
    "business_impact": "생산 비용 증가, 운송 비용 상승, 제품 가격 경쟁력 약화, 수익성 악화가 우려됩니다.",
    "recommended_actions": [
     "유가 헤징 전략 검토 및 실행",
     "에너지 효율 개선을 위한 투자 계획 수립",
     "원자재 구매 계약 조건 재검토 및 장기 공급 계약 고려",
     "물류 비용 상승에 대비한 운송 경로 및 방식 최적화"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-003",
   "lat": 35.0,
   "lng": 105.0,
   "title": "미국-중국 기술 제재 강화 속 엔비디아 서버 불법 거래 및 공급망 교란",
   "source": "memeburn.com / nypost.com",
   "sources": [
    {
     "url": "https://memeburn.com/nvidia-b300-remote-access-rule-buyers/",
     "domain": "memeburn.com"
    },
    {
     "url": "https://nypost.com/2026/11/27/tech/chinese-ads-selling-banned-nvidia-servers-for-3m-as-jensen-huang-scandal-chokes-supply-market-is-crazy/",
     "domain": "nypost.com"
    }
   ],
   "region": "중국",
   "category": "sanctions",
   "summary": "미국이 엔비디아 B300 원격 접근 규칙을 강화하고 중국 내에서 금지된 엔비디아 서버가 불법적으로 거래되는 등 미중 기술 제재가 심화되며 관련 공급망에 교란이 발생하고 있습니다.",
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
    "energy": 10,
    "manufacturing": 60,
    "chemical": 10
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-28T04:45:59.718955+00:00",
   "insight": {
    "why_it_matters": "미중 기술 제재는 첨단 반도체 공급망에 직접적인 영향을 미치며, 한국 기업의 기술 접근성 및 중국 시장 전략에 중대한 변화를 요구할 수 있습니다.",
    "business_impact": "특정 반도체 부품 조달의 어려움, 생산 비용 증가, 중국 시장 내 경쟁 환경 변화, 기술 개발 로드맵 수정 필요성이 발생할 수 있습니다.",
    "recommended_actions": [
     "엔비디아 및 관련 첨단 반도체 부품의 재고 수준 및 대체 공급처 확보 방안 검토",
     "미중 기술 제재 동향을 면밀히 모니터링하고 법률 전문가와 상담",
     "중국 시장 내 사업 전략 및 기술 도입 계획 재평가",
     "R&D 투자 방향을 다변화하여 특정 기술 의존도 감소"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-004",
   "lat": 13.5167,
   "lng": 44.4333,
   "title": "후티 반군 공격 지속 및 중동 해상 안보 위협 고조",
   "source": "english.aawsat.com / samaa.tv / arynews.tv / thenationalnews.com",
   "sources": [
    {
     "url": "https://english.aawsat.com/gulf/5346437-coalition-steps-strikes-weaken-houthi-military-capabilities",
     "domain": "english.aawsat.com"
    },
    {
     "url": "https://www.samaa.tv/2087361149-makkah-defence-agreement-committee-condemns-houthi-attacks-on-saudi-arabia-dar-pakistan-news",
     "domain": "samaa.tv"
    },
    {
     "url": "https://arynews.tv/regional-and-international-condemnations-mount-after-houthi-strikes-on-jazan-refinery-and-port",
     "domain": "arynews.tv"
    },
    {
     "url": "https://www.thenationalnews.com/news/mena/2026/11/27/saudi-arabia-shoots-down-90-per-cent-of-houthi-missiles-in-five-month-barrage/",
     "domain": "thenationalnews.com"
    }
   ],
   "region": "예멘, 사우디아라비아, 바레인",
   "category": "maritime",
   "summary": "후티 반군의 공격이 지속되고 사우디아라비아의 정유 시설 및 항구에 대한 공격이 국제적으로 비난받는 등 중동 지역의 해상 안보 위협이 고조되고 있습니다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 40,
    "consumer": 40,
    "energy": 80,
    "manufacturing": 50,
    "chemical": 60
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-28T04:45:59.718955+00:00",
   "insight": {
    "why_it_matters": "홍해 및 중동 해상 경로는 전 세계 물류의 핵심 동맥이며, 후티 반군의 공격은 해상 운송 비용 및 보험료 상승, 운송 지연을 야기하여 글로벌 공급망에 큰 부담을 줍니다.",
    "business_impact": "해상 운임 및 보험료 급등, 운송 시간 증가, 재고 관리의 어려움, 에너지 및 원자재 가격 상승 압력이 예상됩니다.",
    "recommended_actions": [
     "홍해 및 아덴만 통과 선박의 안전성 평가 및 대체 항로(희망봉 우회 등) 검토",
     "해상 보험 커버리지 및 비용 변화에 대한 주기적인 확인",
     "물류 파트너와의 긴밀한 소통을 통해 운송 지연 가능성에 대비",
     "중동 지역 정세 변화에 대한 지속적인 모니터링"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-005",
   "lat": 39.9289,
   "lng": 116.388,
   "title": "중국, 자동차 금지 법안 통과 임박으로 자동차 업계에 영향 예상",
   "source": "naturalnews.com",
   "sources": [
    {
     "url": "https://www.naturalnews.com/2026-11-27-china-car-ban-bill-nears-passage-deal-automakers.html",
     "domain": "naturalnews.com"
    }
   ],
   "region": "중국",
   "category": "supply_chain",
   "summary": "중국에서 특정 자동차에 대한 금지 법안 통과가 임박하여 자동차 제조업체들이 영향을 받을 것으로 예상됩니다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 80,
    "consumer": 50,
    "energy": 20,
    "manufacturing": 60,
    "chemical": 30
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-28T04:45:59.718955+00:00",
   "insight": {
    "why_it_matters": "중국은 세계 최대 자동차 시장으로, 관련 법안은 한국 자동차 제조사의 중국 시장 전략 및 생산 계획에 직접적인 영향을 미칠 수 있습니다.",
    "business_impact": "중국 시장 내 판매량 감소, 생산 라인 조정 필요, 현지 파트너십 재검토, 규제 준수 비용 증가가 발생할 수 있습니다.",
    "recommended_actions": [
     "중국 자동차 금지 법안의 구체적인 내용 및 적용 범위 파악",
     "중국 시장 내 판매 및 생산 계획에 대한 시나리오 분석",
     "현지 법률 전문가와 협력하여 규제 준수 방안 마련",
     "중국 시장 외 다른 성장 시장에 대한 투자 및 전략 강화"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-001",
   "lat": 25.4489,
   "lng": 57.7939,
   "title": "미국, 이란 해상 봉쇄 위반 선박 제지 및 중동 해상 긴장 고조",
   "source": "winnipegfreepress.com / timesleader.com / tribune.com.pk / aljazeera.com / artic",
   "sources": [
    {
     "url": "https://www.winnipegfreepress.com/world/2026/11/27/us-military-says-it-disabled-another-ship-that-tried-to-breach-naval-blockade-on-iranian-ports",
     "domain": "winnipegfreepress.com"
    },
    {
     "url": "https://www.timesleader.com/news/1766645/us-military-says-it-has-disabled-another-ship-trying-to-breach-its-blockade-and-other-mideast-news",
     "domain": "timesleader.com"
    },
    {
     "url": "https://tribune.com.pk/story/2642725/us-iran-tensions-flare-over-maritime-blockade",
     "domain": "tribune.com.pk"
    },
    {
     "url": "https://www.aljazeera.com/news/2026/11/27/us-military-says-it-disabled-merchant-ship-trying-to-breach-iran-blockade",
     "domain": "aljazeera.com"
    },
    {
     "url": "https://article.wn.com/view/2026/11/28/US_military_fires_on_ship_violating_Iran_blockade/",
     "domain": "article.wn.com"
    }
   ],
   "region": "중동, 흑해",
   "category": "maritime",
   "summary": "미국 군이 이란 해상 봉쇄를 위반하려던 선박을 제지하고 발포하는 사건이 발생하며 중동 해상 긴장이 고조되고 있습니다.",
   "impact_industries": [
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 30,
    "consumer": 30,
    "energy": 70,
    "manufacturing": 40,
    "chemical": 50
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-28T04:45:59.718955+00:00",
   "insight": {
    "why_it_matters": "중동 지역은 주요 에너지 및 해상 운송 경로로, 긴장 고조는 유가 상승 및 해상 운임 변동성 증가로 이어질 수 있습니다.",
    "business_impact": "해상 운송 비용 증가, 운송 지연 가능성, 유가 변동성 심화로 인한 에너지 비용 상승이 예상됩니다.",
    "recommended_actions": [
     "중동 및 흑해 항로를 이용하는 선박의 운항 계획 재검토 및 대체 경로 고려",
     "유가 변동성 심화에 대비하여 에너지 구매 전략 점검",
     "해상 보험 조건 및 비용 변화 모니터링",
     "물류 파트너와 비상 계획 논의"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-006",
   "lat": 1.0,
   "lng": 38.0,
   "title": "케냐 항공, 유류비 상승 및 부품 부족으로 수익 경고",
   "source": "standardmedia.co.ke",
   "sources": [
    {
     "url": "https://www.standardmedia.co.ke/business/business/article/2001563208/kq-sounds-2026-profit-warning-on-rising-fuel-costs-parts-shortages",
     "domain": "standardmedia.co.ke"
    }
   ],
   "region": "케냐",
   "category": "supply_chain",
   "summary": "케냐 항공이 유류비 상승과 부품 부족으로 인해 수익 경고를 발표하며, 항공 운송 산업 전반의 공급망 및 비용 압박을 시사했습니다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 50,
    "consumer": 40,
    "energy": 70,
    "manufacturing": 60,
    "chemical": 40
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-28T04:45:59.718955+00:00",
   "insight": {
    "why_it_matters": "항공 운송 비용 상승과 부품 조달의 어려움은 글로벌 공급망에 의존하는 한국 제조 기업에 직접적인 영향을 미치며, 특히 고부가가치 제품 운송에 부담을 줄 수 있습니다.",
    "business_impact": "항공 운송료 증가, 부품 조달 지연으로 인한 생산 차질, 재고 관리의 어려움, 전반적인 운영 비용 상승이 예상됩니다.",
    "recommended_actions": [
     "항공 운송 의존도를 재평가하고 해상 운송 등 대체 운송 수단 검토",
     "주요 부품의 재고 수준을 최적화하고 공급망 다변화 전략 수립",
     "유류비 변동에 대비한 운송 계약 조건 재협상",
     "글로벌 물류 시장 동향 및 항공사 수익성 변화 모니터링"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-007",
   "lat": 43.0,
   "lng": 35.0,
   "title": "흑해 등 분쟁 해역에서 인도 선박 136척 영향 받아",
   "source": "business-standard.com",
   "sources": [
    {
     "url": "https://www.business-standard.com/economy/news/136-vessels-of-indian-interest-impacted-in-troubled-waters-since-march-126112701185_1.html",
     "domain": "business-standard.com"
    }
   ],
   "region": "흑해",
   "category": "maritime",
   "summary": "지난 3월 1일 이후 흑해 등 분쟁 해역에서 인도 국적 선박 136척이 영향을 받았으며, 이는 해당 해역의 해상 운송 리스크가 지속되고 있음을 시사합니다.",
   "impact_industries": [
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 30,
    "consumer": 30,
    "energy": 50,
    "manufacturing": 40,
    "chemical": 40
   },
   "risk_score": 50,
   "risk_level": "medium",
   "prev_score": 50,
   "created_at": "2026-11-28T04:45:59.718955+00:00",
   "insight": {
    "why_it_matters": "흑해는 유럽과 아시아를 잇는 중요한 해상 통로 중 하나로, 해당 지역의 불안정은 해상 운송 비용 증가 및 운송 지연을 야기하여 글로벌 공급망에 영향을 미칠 수 있습니다.",
    "business_impact": "흑해 항로를 이용하는 물류 비용 증가, 운송 지연, 보험료 상승, 대체 경로 모색 필요성이 발생할 수 있습니다.",
    "recommended_actions": [
     "흑해 항로를 이용하는 물류 계획 재검토 및 대체 경로 확보 방안 마련",
     "해상 보험 조건 및 비용 변화에 대한 주기적인 확인",
     "해당 지역의 지정학적 리스크 변화에 대한 지속적인 모니터링",
     "물류 파트너와 비상 계획 논의"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-008",
   "lat": 49.0,
   "lng": 32.0,
   "title": "러시아 선박, 지중해에서 은신하며 해상 활동 변화 시사",
   "source": "maritime-executive.com",
   "sources": [
    {
     "url": "https://maritime-executive.com/article/russian-ships-go-into-hiding-in-the-mediterranean",
     "domain": "maritime-executive.com"
    }
   ],
   "region": "지중해, 우크라이나",
   "category": "maritime",
   "summary": "러시아 선박들이 지중해에서 은신하는 움직임을 보이며, 우크라이나 전쟁과 관련된 해상 활동 및 안보 환경의 변화를 시사합니다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 20,
    "energy": 40,
    "manufacturing": 30,
    "chemical": 30
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-28T04:45:59.718955+00:00",
   "insight": {
    "why_it_matters": "지중해는 유럽과 아시아를 잇는 주요 해상 통로이며, 러시아 선박의 비정상적인 활동은 해당 지역의 해상 안보 불안정성을 높여 해상 운송에 간접적인 영향을 미칠 수 있습니다.",
    "business_impact": "지중해 통과 선박의 운항 리스크 증가, 보험료 상승 가능성, 운송 경로 선택의 제약이 발생할 수 있습니다.",
    "recommended_actions": [
     "지중해를 통과하는 선박의 운항 안전성 및 리스크 평가 강화",
     "러시아-우크라이나 전쟁 관련 해상 안보 동향 지속 모니터링",
     "물류 파트너와 잠재적 운송 지연 및 비용 증가에 대한 논의",
     "비상시 대체 운송 경로 및 계획 수립"
    ],
    "confidence": 0.6
   }
  }
 ]
};
