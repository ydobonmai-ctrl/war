// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-23T03:45:58.250762+00:00",
 "window": {
  "hours": 24,
  "files": 96,
  "until": "2026-11-23T03:45:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 423,
  "by_category": {
   "supply_chain": 65,
   "maritime": 229,
   "oil_commodity": 27,
   "fx_macro": 15,
   "sanctions": 68,
   "cyber": 19
  },
  "top_places": [
   "United States",
   "Russia",
   "Libya",
   "Indonesia",
   "Yemen",
   "Finland",
   "Iran",
   "Saudi Arabia"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-001",
   "lat": 32.0,
   "lng": 53.0,
   "title": "호르무즈 해협 및 오만만 해상 보안 위협 증가",
   "source": "aljazeera.com / english.globalarabnetwork.com / pakistantoday.com.pk / middleeas",
   "sources": [
    {
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/22/iran-war-live-tankers-set-ablaze-in-hormuz-as-irgc-warns-of-unrest-threat",
     "domain": "aljazeera.com"
    },
    {
     "url": "https://english.globalarabnetwork.com/2026/11/22/maritime-security-incident-reported-near-omans-strait-of-hormuz/",
     "domain": "english.globalarabnetwork.com"
    },
    {
     "url": "https://www.pakistantoday.com.pk/2026/11/22/yemens-houthis-say-they-attacked-saudi-rabigh-oil-refinery",
     "domain": "pakistantoday.com.pk"
    },
    {
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-supertankers-hit-mines-near-hormuz-iranian-navy-says",
     "domain": "middleeasteye.net"
    }
   ],
   "region": "호르무즈 해협, 오만만",
   "category": "maritime",
   "summary": "호르무즈 해협과 오만만 인근에서 유조선 피격, 기뢰 공격 등 해상 보안 사건이 보고되었으며, 예멘 후티 반군이 사우디 정유 시설을 공격했다고 주장하는 등 지역 긴장이 고조되고 있다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 50,
    "consumer": 50,
    "energy": 90,
    "manufacturing": 60,
    "chemical": 70
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-23T03:45:58.250762+00:00",
   "insight": {
    "why_it_matters": "세계 에너지 공급의 핵심 통로인 호르무즈 해협의 불안정성은 유가 상승 및 해상 운송 비용 증가로 직결되어 한국 경제 전반에 큰 영향을 미친다.",
    "business_impact": "원유 및 LNG 수입 비용 증가, 해상 운송 보험료 및 운임 상승, 공급망 지연 가능성.",
    "recommended_actions": [
     "중동발 에너지 수입선 다변화 가능성 검토",
     "해상 운송 계약의 전쟁 위험 조항 재확인",
     "유가 변동성 확대에 대비한 헤징 전략 점검",
     "선박 운항사의 비상 계획 및 보안 조치 확인"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-002",
   "lat": 39.9289,
   "lng": 116.388,
   "title": "중국, AI 반도체 기술 스파이 활동 의혹",
   "source": "business-standard.com",
   "sources": [
    {
     "url": "https://www.business-standard.com/world-news/china-s-spies-set-sights-on-ai-semiconductors-years-before-nvidia-scandal-126112200539_1.html",
     "domain": "business-standard.com"
    }
   ],
   "region": "중국",
   "category": "supply_chain",
   "summary": "중국이 AI 반도체 기술 확보를 위한 스파이 활동을 벌여왔다는 의혹이 제기되었다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 80,
    "automotive": 40,
    "consumer": 40,
    "energy": 10,
    "manufacturing": 60,
    "chemical": 10
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-23T03:45:58.250762+00:00",
   "insight": {
    "why_it_matters": "미중 기술 패권 경쟁 심화와 AI 반도체 공급망의 지정학적 리스크를 증대시켜 한국 반도체 및 첨단 산업에 직접적인 영향을 미친다.",
    "business_impact": "AI 반도체 관련 기술 유출 위험 증가, 대중국 수출 규제 강화 가능성, 공급망 재편 압력 증대.",
    "recommended_actions": [
     "AI 반도체 관련 기술 보안 강화 방안 마련",
     "미중 기술 규제 동향 및 공급망 재편 전략 면밀히 검토",
     "중국 내 R&D 및 생산 시설의 보안 점검",
     "협력사 대상 기술 보안 교육 강화"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-003",
   "lat": 32.7673,
   "lng": -89.6812,
   "title": "미국 앨라배마 인근 송유관 폭발 사고",
   "source": "zerohedge.com",
   "sources": [
    {
     "url": "http://www.zerohedge.com/political/watch-massive-pipeline-explosion-lights-alabama-night-sky-50-miles",
     "domain": "zerohedge.com"
    }
   ],
   "region": "미국",
   "category": "oil_commodity",
   "summary": "미국 앨라배마 인근에서 대규모 송유관 폭발 사고가 발생하여 야간 하늘을 밝혔다.",
   "impact_industries": [
    "automotive",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 40,
    "consumer": 30,
    "energy": 80,
    "manufacturing": 40,
    "chemical": 60
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-23T03:45:58.250762+00:00",
   "insight": {
    "why_it_matters": "미국 내 에너지 운송 인프라의 취약성을 보여주며, 해당 지역의 에너지 공급 차질 및 유가 변동성 증가로 이어질 수 있다.",
    "business_impact": "미국 내 생산 시설을 둔 기업의 에너지 비용 증가, 물류 비용 상승, 글로벌 유가에 간접적인 영향.",
    "recommended_actions": [
     "미국 내 에너지 공급망 안정성 점검",
     "유가 및 천연가스 가격 동향 모니터링",
     "에너지 비용 상승에 대비한 비상 계획 검토",
     "미국 내 생산 시설의 에너지 조달 다변화 방안 검토"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-005",
   "lat": 35.75,
   "lng": 51.5148,
   "title": "호르무즈 해협 선박 통행량 감소",
   "source": "en.apa.az",
   "sources": [
    {
     "url": "https://en.apa.az/asia/ship-traffic-through-strait-of-hormuz-drops-by-15-537778",
     "domain": "en.apa.az"
    }
   ],
   "region": "호르무즈 해협",
   "category": "maritime",
   "summary": "호르무즈 해협을 통한 선박 통행량이 감소한 것으로 나타났다.",
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
    "consumer": 60,
    "energy": 80,
    "manufacturing": 70,
    "chemical": 70
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-23T03:45:58.250762+00:00",
   "insight": {
    "why_it_matters": "세계 주요 해상 운송로의 통행량 감소는 글로벌 공급망에 병목 현상을 유발하고 운송 비용을 증가시켜 한국 기업의 물류 효율성에 직접적인 영향을 미친다.",
    "business_impact": "원자재 및 완제품 운송 지연, 해상 운임 상승, 재고 관리 부담 증가.",
    "recommended_actions": [
     "호르무즈 해협 경유 물동량 및 운송 계획 재검토",
     "대체 운송 경로 및 운송 방식 검토",
     "재고 수준 및 리드 타임 관리 강화",
     "선박 운항사의 운송 지연 대응 계획 확인"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-006",
   "lat": 3.5263,
   "lng": 98.3798,
   "title": "인도네시아 공장 화재 발생",
   "source": "wsbt.com / redditchadvertiser.co.uk / moneycontrol.com",
   "sources": [
    {
     "url": "https://wsbt.com/news/nation-world/at-least-3-dead-34-workers-missing-after-indonesian-candy-factory-blaze",
     "domain": "wsbt.com"
    },
    {
     "url": "https://www.redditchadvertiser.co.uk/news/national/26752107.indonesia-sweets-factory-fire-leaves-three-workers-dead-37-missing/",
     "domain": "redditchadvertiser.co.uk"
    },
    {
     "url": "https://www.moneycontrol.com/world/indonesia-factory-fire-24-body-bags-recovered-dozens-of-workers-still-missing-article-14086646.html",
     "domain": "moneycontrol.com"
    }
   ],
   "region": "인도네시아",
   "category": "supply_chain",
   "summary": "인도네시아의 한 공장에서 화재가 발생하여 다수의 사상자와 실종자가 발생했다.",
   "impact_industries": [
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 10,
    "consumer": 60,
    "energy": 5,
    "manufacturing": 70,
    "chemical": 30
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-23T03:45:58.250762+00:00",
   "insight": {
    "why_it_matters": "동남아시아 생산 기지를 둔 한국 기업의 공급망 안정성 점검 필요성을 제기한다.",
    "business_impact": "해당 공장에서 생산되는 제품의 공급 차질이 발생할 수 있으며, 유사 지역 내 다른 공장들의 안전 관리 강화 요구로 이어질 수 있다.",
    "recommended_actions": [
     "인도네시아 내 생산 시설 안전 점검 현황 확인",
     "주요 공급망 내 인도네시아 협력사 리스크 평가",
     "생산 차질 발생 시 대체 공급처 확보 방안 검토",
     "화재 보험 및 비상 복구 계획 재검토"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-007",
   "lat": 1.366667,
   "lng": 103.8,
   "title": "엔비디아 칩 밀수 네트워크 핵심 인물 부상",
   "source": "pragativadi.com",
   "sources": [
    {
     "url": "https://pragativadi.com/chinese-national-li-ming-emerges-as-key-figure-in-alleged-nvidia-chip-smuggling-network/",
     "domain": "pragativadi.com"
    }
   ],
   "region": "싱가포르",
   "category": "supply_chain",
   "summary": "엔비디아 칩 밀수 네트워크의 핵심 인물이 드러나면서 관련 수사가 진행 중이다.",
   "impact_industries": [
    "semiconductor",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 70,
    "automotive": 30,
    "consumer": 30,
    "energy": 10,
    "manufacturing": 50,
    "chemical": 10
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-23T03:45:58.250762+00:00",
   "insight": {
    "why_it_matters": "반도체 관련 제재 회피 시도 및 불법 유통망의 존재는 글로벌 반도체 공급망의 투명성과 안정성에 대한 우려를 높인다.",
    "business_impact": "제재 대상 국가로의 우회 수출 위험 증가, 공급망 내 불법 행위 연루 가능성, 기업 이미지 손상.",
    "recommended_actions": [
     "반도체 수출 통제 규정 준수 여부 재확인",
     "공급망 내 거래처 실사 강화 및 투명성 확보",
     "내부 컴플라이언스 시스템 점검 및 강화",
     "제재 회피 리스크 교육 실시"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-008",
   "lat": 36.1333,
   "lng": -5.45051,
   "title": "스페인, 항구 내 스크러버 폐수 배출 전면 금지",
   "source": "hellenicshippingnews.com",
   "sources": [
    {
     "url": "https://www.hellenicshippingnews.com/spain-to-ban-all-scrubber-wastewater-discharge-in-its-ports/",
     "domain": "hellenicshippingnews.com"
    }
   ],
   "region": "스페인",
   "category": "maritime",
   "summary": "스페인이 자국 항구에서 선박 스크러버 폐수 배출을 전면 금지하기로 결정했다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 40,
    "consumer": 40,
    "energy": 30,
    "manufacturing": 50,
    "chemical": 30
   },
   "risk_score": 50,
   "risk_level": "medium",
   "prev_score": 50,
   "created_at": "2026-11-23T03:45:58.250762+00:00",
   "insight": {
    "why_it_matters": "유럽 항만을 이용하는 선박의 운항 비용 증가 및 환경 규제 준수 부담을 가중시켜 해상 물류 효율성에 영향을 미친다.",
    "business_impact": "스페인 항만을 경유하는 해상 운송 비용 증가, 선박 운항사의 규제 준수 부담 증가, 친환경 선박 전환 가속화.",
    "recommended_actions": [
     "스페인 항만 이용 시 선박 운항사의 스크러버 규제 준수 여부 확인",
     "유럽 항만 환경 규제 강화 동향 모니터링",
     "운송 비용 증가 가능성에 대비한 운임 계약 재검토",
     "친환경 운송 솔루션 도입 검토"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-004",
   "lat": 60.0,
   "lng": 100.0,
   "title": "리비아 벵가지 항구에서 러시아 선박 피격",
   "source": "naroomanewsonline.com.au / bignewsnetwork.com / inquisitr.com / middleeastmonito",
   "sources": [
    {
     "url": "https://www.naroomanewsonline.com.au/story/9396102/drones-likely-cause-as-russian-ship-explodes-in-libya/",
     "domain": "naroomanewsonline.com.au"
    },
    {
     "url": "http://www.bignewsnetwork.com/news/279449310/2nd-vessel-targeted-by-explosive-laden-unmanned-boats-off-libya-benghazi-coast",
     "domain": "bignewsnetwork.com"
    },
    {
     "url": "https://www.inquisitr.com/libya-inquiry-russian-ship-explosion/",
     "domain": "inquisitr.com"
    },
    {
     "url": "https://www.middleeastmonitor.com/20261122-10-port-workers-injured-in-attack-on-russian-ship-in-libyas-benghazi/",
     "domain": "middleeastmonitor.com"
    },
    {
     "url": "https://www.aljazeera.com/news/2026/11/22/suspected-drone-strike-hits-russian-vessel-in-libya",
     "domain": "aljazeera.com"
    },
    {
     "url": "https://www.arabnews.com/middle-east/libyas-eastern-government-suspects-drone-attack-caused-explosion-on-russian-ship-at-benghazi-port-3013570",
     "domain": "arabnews.com"
    }
   ],
   "region": "리비아",
   "category": "maritime",
   "summary": "리비아 벵가지 항구에서 러시아 선박이 드론 공격을 받아 폭발했으며, 이로 인해 항만 근로자들이 부상을 입었다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 20,
    "energy": 40,
    "manufacturing": 30,
    "chemical": 20
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-23T03:45:58.250762+00:00",
   "insight": {
    "why_it_matters": "지중해 및 북아프리카 해상 물류의 불안정성을 높여 해당 지역을 통과하는 선박의 운항 리스크를 증가시킨다.",
    "business_impact": "리비아 및 인근 해역을 이용하는 선박의 보험료 인상, 운항 지연, 보안 비용 증가로 이어질 수 있다.",
    "recommended_actions": [
     "리비아 인근 해역 운항 선박의 보안 강화 지침 확인",
     "해상 보험 조건 및 커버리지 재검토",
     "대체 운송 경로 및 비상 계획 수립 여부 점검",
     "선박 운항사의 리스크 관리 역량 평가"
    ],
    "confidence": 0.8
   }
  }
 ]
};
