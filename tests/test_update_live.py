"""scripts/update_live.py 단위 테스트 — 네트워크·API 키 없이 검증 로직만 확인한다.

    python -m unittest discover -s tests -v
"""
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / 'scripts'))
import update_live as ul  # noqa: E402


def gdelt_row(url, root='19', code='190', is_root='1', articles='5', place='Riyadh, Saudi Arabia', lat='24.6', lng='46.7'):
    """GDELT 2.0 사건 파일 한 줄(61칸) 중 스크립트가 쓰는 칸만 채운다."""
    r = [''] * 61
    r[25], r[26], r[28], r[30], r[33] = is_root, code, root, '-5.0', articles
    r[52], r[56], r[57], r[60] = place, lat, lng, url
    return r


class SlugTitleTests(unittest.TestCase):
    def test_readable_slug_becomes_title(self):
        self.assertEqual(ul.slug_title('https://x.com/world/houthi-drone-strikes-tanker-in-red-sea.html'),
                         'houthi drone strikes tanker in red sea')

    def test_numeric_or_short_slug_rejected(self):
        self.assertIsNone(ul.slug_title('https://x.com/news/12345678'))
        self.assertIsNone(ul.slug_title('https://x.com/a-b'))
        self.assertIsNone(ul.slug_title('https://x.com/'))

    def test_long_numeric_id_is_removed(self):
        self.assertEqual(ul.slug_title('https://x.com/us-imposes-new-sanctions-on-iran-202611081234'),
                         'us imposes new sanctions on iran')


class CategoryTests(unittest.TestCase):
    def test_word_boundary_prevents_false_match(self):
        # 'port'가 report·support에, 'ship'이 relationship에 걸리던 버그의 회귀 테스트
        self.assertIsNone(ul.category_of('https://x.com/annual-report-shows-support-for-relationship'))

    def test_keywords_and_plurals(self):
        self.assertEqual(ul.category_of('https://x.com/houthis-attack-ships-in-red-sea'), 'maritime')
        self.assertEqual(ul.category_of('https://x.com/eu-adds-new-sanctions-on-russia'), 'sanctions')
        self.assertEqual(ul.category_of('https://x.com/chip-shortage-hits-automakers'), 'supply_chain')

    def test_domain_is_not_used_for_matching(self):
        self.assertIsNone(ul.category_of('https://oilprice.com/latest-football-results-today'))


class PickCandidatesTests(unittest.TestCase):
    def test_filters_codes_root_events_and_dedupes(self):
        rows = [
            gdelt_row('https://a.com/houthi-missile-attack-on-saudi-oil-facility'),
            gdelt_row('https://b.com/houthi-missile-attack-on-saudi-oil-facility', articles='9'),  # 같은 제목 재배포
            gdelt_row('https://c.com/houthi-missile-attack-on-saudi-oil-plant', root='04'),        # 협의(04)는 제외
            gdelt_row('https://d.com/navy-escorts-tankers-through-hormuz-strait', is_root='0'),    # 비대표 사건 제외
            gdelt_row('https://e.com/local-team-wins-the-cup-again'),                               # 분류 키워드 없음
            ['too', 'short'],                                                                       # 깨진 줄
        ]
        cands, stats = ul.pick_candidates(rows)
        self.assertEqual(len(cands), 1)
        self.assertEqual(cands[0]['url'], 'https://b.com/houthi-missile-attack-on-saudi-oil-facility')  # 기사 수가 많은 쪽
        self.assertEqual(stats['matched_events'], 2)

    def test_sanction_event_code_overrides_keywords(self):
        cands, _ = ul.pick_candidates([gdelt_row('https://a.com/officials-meet-to-discuss-regional-plans', root='16', code='163')])
        self.assertEqual(cands[0]['category'], 'sanctions')


class BuildValidationTests(unittest.TestCase):
    def setUp(self):
        self.cands, _ = ul.pick_candidates([
            gdelt_row('https://a.com/houthi-missile-attack-on-saudi-oil-facility'),
            gdelt_row('https://b.com/iran-warns-ships-in-hormuz-strait-after-blast', place='Strait of Hormuz, Iran'),
        ])
        self.stats = {'matched_events': 2, 'by_category': {}, 'top_places': []}
        ul.OUT = Path(__file__).resolve().parent / '_no_previous_file.js'  # 이전 점수 없음

    def item(self, **kw):
        base = {'source_ids': [1], 'title': '사건', 'region': '사우디아라비아', 'category': 'oil_commodity',
                'summary': '요약', 'scores': {k: 30 for k in ul.INDUSTRIES}, 'why_it_matters': '이유',
                'business_impact': '영향', 'recommended_actions': ['확인 1', '확인 2', '확인 3'], 'confidence': 0.5}
        base.update(kw)
        return base

    def build(self, items):
        from datetime import datetime
        return ul.build('test-model', items, self.cands, self.stats, 48, datetime(2026, 11, 8, 11, 0))

    def test_items_without_valid_source_are_dropped(self):
        out = self.build([self.item(), self.item(source_ids=[99]), self.item(source_ids=[])])
        self.assertEqual(len(out['events']), 1)

    def test_unknown_category_is_dropped(self):
        out = self.build([self.item(), self.item(category='politics')])
        self.assertEqual([e['category'] for e in out['events']], ['oil_commodity'])

    def test_scores_are_clamped_and_level_follows_max(self):
        scores = {k: 0 for k in ul.INDUSTRIES}
        scores.update(energy=150, chemical=-20)
        e = self.build([self.item(scores=scores)])['events'][0]
        self.assertEqual(e['industry_scores']['energy'], 100)
        self.assertEqual(e['industry_scores']['chemical'], 0)
        self.assertEqual((e['risk_score'], e['risk_level']), (100, 'high'))
        self.assertEqual(e['impact_industries'], ['energy'])

    def test_risk_level_thresholds(self):
        def level(v):
            return self.build([self.item(scores={k: v for k in ul.INDUSTRIES})])['events'][0]['risk_level']
        self.assertEqual([level(69), level(70), level(39), level(40)], ['medium', 'high', 'low', 'medium'])

    def test_confidence_and_actions_are_bounded(self):
        e = self.build([self.item(confidence=3, recommended_actions=[str(i) for i in range(9)])])['events'][0]
        self.assertEqual(e['insight']['confidence'], 1.0)
        self.assertEqual(len(e['insight']['recommended_actions']), 5)

    def test_sources_attached_from_candidate_list(self):
        e = self.build([self.item(source_ids=[2, 1])])['events'][0]
        self.assertEqual({s['domain'] for s in e['sources']}, {'a.com', 'b.com'})

    def test_no_valid_event_raises_so_previous_file_is_kept(self):
        with self.assertRaises(RuntimeError):
            self.build([self.item(source_ids=[42])])
        with self.assertRaises(RuntimeError):
            self.build('not a list')


if __name__ == '__main__':
    unittest.main()
