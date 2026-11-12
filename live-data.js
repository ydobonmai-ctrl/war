// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-12T03:54:08.945714+00:00",
 "window": {
  "hours": 24,
  "files": 96,
  "until": "2026-11-12T04:00:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 497,
  "by_category": {
   "sanctions": 102,
   "supply_chain": 67,
   "oil_commodity": 66,
   "fx_macro": 32,
   "maritime": 211,
   "cyber": 19
  },
  "top_places": [
   "United States",
   "China",
   "Iran",
   "Saudi Arabia",
   "Yemen",
   "Russia",
   "United Kingdom",
   "India"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-002",
   "lat": 32.0,
   "lng": 53.0,
   "title": "중동 해상 유조선 화재 및 이란의 해상 위협 증대",
   "source": "foxbaltimore.com / econotimes.com / dominicanrepublicpost.com / aljazeera.com",
   "sources": [
    {
     "url": "https://foxbaltimore.com/station/share/tankers-continue-to-burn-across-middle-east-amid-support-for-de-escalation-in-iran-gop-democrats-pete-hegseth-thomas-massie-rtt",
     "domain": "foxbaltimore.com"
    },
    {
     "url": "https://econotimes.com/Iran-Attacks-Ship-Navigation-Equipment-on-Oman-s-Didamar-Island-as-Oil-Flows-Recover-1775588",
     "domain": "econotimes.com"
    },
    {
     "url": "https://dominicanrepublicpost.com/iran-designates-argentinian-navy-air-force-as-terrorist-organisations/",
     "domain": "dominicanrepublicpost.com"
    },
    {
     "url": "https://www.aljazeera.com/news/2026/11/11/iran-designates-argentinian-navy-air-force-as-terrorist",
     "domain": "aljazeera.com"
    }
   ],
   "region": "중동, 이란, 오만",
   "category": "maritime",
   "summary": "중동 해역에서 유조선 화재가 지속되고 있으며, 이란이 오만 디다마르 섬의 선박 항해 장비를 공격하고 아르헨티나 해군 및 공군을 테러 조직으로 지정하는 등 해상 위협을 고조시키고 있다.",
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
   "created_at": "2026-11-12T03:54:08.945714+00:00",
   "insight": {
    "why_it_matters": "중동은 주요 원유 및 LNG 수송로이며, 해상 안보 불안정은 유가 변동성 확대 및 해상 운송 비용 증가로 이어질 수 있다. 한국은 에너지 수입 의존도가 높아 직접적인 영향을 받는다.",
    "business_impact": "유가 상승 압력으로 에너지 비용 증가, 해상 운송 보험료 및 운임 상승, 중동 지역을 경유하는 선박의 안전성 우려 증대.",
    "recommended_actions": [
     "중동 해상 운송 경로의 안전 상황을 실시간으로 모니터링하고 비상 계획을 수립한다.",
     "유가 및 해상 운임 변동성 확대에 대비하여 헤징 전략을 검토한다.",
     "선박 보험 조건 및 보장 범위를 재확인하고 필요시 추가 보험 가입을 고려한다.",
     "중동 지역을 경유하는 원자재 및 제품의 재고 수준을 점검하고 운송 일정 지연 가능성에 대비한다."
    ],
    "confidence": 0.85
   }
  },
  {
   "id": "LIVE-004",
   "lat": 55.7522,
   "lng": 37.6156,
   "title": "자포리자 원자력 발전소 드론 공격으로 직원 사망",
   "source": "straitstimes.com",
   "sources": [
    {
     "url": "https://www.straitstimes.com/world/europe/zaporizhzhia-nuclear-plant-worker-killed-in-drone-strike-russian-management-says",
     "domain": "straitstimes.com"
    }
   ],
   "region": "러시아",
   "category": "supply_chain",
   "summary": "러시아 측 관리들은 자포리자 원자력 발전소에서 드론 공격으로 직원이 사망했다고 밝혔다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 40,
    "consumer": 40,
    "energy": 90,
    "manufacturing": 60,
    "chemical": 50
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-12T03:54:08.945714+00:00",
   "insight": {
    "why_it_matters": "유럽 최대 원전인 자포리자 원전의 안전 문제는 유럽 전역의 에너지 공급 안정성에 심각한 위협이 될 수 있으며, 이는 글로벌 에너지 시장에도 영향을 미친다.",
    "business_impact": "유럽 에너지 가격 변동성 확대, 에너지 집약 산업의 생산 비용 증가, 원자력 관련 기술 및 부품 공급망 불안정.",
    "recommended_actions": [
     "유럽 에너지 시장 동향을 면밀히 주시하고 에너지 구매 전략을 재검토한다.",
     "에너지 비용 상승에 대비하여 생산 효율화 방안을 모색한다.",
     "원자력 발전 관련 부품을 공급하는 경우, 공급망 안정성을 점검한다.",
     "지정학적 리스크에 따른 에너지 공급 중단 시나리오에 대비한 비상 계획을 수립한다."
    ],
    "confidence": 0.75
   }
  },
  {
   "id": "LIVE-007",
   "lat": 32.0,
   "lng": 53.0,
   "title": "사우디아라비아 원유 생산량 26% 증가 보고",
   "source": "oilprice.com",
   "sources": [
    {
     "url": "https://oilprice.com/Latest-Energy-News/World-News/Saudi-Crude-Output-Jumps-26-as-Riyadh-Reports-Near-Pre-War-Production.html",
     "domain": "oilprice.com"
    }
   ],
   "region": "사우디아라비아",
   "category": "oil_commodity",
   "summary": "사우디아라비아의 원유 생산량이 26% 증가하여 전쟁 이전 수준에 근접했다고 보고되었다.",
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
    "energy": 90,
    "manufacturing": 80,
    "chemical": 80
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-12T03:54:08.945714+00:00",
   "insight": {
    "why_it_matters": "글로벌 원유 공급량 증가로 국제 유가 안정화에 기여할 수 있으며, 이는 한국 기업의 에너지 비용 부담 완화에 긍정적인 영향을 미칠 수 있다.",
    "business_impact": "유가 하락 압력으로 에너지 비용 절감 가능성, 원자재 가격 안정화, 생산 비용 예측 가능성 증대.",
    "recommended_actions": [
     "국제 유가 동향을 면밀히 주시하고 에너지 구매 전략에 반영한다.",
     "유가 변동에 따른 생산 비용 변화 시나리오를 분석한다.",
     "원자재 구매 계약 시 유가 연동 조항을 검토한다.",
     "에너지 효율 개선 및 대체 에너지원 활용 방안을 지속적으로 모색한다."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-001",
   "lat": 39.9289,
   "lng": 116.388,
   "title": "미국 엔비디아 칩의 중국 우회 공급 및 제재 지연 논란",
   "source": "wtvbam.com / article.wn.com / businesstimes.com.sg / 933thedrive.com",
   "sources": [
    {
     "url": "https://wtvbam.com/2026/11/11/exclusive-pla-linked-chinese-university-bought-nvidia-h200-chips-despite-us-blacklist-records-show/",
     "domain": "wtvbam.com"
    },
    {
     "url": "https://article.wn.com/view/2026/11/12/Trumps_Nvidia_chip_crackdown_on_China_stalled_by_Lutnick_Rep/",
     "domain": "article.wn.com"
    },
    {
     "url": "https://www.businesstimes.com.sg/international/lutnick-stalled-trump-crackdown-diversion-nvidia-chips-china-report",
     "domain": "businesstimes.com.sg"
    },
    {
     "url": "https://www.933thedrive.com/2026/11/11/lutnick-stalled-trump-crackdown-on-diversion-of-nvidia-chips-to-china-axios-reports/",
     "domain": "933thedrive.com"
    }
   ],
   "region": "중국",
   "category": "sanctions",
   "summary": "미국 정부의 엔비디아 고성능 AI 칩 대중국 수출 통제 조치가 지연되거나, 중국 대학이 블랙리스트에도 불구하고 엔비디아 H200 칩을 구매하는 등 우회 공급 정황이 포착되었다는 보도가 나왔다.",
   "impact_industries": [
    "semiconductor",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 80,
    "automotive": 30,
    "consumer": 20,
    "energy": 10,
    "manufacturing": 40,
    "chemical": 10
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-12T03:54:08.945714+00:00",
   "insight": {
    "why_it_matters": "미국의 대중국 기술 제재의 실효성에 대한 의문이 제기되며, 첨단 기술 공급망의 불확실성이 커질 수 있다. 한국 반도체 및 관련 산업에 간접적인 영향을 미칠 수 있다.",
    "business_impact": "한국 반도체 기업은 미국-중국 기술 갈등 심화 시 양국 시장에서의 사업 전략 재검토가 필요할 수 있다. 중국 시장에서의 경쟁 환경 변화 가능성.",
    "recommended_actions": [
     "미국 상무부의 대중국 반도체 수출 통제 관련 최신 지침을 주시하고 법률 준수 여부를 재확인한다.",
     "중국 내 사업 운영 시 잠재적 제재 위반 리스크를 평가하고 대응 계획을 수립한다.",
     "첨단 기술 부품의 공급망 다변화 및 재고 확보 전략을 검토한다.",
     "미중 기술 갈등 심화에 따른 시장 변화 시나리오를 분석하고 사업 계획에 반영한다."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-006",
   "lat": 24.6408,
   "lng": 46.7728,
   "title": "후티 반군, 사우디아라비아에 미사일 및 드론 공격",
   "source": "thepeninsulaqatar.com / arabnews.com",
   "sources": [
    {
     "url": "http://thepeninsulaqatar.com/article/11/11/2026/coalition-says-it-intercepted-3-houthi-cruise-missiles-targeting-riyadh",
     "domain": "thepeninsulaqatar.com"
    },
    {
     "url": "https://www.arabnews.com/saudi-arabia/coalition-says-houthi-drones-and-missiles-launched-toward-saudi-arabia-destroyed-3011220",
     "domain": "arabnews.com"
    }
   ],
   "region": "사우디아라비아 리야드",
   "category": "maritime",
   "summary": "후티 반군이 사우디아라비아 리야드를 겨냥한 순항 미사일과 드론을 발사했으나, 연합군에 의해 요격되었다.",
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
    "consumer": 40,
    "energy": 80,
    "manufacturing": 60,
    "chemical": 70
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-12T03:54:08.945714+00:00",
   "insight": {
    "why_it_matters": "홍해 및 아라비아만 지역의 해상 안보를 위협하며, 이는 중동발 에너지 및 물류 수송에 차질을 줄 수 있다. 한국 기업의 중동 지역 사업 운영에 리스크를 가중시킨다.",
    "business_impact": "중동 지역을 경유하는 선박의 운항 위험 증가, 해상 보험료 인상, 에너지 및 원자재 공급망 불안정.",
    "recommended_actions": [
     "홍해 및 아라비아만 지역의 해상 안보 상황을 실시간으로 모니터링한다.",
     "해당 지역을 경유하는 선박의 안전 조치를 강화하고 비상 계획을 업데이트한다.",
     "에너지 및 원자재 공급망의 다변화를 검토하고 재고 수준을 확보한다.",
     "중동 지역 사업장의 직원 안전 및 비상 대피 계획을 점검한다."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-008",
   "lat": 32.0,
   "lng": 53.0,
   "title": "이란의 사이버 및 군사 위협 증대",
   "source": "cbn.com",
   "sources": [
    {
     "url": "https://cbn.com/news/world/irans-shadow-war-intensifies-terror-cells-go-live-while-cyber-and-military-threats-grow",
     "domain": "cbn.com"
    }
   ],
   "region": "이란",
   "category": "cyber",
   "summary": "이란의 그림자 전쟁이 심화되면서 테러 조직이 활동을 시작하고 사이버 및 군사적 위협이 증가하고 있다.",
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
    "automotive": 50,
    "consumer": 60,
    "energy": 70,
    "manufacturing": 60,
    "chemical": 60
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-12T03:54:08.945714+00:00",
   "insight": {
    "why_it_matters": "이란의 사이버 공격 능력 증대는 글로벌 기업의 IT 인프라 및 공급망에 대한 사이버 보안 리스크를 높인다. 중동 지역의 지정학적 긴장을 고조시켜 사업 환경의 불확실성을 증대시킨다.",
    "business_impact": "사이버 공격으로 인한 데이터 유출, 시스템 마비, 생산 중단 등의 직접적인 피해 발생 가능성. 중동 지역 사업장의 운영 리스크 증가.",
    "recommended_actions": [
     "사이버 보안 시스템을 강화하고 최신 위협 정보에 기반한 방어 체계를 구축한다.",
     "공급망 전반의 사이버 보안 취약점을 점검하고 협력사와의 보안 협력을 강화한다.",
     "중동 지역 사업장의 사이버 보안 프로토콜을 재검토하고 직원 교육을 강화한다.",
     "사이버 공격 발생 시 신속한 대응 및 복구 계획을 수립하고 모의 훈련을 실시한다."
    ],
    "confidence": 0.75
   }
  },
  {
   "id": "LIVE-005",
   "lat": 60.0,
   "lng": 100.0,
   "title": "러시아 디젤 유조선, 뉴욕 인근 해상에서 항로 변경",
   "source": "econotimes.com",
   "sources": [
    {
     "url": "https://econotimes.com/Russian-Diesel-Tanker-Reverses-Course-400-Nautical-Miles-From-New-York-1775485",
     "domain": "econotimes.com"
    }
   ],
   "region": "러시아, 미국 인근 해상",
   "category": "maritime",
   "summary": "러시아 디젤 유조선이 뉴욕에서 400해리 떨어진 해상에서 항로를 변경했다.",
   "impact_industries": [
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 30,
    "consumer": 20,
    "energy": 60,
    "manufacturing": 40,
    "chemical": 50
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-12T03:54:08.945714+00:00",
   "insight": {
    "why_it_matters": "러시아 유조선의 항로 변경은 서방 제재 회피 또는 해상 운송의 지정학적 긴장과 관련될 수 있으며, 이는 국제 해상 물류 및 유류 공급망에 불확실성을 더한다.",
    "business_impact": "러시아산 유류의 국제 시장 공급 경로 변화, 해상 운송 비용 및 보험료 변동 가능성, 제재 관련 리스크 증가.",
    "recommended_actions": [
     "러시아산 유류 및 관련 제품의 국제 운송 동향을 모니터링한다.",
     "제재 대상 국가와의 거래 시 법률 및 규제 준수 여부를 철저히 확인한다.",
     "해상 운송 계약 시 제재 관련 조항을 면밀히 검토한다.",
     "유류 공급망의 투명성을 확보하고 잠재적 리스크를 식별한다."
    ],
    "confidence": 0.65
   }
  },
  {
   "id": "LIVE-003",
   "lat": 12.6664,
   "lng": 100.901,
   "title": "태국 촌부리 해상 유조선 침몰 및 승무원 실종",
   "source": "bangkokpost.com",
   "sources": [
    {
     "url": "https://www.bangkokpost.com/learning/easy/3353344/6-crew-missing-after-oil-tanker-sinks-off-chon-buri",
     "domain": "bangkokpost.com"
    }
   ],
   "region": "태국 촌부리",
   "category": "maritime",
   "summary": "태국 촌부리 해상에서 유조선이 침몰하여 6명의 승무원이 실종되었다.",
   "impact_industries": [
    "energy",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 20,
    "energy": 40,
    "manufacturing": 30,
    "chemical": 50
   },
   "risk_score": 50,
   "risk_level": "medium",
   "prev_score": 50,
   "created_at": "2026-11-12T03:54:08.945714+00:00",
   "insight": {
    "why_it_matters": "유조선 사고는 해양 오염 및 해상 물류 차질을 유발할 수 있으며, 해당 지역의 해상 운송 안전에 대한 우려를 높인다.",
    "business_impact": "해당 해역을 이용하는 선박의 운항 지연 가능성, 해상 보험료 인상 압력, 잠재적 환경 규제 강화.",
    "recommended_actions": [
     "태국만 해역을 이용하는 선박의 운항 안전 지침을 확인하고 준수한다.",
     "해상 운송 중인 유류 및 화학 제품의 안전 관리 절차를 재점검한다.",
     "해양 오염 사고 발생 시 비상 대응 계획을 업데이트한다.",
     "해상 보험 계약의 보장 범위를 검토하고 필요시 조정한다."
    ],
    "confidence": 0.7
   }
  }
 ]
};
