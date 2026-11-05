import { PoolClient } from 'pg';
import { schemaSql } from './schema';
import { class9ContentSql, buildContentSql } from './content/class9';
import { CHAPTERS_9_SB, QUESTIONS_9_SB } from './content/class9StateBoard';
import { CHAPTERS_9_CBSE, QUESTIONS_9_CBSE } from './content/class9Cbse';
import { bankChapterSql } from './content/sb9';
import { FLUIDS_QUESTIONS } from './content/sb9/science03Fluids';
import { SB9_BANK } from './content/sb9/chapters';

// Database changes, applied in order on startup. Each runs once (recorded in
// schema_migrations) inside a transaction. Never edit a migration that has been
// deployed: add a new one instead.
interface Migration {
  version: number;
  name: string;
  sql: string;
}

const STATE_BOARD = 'state_board';
const CBSE = 'cbse';

// [code, English name, Tamil name]
const CORE_SUBJECTS: Array<[string, string, string]> = [
  ['tamil', 'Tamil', 'தமிழ்'],
  ['english', 'English', 'ஆங்கிலம்'],
  ['maths', 'Maths', 'கணிதம்'],
  ['science', 'Science', 'அறிவியல்'],
  ['social_science', 'Social Science', 'சமூக அறிவியல்'],
];

const HIGHER_SECONDARY_SUBJECTS: Array<[string, string, string]> = [
  ['tamil', 'Tamil', 'தமிழ்'],
  ['english', 'English', 'ஆங்கிலம்'],
  ['physics', 'Physics', 'இயற்பியல்'],
  ['chemistry', 'Chemistry', 'வேதியியல்'],
  ['biology', 'Biology', 'உயிரியல்'],
  ['maths', 'Maths', 'கணிதம்'],
  ['computer_science', 'Computer Science', 'கணினி அறிவியல்'],
  ['accountancy', 'Accountancy', 'கணக்குப்பதிவியல்'],
  ['commerce', 'Commerce', 'வணிகவியல்'],
  ['economics', 'Economics', 'பொருளியல்'],
];

const quote = (value: string) => `'${value.replace(/'/g, "''")}'`;

const subjectSeedSql = () => {
  const rows: string[] = [];
  for (const board of [STATE_BOARD, CBSE]) {
    for (let grade = 6; grade <= 12; grade++) {
      const subjects = grade <= 10 ? CORE_SUBJECTS : HIGHER_SECONDARY_SUBJECTS;
      subjects.forEach(([code, en, ta], index) => {
        rows.push(`(${quote(board)}, ${grade}, ${quote(code)}, ${quote(en)}, ${quote(ta)}, ${index + 1})`);
      });
    }
  }
  return `INSERT INTO subjects (board, class_grade, code, name_en, name_ta, sort_order) VALUES
  ${rows.join(',\n  ')}
  ON CONFLICT (board, class_grade, code) DO NOTHING;`;
};

