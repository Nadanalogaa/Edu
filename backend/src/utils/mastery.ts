import { query } from '../config/database';

// Chapter mastery from every answer a student gave in practice and in tests:
//   notStarted: no answers yet
//   learning:   some answers, but not yet "good"
//   good:       at least 8 different questions and 65%+ of the last 20 answers right
//   mastered:   at least 15 different questions (or half the chapter's bank, if smaller)
//               and 85%+ of the last 20 answers right

export type Level = 'notStarted' | 'learning' | 'good' | 'mastered';
export const LEVELS: Level[] = ['notStarted', 'learning', 'good', 'mastered'];

export interface ChapterStats {
  answers: number;
  questions: number;
  accuracy: number | null;
  recentAccuracy: number | null;
  level: Level;
}

export const levelOf = (distinct: number, recent: number, recentCorrect: number, bank: number): Level => {
  if (!distinct) return 'notStarted';
  const acc = recent ? recentCorrect / recent : 0;
  if (distinct >= Math.min(15, Math.max(4, Math.ceil(bank / 2))) && acc >= 0.85) return 'mastered';
  if (distinct >= Math.min(8, Math.max(3, Math.ceil(bank / 3))) && acc >= 0.65) return 'good';
  return 'learning';
};

const pct = (a: number, b: number) => (b ? Math.round((a / b) * 1000) / 10 : null);

/** Answer counts per student and chapter (key `${studentId}|${chapterId}`), for chapters of the given subjects. */
export const masteryStats = async (studentIds: string[], subjectIds: string[], bankSize: Map<string, number>) => {
  const map = new Map<string, ChapterStats>();
  if (!studentIds.length || !subjectIds.length) return map;
  const rows = await query(
    `WITH ans AS (
       SELECT pl.user_id AS student_id, pl.question_id, pl.correct, pl.answered_at AS at
       FROM practice_log pl WHERE pl.user_id = ANY($1::uuid[])
       UNION ALL
       SELECT sa.student_id, (a->>'questionId')::uuid, (a->>'isCorrect')::boolean, sa.end_time
       FROM student_attempts sa, jsonb_array_elements(sa.answers) a
       WHERE sa.student_id = ANY($1::uuid[]) AND sa.status = 'completed' AND COALESCE((a->>'selectedAnswer')::int, -1) >= 0
     ), j AS (
       SELECT ans.*, q.chapter_id, row_number() OVER (PARTITION BY ans.student_id, q.chapter_id ORDER BY ans.at DESC) AS rn
       FROM ans JOIN questions q ON q.id = ans.question_id
       WHERE q.subject_id = ANY($2::uuid[]) AND q.chapter_id IS NOT NULL
     )
     SELECT student_id, chapter_id, count(*)::int AS answers, count(DISTINCT question_id)::int AS distinct_q,
            count(*) FILTER (WHERE correct)::int AS correct,
            count(*) FILTER (WHERE rn <= 20)::int AS recent, count(*) FILTER (WHERE rn <= 20 AND correct)::int AS recent_correct
     FROM j GROUP BY student_id, chapter_id`,
    [studentIds, subjectIds]
  );
  for (const r of rows) {
    map.set(`${r.student_id}|${r.chapter_id}`, {
      answers: r.answers,
      questions: r.distinct_q,
      accuracy: pct(r.correct, r.answers),
      recentAccuracy: pct(r.recent_correct, r.recent),
      level: levelOf(r.distinct_q, r.recent, r.recent_correct, bankSize.get(r.chapter_id) || 0),
    });
  }
  return map;
};

/** Chapters of the subjects with the number of questions a school's students can practise. */
export const chaptersWithBank = async (subjectIds: string[], schoolId: string) =>
  subjectIds.length
    ? query(
        `SELECT c.id, c.subject_id, c.number, c.name_en, c.name_ta,
                (SELECT count(*)::int FROM questions q WHERE q.chapter_id = c.id AND q.is_active AND (q.school_id IS NULL OR q.school_id = $2)) AS bank
         FROM chapters c WHERE c.subject_id = ANY($1::uuid[]) AND c.is_active ORDER BY c.number`,
        [subjectIds, schoolId]
      )
    : Promise.resolve([] as any[]);
