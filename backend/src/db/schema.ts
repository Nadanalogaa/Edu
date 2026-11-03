// PostgreSQL schema, applied on every startup (all statements are idempotent).
// Nested objects that the API returns as-is (parent details, bilingual question
// text, qualifications, attempt answers) are stored as JSONB so the JSON shape
// the frontend reads is unchanged from the MongoDB version.
export const schemaSql = `
CREATE TABLE IF NOT EXISTS schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL DEFAULT 'Tamil Nadu',
  pincode TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  principal TEXT,
  principal_phone TEXT,
  principal_email TEXT,
  website TEXT,
  established INTEGER,
  board_affiliation TEXT,
  total_strength INTEGER,
  documents JSONB NOT NULL DEFAULT '{}'::jsonb,
  registration_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (registration_status IN ('pending', 'approved', 'rejected')),
  registration_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('student', 'teacher', 'admin')),
  school_id UUID REFERENCES schools(id) ON DELETE SET NULL,
  grade TEXT,
  phone TEXT,
  language TEXT NOT NULL DEFAULT 'en' CHECK (language IN ('en', 'ta')),
  theme TEXT NOT NULL DEFAULT 'light' CHECK (theme IN ('light', 'dark')),
  profile_image TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  coins INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 0,
  last_activity_date TIMESTAMPTZ,
  total_points INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS users_role_active_idx ON users (role, is_active);

CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_applied_for TEXT NOT NULL CHECK (course_applied_for IN ('NEET', 'JEE')),
  student_name TEXT NOT NULL,
  date_of_birth TIMESTAMPTZ NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('male', 'female', 'other')),
  school_details TEXT,
  parent_details JSONB NOT NULL,
  address_details JSONB NOT NULL,
  admission_details JSONB NOT NULL,
  documents JSONB NOT NULL DEFAULT '{}'::jsonb,
  registration_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (registration_status IN ('pending', 'approved', 'rejected')),
  registration_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS students_user_idx ON students (user_id);
CREATE INDEX IF NOT EXISTS students_status_idx ON students (registration_status);

CREATE TABLE IF NOT EXISTS teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  teacher_name TEXT NOT NULL,
  date_of_birth TIMESTAMPTZ NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('male', 'female', 'other')),
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  alternate_phone TEXT,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pincode TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'India',
  qualifications JSONB NOT NULL DEFAULT '[]'::jsonb,
  experience JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_experience DOUBLE PRECISION NOT NULL DEFAULT 0,
  subjects_teaching TEXT[] NOT NULL,
  specialization TEXT[] NOT NULL DEFAULT '{}',
  courses_preparing TEXT[] NOT NULL,
  available_for_online_classes BOOLEAN NOT NULL DEFAULT true,
  available_for_offline_classes BOOLEAN NOT NULL DEFAULT false,
  preferred_languages TEXT[] NOT NULL DEFAULT '{English}',
  documents JSONB NOT NULL DEFAULT '{}'::jsonb,
  registration_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (registration_status IN ('pending', 'approved', 'rejected')),
  verification_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (verification_status IN ('pending', 'verified', 'rejected')),
  registration_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS teachers_user_idx ON teachers (user_id);
CREATE INDEX IF NOT EXISTS teachers_email_idx ON teachers (email);

CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  external_id INTEGER,
  subject TEXT NOT NULL CHECK (subject IN ('Physics', 'Chemistry', 'Biology', 'Maths')),
  unit INTEGER,
  chapter INTEGER,
  chapter_name JSONB,
  topic TEXT NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'medium' CHECK (difficulty IN ('easy', 'medium', 'hard')),
  question JSONB NOT NULL,
  options JSONB NOT NULL,
  correct_answer INTEGER NOT NULL CHECK (correct_answer BETWEEN 0 AND 3),
  explanation JSONB NOT NULL,
  video_url TEXT,
  marks INTEGER NOT NULL DEFAULT 4 CHECK (marks >= 1),
  exam_type TEXT NOT NULL DEFAULT 'Both' CHECK (exam_type IN ('NEET', 'JEE', 'Both')),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_by UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS questions_subject_topic_idx ON questions (subject, topic, difficulty);
CREATE INDEX IF NOT EXISTS questions_subject_unit_idx ON questions (subject, unit, chapter);
CREATE INDEX IF NOT EXISTS questions_exam_active_idx ON questions (exam_type, is_active);
CREATE INDEX IF NOT EXISTS questions_external_idx ON questions (external_id) WHERE external_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  created_by UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  school_id UUID REFERENCES schools(id) ON DELETE SET NULL,
  type TEXT NOT NULL DEFAULT 'practice' CHECK (type IN ('practice', 'exam', 'daily-challenge')),
  exam_type TEXT NOT NULL CHECK (exam_type IN ('NEET', 'JEE', 'Both')),
  subjects TEXT[] NOT NULL,
  duration INTEGER NOT NULL CHECK (duration >= 1),
  total_marks INTEGER NOT NULL CHECK (total_marks >= 1),
  questions UUID[] NOT NULL DEFAULT '{}',
  start_time TIMESTAMPTZ,
  end_time TIMESTAMPTZ,
  is_published BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  shared_with_students UUID[] NOT NULL DEFAULT '{}',
  shared_with_grades TEXT[] NOT NULL DEFAULT '{}',
  shared_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS tests_creator_idx ON tests (created_by, is_active);
CREATE INDEX IF NOT EXISTS tests_shared_students_idx ON tests USING GIN (shared_with_students);
CREATE INDEX IF NOT EXISTS tests_shared_grades_idx ON tests USING GIN (shared_with_grades);

CREATE TABLE IF NOT EXISTS student_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  test_id UUID NOT NULL REFERENCES tests(id) ON DELETE CASCADE,
  answers JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  wrong_answers INTEGER NOT NULL DEFAULT 0,
  skipped_answers INTEGER NOT NULL DEFAULT 0,
  total_marks INTEGER NOT NULL,
  marks_obtained INTEGER NOT NULL DEFAULT 0,
  percentage DOUBLE PRECISION NOT NULL DEFAULT 0,
  time_taken INTEGER NOT NULL DEFAULT 0,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ,
  status TEXT NOT NULL DEFAULT 'in-progress' CHECK (status IN ('in-progress', 'completed', 'abandoned')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS attempts_student_test_idx ON student_attempts (student_id, test_id);
CREATE INDEX IF NOT EXISTS attempts_student_status_idx ON student_attempts (student_id, status);

CREATE TABLE IF NOT EXISTS mistake_book (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  attempt_id UUID NOT NULL REFERENCES student_attempts(id) ON DELETE CASCADE,
  selected_answer INTEGER NOT NULL,
  correct_answer INTEGER NOT NULL,
  is_reviewed BOOLEAN NOT NULL DEFAULT false,
  reviewed_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS mistakes_student_reviewed_idx ON mistake_book (student_id, is_reviewed);
CREATE INDEX IF NOT EXISTS mistakes_student_question_idx ON mistake_book (student_id, question_id);

CREATE TABLE IF NOT EXISTS uploaded_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name TEXT NOT NULL,
  exam_type TEXT NOT NULL CHECK (exam_type IN ('NEET', 'JEE', 'Both')),
  subject TEXT NOT NULL CHECK (subject IN ('Physics', 'Chemistry', 'Biology', 'Maths')),
  unit INTEGER NOT NULL,
  chapter INTEGER NOT NULL,
  chapter_name TEXT NOT NULL,
  question_count INTEGER NOT NULL CHECK (question_count >= 0),
  question_ids UUID[] NOT NULL DEFAULT '{}',
  uploaded_by UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  upload_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS uploaded_files_filter_idx ON uploaded_files (exam_type, subject, is_active);
CREATE INDEX IF NOT EXISTS uploaded_files_date_idx ON uploaded_files (upload_date DESC);

CREATE TABLE IF NOT EXISTS daily_challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL UNIQUE,
  question_ids UUID[] NOT NULL DEFAULT '{}',
  reward INTEGER NOT NULL DEFAULT 50 CHECK (reward >= 0),
  completed_by UUID[] NOT NULL DEFAULT '{}',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS live_classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL CHECK (subject IN ('Physics', 'Chemistry', 'Biology', 'Maths')),
  topic TEXT NOT NULL,
  scheduled_time TIMESTAMPTZ NOT NULL,
  duration INTEGER NOT NULL DEFAULT 60 CHECK (duration >= 15),
  meeting_link TEXT,
  recording_url TEXT,
  thumbnail TEXT,
  status TEXT NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'completed', 'cancelled')),
  attendees UUID[] NOT NULL DEFAULT '{}',
  max_attendees INTEGER,
  is_recorded BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
`;
