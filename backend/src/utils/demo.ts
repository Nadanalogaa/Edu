import { PoolClient } from 'pg';
import { query, withTransaction } from '../config/database';
import { hashPassword } from '../models/User';

// The 9th standard demo: one school per board with students who already have
// five weeks of test results, so the dashboards and reports have something to
// show. Running it again resets the demo schools (and only them).

export const DEMO_PASSWORD = 'demo1234';

const DEMOS = [
  { board: 'state_board', code: 'DEMOSB9', name: 'EduCore Demo School (State Board)', city: 'Madurai', slug: 'sb', seed: 9 },
  { board: 'cbse', code: 'DEMOCBSE9', name: 'EduCore Demo School (CBSE)', city: 'Coimbatore', slug: 'cbse', seed: 19 },
] as const;

const STUDENT_NAMES = [
  'Aadhira S', 'Arjun K', 'Bharathi M', 'Deepak R', 'Divya P', 'Gokul V', 'Harini S', 'Jeeva T', 'Kavin R', 'Keerthana M',
  'Lokesh B', 'Meena G', 'Mohan S', 'Nandhini K', 'Pranav A', 'Priya D', 'Ragul M', 'Sanjana V', 'Saravanan P', 'Shalini R',
  'Tamilselvan K', 'Varsha N', 'Vignesh S', 'Yazhini L',
];

// Tests already held, oldest first (one a week): [subject code, chapter number(s), title]
const PAST_TESTS: Record<string, Array<[string, number[], string]>> = {
  state_board: [
    ['maths', [1], 'Set Language – Unit Test'],
    ['science', [1], 'Measurement – Unit Test'],
    ['tamil', [1], 'தமிழ் – எழுத்து இலக்கணம்'],
    ['maths', [2], 'Real Number System – Unit Test'],
    ['social_science', [1, 2, 3], 'History – Units 1 to 3'],
    ['english', [2], 'English Grammar – Tenses'],
    ['science', [2], 'Motion – Unit Test'],
    ['maths', [3], 'Algebra – Unit Test'],
  ],
  cbse: [
    ['maths', [1], 'Number Systems – Unit Test'],
    ['science', [1], 'Matter in Our Surroundings – Unit Test'],
    ['english', [2], 'English Grammar – Tenses'],
    ['maths', [2], 'Polynomials – Unit Test'],
    ['social_science', [1, 2, 3], 'History – Chapters 1 to 3'],
    ['tamil', [1], 'தமிழ் – எழுத்து இலக்கணம்'],
    ['science', [5], 'The Fundamental Unit of Life – Unit Test'],
    ['maths', [1, 2], 'Maths Revision 1'],
  ],
};

// Tests open right now, to take live during a demo
const LIVE_TESTS: Record<string, Array<[string, number[], string]>> = {
  state_board: [
    ['maths', [4, 5, 6], 'Maths Revision Test (open now)'],
    ['english', [1, 3, 6], 'English Grammar & Vocabulary (open now)'],
  ],
  cbse: [
    ['maths', [3, 4, 5], 'Maths Revision Test (open now)'],
    ['english', [1, 3, 6], 'English Grammar & Vocabulary (open now)'],
  ],
};

/** Small seeded random generator, so the demo looks the same every time. */
const random = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const DAY = 86400000;

const removeDemoSchool = async (client: PoolClient, code: string) => {
  const [school] = await query('SELECT id FROM schools WHERE code = $1', [code], client);
  if (!school) return;
  // Deleting the users removes their tests, attempts and mistake-book entries too
  await query('DELETE FROM users WHERE school_id = $1', [school.id], client);
  await query('DELETE FROM tests WHERE school_id = $1', [school.id], client);
  await query('DELETE FROM questions WHERE school_id = $1', [school.id], client);
  await query('DELETE FROM schools WHERE id = $1', [school.id], client);
};

