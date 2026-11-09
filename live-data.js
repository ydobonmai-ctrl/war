// 자동 생성 파일 (scripts/update_live.py) — 직접 수정하지 마세요
window.LIVE_DATA = {
 "generatedAt": "2026-11-09T02:44:10.265121+00:00",
 "window": {
  "hours": 24,
  "files": 94,
  "until": "2026-11-09T02:45:00+00:00"
 },
 "source": "GDELT 2.0 Events (15분 단위 공개 파일)",
 "model": "gemini-2.5-flash",
 "stats": {
  "matched_events": 288,
  "by_category": {
   "oil_commodity": 23,
   "maritime": 167,
   "sanctions": 39,
   "supply_chain": 30,
   "fx_macro": 20,
   "cyber": 9
  },
  "top_places": [
   "Saudi Arabia",
   "Yemen",
   "United States",
   "Iran",
   "Syria",
   "Israel",
   "India",
   "China"
  ],
  "candidates": 30
 },
 "events": [
  {
   "id": "LIVE-002",
   "lat": 24.6408,
   "lng": 46.7728,
   "title": "호르무즈 해협 인근 유조선 피격 및 화재 발생",
   "source": "news.az / presstv.co.uk / middleeastmonitor.com",
   "sources": [
    {
     "url": "https://news.az/news/us-and-iran-report-attacks-on-vessels-near-strait-of-hormuz",
     "domain": "news.az"
    },
    {
     "url": "https://www.presstv.co.uk/Detail/2026/11/08/780272/another-tanker-catches-fire-after-striking-mine-in-strait-of-hormuz",
     "domain": "presstv.co.uk"
    },
    {
     "url": "https://www.middleeastmonitor.com/20261108-irans-revolutionary-guards-say-2-oil-tankers-hit-mines-caught-fire-near-strait-of-hormuz/",
     "domain": "middleeastmonitor.com"
    },
    {
     "url": "https://www.presstv.co.uk/Detail/2026/11/07/780165/tanker-catches-fire-after-hitting-sea-mine-east-of-strait-of-hormuz-iran-navy",
     "domain": "presstv.co.uk"
    }
   ],
   "region": "호르무즈 해협, 이란",
   "category": "maritime",
   "summary": "호르무즈 해협 인근에서 유조선이 기뢰에 피격되어 화재가 발생했으며, 미국과 이란 양측 모두 선박 공격을 보고했다. 이란 혁명수비대는 호르무즈 해협 근처에서 2척의 유조선이 기뢰에 맞아 불이 났다고 밝혔다.",
   "impact_industries": [
    "energy",
    "chemical"
   ],
   "industry_scores": {
    "semiconductor": 15,
    "automotive": 30,
    "consumer": 20,
    "energy": 90,
    "manufacturing": 35,
    "chemical": 40
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-09T02:44:10.265121+00:00",
   "insight": {
    "why_it_matters": "호르무즈 해협은 세계 원유 수송량의 상당 부분이 통과하는 핵심 해상 통로이다. 이 지역에서의 선박 공격은 국제 유가에 즉각적인 영향을 미치고, 해상 물류의 안전성을 심각하게 저해한다.",
    "business_impact": "한국 기업은 원유 및 LNG 등 에너지 자원 수입에 차질을 겪거나 비용이 급증할 수 있다. 해상 운송 보험료가 인상되고, 선박 운항이 지연되거나 중단될 위험이 커져 생산 및 유통 계획에 큰 혼란을 초래할 수 있다.",
    "recommended_actions": [
     "호르무즈 해협을 통과하는 선박의 실시간 운항 정보 및 보안 상황을 주시한다.",
     "원유 및 가스 재고 수준을 점검하고, 비상시를 대비한 추가 재고 확보 또는 대체 조달 방안을 마련한다.",
     "해상 운송 계약 시 전쟁 위험 보험(War Risk Insurance) 조건 및 보상 범위를 면밀히 검토한다.",
     "물류 파트너와 협력하여 잠재적 운송 지연 또는 중단 시의 비상 계획을 수립한다."
    ],
    "confidence": 0.9
   }
  },
  {
   "id": "LIVE-004",
   "lat": 35.0,
   "lng": 105.0,
   "title": "엔비디아 CEO, 중국 칩 금지 및 미국 경쟁에 대한 입장 표명",
   "source": "wccftech.com",
   "sources": [
    {
     "url": "https://wccftech.com/nvidia-jensen-huang-rejects-anthropic-china-chip-ban-america-competition-vera-rubin/",
     "domain": "wccftech.com"
    }
   ],
   "region": "중국",
   "category": "supply_chain",
   "summary": "엔비디아의 젠슨 황 CEO가 중국 칩 금지 및 미국과의 경쟁에 대한 입장을 밝혔다. 이는 반도체 산업의 지정학적 긴장과 공급망 재편 움직임을 시사한다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "consumer",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 90,
    "automotive": 60,
    "consumer": 40,
    "energy": 5,
    "manufacturing": 50,
    "chemical": 10
   },
   "risk_score": 90,
   "risk_level": "high",
   "prev_score": 90,
   "created_at": "2026-11-09T02:44:10.265121+00:00",
   "insight": {
    "why_it_matters": "미국과 중국 간의 반도체 기술 패권 경쟁은 글로벌 공급망에 지대한 영향을 미치고 있다. 특정 국가에 대한 칩 금지 조치나 기술 수출 통제는 반도체 산업의 생산 및 혁신 환경을 근본적으로 변화시킬 수 있다.",
    "business_impact": "한국 반도체 기업은 주요 시장인 중국으로의 수출 제한 또는 기술 협력의 어려움에 직면할 수 있다. 또한, 반도체를 사용하는 자동차, 전자제품 등 한국 제조 기업들은 부품 조달의 불확실성이 커지고, 기술 개발 방향에도 영향을 받을 수 있다.",
    "recommended_actions": [
     "미중 반도체 정책 및 규제 동향을 면밀히 모니터링하고, 잠재적 리스크를 평가한다.",
     "반도체 공급망 다변화 전략을 수립하고, 특정 국가 의존도를 줄이는 방안을 모색한다.",
     "기술 수출 통제 및 제재 대상 품목에 대한 내부 컴플라이언스 시스템을 강화한다.",
     "R&D 투자를 통해 자체 기술 경쟁력을 확보하고, 미래 시장 변화에 유연하게 대응할 준비를 한다."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-001",
   "lat": 32.0,
   "lng": 53.0,
   "title": "후티 반군, 사우디아라비아 아람코 시설 및 여러 지역 공격",
   "source": "illawarramercury.com.au / thepeninsulaqatar.com / arabnews.com / qatar-tribune.c",
   "sources": [
    {
     "url": "https://www.illawarramercury.com.au/story/9388058/houthi-attack-damages-aramco-building-in-riyadh/",
     "domain": "illawarramercury.com.au"
    },
    {
     "url": "http://thepeninsulaqatar.com/article/08/11/2026/qatar-strongly-condemns-continued-houthi-attacks-on-several-areas-in-saudi-arabia",
     "domain": "thepeninsulaqatar.com"
    },
    {
     "url": "https://www.arabnews.com/middle-east/qatar-bahrain-and-syria-condemn-houthi-missile-attacks-on-riyadh-3010523",
     "domain": "arabnews.com"
    },
    {
     "url": "https://www.qatar-tribune.com/article/263204/latest-news/qatar-condemns-continued-houthi-attacks-on-several-areas-in-saudi-arabia",
     "domain": "qatar-tribune.com"
    },
    {
     "url": "https://aninews.in/news/world/middle-east/saudi-energy-ministry-confirms-attempted-strike-on-aramco-facility-in-riyadh-after-houthis-claim-operations-against-kingdom20261108151231/",
     "domain": "aninews.in"
    }
   ],
   "region": "사우디아라비아, 예멘",
   "category": "maritime",
   "summary": "예멘 후티 반군이 사우디아라비아의 수도 리야드에 위치한 아람코 시설을 공격했으며, 사우디아라비아의 여러 지역에 대한 공격을 지속하고 있다. 카타르와 시리아 등 주변국들은 이러한 공격을 강력히 규탄했다.",
   "impact_industries": [
    "energy"
   ],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 15,
    "energy": 80,
    "manufacturing": 25,
    "chemical": 30
   },
   "risk_score": 80,
   "risk_level": "high",
   "prev_score": 80,
   "created_at": "2026-11-09T02:44:10.265121+00:00",
   "insight": {
    "why_it_matters": "중동 지역의 지정학적 긴장이 고조되고 있으며, 이는 세계 에너지 공급망에 직접적인 위협이 된다. 주요 에너지 생산 시설에 대한 공격은 유가 변동성을 심화시키고 해상 운송의 안전을 위협할 수 있다.",
    "business_impact": "한국 기업은 중동에서 수입하는 원유 및 가스 가격 상승에 직면할 수 있으며, 이는 생산 비용 증가로 이어진다. 또한, 중동 지역을 경유하는 해상 물류의 보험료 인상 및 운송 지연 가능성이 높아져 공급망 운영에 차질이 발생할 수 있다.",
    "recommended_actions": [
     "중동발 원유 및 가스 가격 동향을 면밀히 모니터링하고, 에너지 조달 다변화 방안을 검토한다.",
     "중동 항로를 이용하는 선박의 운항 안전 정보를 확인하고, 필요시 대체 항로 또는 운송 수단을 고려한다.",
     "해상 보험료 인상 가능성에 대비하여 보험 계약 조건을 재검토하고, 추가 비용 발생에 대한 재무적 영향을 분석한다.",
     "중동 지역 내 협력사 및 공급망 파트너의 비상 계획을 확인하고, 잠재적 중단에 대비한 컨틴전시 플랜을 수립한다."
    ],
    "confidence": 0.8
   }
  },
  {
   "id": "LIVE-005",
   "lat": 31.2222,
   "lng": 121.458,
   "title": "중국 구리 프리미엄 사상 최고치 기록",
   "source": "hellenicshippingnews.com",
   "sources": [
    {
     "url": "https://www.hellenicshippingnews.com/china-copper-premium-hits-record-as-market-weighs-us-stock-shift/",
     "domain": "hellenicshippingnews.com"
    }
   ],
   "region": "중국",
   "category": "oil_commodity",
   "summary": "중국의 구리 프리미엄이 사상 최고치를 기록했다. 이는 미국 재고 이동과 시장 상황이 복합적으로 작용한 결과로 보인다.",
   "impact_industries": [
    "semiconductor",
    "automotive",
    "manufacturing"
   ],
   "industry_scores": {
    "semiconductor": 40,
    "automotive": 50,
    "consumer": 20,
    "energy": 30,
    "manufacturing": 60,
    "chemical": 5
   },
   "risk_score": 60,
   "risk_level": "medium",
   "prev_score": 60,
   "created_at": "2026-11-09T02:44:10.265121+00:00",
   "insight": {
    "why_it_matters": "구리는 '닥터 코퍼(Dr. Copper)'라고 불릴 정도로 세계 경제의 건강 상태를 나타내는 지표 중 하나이다. 중국의 구리 프리미엄 상승은 글로벌 구리 공급망의 불안정성 또는 수요 증가를 반영하며, 이는 다양한 산업의 원자재 비용에 영향을 미친다.",
    "business_impact": "구리를 주요 원자재로 사용하는 한국의 반도체, 자동차, 전자제품, 건설 및 전력 인프라 관련 기업들은 원자재 조달 비용 상승에 직면할 수 있다. 이는 생산 원가 증가로 이어져 수익성에 부정적인 영향을 미칠 수 있다.",
    "recommended_actions": [
     "글로벌 구리 시장 동향 및 가격 변동을 면밀히 모니터링한다.",
     "구리 구매 계약 시 장기 계약 또는 헤징 전략을 검토하여 가격 변동 리스크를 관리한다.",
     "구리 대체 소재 개발 또는 재활용 기술 도입을 통해 원자재 의존도를 낮추는 방안을 모색한다.",
     "재고 수준을 점검하고, 필요시 전략적 재고 확보를 고려한다."
    ],
    "confidence": 0.75
   }
  },
  {
   "id": "LIVE-003",
   "lat": 28.6667,
   "lng": 77.4333,
   "title": "인도 가자아바드, 나자프가르, 나렐라 지역 공장 화재 발생",
   "source": "aninews.in",
   "sources": [
    {
     "url": "https://aninews.in/news/national/general-news/massive-fire-breaks-out-at-plastic-factory-in-ghaziabad-six-fire-tenders-deployed20261108194735/",
     "domain": "aninews.in"
    },
    {
     "url": "https://aninews.in/news/national/general-news/massive-fire-breaks-out-at-garment-factory-in-delhis-najafgarh20261109003733/",
     "domain": "aninews.in"
    },
    {
     "url": "https://aninews.in/news/national/general-news/fire-breaks-out-at-rubber-factory-in-delhis-narela20261109010121/",
     "domain": "aninews.in"
    }
   ],
   "region": "인도",
   "category": "supply_chain",
   "summary": "인도 가자아바드의 플라스틱 공장, 델리 나자프가르의 의류 공장, 델리 나렐라의 고무 공장에서 대규모 화재가 발생했다. 여러 소방대가 진화 작업에 투입되었다.",
   "impact_industries": [
    "consumer"
   ],
   "industry_scores": {
    "semiconductor": 5,
    "automotive": 15,
    "consumer": 40,
    "energy": 0,
    "manufacturing": 30,
    "chemical": 20
   },
   "risk_score": 40,
   "risk_level": "medium",
   "prev_score": 40,
   "created_at": "2026-11-09T02:44:10.265121+00:00",
   "insight": {
    "why_it_matters": "인도는 세계 제조 공급망에서 중요한 위치를 차지하고 있으며, 특히 소비재 및 특정 산업 부품 생산의 주요 거점이다. 여러 공장에서의 동시다발적인 화재는 해당 산업의 생산 차질과 공급망 불안정성을 야기할 수 있다.",
    "business_impact": "인도에서 플라스틱, 고무, 의류 등 원자재나 부품을 조달하는 한국 기업은 생산 지연, 공급 부족, 원가 상승 등의 위험에 직면할 수 있다. 이는 최종 제품의 생산 일정에 영향을 미치고, 재고 관리에도 어려움을 줄 수 있다.",
    "recommended_actions": [
     "인도 내 주요 공급처의 생산 현황 및 재고 수준을 확인하고, 화재 피해 여부를 파악한다.",
     "피해를 입은 공급처가 있을 경우, 대체 공급처 확보 방안을 신속히 검토한다.",
     "인도발 부품 및 원자재의 운송 지연 가능성에 대비하여 생산 계획을 조정한다.",
     "공급망 내 재고 수준을 점검하고, 필요시 안전 재고를 확충하는 방안을 고려한다."
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-006",
   "lat": 14.6042,
   "lng": 120.982,
   "title": "필리핀 농업부, 수입 돼지고기 제품 금지 조치",
   "source": "philstar.com",
   "sources": [
    {
     "url": "https://www.philstar.com/headlines/2026/11/09/2568813/department-agriculture-bans-imported-pork-cuts",
     "domain": "philstar.com"
    }
   ],
   "region": "필리핀",
   "category": "sanctions",
   "summary": "필리핀 농업부가 수입 돼지고기 제품에 대한 금지 조치를 발표했다. 이는 특정 질병 확산 방지 또는 국내 산업 보호를 위한 조치로 해석될 수 있다.",
   "impact_industries": [],
   "industry_scores": {
    "semiconductor": 0,
    "automotive": 0,
    "consumer": 30,
    "energy": 0,
    "manufacturing": 5,
    "chemical": 0
   },
   "risk_score": 30,
   "risk_level": "low",
   "prev_score": 30,
   "created_at": "2026-11-09T02:44:10.265121+00:00",
   "insight": {
    "why_it_matters": "특정 국가의 수입 금지 조치는 해당 품목을 수출하는 기업에 직접적인 타격을 주며, 글로벌 식품 공급망의 흐름을 변화시킬 수 있다. 이는 무역 장벽의 일종으로, 관련 산업의 시장 접근성을 제한한다.",
    "business_impact": "필리핀으로 돼지고기 또는 돼지고기 함유 제품을 수출하는 한국 식품 및 소비재 기업은 수출 물량 감소 및 매출 하락에 직면할 수 있다. 또한, 필리핀 시장에 대한 의존도가 높은 기업은 사업 전략 재검토가 필요할 수 있다.",
    "recommended_actions": [
     "필리핀의 돼지고기 수입 금지 조치에 대한 상세 내용(기간, 대상 품목 등)을 확인한다.",
     "필리핀 시장으로의 수출 계획을 재검토하고, 대체 수출 시장을 모색한다.",
     "국내 생산 및 재고 관리에 미칠 영향을 분석하고, 필요시 생산량을 조정한다.",
     "필리핀 정부와의 소통 채널을 통해 조치 해제 가능성 및 조건을 파악한다."
    ],
    "confidence": 0.6
   }
  },
  {
   "id": "LIVE-007",
   "lat": 54.0,
   "lng": -4.0,
   "title": "EU-영국 탄소 시장 연계, 국경세 자동 면제 불가",
   "source": "econotimes.com",
   "sources": [
    {
     "url": "https://econotimes.com/EU-UK-Carbon-Market-Link-Would-Not-Automatically-Waive-Border-Charges-1773151",
     "domain": "econotimes.com"
    }
   ],
   "region": "유럽, 영국",
   "category": "fx_macro",
   "summary": "EU와 영국 간 탄소 시장 연계가 국경세를 자동으로 면제하지 않을 것이라는 경고가 나왔다. 이는 양측 간의 무역 및 환경 정책에 복잡한 영향을 미칠 수 있다.",
   "impact_industries": [],
   "industry_scores": {
    "semiconductor": 10,
    "automotive": 20,
    "consumer": 15,
    "energy": 25,
    "manufacturing": 30,
    "chemical": 20
   },
   "risk_score": 30,
   "risk_level": "low",
   "prev_score": 30,
   "created_at": "2026-11-09T02:44:10.265121+00:00",
   "insight": {
    "why_it_matters": "탄소 국경세는 탄소 배출 규제가 약한 국가에서 생산된 제품에 대해 수입국이 세금을 부과하는 제도이다. EU와 영국의 이러한 움직임은 글로벌 무역 환경에서 탄소 배출량 관리가 기업의 경쟁력에 직접적인 영향을 미치게 됨을 의미한다.",
    "business_impact": "유럽 및 영국으로 제품을 수출하는 한국 제조 기업들은 탄소 국경세 부과 가능성에 대비해야 한다. 이는 수출 제품의 가격 경쟁력을 약화시키고, 생산 과정에서의 탄소 배출량 감축을 위한 추가 투자를 요구할 수 있다.",
    "recommended_actions": [
     "EU 및 영국의 탄소 국경세 도입 일정 및 대상 품목, 산정 방식 등을 면밀히 파악한다.",
     "수출 제품의 탄소 발자국을 측정하고, 탄소 국경세 부과 시 예상되는 추가 비용을 분석한다.",
     "생산 공정의 에너지 효율 개선 및 재생에너지 전환을 통해 탄소 배출량을 감축하는 방안을 모색한다.",
     "탄소 배출권 거래 시장 동향을 주시하고, 관련 규제 변화에 대한 대응 전략을 수립한다."
    ],
    "confidence": 0.7
   }
  },
  {
   "id": "LIVE-008",
   "lat": 15.0,
   "lng": 115.0,
   "title": "이란 연계 선박, 오만만 해저 케이블 인근에서 포착",
   "source": "english.aawsat.com",
   "sources": [
    {
     "url": "https://english.aawsat.com/world/5338812-iran-linked-ships-hover-over-subsea-cables-gulf-oman",
     "domain": "english.aawsat.com"
    }
   ],
   "region": "오만만, 남중국해",
   "category": "maritime",
   "summary": "이란과 연계된 선박들이 오만만 해저 케이블 인근에서 포착되었다. 이는 해저 통신 인프라에 대한 잠재적 위협으로 해석될 수 있다.",
   "impact_industries": [],
   "industry_scores": {
    "semiconductor": 20,
    "automotive": 10,
    "consumer": 15,
    "energy": 10,
    "manufacturing": 25,
    "chemical": 5
   },
   "risk_score": 25,
   "risk_level": "low",
   "prev_score": 25,
   "created_at": "2026-11-09T02:44:10.265121+00:00",
   "insight": {
    "why_it_matters": "해저 케이블은 전 세계 인터넷 트래픽의 대부분을 처리하는 핵심 통신 인프라이다. 이란 연계 선박의 활동은 해저 케이블 손상 또는 감청 가능성을 제기하며, 이는 글로벌 통신 및 데이터 흐름에 심각한 교란을 초래할 수 있다.",
    "business_impact": "해저 케이블 손상 시 한국 기업은 국제 통신망 장애로 인해 해외 지사와의 소통, 클라우드 기반 서비스 이용, 글로벌 공급망 관리 시스템 운영 등에 차질을 겪을 수 있다. 이는 생산 및 물류 지연, 금융 거래 중단 등 광범위한 비즈니스 운영에 부정적인 영향을 미칠 수 있다.",
    "recommended_actions": [
     "해저 케이블 인근 지역의 해상 활동 및 지정학적 동향을 지속적으로 모니터링한다.",
     "글로벌 통신망 장애 발생 시를 대비한 비상 통신 계획 및 데이터 백업 전략을 수립한다.",
     "클라우드 서비스 제공업체와 협력하여 데이터 센터의 지리적 분산 및 복원력 강화 방안을 논의한다.",
     "공급망 파트너와 통신 장애 발생 시의 정보 공유 및 대응 프로토콜을 마련한다."
    ],
    "confidence": 0.65
   }
  }
 ]
};
