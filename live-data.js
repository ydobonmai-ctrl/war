// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-25T05:29:21.779343+00:00",
 "window": {
  "hours": 24,
  "files": 93,
  "until": "2026-11-25T05:30:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 534,
  "by_category": {
   "maritime": 216,
   "supply_chain": 59,
   "sanctions": 161,
   "cyber": 23,
   "fx_macro": 44,
   "oil_commodity": 31
  },
  "top_places": [
   "United States",
   "Yemen",
   "Saudi Arabia",
   "United Kingdom",
   "China",
   "Russia",
   "Iran",
   "Ukraine"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-001",
   "lat": 35.0,
   "lng": 105.0,
   "title": "미국, 중국, 인도 등 대상 신규 관세 부과 예고",
   "source": "illawarramercury.com.au / wkzo.com / oneindia.com / newrepublic.com / bendbullet",
   "sources": [
    {
     "url": "https://www.illawarramercury.com.au/story/9398042/trump-administration-set-to-unveil-new-us-tariffs/",
     "domain": "illawarramercury.com.au"
    },
    {
     "url": "https://wkzo.com/2026/11/24/trump-administration-set-to-unveil-new-tariffs-after-probe-on-excess-factory-capacity-sources-say/",
     "domain": "wkzo.com"
    },
    {
     "url": "https://www.oneindia.com/international/donald-trump-set-to-hit-india-china-others-with-new-tariffs-8269249.html",
     "domain": "oneindia.com"
    },
    {
     "url": "https://newrepublic.com/post/218341/trump-disastrous-policy-tariffs-eu-china-forced-labor",
     "domain": "newrepublic.com"
    },
    {
     "url": "https://bendbulletin.com/2026/11/24/new-oregon-grant-program-offers-one-time-funding-to-businesses-in-wake-of-trump-tariffs/",
     "domain": "bendbulletin.com"
    }
   ],
   "region": "미국, 중국, 인도",
   "category": "sanctions",
   "summary": "미국 트럼프 행정부가 중국, 인도 및 기타 국가들을 대상으로 새로운 관세 부과를 준비 중이라는 보도가 나왔다. 이는 과잉 생산 능력 조사 결과에 따른 조치로, 기존 관세 정책의 연장선상에 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 70,
    "automotive": 80,
    "consumer": 90,
    "energy": 50,
    "manufacturing": 90,
    "chemical": 60
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-25T05:29:21.779343+00:00",
   "insight": {
    "why_it_matters": "한국 기업들은 미국 시장에 대한 수출 의존도가 높으며, 중국 및 인도 등 아시아 공급망과도 밀접하게 연결되어 있다. 신규 관세는 원자재 조달 비용 상승, 생산 기지 재편 압력, 최종 제품 가격 경쟁력 하락 등 광범위한 영향을 미칠 수 있다.",
    "business_impact": "대미 수출 기업은 관세 장벽으로 인한 가격 경쟁력 약화 및 수익성 악화를 겪을 수 있다. 중국 및 인도에 생산 거점을 둔 기업은 공급망 재편 압박을 받을 수 있으며, 원자재 및 부품 조달 비용이 증가할 수 있다.",
    "recommended_actions": [
     "미국 무역 정책 변화 동향을 면밀히 모니터링하고, 잠재적 관세 부과 대상 품목 및 국가를 파악한다.",
     "관세 부과 시나리오별 공급망 비용 분석을 수행하고, 대체 조달처 또는 생산 기지 다변화 방안을 검토한다.",
     "미국 시장 수출 전략을 재검토하고, 관세 회피를 위한 현지 생산 또는 제3국 우회 수출 가능성을 타진한다.",
     "관세 부과 대상 국가의 현지 파트너사 및 고객사와 긴밀히 소통하여 영향을 최소화할 방안을 모색한다."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-003",
   "lat": 35.75,
   "lng": 51.5148,
   "title": "이란 혁명수비대, 호르무즈 해협 컨테이너선 공격 주장",
   "source": "news.az / middleeasteye.net",
   "sources": [
    {
     "url": "https://news.az/news/irgc-says-it-targeted-container-ship-in-strait-of-hormuz",
     "domain": "news.az"
    },
    {
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-it-attacked-container-ship-hormuz",
     "domain": "middleeasteye.net"
    }
   ],
   "region": "호르무즈 해협, 이란, 오만",
   "category": "maritime",
   "summary": "이란 혁명수비대(IRGC)가 호르무즈 해협에서 컨테이너선을 공격했다고 주장했다. 이는 중동 지역의 해상 안보 위협을 더욱 고조시키는 사건이다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 70,
    "automotive": 80,
    "consumer": 70,
    "energy": 90,
    "manufacturing": 80,
    "chemical": 80
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-25T05:29:21.779343+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 세계 원유 및 액화천연가스(LNG) 수송의 핵심 통로이며, 한국으로 향하는 주요 해상 물류 경로 중 하나이다. 이 지역에서의 군사적 충돌은 유가 급등, 해상 운송 마비, 보험료 폭등 등 한국 경제 및 기업에 치명적인 영향을 미칠 수 있다.",
    "business_impact": "원유 및 가스 가격 급등으로 에너지 비용이 크게 증가하고, 해상 운송 차질로 원자재 및 완제품의 공급망이 마비될 수 있다. 이는 생산 비용 증가, 생산 중단, 납기 지연 등 전반적인 사업 운영에 심각한 영향을 미친다.",
    "recommended_actions": [
     "호르무즈 해협의 안보 상황을 최고 수준으로 모니터링하고, 관련 정부 및 국제기구의 경고에 즉각 대응한다.",
     "해상 운송 보험의 전쟁 위험 담보 범위를 확인하고, 필요시 추가 보험 가입을 검토한다.",
     "에너지 및 핵심 원자재의 비축량을 점검하고, 대체 공급망 확보를 위한 비상 계획을 수립한다.",
     "물류 및 해운 파트너사와 긴밀히 협력하여 비상시 운송 경로 변경 또는 운송 수단 전환 가능성을 논의한다."
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-005",
   "lat": 55.7522,
   "lng": 37.6156,
   "title": "우크라이나, 러시아 정유 시설 공격 지속 및 러시아 보복 경고",
   "source": "themoscowtimes.com",
   "sources": [
    {
     "url": "https://www.themoscowtimes.com/2026/11/24/putin-says-ukraine-hits-russian-oil-plants-despite-trumps-requests-promises-retaliation-a94367",
     "domain": "themoscowtimes.com"
    }
   ],
   "region": "러시아, 우크라이나",
   "category": "oil_commodity",
   "summary": "우크라이나가 러시아 정유 시설에 대한 공격을 계속하고 있으며, 러시아는 이에 대한 보복을 경고했다. 이는 국제 유가 변동성을 확대시키고 에너지 시장의 불안정성을 높이는 요인으로 작용할 수 있다.",
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
    "consumer": 50,
    "energy": 90,
    "manufacturing": 60,
    "chemical": 70
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-25T05:29:21.779343+00:00",
   "insight": {
    "why_it_matters": "러시아는 주요 원유 및 가스 생산국이며, 우크라이나와의 분쟁은 글로벌 에너지 공급망에 직접적인 영향을 미친다. 정유 시설 공격은 원유 생산 및 정제 능력에 차질을 주어 국제 유가 상승 압력으로 작용할 수 있으며, 이는 한국 기업의 에너지 비용 증가로 이어진다.",
    "business_impact": "유가 상승은 운송 비용, 생산 비용 등 전반적인 기업 운영 비용을 증가시킨다. 특히 에너지 집약 산업(화학, 철강 등) 및 운송 관련 산업(해운, 항공 등)에 큰 영향을 미칠 수 있다.",
    "recommended_actions": [
     "국제 유가 및 에너지 시장 동향을 실시간으로 모니터링하고, 유가 변동성 확대에 대비한 헤징 전략을 검토한다.",
     "에너지 효율 개선 및 재생에너지 전환을 통해 에너지 비용 부담을 줄이는 방안을 모색한다.",
     "원유 및 가스 공급처 다변화를 통해 특정 지역 의존도를 낮추는 전략을 추진한다.",
     "에너지 비축량 및 비상 공급 계획을 점검하고, 필요시 확충을 고려한다."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-006",
   "lat": 1.366667,
   "lng": 103.8,
   "title": "글로벌 반도체 및 DRAM 칩 공급망 동향 주시",
   "source": "digitimes.com",
   "sources": [
    {
     "url": "https://www.digitimes.com/news/a20261125VL209/xiaomi-2027-europe-dram-chips.html",
     "domain": "digitimes.com"
    },
    {
     "url": "https://www.digitimes.com/news/a20261125VL204/data-chips-data-center.html",
     "domain": "digitimes.com"
    }
   ],
   "region": "유럽, 싱가포르",
   "category": "supply_chain",
   "summary": "샤오미의 2027년 유럽 DRAM 칩 관련 언급과 데이터 칩 및 데이터 센터 관련 소식이 전해졌다. 이는 글로벌 반도체 및 DRAM 칩 공급망의 변화와 수요 증가를 시사한다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 90,
    "automotive": 70,
    "consumer": 80,
    "energy": 40,
    "manufacturing": 80,
    "chemical": 40
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-25T05:29:21.779343+00:00",
   "insight": {
    "why_it_matters": "반도체 및 DRAM 칩은 한국의 주력 산업이자, 모든 첨단 산업의 핵심 부품이다. 공급망의 변화나 특정 지역의 수요 증가는 한국 기업의 생산 계획 및 비용에 직접적인 영향을 미칠 수 있다. 특히, 유럽 시장의 DRAM 수요 증가는 한국 반도체 기업에 기회이자 동시에 공급 압박 요인이 될 수 있다.",
    "business_impact": "반도체 및 DRAM 칩의 가격 변동성 확대, 특정 부품의 수급 불균형 발생 가능성이 있다. 이는 스마트폰, 가전, 자동차 등 반도체 의존도가 높은 제품을 생산하는 기업의 생산 차질 및 원가 상승으로 이어질 수 있다.",
    "recommended_actions": [
     "글로벌 반도체 및 DRAM 시장 동향, 특히 유럽 시장의 수요 변화를 면밀히 분석한다.",
     "주요 반도체 공급업체와의 장기 계약 및 협력 관계를 강화하여 안정적인 공급을 확보한다.",
     "다양한 공급처를 확보하여 특정 지역 또는 기업에 대한 의존도를 낮춘다.",
     "반도체 재고 수준을 최적화하고, 잠재적 공급 차질에 대비한 비상 계획을 수립한다."
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-004",
   "lat": 35.75,
   "lng": 51.5148,
   "title": "이란, 호르무즈 해협 통과 예인선 26척 블랙리스트 등재",
   "source": "presstv.co.uk",
   "sources": [
    {
     "url": "https://www.presstv.co.uk/Detail/2026/11/24/781508/iran-blacklists-26-tugboats-over-violations-of-hormuz-transit-arrangements",
     "domain": "presstv.co.uk"
    }
   ],
   "region": "이란, 호르무즈 해협",
   "category": "sanctions",
   "summary": "이란이 호르무즈 해협 통과 규정 위반을 이유로 26척의 예인선을 블랙리스트에 등재했다. 이는 호르무즈 해협을 통한 해상 운송에 대한 이란의 통제 강화 시도로 해석될 수 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 65,
    "automotive": 75,
    "consumer": 65,
    "energy": 85,
    "manufacturing": 75,
    "chemical": 75
   },
   "risk_score": 85,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-25T05:29:21.779343+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 세계 에너지 및 상품 운송의 핵심 목줄이다. 이란의 이러한 조치는 해협 통과 선박에 대한 규제 강화로 이어져, 해상 운송의 불확실성을 높이고 운송 비용 및 시간을 증가시킬 수 있다.",
    "business_impact": "호르무즈 해협을 통과하는 선박의 운항 지연 및 비용 증가가 발생할 수 있다. 이는 원자재 및 에너지 수입에 의존하는 한국 기업의 공급망에 부정적인 영향을 미치며, 물류 비용 상승으로 이어질 수 있다.",
    "recommended_actions": [
     "호르무즈 해협을 통과하는 선박의 운항 규제 및 이란의 정책 변화를 면밀히 주시한다.",
     "선박 운항 파트너사와 협력하여 블랙리스트 등재된 예인선과의 연관성을 확인하고, 잠재적 위험을 평가한다.",
     "해상 운송 계약 시 이란의 규제 변화에 따른 위험 분담 조항을 검토한다.",
     "장기적으로 호르무즈 해협 의존도를 줄이기 위한 공급망 다변화 전략을 고려한다."
    ],
    "confidence": 0.75
   }
  },
  {
   "id": "LIVE-002",
   "lat": 24.6408,
   "lng": 46.7728,
   "title": "중동 지역 후티 반군 공격 위협 지속 및 확전 우려",
   "source": "nepalnational.com / newsday.com / moneycontrol.com / garoweonline.com / samaa.tv",
   "sources": [
    {
     "url": "http://www.nepalnational.com/news/279452752/lebanon-qatar-condemn-houthi-attack-on-riyadh-tower-that-injured-11-including-2-indians",
     "domain": "nepalnational.com"
    },
    {
     "url": "https://www.newsday.com/news/nation/mideast-iran-gaza-israel-houthis-libya-november-24-2026-v21527",
     "domain": "newsday.com"
    },
    {
     "url": "https://www.moneycontrol.com/world/us-warns-americans-in-middle-east-of-increased-threat-of-attacks-by-iran-backed-houthis-article-14088292.html",
     "domain": "moneycontrol.com"
    },
    {
     "url": "https://garoweonline.com/en/news/somalia/saudi-arabia-says-it-can-withstand-prolonged-conflict-with-yemens-houthis",
     "domain": "garoweonline.com"
    },
    {
     "url": "https://www.samaa.tv/2087360948-pakistan-condemns-houthi-attack-on-riyadh-s-financial-centre-pakistan-news",
     "domain": "samaa.tv"
    }
   ],
   "region": "사우디아라비아, 이집트, 중동",
   "category": "maritime",
   "summary": "예멘 후티 반군이 사우디아라비아 리야드에 대한 공격을 감행하고, 미국은 중동 지역 내 이란 지원 후티 반군의 공격 위협 증가를 경고했다. 사우디아라비아는 후티 반군과의 장기 분쟁에 대응할 수 있다고 밝히며 긴장이 고조되고 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 60,
    "automotive": 70,
    "consumer": 60,
    "energy": 80,
    "manufacturing": 70,
    "chemical": 70
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-25T05:29:21.779343+00:00",
   "insight": {
    "why_it_matters": "중동은 주요 에너지 자원 공급원이자 핵심 해상 운송로인 홍해와 수에즈 운하를 포함하고 있다. 후티 반군의 공격은 해상 운송 비용 상승, 운송 지연, 보험료 인상 등 한국 기업의 물류 및 에너지 공급망에 직접적인 영향을 미칠 수 있다.",
    "business_impact": "해상 운송료 및 유류 할증료 인상으로 물류 비용이 증가하고, 운송 지연으로 인한 생산 및 납기 차질이 발생할 수 있다. 에너지 수입 의존도가 높은 한국 기업은 유가 변동성 확대에 노출될 수 있다.",
    "recommended_actions": [
     "중동 지역 해상 운송 경로의 보안 상황을 실시간으로 모니터링하고, 필요시 대체 항로 또는 운송 수단 확보 방안을 검토한다.",
     "해상 보험 계약 조건을 검토하고, 전쟁 위험 보험료 인상 가능성에 대비한다.",
     "에너지 원자재 재고 수준을 점검하고, 공급망 다변화 및 비축량 확보를 고려한다.",
     "물류 파트너사와 긴밀히 협력하여 잠재적 운송 지연에 대한 비상 계획을 수립한다."
    ],
    "confidence": 0.85
   }
  },
  {
   "id": "LIVE-007",
   "lat": -25.0,
   "lng": 135.0,
   "title": "호주, 배터리 제조 역량 강화 촉구",
   "source": "postcourier.com.pg",
   "sources": [
    {
     "url": "https://www.postcourier.com.pg/australia-urged-to-charge-up-battery-manufacturing/",
     "domain": "postcourier.com.pg"
    }
   ],
   "region": "호주",
   "category": "supply_chain",
   "summary": "호주가 배터리 제조 역량을 강화해야 한다는 주장이 제기되었다. 이는 전기차 및 에너지 저장 장치(ESS) 시장의 성장에 따라 핵심 광물 생산국인 호주가 배터리 공급망 내에서 더 큰 역할을 해야 한다는 인식을 반영한다.",
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
    "consumer": 60,
    "energy": 70,
    "manufacturing": 70,
    "chemical": 80
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 85,
   "created_at": "2026-11-25T05:29:21.779343+00:00",
   "insight": {
    "why_it_matters": "호주는 리튬, 니켈 등 배터리 핵심 광물의 주요 생산국이다. 호주의 배터리 제조 역량 강화는 글로벌 배터리 공급망의 변화를 가져올 수 있으며, 이는 한국의 배터리 및 전기차 산업에 원자재 조달처 다변화 기회 또는 경쟁 심화 요인으로 작용할 수 있다.",
    "business_impact": "호주 내 배터리 생산이 확대될 경우, 한국 기업은 핵심 광물 조달의 안정성을 높일 수 있는 기회를 얻을 수 있다. 동시에, 호주가 배터리 완제품 시장에서 경쟁력을 갖추게 되면 한국 배터리 제조업체에 새로운 경쟁 환경이 조성될 수 있다.",
    "recommended_actions": [
     "호주의 배터리 산업 정책 및 투자 동향을 면밀히 모니터링한다.",
     "호주 내 핵심 광물 공급업체 및 잠재적 배터리 제조업체와의 협력 기회를 모색한다.",
     "배터리 원자재 공급망 다변화 전략에 호주를 포함하는 방안을 검토한다.",
     "글로벌 배터리 시장의 경쟁 환경 변화에 대비하여 기술 경쟁력 강화 및 신시장 개척 전략을 수립한다."
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-008",
   "lat": 39.828175,
   "lng": -98.5795,
   "title": "유조선 및 해운 탱커 대상 사이버 공격 발생",
   "source": "techcrunch.com",
   "sources": [
    {
     "url": "https://techcrunch.com/2026/11/24/dozens-of-oil-and-shipping-tankers-hacked-in-recent-weeks-per-report/",
     "domain": "techcrunch.com"
    }
   ],
   "region": "미국, 글로벌",
   "category": "cyber",
   "summary": "최근 몇 주 동안 수십 척의 유조선과 해운 탱커가 해킹 공격을 받았다는 보고가 나왔다. 이는 해상 운송 시스템의 사이버 보안 취약성을 드러내며, 글로벌 물류 및 에너지 공급망에 심각한 위협이 될 수 있다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "energy",
    "manufacturing",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 60,
    "automotive": 70,
    "consumer": 60,
    "energy": 80,
    "manufacturing": 70,
    "chemical": 70
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-25T05:29:21.779343+00:00",
   "insight": {
    "why_it_matters": "해상 운송은 글로벌 공급망의 핵심이며, 유조선 및 탱커는 에너지 및 화학 제품 운송에 필수적이다. 이러한 선박에 대한 사이버 공격은 운항 시스템 마비, 항로 변경, 화물 손실, 데이터 유출 등으로 이어져 물류 지연 및 비용 증가를 초래할 수 있다.",
    "business_impact": "해상 운송 지연 및 차질로 인한 생산 및 납기 일정에 문제가 발생할 수 있다. 운송 중인 에너지 및 원자재의 손실 위험이 증가하며, 사이버 보안 강화 비용이 증가할 수 있다. 이는 특히 해상 운송 의존도가 높은 한국 기업에 큰 영향을 미친다.",
    "recommended_actions": [
     "해운 및 물류 파트너사의 사이버 보안 시스템 및 대응 체계를 점검하도록 요청한다.",
     "자사 선박 또는 운송 계약 선박의 사이버 보안 취약점을 평가하고, 강화 방안을 마련한다.",
     "사이버 공격 발생 시 비상 대응 계획을 수립하고, 관련 부서 간 협력 체계를 구축한다.",
     "사이버 보험 가입 여부를 검토하고, 보장 범위를 확인하여 잠재적 손실에 대비한다."
    ],
    "confidence": 0.8
   }
  }
 ]
};
