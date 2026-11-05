import { BankQuestion } from './science03Fluids';

// Loads textbook question-bank chapters into the shared bank. Options are
// shuffled per question with a fixed seed (so every build gives the same
// order, identical in English and Tamil); assertion-reason questions keep the
// standard (a)-(d) order.

const quote = (value: string) => `'${value.replace(/'/g, "''")}'`;
const json = (value: unknown) => `${quote(JSON.stringify(value))}::jsonb`;

const hash = (text: string) => {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
};

/** The same permutation of [0,1,2,3] every time for the same question text. */
const permutation = (seedText: string) => {
  let seed = hash(seedText);
  const order = [0, 1, 2, 3];
  for (let i = order.length - 1; i > 0; i--) {
    seed = Math.imul(seed ^ (seed >>> 15), 2246822519) >>> 0;
    const j = seed % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
};

const isAssertionReason = (q: BankQuestion) => q.en.options[0].startsWith('Both assertion and reason');

export const shuffled = (q: BankQuestion) => {
  if (isAssertionReason(q)) return { optionsEn: q.en.options, optionsTa: q.ta.options, answer: q.answer };
  const order = permutation(q.en.q);
  return {
    optionsEn: order.map((i) => q.en.options[i]),
    optionsTa: order.map((i) => q.ta.options[i]),
    answer: order.indexOf(q.answer),
  };
};

/**
 * SQL that replaces a chapter's sample questions in the shared bank with the
 * textbook question bank for it (earlier sample questions are kept but hidden).
 */
export const bankChapterSql = (board: string, classGrade: number, subjectCode: string, chapter: number, questions: BankQuestion[]) => {
  const chapterSql = `(SELECT c.id FROM chapters c JOIN subjects s ON s.id = c.subject_id
    WHERE s.board = '${board}' AND s.class_grade = ${classGrade} AND s.code = '${subjectCode}' AND c.number = ${chapter})`;
  const statements = [
    `UPDATE questions SET is_active = false, updated_at = now()
     WHERE school_id IS NULL AND source IS NULL AND chapter_id = ${chapterSql};`,
  ];
  for (const q of questions) {
    const { optionsEn, optionsTa, answer } = shuffled(q);
    statements.push(
      `INSERT INTO questions (board, class_grade, subject_id, chapter_id, subject, topic, chapter, difficulty, question, options,
                              correct_answer, explanation, marks, exam_type, is_active, school_id, image_url, source)
       SELECT s.board, s.class_grade, s.id, c.id, s.name_en, c.name_en, c.number, '${q.difficulty}',
              ${json({ en: q.en.q, ta: q.ta.q })}, ${json({ en: optionsEn, ta: optionsTa })}, ${answer},
              ${json({ en: q.en.explanation, ta: q.ta.explanation })}, 1, 'Both', true, NULL,
              ${q.imageUrl ? quote(q.imageUrl) : 'NULL'}, ${quote(q.source)}
       FROM subjects s JOIN chapters c ON c.subject_id = s.id AND c.number = ${chapter}
       WHERE s.board = '${board}' AND s.class_grade = ${classGrade} AND s.code = '${subjectCode}'
         AND NOT EXISTS (SELECT 1 FROM questions x WHERE x.chapter_id = c.id AND x.school_id IS NULL AND x.source IS NOT NULL
                         AND x.question->>'en' = ${quote(q.en.q)});`
    );
  }
  return statements.join('\n');
};
