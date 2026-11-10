import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { chaptersWithBank, masteryStats } from '../utils/mastery';

// Badges earned from practice, the Mistake Book and tests, and this week's
// effort board for the student's own class and section (questions practised,
// not marks, so every student can climb it).

interface Badge { id: string; icon: string; en: string; ta: string; hintEn: string; hintTa: string; target: number; value: number }

const longestRun = (days: string[]) => {
  const set = new Set(days);
  let best = 0;
  for (const d of days) {
    const prev = new Date(`${d}T00:00:00Z`);
    prev.setUTCDate(prev.getUTCDate() - 1);
    if (set.has(prev.toISOString().slice(0, 10))) continue; // not the start of a run
    let run = 0;
    const cur = new Date(`${d}T00:00:00Z`);
    while (set.has(cur.toISOString().slice(0, 10))) {
      run++;
      cur.setUTCDate(cur.getUTCDate() + 1);
    }
    best = Math.max(best, run);
  }
  return best;
};

// @desc    The student's badges and this week's class effort board
// @route   GET /api/student/achievements
export const achievements = async (req: AuthRequest, res: Response) => {
  try {
    const me = req.user;
    const [stats] = await query(
      `SELECT (SELECT count(*)::int FROM practice_log WHERE user_id = $1) AS answers,
              (SELECT count(*)::int FROM practice_log WHERE user_id = $1 AND correct) AS correct,
              (SELECT count(*)::int FROM mistake_book WHERE student_id = $1 AND fixed_in IS NOT NULL) AS fixed,
              (SELECT count(*)::int FROM mistake_book WHERE student_id = $1 AND recheck_passed) AS remembered,
              (SELECT count(*)::int FROM doubts WHERE student_id = $1) AS doubts,
              (SELECT COALESCE(max(percentage), 0) FROM student_attempts WHERE student_id = $1 AND status = 'completed') AS best_test,
              (SELECT count(*)::int FROM student_attempts WHERE student_id = $1 AND status = 'completed') AS tests`,
      [me._id]
    );
    const days = (
      await query(
        `SELECT DISTINCT to_char((answered_at AT TIME ZONE 'Asia/Kolkata')::date, 'YYYY-MM-DD') AS d FROM practice_log
         WHERE user_id = $1 AND answered_at >= now() - interval '400 days' ORDER BY d`,
        [me._id]
      )
    ).map((r) => r.d as string);
    const subjects = await query(
      `SELECT s.id FROM subjects s JOIN schools sc ON sc.board = s.board WHERE sc.id = $1 AND s.class_grade = $2 AND s.is_active`,
      [me.schoolId, me.classGrade]
    );
    const chapters = await chaptersWithBank(subjects.map((s) => s.id), me.schoolId);
    const mastery = await masteryStats([me._id], subjects.map((s) => s.id), new Map(chapters.map((c) => [c.id, c.bank])));
    const mastered = [...mastery.values()].filter((m) => m.level === 'mastered').length;
    const streak = longestRun(days);

    const b = (id: string, icon: string, en: string, ta: string, hintEn: string, hintTa: string, target: number, value: number): Badge => ({ id, icon, en, ta, hintEn, hintTa, target, value });
    const badges: Badge[] = [
      b('first', '🌱', 'First step', 'முதல் அடி', 'Practise your first question', 'முதல் கேள்வியைப் பயிற்சி செய்யுங்கள்', 1, stats.answers),
      b('streak3', '🔥', '3-day streak', '3 நாள் தொடர்ச்சி', 'Practise 3 days in a row', 'தொடர்ந்து 3 நாட்கள் பயிற்சி', 3, streak),
      b('streak7', '⚡', 'Week warrior', 'வார வீரர்', 'Practise 7 days in a row', 'தொடர்ந்து 7 நாட்கள் பயிற்சி', 7, streak),
      b('streak30', '🏆', 'Unstoppable', 'நிற்காத பயணம்', 'Practise 30 days in a row', 'தொடர்ந்து 30 நாட்கள் பயிற்சி', 30, streak),
      b('q100', '💯', '100 questions', '100 கேள்விகள்', 'Answer 100 practice questions', '100 பயிற்சிக் கேள்விகளுக்கு விடையளியுங்கள்', 100, stats.answers),
      b('q500', '🚀', '500 questions', '500 கேள்விகள்', 'Answer 500 practice questions', '500 பயிற்சிக் கேள்விகள்', 500, stats.answers),
      b('q1000', '🌟', '1000 questions', '1000 கேள்விகள்', 'Answer 1000 practice questions', '1000 பயிற்சிக் கேள்விகள்', 1000, stats.answers),
      b('fix25', '🔧', 'Mistake fixer', 'தவறு திருத்துநர்', 'Fix 25 mistakes', '25 தவறுகளைச் சரியாக்குங்கள்', 25, stats.fixed),
      b('fix100', '🛠️', 'Mistake master', 'தவறு வென்றவர்', 'Fix 100 mistakes', '100 தவறுகளைச் சரியாக்குங்கள்', 100, stats.fixed),
      b('memory10', '🧠', 'Sharp memory', 'கூர் நினைவு', 'Still remember 10 fixed mistakes a week later', 'சரியாக்கிய 10 தவறுகளை ஒரு வாரம் கழித்தும் நினைவில் வையுங்கள்', 10, stats.remembered),
      b('master1', '🎓', 'Chapter master', 'பாடத் தேர்ச்சி', 'Master a chapter', 'ஒரு பாடத்தில் தேர்ச்சி பெறுங்கள்', 1, mastered),
      b('master5', '📚', 'Five chapters', 'ஐந்து பாடங்கள்', 'Master 5 chapters', '5 பாடங்களில் தேர்ச்சி', 5, mastered),
      b('test90', '🥇', 'Top score', 'உச்ச மதிப்பெண்', 'Score 90% or more in a test', 'ஒரு தேர்வில் 90% அல்லது அதற்கு மேல்', 90, Math.round(Number(stats.best_test))),
      b('curious', '🙋', 'Curious mind', 'ஆர்வ மனம்', 'Ask your teacher about a question', 'ஒரு கேள்வி பற்றி ஆசிரியரிடம் கேளுங்கள்', 1, stats.doubts),
    ];

    // This week (from Monday, India time): questions practised by classmates of the same class and section
    const board = await query(
      `SELECT u.id, u.name, count(pl.id)::int AS answers, count(pl.id) FILTER (WHERE pl.correct)::int AS correct
       FROM users u
       LEFT JOIN practice_log pl ON pl.user_id = u.id
         AND pl.answered_at >= (date_trunc('week', now() AT TIME ZONE 'Asia/Kolkata') AT TIME ZONE 'Asia/Kolkata')
       WHERE u.school_id = $1 AND u.role = 'student' AND u.is_active AND u.class_grade = $2 AND u.section IS NOT DISTINCT FROM $3
       GROUP BY u.id, u.name ORDER BY count(pl.id) DESC, count(pl.id) FILTER (WHERE pl.correct) DESC, u.name`,
      [me.schoolId, me.classGrade, me.section]
    );
    const ranked = board.map((r, i) => ({ rank: i + 1, ...r }));
    const mine = ranked.find((r) => r.id === me._id);
    const shortName = (name: string) => {
      const [first, ...rest] = name.split(' ');
      return rest.length ? `${first} ${rest[rest.length - 1][0]}` : first;
    };
    res.status(200).json({
      success: true,
      data: {
        badges: badges.map((x) => ({ ...x, earned: x.value >= x.target, progress: Math.min(1, x.value / x.target) })),
        stats: { answers: stats.answers, correct: stats.correct, fixed: stats.fixed, remembered: stats.remembered, mastered, longestStreak: streak, tests: stats.tests },
        board: {
          top: ranked.filter((r) => r.answers > 0).slice(0, 10).map((r) => ({ rank: r.rank, name: shortName(r.name), answers: r.answers, me: r.id === me._id })),
          me: mine ? { rank: mine.rank, answers: mine.answers, of: ranked.length } : null,
        },
      },
    });
  } catch (error: any) {
    console.error('Achievements error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error loading achievements' });
  }
};