export const migrations: Migration[] = [
  {
    // The schema from the MongoDB -> PostgreSQL move (idempotent, so databases
    // created before migrations existed accept it unchanged).
    version: 1,
    name: 'initial schema',
    sql: schemaSql,
  },
  {
    version: 2,
    name: 'schools as customers: owner role, boards, classes, student limits',
    sql: `
      -- Owner (the platform owner) above school admins
      ALTER TABLE users DROP CONSTRAINT IF EXISTS users_role_check;
      ALTER TABLE users ADD CONSTRAINT users_role_check CHECK (role IN ('owner', 'admin', 'teacher', 'student'));

      -- Students belong to a class (6th-12th) and a section
      ALTER TABLE users ADD COLUMN class_grade INTEGER CHECK (class_grade BETWEEN 6 AND 12);
      ALTER TABLE users ADD COLUMN section TEXT;
      UPDATE users SET class_grade = substring(grade FROM '^([0-9]+)')::int
        WHERE grade ~ '^(6|7|8|9|10|11|12)(th)?$';
      CREATE INDEX users_school_role_idx ON users (school_id, role, is_active);

      -- Each school is a customer: its board, how many students it paid for, until when
      ALTER TABLE schools ADD COLUMN board TEXT NOT NULL DEFAULT '${STATE_BOARD}'
        CHECK (board IN ('${STATE_BOARD}', '${CBSE}'));
      ALTER TABLE schools ADD COLUMN student_limit INTEGER NOT NULL DEFAULT 50 CHECK (student_limit >= 0);
      ALTER TABLE schools ADD COLUMN subscription_expires_at DATE;
      ALTER TABLE schools ADD COLUMN notes TEXT;
      -- Schools that existed before approval was enforced (the demo school) keep working
      UPDATE schools SET registration_status = 'approved' WHERE registration_status = 'pending';

      -- NEET/JEE is optional for school students
      ALTER TABLE students ALTER COLUMN course_applied_for DROP NOT NULL;

      -- Content belongs to a school; NULL = the owner's shared bank, visible to every school
      ALTER TABLE questions ADD COLUMN school_id UUID REFERENCES schools(id) ON DELETE CASCADE;
      CREATE INDEX questions_school_idx ON questions (school_id);
      ALTER TABLE uploaded_files ADD COLUMN school_id UUID REFERENCES schools(id) ON DELETE CASCADE;
      CREATE INDEX tests_school_idx ON tests (school_id, is_active);
      UPDATE tests t SET school_id = u.school_id FROM users u WHERE t.created_by = u.id AND t.school_id IS NULL;

      -- One daily challenge per school per day (was one per day for everyone)
      ALTER TABLE daily_challenges ADD COLUMN school_id UUID REFERENCES schools(id) ON DELETE CASCADE;
      ALTER TABLE daily_challenges DROP CONSTRAINT IF EXISTS daily_challenges_date_key;
      CREATE UNIQUE INDEX daily_challenges_school_date_idx
        ON daily_challenges (COALESCE(school_id, '00000000-0000-0000-0000-000000000000'::uuid), date);

      -- Syllabus catalogue: board -> class -> subject -> chapter
      CREATE TABLE subjects (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        board TEXT NOT NULL CHECK (board IN ('${STATE_BOARD}', '${CBSE}')),
        class_grade INTEGER NOT NULL CHECK (class_grade BETWEEN 6 AND 12),
        code TEXT NOT NULL,
        name_en TEXT NOT NULL,
        name_ta TEXT NOT NULL,
        sort_order INTEGER NOT NULL DEFAULT 0,
        is_active BOOLEAN NOT NULL DEFAULT true,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        UNIQUE (board, class_grade, code)
      );

      CREATE TABLE chapters (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
        number INTEGER NOT NULL CHECK (number >= 1),
        name_en TEXT NOT NULL,
        name_ta TEXT NOT NULL DEFAULT '',
        is_active BOOLEAN NOT NULL DEFAULT true,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        UNIQUE (subject_id, number)
      );

      ${subjectSeedSql()}
    `,
  },
  {
    version: 3,
    name: 'students sign in with school code + admission number',
    sql: `
      -- Students added by their school may have no email
      ALTER TABLE users ALTER COLUMN email DROP NOT NULL;
      ALTER TABLE users ADD COLUMN admission_number TEXT;
      CREATE UNIQUE INDEX users_school_admission_idx
        ON users (school_id, upper(admission_number)) WHERE admission_number IS NOT NULL;
      ALTER TABLE users ADD CONSTRAINT users_login_check
        CHECK (email IS NOT NULL OR admission_number IS NOT NULL);
      -- The demo student can also sign in as TNMS001 / S001
      UPDATE users SET admission_number = 'S001'
        WHERE email = 'student@school.com' AND role = 'student' AND admission_number IS NULL;
    `,
  },
  {
    version: 4,
    name: 'class-wise assessments: questions and tests linked to the syllabus',
    sql: `
      -- Any syllabus subject (Tamil, Social Science, ...), not only the four NEET subjects
      ALTER TABLE questions DROP CONSTRAINT IF EXISTS questions_subject_check;
      ALTER TABLE questions ADD COLUMN board TEXT CHECK (board IN ('state_board', 'cbse'));
      ALTER TABLE questions ADD COLUMN class_grade INTEGER CHECK (class_grade BETWEEN 6 AND 12);
      ALTER TABLE questions ADD COLUMN subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL;
      ALTER TABLE questions ADD COLUMN chapter_id UUID REFERENCES chapters(id) ON DELETE SET NULL;
      CREATE INDEX questions_syllabus_idx ON questions (subject_id, chapter_id) WHERE is_active;

      ALTER TABLE uploaded_files DROP CONSTRAINT IF EXISTS uploaded_files_subject_check;
      ALTER TABLE uploaded_files ALTER COLUMN exam_type SET DEFAULT 'Both';
      ALTER TABLE uploaded_files ADD COLUMN subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL;
      ALTER TABLE uploaded_files ADD COLUMN class_grade INTEGER;

      -- A class assessment: for one class (optionally some sections), one subject
      ALTER TABLE tests ALTER COLUMN exam_type SET DEFAULT 'Both';
      ALTER TABLE tests ADD COLUMN board TEXT CHECK (board IN ('state_board', 'cbse'));
      ALTER TABLE tests ADD COLUMN class_grade INTEGER CHECK (class_grade BETWEEN 6 AND 12);
      ALTER TABLE tests ADD COLUMN subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL;
      ALTER TABLE tests ADD COLUMN chapter_ids UUID[] NOT NULL DEFAULT '{}';
      -- Empty = every section of the class
      ALTER TABLE tests ADD COLUMN sections TEXT[] NOT NULL DEFAULT '{}';
      -- Ready-made (owner) test this school copied, if any
      ALTER TABLE tests ADD COLUMN copied_from UUID REFERENCES tests(id) ON DELETE SET NULL;
      CREATE INDEX tests_class_idx ON tests (school_id, class_grade) WHERE is_active;

      -- Answers saved while the test is in progress (scored on submit)
      CREATE INDEX attempts_test_idx ON student_attempts (test_id, status);
    `,
  },
  {
    version: 5,
    name: '9th standard chapters and sample questions (shared bank)',
    sql: class9ContentSql(),
  },
  {
    version: 6,
    name: '9th standard: all subjects (Social Science, English, Tamil) and questions for every chapter',
    sql: buildContentSql([...CHAPTERS_9_SB, ...CHAPTERS_9_CBSE], [...QUESTIONS_9_SB, ...QUESTIONS_9_CBSE]),
  },
  {
    version: 7,
    name: 'question pictures and textbook references; State Board 9th Science Unit 3 question bank',
    sql: `
      ALTER TABLE questions ADD COLUMN image_url TEXT;
      -- Where the question comes from in the textbook, e.g. "§3.4.1, p. 31"
      ALTER TABLE questions ADD COLUMN source TEXT;
      ${bankChapterSql('state_board', 9, 'science', 3, FLUIDS_QUESTIONS)}
    `,
  },
  {
    version: 8,
    name: 'State Board 9th Science and Maths textbook question bank (every chapter)',
    sql: SB9_BANK.map((c) => bankChapterSql('state_board', 9, c.subject, c.chapter, c.questions)).join('\n'),
  },
];

export const runMigrations = async (client: PoolClient) => {
  // Only one app instance migrates at a time
  await client.query('SELECT pg_advisory_lock(424242)');
  try {
    await client.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
      version INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`);
    const { rows } = await client.query('SELECT version FROM schema_migrations');
    const applied = new Set(rows.map((r) => r.version));

    for (const migration of migrations) {
      if (applied.has(migration.version)) continue;
      await client.query('BEGIN');
      try {
        await client.query(migration.sql);
        await client.query('INSERT INTO schema_migrations (version, name) VALUES ($1, $2)', [
          migration.version,
          migration.name,
        ]);
        await client.query('COMMIT');
        console.log(`Applied database migration ${migration.version}: ${migration.name}`);
      } catch (error) {
        await client.query('ROLLBACK');
        throw new Error(`Migration ${migration.version} (${migration.name}) failed: ${(error as Error).message}`);
      }
    }
  } finally {
    await client.query('SELECT pg_advisory_unlock(424242)');
  }
};