const setupOne = async (client: PoolClient, demo: (typeof DEMOS)[number], passwordHash: string) => {
  const rand = random(demo.seed);
  await removeDemoSchool(client, demo.code);

  const [school] = await query(
    `INSERT INTO schools (name, code, address, city, state, pincode, phone, email, board, student_limit, registration_status, notes)
     VALUES ($1, $2, '1 School Road', $3, 'Tamil Nadu', '600001', '0000000000', $4, $5, 100, 'approved',
             'Demo school. Reset it from the owner dashboard.')
     RETURNING id`,
    [demo.name, demo.code, demo.city, `office.${demo.slug}@educore.demo`, demo.board],
    client
  );

  const addUser = async (fields: Record<string, any>) => {
    const [row] = await query(
      `INSERT INTO users (name, email, admission_number, password, role, school_id, class_grade, grade, section, is_active)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, true) RETURNING id`,
      [fields.name, fields.email || null, fields.admissionNumber || null, passwordHash, fields.role, school.id,
        fields.classGrade || null, fields.classGrade ? `${fields.classGrade}th` : null, fields.section || null],
      client
    );
    return row.id as string;
  };

  const adminEmail = `demo.admin.${demo.slug}@educore.demo`;
  const teacherEmail = `demo.teacher.${demo.slug}@educore.demo`;
  const adminId = await addUser({ name: 'Demo Admin', email: adminEmail, role: 'admin' });
  await addUser({ name: 'Demo Teacher', email: teacherEmail, role: 'teacher' });

  // Each student: overall ability, how fast they improve, and a Maths/Science lean
  const students: Array<{ id: string; ability: number; trend: number; lean: number; reliability: number }> = [];
  for (let i = 0; i < STUDENT_NAMES.length; i++) {
    const section = i < 12 ? 'A' : 'B';
    const id = await addUser({
      name: STUDENT_NAMES[i],
      admissionNumber: `9${section}${String((i % 12) + 1).padStart(2, '0')}`,
      role: 'student',
      classGrade: 9,
      section,
    });
    const struggling = i === 3 || i === 10 || i === 18; // a few students at risk
    students.push({
      id,
      ability: struggling ? 0.18 + rand() * 0.12 : 0.45 + rand() * 0.45,
      trend: (rand() - 0.35) * 0.08, // most improve a little each week, some slip
      lean: (rand() - 0.5) * 0.25,
      reliability: struggling ? 0.6 : 0.88 + rand() * 0.12,
    });
  }

  // Shared-bank questions of 9th Maths and Science, by chapter number
  const questions = await query(
    `SELECT q.id, q.correct_answer, q.marks, q.difficulty, s.code, c.number
     FROM questions q JOIN subjects s ON s.id = q.subject_id JOIN chapters c ON c.id = q.chapter_id
     WHERE q.school_id IS NULL AND q.is_active AND s.board = $1 AND s.class_grade = 9
     ORDER BY c.number, q.created_at`,
    [demo.board],
    client
  );
  const subjects = await query(`SELECT id, code, name_en FROM subjects WHERE board = $1 AND class_grade = 9`, [demo.board], client);
  const subjectByCode = new Map(subjects.map((s) => [s.code, s]));

  const createTest = async (code: string, chapters: number[], title: string, start: Date, end: Date) => {
    const picked = questions.filter((q) => q.code === code && chapters.includes(q.number)).slice(0, 10);
    const subject = subjectByCode.get(code);
    if (!picked.length || !subject) return null;
    const chapterIds = await query(
      'SELECT id FROM chapters WHERE subject_id = $1 AND number = ANY($2::int[])',
      [subject.id, chapters],
      client
    );
    const [test] = await query(
      `INSERT INTO tests (title, description, created_by, school_id, type, exam_type, subjects, duration, total_marks, questions,
                          start_time, end_time, is_published, is_active, board, class_grade, subject_id, chapter_ids, sections, created_at)
       VALUES ($1, '', $2, $3, 'exam', 'Both', $4, 15, $5, $6, $7, $8, true, true, $9, 9, $10, $11, '{}', $7)
       RETURNING id`,
      [title, adminId, school.id, [subject.name_en], picked.reduce((s, q) => s + q.marks, 0), picked.map((q) => q.id),
        start, end, demo.board, subject.id, chapterIds.map((c) => c.id)],
      client
    );
    return { id: test.id as string, questions: picked, code };
  };

  const now = Date.now();
  const past = PAST_TESTS[demo.board];
  for (let week = 0; week < past.length; week++) {
    const [code, chapters, title] = past[week];
    const start = new Date(now - (past.length - week) * 7 * DAY);
    const test = await createTest(code, chapters, title, start, new Date(start.getTime() + 3 * DAY));
    if (!test) continue;

    for (const student of students) {
      if (rand() > student.reliability) continue; // missed this test
      const lean = code === 'maths' ? student.lean : -student.lean;
      let correct = 0;
      let wrong = 0;
      let skipped = 0;
      let marks = 0;
      const answers = test.questions.map((q) => {
        const difficulty = q.difficulty === 'easy' ? 0.15 : q.difficulty === 'hard' ? -0.2 : 0;
        const chance = Math.min(0.97, Math.max(0.05, student.ability + student.trend * week + lean + difficulty));
        let selected: number;
        if (rand() < 0.06) selected = -1;
        else if (rand() < chance) selected = q.correct_answer;
        else selected = (q.correct_answer + 1 + Math.floor(rand() * 3)) % 4;
        const isCorrect = selected === q.correct_answer;
        if (selected < 0) skipped++;
        else if (isCorrect) correct++;
        else wrong++;
        if (isCorrect) marks += q.marks;
        return { questionId: q.id, selectedAnswer: selected, isCorrect, marksObtained: isCorrect ? q.marks : 0, timeTaken: 20 + Math.floor(rand() * 90) };
      });
      const totalMarks = test.questions.reduce((s, q) => s + q.marks, 0);
      const timeTaken = answers.reduce((s, a) => s + a.timeTaken, 0);
      const startedAt = new Date(start.getTime() + rand() * 2.5 * DAY);
      const [attempt] = await query(
        `INSERT INTO student_attempts (student_id, test_id, answers, total_questions, correct_answers, wrong_answers, skipped_answers,
                                       total_marks, marks_obtained, percentage, time_taken, start_time, end_time, status, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, 'completed', $12, $13) RETURNING id`,
        [student.id, test.id, JSON.stringify(answers), answers.length, correct, wrong, skipped, totalMarks, marks,
          Math.round((marks / totalMarks) * 10000) / 100, timeTaken, startedAt, new Date(startedAt.getTime() + timeTaken * 1000)],
        client
      );
      for (const a of answers) {
        if (a.selectedAnswer >= 0 && !a.isCorrect) {
          const q = test.questions.find((x) => x.id === a.questionId)!;
          await query(
            `INSERT INTO mistake_book (student_id, question_id, attempt_id, selected_answer, correct_answer, created_at)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [student.id, q.id, attempt.id, a.selectedAnswer, q.correct_answer, startedAt],
            client
          );
        }
      }
    }
  }

  for (const [code, chapters, title] of LIVE_TESTS[demo.board]) {
    await createTest(code, chapters, title, new Date(now - 3600000), new Date(now + 14 * DAY));
  }

  await query(
    `UPDATE users u SET total_points = s.points, coins = s.points / 4
     FROM (SELECT student_id, sum(marks_obtained)::int AS points FROM student_attempts GROUP BY student_id) s
     WHERE u.id = s.student_id AND u.school_id = $1`,
    [school.id],
    client
  );

  return {
    board: demo.board,
    schoolName: demo.name,
    schoolCode: demo.code,
    admin: { email: adminEmail, password: DEMO_PASSWORD },
    teacher: { email: teacherEmail, password: DEMO_PASSWORD },
    student: { schoolCode: demo.code, admissionNumber: '9A01', password: DEMO_PASSWORD },
    students: STUDENT_NAMES.length,
    pastTests: past.length,
  };
};

/** Creates (or resets) the demo schools of both boards. */
export const setupDemoSchools = async () => {
  const passwordHash = await hashPassword(DEMO_PASSWORD);
  return withTransaction(async (client) => {
    const results = [];
    for (const demo of DEMOS) results.push(await setupOne(client, demo, passwordHash));
    return results;
  });
};
