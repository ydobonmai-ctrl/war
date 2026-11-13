// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-13T03:28:18.170075+00:00",
 "window": {
  "hours": 24,
  "files": 96,
  "until": "2026-11-13T03:30:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 443,
  "by_category": {
   "maritime": 161,
   "sanctions": 119,
   "fx_macro": 41,
   "supply_chain": 53,
   "cyber": 22,
   "oil_commodity": 47
  },
  "top_places": [
   "United States",
   "China",
   "India",
   "Russia",
   "United Kingdom",
   "Iran",
   "Saudi Arabia",
   "Israel"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-003",
   "lat": 39.9289,
   "lng": 116.388,
   "title": "엔비디아 칩의 중국 우회 수출 및 미국 제재 관련 논란",
   "source": "cp24.com / investorplace.com / theyeshivaworld.com",
   "sources": [
    {
     "url": "https://www.cp24.com/news/money/2026/11/12/lutnick-stalled-trump-crackdown-on-diversion-of-nvidia-chips-to-china-axios-reports/",
     "domain": "cp24.com"
    },
    {
     "url": "https://investorplace.com/smartmoney/2026/11/nvidia-scandal-creating-ai-winners-losers/",
     "domain": "investorplace.com"
    },
    {
     "url": "https://www.theyeshivaworld.com/news/general/2622429/chip-showdown-report-says-lutnick-delayed-trump-approved-crackdown-as-senators-demand-nvidia-records.html",
     "domain": "theyeshivaworld.com"
    }
   ],
   "region": "중국, 미국, 싱가포르",
   "category": "supply_chain",
   "summary": "트럼프 행정부 시절 엔비디아 칩의 중국 우회 수출에 대한 단속이 지연되었다는 보도가 나왔으며, 이로 인해 AI 산업 내 승자와 패자가 나뉘고 있다. 미국 상원에서는 엔비디아 기록을 요구하고 있다.",
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
   "created_at": "2026-11-13T03:28:18.170075+00:00",
   "insight": {
    "why_it_matters": "미국과 중국 간의 기술 패권 경쟁이 심화되는 가운데, 핵심 반도체 칩의 공급망 통제가 강화될 수 있음을 시사한다. 이는 AI 및 첨단 기술 산업 전반에 큰 영향을 미친다.",
    "business_impact": "AI 칩 조달에 불확실성이 커지고, 중국 시장으로의 첨단 반도체 수출에 제약이 발생할 수 있다. 관련 기술 개발 및 제품 생산 계획에 차질이 생길 위험이 있다.",
    "recommended_actions": [
     "미국-중국 기술 규제 동향 및 수출 통제 정책 면밀히 주시",
     "AI 칩 및 첨단 반도체 공급망 다변화 전략 수립",
     "중국 시장 의존도 재평가 및 리스크 관리 강화",
     "내부 컴플라이언스 시스템 점검 및 강화",
     "AI 기술 개발 로드맵 재검토"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-004",
   "lat": 54.0,
   "lng": -4.0,
   "title": "중동 해상 운송 및 유가 불안정성 고조: 유조선 피격 및 공격 위협 증가",
   "source": "theyeshivaworld.com / investmentwatchblog.com / gcaptain.com / investinglive.com",
   "sources": [
    {
     "url": "https://www.theyeshivaworld.com/news/israel-news/2622397/gulf-escalation-iran-claims-two-oil-tankers-exploded-threatens-response-that-will-stun-the-world.html",
     "domain": "theyeshivaworld.com"
    },
    {
     "url": "https://www.investmentwatchblog.com/shipping-threats-keep-oil-expensive-now-the-cost-is-reaching-american-businesses/",
     "domain": "investmentwatchblog.com"
    },
    {
     "url": "https://gcaptain.com/tanker-ablaze-off-uae-as-more-attacks-rattle-gulf-shipping/",
     "domain": "gcaptain.com"
    },
    {
     "url": "https://investinglive.com/news/oil-prices-rise-after-iran-reports-strikes/",
     "domain": "investinglive.com"
    },
    {
     "url": "https://www.manchestereveningnews.co.uk/news/uk-news/iran-missile-attack-us-ships-34904639",
     "domain": "manchestereveningnews.co.uk"
    },
    {
     "url": "http://www.maritimeprofessional.com/news/houthis-attack-saudi-pipeline-pumping-424289",
     "domain": "maritimeprofessional.com"
    },
    {
     "url": "https://www.siasat.com/riyadh-yanbu-among-targets-in-fresh-houthi-attack-claims-3575897/",
     "domain": "siasat.com"
    },
    {
     "url": "https://www.breitbart.com/national-security/2026/11/12/iran-escalates-with-attacks-on-ships-and-omani-island/",
     "domain": "breitbart.com"
    }
   ],
   "region": "이란, UAE, 사우디아라비아, 중동 해역",
   "category": "maritime",
   "summary": "이란이 유조선 피격을 주장하고 보복을 위협하는 가운데, UAE 연안에서 유조선 화재가 발생하고 후티 반군이 사우디아라비아 송유관 및 도시를 공격하는 등 중동 해상 운송의 불안정성이 고조되고 있다. 이로 인해 유가가 상승하고 있다.",
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
   "created_at": "2026-11-13T03:28:18.170075+00:00",
   "insight": {
    "why_it_matters": "세계 주요 원유 수송로인 중동 해역의 안보 불안은 글로벌 에너지 공급망에 직접적인 위협이 되며, 유가 상승을 통해 전 세계 경제에 광범위한 영향을 미친다.",
    "business_impact": "원유 및 석유화학 제품 가격 상승, 해상 운송 보험료 및 운임 인상, 운송 지연 등 물류 차질이 발생할 수 있다. 이는 생산 비용 증가 및 제품 가격 인상으로 이어져 기업 수익성에 부정적인 영향을 미친다.",
    "recommended_actions": [
     "원유 및 원자재 재고 수준 점검 및 비상 계획 수립",
     "해상 운송 경로 및 보험료 변동성 면밀히 모니터링",
     "에너지 효율 개선 및 대체 에너지원 도입 가속화",
     "중동 정세 변화에 대한 실시간 정보 수집 및 분석 강화",
     "물류 파트너와 비상 운송 계획 논의"
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-006",
   "lat": 55.0,
   "lng": 73.4,
   "title": "러시아 최대 정유 시설, 8시간 드론 공격으로 재차 피격",
   "source": "zerohedge.com",
   "sources": [
    {
     "url": "https://www.zerohedge.com/energy/russias-largest-oil-refinery-again-struck-8-hour-drone-attack-wave",
     "domain": "zerohedge.com"
    }
   ],
   "region": "러시아 옴스크",
   "category": "oil_commodity",
   "summary": "러시아 옴스크에 위치한 러시아 최대 정유 시설이 8시간 동안 이어진 드론 공격으로 다시 피격되었다.",
   "impact_industries": [
    "automotive",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 40,
    "consumer": 30,
    "energy": 80,
    "manufacturing": 50,
    "chemical": 60
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-13T03:28:18.170075+00:00",
   "insight": {
    "why_it_matters": "러시아의 주요 정유 시설 공격은 글로벌 원유 및 정유 제품 공급망에 직접적인 영향을 미 미쳐 유가 상승을 부추기고, 에너지 시장의 불안정성을 심화시킨다.",
    "business_impact": "정유 제품 공급 감소로 인한 유가 상승은 운송 비용 증가, 생산 비용 상승으로 이어져 기업의 수익성에 부정적인 영향을 미친다. 특히 석유화학 산업은 원료 조달에 어려움을 겪을 수 있다.",
    "recommended_actions": [
     "유가 및 정유 제품 시장 동향 면밀히 모니터링",
     "에너지 비용 상승에 대비한 예산 및 전략 재검토",
     "러시아-우크라이나 전쟁 상황 및 에너지 인프라 공격 동향 주시",
     "에너지 효율 개선 및 대체 에너지원 도입 검토"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-005",
   "lat": 40.0,
   "lng": 127.0,
   "title": "글로벌 사이버 보안 위협 및 주요 소프트웨어 서비스 중단 발생",
   "source": "pcmag.com / patch.com / royalgazette.com / rnz.co.nz / forbes.com",
   "sources": [
    {
     "url": "https://www.pcmag.com/news/fbi-north-koreas-facestealer-scheme-can-hijack-identities-spread-malware",
     "domain": "pcmag.com"
    },
    {
     "url": "https://patch.com/california/redondobeach/massive-microsoft-outage-hits-south-bay-city-halls-disrupts-government",
     "domain": "patch.com"
    },
    {
     "url": "https://www.royalgazette.com/general/news/article/20261112/software-outage-hits-bermuda-and-us-users/",
     "domain": "royalgazette.com"
    },
    {
     "url": "https://www.rnz.co.nz/news/business/2569444/global-outage-hits-microsoft-s-outlook",
     "domain": "rnz.co.nz"
    },
    {
     "url": "https://www.forbes.com/councils/forbestechcouncil/2026/11/12/post-quantum-cryptography-is-no-longer-the-future-post-cyber-is/",
     "domain": "forbes.com"
    }
   ],
   "region": "북한, 미국, 버뮤다, 전 세계",
   "category": "cyber",
   "summary": "북한의 신원 도용 및 악성코드 유포 계획이 FBI에 의해 경고되었으며, 마이크로소프트 아웃룩을 포함한 주요 소프트웨어 서비스에서 전 세계적인 장애가 발생하여 정부 기관 및 사용자들에게 영향을 미쳤다. 포스트 양자 암호화 시대의 사이버 보안 중요성이 강조되고 있다.",
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
    "automotive": 50,
    "consumer": 60,
    "energy": 40,
    "manufacturing": 70,
    "chemical": 50
   },
   "risk_score": 70,
   "risk_level": "high",
   "prev_score": 70,
   "created_at": "2026-11-13T03:28:18.170075+00:00",
   "insight": {
    "why_it_matters": "사이버 공격은 기업의 운영 마비, 데이터 유출, 재정적 손실 등 심각한 피해를 초래할 수 있으며, 디지털 전환이 가속화될수록 그 중요성이 더욱 커진다. 주요 소프트웨어 서비스 중단은 광범위한 업무 마비를 야기한다.",
    "business_impact": "생산 시스템 중단, 업무 마비, 고객 데이터 유출, 기업 이미지 손상, 법적 분쟁 발생 등 직접적인 운영 및 재정적 손실을 초래할 수 있다. 복구 비용 및 시간 소요도 크다.",
    "recommended_actions": [
     "사이버 보안 시스템 전반에 대한 정기적인 점검 및 업데이트",
     "직원 대상 사이버 보안 교육 강화 (피싱, 악성코드 등)",
     "주요 데이터 백업 및 복구 시스템 상시 점검",
     "공급망 내 IT 시스템 보안 취약점 점검 및 협력사 보안 강화 요구",
     "최신 사이버 보안 위협 동향 및 기술 변화에 대한 정보 습득"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-002",
   "lat": 56.3926,
   "lng": 54.2618,
   "title": "카자흐스탄 석탄, 러시아 항만 접근 상실",
   "source": "timesca.com",
   "sources": [
    {
     "url": "https://timesca.com/kazakhstan-coal-loses-access-russian-ports/",
     "domain": "timesca.com"
    }
   ],
   "region": "러시아, 카자흐스탄",
   "category": "maritime",
   "summary": "카자흐스탄산 석탄이 러시아 항만을 통한 운송 경로를 잃게 되어 수출에 차질이 예상된다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 10,
    "consumer": 10,
    "energy": 60,
    "manufacturing": 30,
    "chemical": 20
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-13T03:28:18.170075+00:00",
   "insight": {
    "why_it_matters": "주요 에너지원인 석탄의 운송 경로가 막히면서 글로벌 에너지 시장에 영향을 줄 수 있으며, 관련 산업의 물류 비용 상승을 초래할 수 있다.",
    "business_impact": "석탄을 원료나 에너지원으로 사용하는 기업은 운송 비용 증가 및 공급 불안정성에 직면할 수 있다. 대체 운송 경로 모색이 필요하다.",
    "recommended_actions": [
     "석탄 등 에너지원 조달 다변화 방안 검토",
     "해상 운송 경로 및 비용 변동성 모니터링",
     "러시아-중앙아시아 지역 물류 동향 지속 확인",
     "에너지 효율 개선 및 대체 에너지원 도입 검토"
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-007",
   "lat": 38.8951,
   "lng": -77.0364,
   "title": "트럼프, 멕시코에 대한 관세 인상 위협 재개",
   "source": "zerohedge.com / investmentwatchblog.com",
   "sources": [
    {
     "url": "http://www.zerohedge.com/markets/trump-threatens-double-tariffs-mexico-if-third-worlder-caravan-isnt-stopped",
     "domain": "zerohedge.com"
    },
    {
     "url": "https://www.investmentwatchblog.com/trump-threatens-to-double-mexico-tariffs-over-1500-migrants-reopening-a-trade-fight-just-months-after-the-supreme-court-struck-down-his-earlier-tariff-strategy/",
     "domain": "investmentwatchblog.com"
    }
   ],
   "region": "미국, 멕시코",
   "category": "sanctions",
   "summary": "도널드 트럼프 전 대통령이 멕시코 국경 문제 해결을 요구하며 멕시코산 제품에 대한 관세 두 배 인상을 위협하고 있다. 이는 과거 대법원에서 그의 관세 전략이 기각된 지 몇 달 만에 다시 무역 분쟁을 재점화하는 것이다.",
   "impact_industries": [
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 60,
    "consumer": 40,
    "energy": 10,
    "manufacturing": 50,
    "chemical": 10
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-13T03:28:18.170075+00:00",
   "insight": {
    "why_it_matters": "미국과 멕시코 간의 무역 관계는 북미 지역 공급망에 매우 중요하며, 관세 인상은 해당 지역에서 사업을 영위하는 기업들에게 생산 비용 증가 및 시장 불확실성을 야기할 수 있다.",
    "business_impact": "멕시코에 생산 기지를 둔 기업이나 멕시코를 통해 미국 시장에 진출하는 기업은 관세 부담 증가로 인한 경쟁력 약화 및 공급망 재편 압박에 직면할 수 있다.",
    "recommended_actions": [
     "미국 대선 결과 및 트럼프의 대외 무역 정책 공약 면밀히 주시",
     "멕시코 생산 기지 및 북미 공급망의 관세 리스크 분석",
     "관세 인상 시나리오에 따른 비용 증가 및 수익성 영향 분석",
     "대체 생산지 또는 공급망 다변화 가능성 검토"
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-001",
   "lat": 51.2417,
   "lng": -2.99528,
   "title": "영국, 러시아에 대한 제재 강화 및 EU 관련 논의",
   "source": "eastlothiancourier.com / mirror.co.uk",
   "sources": [
    {
     "url": "https://www.eastlothiancourier.com/news/national/26724008.burnham-unveils-stinging-sanctions-russia-major-european-summit/",
     "domain": "eastlothiancourier.com"
    },
    {
     "url": "https://www.mirror.co.uk/news/politics/andy-burnham-russia-ukraine-epc-37870960",
     "domain": "mirror.co.uk"
    },
    {
     "url": "https://www.mirror.co.uk/news/politics/brexit-burnham-cameron-row-eu-37872440",
     "domain": "mirror.co.uk"
    }
   ],
   "region": "영국, 러시아",
   "category": "sanctions",
   "summary": "영국이 러시아에 대한 강력한 제재를 발표하고 있으며, 유럽 정상회담 및 브렉시트 관련 논의가 진행 중이다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 30,
    "automotive": 30,
    "consumer": 20,
    "energy": 40,
    "manufacturing": 30,
    "chemical": 30
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-13T03:28:18.170075+00:00",
   "insight": {
    "why_it_matters": "러시아에 대한 서방의 제재가 지속적으로 강화되고 있으며, 이는 러시아와의 비즈니스 관계 및 글로벌 공급망에 영향을 미칠 수 있다.",
    "business_impact": "러시아 시장에 대한 접근이 더욱 어려워지고, 러시아산 원자재 및 부품 조달에 제약이 발생할 수 있다. 유럽 내 정치적 논의가 기업 환경에 불확실성을 더한다.",
    "recommended_actions": [
     "러시아 관련 사업 및 투자 계획 재검토",
     "제재 대상 품목 및 기업 목록 업데이트 확인",
     "대체 시장 및 공급처 발굴 노력",
     "유럽연합(EU)의 추가 제재 동향 주시"
    ],
    "confidence": 0.7
   }
  }
 ]
};
