// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-27T05:07:00.766866+00:00",
 "window": {
  "hours": 24,
  "files": 94,
  "until": "2026-11-27T05:15:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash-lite",
 "stats": {
  "matched_events": 430,
  "by_category": {
   "sanctions": 127,
   "maritime": 145,
   "oil_commodity": 69,
   "cyber": 27,
   "supply_chain": 45,
   "fx_macro": 17
  },
  "top_places": [
   "Saudi Arabia",
   "United States",
   "China",
   "Thailand",
   "India",
   "Iran",
   "Ukraine",
   "Australia"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-003",
   "lat": 35.0,
   "lng": 105.0,
   "title": "미국의 대중국 반도체 수출 통제 강화 및 엔비디아의 대응",
   "source": "bankingnews.gr / ventureburn.com / complianceweek.com",
   "sources": [
    {
     "url": "https://www.bankingnews.gr/ta-paraksena/articles/913395/secret-romance-between-nvidia-and-super-micro-executives-emerges-amid-500m-fbi-chip-probe%20title=",
     "domain": "bankingnews.gr"
    },
    {
     "url": "https://ventureburn.com/nvidia-halts-ai-chip-shipments-southeast-asia-us-china-curbs/",
     "domain": "ventureburn.com"
    },
    {
     "url": "https://www.complianceweek.com/risk-management/nvidia-clamps-down-on-export-rules-with-new-national-security-and-export-control-oversight-committee/",
     "domain": "complianceweek.com"
    }
   ],
   "region": "China",
   "category": "supply_chain",
   "summary": "미국이 중국에 대한 반도체 수출 통제를 강화하면서 엔비디아가 관련 규제를 준수하기 위한 새로운 위원회를 설립했습니다. 이는 중국의 AI 기술 개발 및 관련 산업에 영향을 미칠 것으로 예상됩니다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 90,
    "automotive": 60,
    "consumer": 70,
    "energy": 10,
    "manufacturing": 60,
    "chemical": 10
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-27T05:07:00.766866+00:00",
   "insight": {
    "why_it_matters": "미국의 첨단 기술 수출 통제는 글로벌 반도체 공급망 재편을 가속화하고, AI 기술 발전 속도에 영향을 미칩니다. 이는 관련 기업들의 연구개발 및 생산 전략에 중대한 변화를 요구합니다.",
    "business_impact": "중국 시장 의존도가 높은 기업은 매출 감소 및 시장 접근 제한에 직면할 수 있습니다. 또한, 대체 공급처 확보 및 기술 개발에 대한 투자가 필요합니다.",
    "recommended_actions": [
     "미국 및 중국의 첨단 기술 수출 통제 정책 변화 지속적 모니터링",
     "핵심 부품 공급망의 지정학적 리스크 평가 및 대체 공급선 확보 방안 마련",
     "AI 및 반도체 기술 관련 R&D 투자 전략 재검토"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-004",
   "lat": 13.6833,
   "lng": 100.583,
   "title": "태국 방콕 석유 시설 폭발 및 구리 절도 사건",
   "source": "dungogchronicle.com.au / asiaone.com / voiceofvienna.org",
   "sources": [
    {
     "url": "https://www.dungogchronicle.com.au/story/9398725/three-men-charged-after-months-long-copper-theft-investigation/",
     "domain": "dungogchronicle.com.au"
    },
    {
     "url": "https://www.asiaone.com/asia/least-9-injured-large-explosion-and-fire-major-oil-facility-bangkok",
     "domain": "asiaone.com"
    },
    {
     "url": "https://voiceofvienna.org/bangkok-oil-facility-explosion-2/",
     "domain": "voiceofvienna.org"
    }
   ],
   "region": "Thailand",
   "category": "oil_commodity",
   "summary": "태국 방콕의 석유 시설에서 대규모 폭발 및 화재가 발생했으며, 별도로 구리 절도 사건도 보고되었습니다. 이는 에너지 공급망의 불안정성과 산업 시설의 보안 문제에 대한 우려를 제기합니다.",
   "impact_industries": [
    "energy",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 15,
    "consumer": 20,
    "energy": 80,
    "manufacturing": 40,
    "chemical": 30
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-27T05:07:00.766866+00:00",
   "insight": {
    "why_it_matters": "주요 에너지 시설의 사고는 국제 유가 변동성을 높이고 에너지 공급에 차질을 줄 수 있습니다. 또한, 산업 시설의 보안 문제는 생산 활동 전반에 영향을 미칩니다.",
    "business_impact": "에너지 가격 상승으로 생산 비용이 증가하고, 공급망 차질로 인한 납기 지연이 발생할 수 있습니다. 원자재 도난은 직접적인 재산 손실로 이어집니다.",
    "recommended_actions": [
     "태국 및 주변 지역의 에너지 공급망 동향 및 안전 규제 강화 여부 확인",
     "주요 에너지 공급처의 안정성 평가 및 비상 계획 수립",
     "산업 시설의 보안 강화 조치 검토"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-005",
   "lat": 24.6408,
   "lng": 46.7728,
   "title": "홍해 지역 긴장 고조: 후티 반군의 사우디아라비아 석유 시설 공격",
   "source": "kenyastar.com / arabnews.com",
   "sources": [
    {
     "url": "http://www.kenyastar.com/news/279454915/houthis-attack-saudi-arabia-red-sea-port-coalition-intercepts-drone-near-jeddah-missiles-over-riyadh",
     "domain": "kenyastar.com"
    },
    {
     "url": "https://www.arabnews.com/saudi-arabia/houthi-attack-on-saudi-arabias-jazan-refinery-kills-nepali-worker-3014153",
     "domain": "arabnews.com"
    }
   ],
   "region": "Saudi Arabia",
   "category": "maritime",
   "summary": "예멘의 후티 반군이 사우디아라비아의 홍해 연안 석유 시설 및 정유 공장을 공격했습니다. 이 공격으로 사상자가 발생했으며, 홍해 항로의 안전에 대한 우려가 커지고 있습니다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 15,
    "consumer": 20,
    "energy": 70,
    "manufacturing": 25,
    "chemical": 20
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-27T05:07:00.766866+00:00",
   "insight": {
    "why_it_matters": "홍해는 세계 해상 물동량의 상당 부분을 차지하는 주요 항로입니다. 이 지역의 불안정은 해상 운송 비용 증가 및 공급망 차질을 야기하며, 국제 유가에도 영향을 미칩니다.",
    "business_impact": "해상 운송 지연 및 비용 상승으로 물류 부담이 가중될 수 있습니다. 에너지 공급망의 불안정성은 원자재 가격 상승으로 이어져 생산 비용 증가를 초래합니다.",
    "recommended_actions": [
     "홍해 항로 이용 시 운송 경로 및 보험 조건 재검토",
     "에너지 공급망의 지정학적 리스크 평가 및 대체 공급선 확보 방안 모색",
     "중동 지역의 지정학적 동향 및 관련 제재 변화 주시"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-007",
   "lat": 35.75,
   "lng": 51.5148,
   "title": "미국-이란 긴장 고조 및 러시아 칼리닌그라드 유조선 관련 사건",
   "source": "cnbc.com / peakoil.com",
   "sources": [
    {
     "url": "https://www.cnbc.com/2026/11/27/us-iran-war-trump-hormuz-italian-killed-trump.html",
     "domain": "cnbc.com"
    },
    {
     "url": "https://peakoil.com/publicpolicy/france-releases-stateless-tanker-df-peak-after-1m-fine",
     "domain": "peakoil.com"
    }
   ],
   "region": "Global",
   "category": "maritime",
   "summary": "미국과 이란 간의 긴장 고조 가능성이 언급되었으며, 러시아 칼리닌그라드에서는 유조선이 석방되었습니다. 이는 국제 유류 운송 및 지정학적 리스크에 영향을 미칠 수 있습니다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 5,
    "automotive": 10,
    "consumer": 10,
    "energy": 60,
    "manufacturing": 15,
    "chemical": 15
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-27T05:07:00.766866+00:00",
   "insight": {
    "why_it_matters": "미국과 이란의 관계는 국제 유가 및 중동 지역의 안보에 큰 영향을 미칩니다. 러시아 관련 사건은 유럽 에너지 시장의 안정성과도 연관될 수 있습니다.",
    "business_impact": "국제 유가 변동성이 커질 수 있으며, 특정 지역의 에너지 공급망에 차질이 발생할 가능성이 있습니다. 이는 원자재 가격 상승으로 이어져 기업의 비용 부담을 늘릴 수 있습니다.",
    "recommended_actions": [
     "미국-이란 관계 및 중동 지역 지정학적 동향 모니터링 강화",
     "러시아 및 유럽 에너지 시장 동향 주시",
     "국제 유가 변동성에 대비한 재무 리스크 관리 강화"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-008",
   "lat": 39.828175,
   "lng": -98.5795,
   "title": "국제형사재판소, 미국 무역 제재, 이스라엘-하마스 분쟁, 콩고 수출 금지 등 지정학적 및 제재 관련 이슈",
   "source": "channelnewsasia.com / gsmarena.com / freethoughtblogs.com / canadianminingjourna",
   "sources": [
    {
     "url": "https://www.channelnewsasia.com/watch/icc-acting-prosecutor-speaks-cna-ahead-dutertes-crimes-against-humanity-trial-6586321",
     "domain": "channelnewsasia.com"
    },
    {
     "url": "https://www.gsmarena.com/the_us_will_hit_china_and_13_other_trading_partners_with_fresh_tariffs_affecting_apple-news-75659.php",
     "domain": "gsmarena.com"
    },
    {
     "url": "https://freethoughtblogs.com/singham/2026/11/26/hopeful-sign-by-new-congresspersons/",
     "domain": "freethoughtblogs.com"
    },
    {
     "url": "https://www.canadianminingjournal.com/news/cobalt-jumps-33-ahead-of-congo-export-ban/",
     "domain": "canadianminingjournal.com"
    }
   ],
   "region": "Global",
   "category": "sanctions",
   "summary": "국제형사재판소의 인권 재판 관련 언급, 미국의 무역 파트너에 대한 추가 관세 부과, 가자 지구 분쟁, 콩고의 코발트 수출 금지 등 다양한 지정학적 및 제재 관련 이슈가 발생했습니다. 이는 국제 무역 및 원자재 공급망에 영향을 미칠 수 있습니다.",
   "impact_industries": [
    "consumer",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 30,
    "consumer": 40,
    "energy": 30,
    "manufacturing": 30,
    "chemical": 50
   },
   "risk_score": 50,
   "risk_level": "medium",
   "prev_score": 50,
   "created_at": "2026-11-27T05:07:00.766866+00:00",
   "insight": {
    "why_it_matters": "국제 분쟁, 무역 제재, 특정 자원 수출 금지 등은 글로벌 공급망의 불안정성을 증대시키고 원자재 가격 변동성을 키웁니다. 특히 코발트와 같은 핵심 광물 공급망에 직접적인 영향을 미칩니다.",
    "business_impact": "원자재 조달 비용이 상승하고 공급망 차질이 발생할 수 있습니다. 또한, 특정 국가와의 무역 관계에 불확실성이 커져 사업 운영에 어려움을 겪을 수 있습니다.",
    "recommended_actions": [
     "주요 원자재(특히 코발트) 공급망의 지정학적 리스크 평가 및 대체 공급선 확보",
     "미국 및 주요 교역국의 무역 정책 및 제재 동향 모니터링 강화",
     "분쟁 지역 및 관련 국가와의 사업 리스크 재평가"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-002",
   "lat": 55.3333,
   "lng": 3.0,
   "title": "베트남, 중국, 태국 등 아시아 지역의 지정학적 및 경제적 불안정성",
   "source": "yorkpress.co.uk / wtvbam.com / livenews.co.nz / nakedcapitalism.com",
   "sources": [
    {
     "url": "https://www.yorkpress.co.uk/news/national/26767549.labour-mps-warn-burnham-not-approve-rosebank-oil-field/",
     "domain": "yorkpress.co.uk"
    },
    {
     "url": "https://wtvbam.com/2026/11/26/the-search-for-vietnams-stolen-pets-at-wet-markets-and-slaughterhouses/",
     "domain": "wtvbam.com"
    },
    {
     "url": "https://livenews.co.nz/2026/11/27/rooted-in-the-source-markets-poetic-and-picturesque-zhejiang-makes-its-move-into-southeast-asia/",
     "domain": "livenews.co.nz"
    },
    {
     "url": "https://www.nakedcapitalism.com/2026/11/the-nvidia-affair-shows-that-the-ruling-oligarchy-controls-the-market.html",
     "domain": "nakedcapitalism.com"
    }
   ],
   "region": "Asia",
   "category": "fx_macro",
   "summary": "베트남의 애완동물 시장 및 도축장 관련 이슈, 중국의 기술 기업 관련 규제, 태국의 지정학적 불안정성 등 아시아 지역 전반에 걸쳐 경제 및 지정학적 리스크가 부각되고 있습니다. 특히 중국의 기술 시장 규제는 글로벌 공급망에 영향을 미칠 수 있습니다.",
   "impact_industries": [
    "semiconductor"
   ],
   "industry_scores": {
    "semiconductor": 40,
    "automotive": 20,
    "consumer": 30,
    "energy": 10,
    "manufacturing": 30,
    "chemical": 10
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-27T05:07:00.766866+00:00",
   "insight": {
    "why_it_matters": "아시아 지역의 지정학적 긴장 고조와 경제 정책 변화는 글로벌 공급망 및 투자 환경에 직접적인 영향을 미칩니다. 특히 중국의 기술 규제는 반도체 및 첨단 기술 분야에 큰 파장을 일으킬 수 있습니다.",
    "business_impact": "아시아 지역 내 생산 및 판매 활동에 차질이 발생할 수 있으며, 원자재 조달 및 부품 공급망의 불안정성이 증가할 수 있습니다. 환율 변동성 또한 커질 수 있습니다.",
    "recommended_actions": [
     "아시아 지역 내 정치·경제 동향 및 규제 변화 주시",
     "공급망 다변화 전략 검토 및 실행",
     "주요 거래 국가의 환율 변동성 모니터링 강화"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-006",
   "lat": 29.0744,
   "lng": 31.0978,
   "title": "이집트 및 이라크 해상 물류 및 연료 밀수 관련 사건",
   "source": "foxnews.com / maritime-executive.com",
   "sources": [
    {
     "url": "https://www.foxnews.com/world/egypt-detains-driver-suspected-causing-cairo-fuel-tanker-crash-inferno-left-31-dead",
     "domain": "foxnews.com"
    },
    {
     "url": "https://maritime-executive.com/article/iraqi-navy-seizes-tugboats-suspected-of-fuel-smuggling",
     "domain": "maritime-executive.com"
    }
   ],
   "region": "Middle East",
   "category": "maritime",
   "summary": "이집트에서는 연료 유조선 충돌 사고로 다수의 사상자가 발생했으며, 이라크에서는 해군이 연료 밀수 혐의로 예인선을 나포했습니다. 이는 해상 운송 안전 및 불법 활동 단속의 중요성을 보여줍니다.",
   "impact_industries": [],
   "industry_scores": {
    "semiconductor": 5,
    "automotive": 10,
    "consumer": 15,
    "energy": 30,
    "manufacturing": 15,
    "chemical": 10
   },
   "risk_score": 30,
   "risk_level": "low",
   "prev_score": 30,
   "created_at": "2026-11-27T05:07:00.766866+00:00",
   "insight": {
    "why_it_matters": "해상 운송 사고 및 불법 활동은 물류망의 안정성을 저해하고, 에너지 자원의 불법 유통을 야기할 수 있습니다. 이는 관련 산업의 운영 효율성과 안전에 영향을 미칩니다.",
    "business_impact": "해상 운송 지연 및 보험료 상승 가능성이 있으며, 연료 밀수는 에너지 시장의 왜곡을 초래할 수 있습니다. 안전 규정 미준수 시 사고 위험이 증가합니다.",
    "recommended_actions": [
     "주요 해상 운송 경로의 안전 규정 및 최신 동향 파악",
     "연료 및 원자재 공급망의 합법성 및 투명성 점검 강화",
     "해상 운송 관련 보험 조건 및 보상 범위 확인"
    ],
    "confidence": 0.6
   }
  },
  {
   "id": "LIVE-001",
   "lat": -25.0,
   "lng": 135.0,
   "title": "호주, 제재 감시 기구의 미흡한 집행력 비판",
   "source": "theleader.com.au / redlandcitybulletin.com.au",
   "sources": [
    {
     "url": "https://www.theleader.com.au/story/9399213/not-good-enough-weak-enforcement-of-sanctions-lashed/",
     "domain": "theleader.com.au"
    },
    {
     "url": "https://www.redlandcitybulletin.com.au/story/9399213/scathing-report-slams-toothless-sanctions-watchdog/",
     "domain": "redlandcitybulletin.com.au"
    }
   ],
   "region": "Australia",
   "category": "sanctions",
   "summary": "호주에서 제재 감시 기구의 집행력이 약하다는 비판이 제기되었습니다. 이는 제재의 효과성을 약화시킬 수 있다는 우려를 낳고 있습니다.",
   "impact_industries": [],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 10,
    "consumer": 15,
    "energy": 10,
    "manufacturing": 15,
    "chemical": 10
   },
   "risk_score": 15,
   "risk_level": "low",
   "prev_score": 15,
   "created_at": "2026-11-27T05:07:00.766866+00:00",
   "insight": {
    "why_it_matters": "제재의 효과적인 집행은 국제 규범 준수 및 지정학적 안정 유지에 중요합니다. 집행력 약화는 제재 대상 국가의 규범 위반을 조장할 수 있습니다.",
    "business_impact": "제재 회피 시도가 증가하여 기업의 컴플라이언스 부담이 늘어나고, 특정 시장 접근에 불확실성이 커질 수 있습니다.",
    "recommended_actions": [
     "호주 및 관련 국가의 제재 관련 법규 및 집행 동향 모니터링 강화",
     "제재 대상 기업과의 거래 위험도 재평가",
     "공급망 내 제재 준수 여부 점검 강화"
    ],
    "confidence": 0.6
   }
  }
 ]
};
