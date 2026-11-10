import { Response } from 'express';
import fs from 'fs';
import * as XLSX from 'xlsx';
import { AuthRequest } from '../middleware/auth';
import { Questions, questionsInOrder } from '../models/Question';
import { Tests } from '../models/Test';
import { Subjects, Chapters, isBoard, isClassGrade } from '../models/Syllabus';
import { query, withTransaction } from '../config/database';
import { isUuid, pick, Doc } from '../db/table';
import { HttpError, contentSchoolId, visibleTo, ownedBy, canChange, isOwner } from '../utils/tenancy';
import { sendWorkbook, howToSheet } from '../utils/excel';
import { staffScopeOf, testInScope, canTeach, sectionsFor, coversAll, StaffScope } from '../utils/staffScope';

// Class-wise assessments for school admins and teachers (their school's
// content) and the owner (ready-made content every school of a board can use).
// Questions and tests are tied to board -> class -> subject -> chapter.

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({ success: false, message: error.message });
  }
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const clean = (value: any) => (value === undefined || value === null ? '' : String(value).trim());

/** The board the user works in: their school's, or the one the owner chose. */
const boardOf = (req: AuthRequest, requested?: any) => {
  if (isOwner(req.user)) {
    if (!isBoard(requested)) throw new HttpError(400, 'Please choose the board');
    return requested;
  }
  if (!req.school?.board) throw new HttpError(403, 'Your account is not linked to a school');
  return req.school.board;
};

/** A subject the user may use: it must belong to their board. */
const loadSubject = async (req: AuthRequest, subjectId: any, board?: any) => {
  const subject = isUuid(subjectId) ? await Subjects.findById(subjectId) : null;
  if (!subject || subject.board !== boardOf(req, board ?? subject?.board)) throw new HttpError(400, 'Please choose a subject');
  return subject;
};

const loadChapters = async (subject: Doc) => {
  const chapters = await Chapters.select('SELECT * FROM chapters WHERE subject_id = $1 AND is_active ORDER BY number', [subject._id]);
  return chapters;
};

// ---------------------------------------------------------------- questions

const LETTERS = ['A', 'B', 'C', 'D'];

/** Option index from "B", "b)", "Option B", "2", or the option's own text. */
const parseAnswer = (value: any, options: string[]) => {
  const text = clean(value);
  if (!text) return -1;
  const letter = text.match(/^(?:option\s*)?([a-d])\b\)?\.?$/i);
  if (letter) return LETTERS.indexOf(letter[1].toUpperCase());
  if (/^[1-4]$/.test(text)) return Number(text) - 1;
  return options.findIndex((o) => o.trim().toLowerCase() === text.toLowerCase());
};

const DIFFICULTIES = ['easy', 'medium', 'hard'];

/**
 * Validates one question (from the form or an Excel row) and returns the
 * fields to store. Tamil text is optional; English options fill missing Tamil ones.
 */
const questionFields = (input: Record<string, any>) => {
  const questionEn = clean(input.questionEn);
  const optionsEn = [0, 1, 2, 3].map((i) => clean(input[`option${LETTERS[i]}En`]));
  if (!questionEn) throw new HttpError(400, 'Question text is required');
  if (optionsEn.some((o) => !o)) throw new HttpError(400, 'All four options (A–D) are required');

  const correctAnswer = Number.isInteger(input.correctAnswer) ? input.correctAnswer : parseAnswer(input.answer, optionsEn);
  if (!(correctAnswer >= 0 && correctAnswer <= 3)) throw new HttpError(400, 'Answer must be A, B, C or D');

  const questionTa = clean(input.questionTa);
  const optionsTa = [0, 1, 2, 3].map((i) => clean(input[`option${LETTERS[i]}Ta`]) || (questionTa ? optionsEn[i] : ''));
  const difficulty = clean(input.difficulty).toLowerCase() || 'medium';
  if (!DIFFICULTIES.includes(difficulty)) throw new HttpError(400, 'Difficulty must be easy, medium or hard');
  const marks = input.marks === undefined || clean(input.marks) === '' ? 1 : Number(input.marks);
  if (!Number.isInteger(marks) || marks < 1 || marks > 20) throw new HttpError(400, 'Marks must be a whole number from 1 to 20');

  const imageUrl = clean(input.imageUrl);
  if (imageUrl && !/^(https?:\/\/|\/)/.test(imageUrl)) throw new HttpError(400, 'Image must be a web address (https://…) or a path starting with /');

  return {
    question: { en: questionEn, ta: questionTa },
    options: { en: optionsEn, ta: optionsTa },
    correctAnswer,
    explanation: { en: clean(input.explanationEn), ta: clean(input.explanationTa) },
    difficulty,
    marks,
    source: clean(input.source) || null,
    imageUrl: imageUrl || null,
  };
};

const syllabusFields = (subject: Doc, chapter: Doc | null) => ({
  board: subject.board,
  classGrade: subject.classGrade,
  subjectId: subject._id,
  chapterId: chapter?._id ?? null,
  subject: subject.nameEn,
  topic: chapter?.nameEn || subject.nameEn,
  unit: null,
  chapter: chapter?.number ?? null,
  examType: 'Both',
  isActive: true,
});

// @desc    Questions for a class/subject/chapter (shared bank + own school)
// @route   GET /api/assessments/questions
export const listQuestions = async (req: AuthRequest, res: Response) => {
  try {
    const { classGrade, subjectId, chapterId, search, mine } = req.query;
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(200, Math.max(1, Number(req.query.limit) || 50));
    const params: any[] = [boardOf(req, req.query.board)];
    const where = ['is_active', 'board = $1', mine === 'true' ? ownedBy(req.user, params) : visibleTo(req.user, params)];
    // `?` in the condition stands for the value's parameter
    const add = (sql: string, value: any) => {
      params.push(value);
      where.push(sql.replace(/\?/g, `$${params.length}`));
    };
    if (classGrade) add('class_grade = ?', Number(classGrade));
    if (isUuid(subjectId)) add('subject_id = ?', subjectId);
    if (isUuid(chapterId)) add('chapter_id = ?', chapterId);
    if (search) add("(question->>'en' ILIKE ? OR question->>'ta' ILIKE ?)", `%${clean(search)}%`);

    const whereSql = where.join(' AND ');
    const questions = await Questions.select(
      `SELECT * FROM questions WHERE ${whereSql} ORDER BY chapter NULLS LAST, created_at DESC
       LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, limit, (page - 1) * limit]
    );
    const [{ total }] = await query(`SELECT count(*)::int AS total FROM questions WHERE ${whereSql}`, params);

    res.status(200).json({
      success: true,
      data: questions.map((q) => ({ ...q, editable: canChange(req.user, q) })),
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error: any) {
    sendError(res, error, 'List questions');
  }
};

// @desc    How many questions each chapter of a subject has (for building tests)
// @route   GET /api/assessments/questions/counts?subjectId=
export const questionCounts = async (req: AuthRequest, res: Response) => {
  try {
    const subject = await loadSubject(req, req.query.subjectId, req.query.board);
    const params: any[] = [subject._id];
    const rows = await query(
      `SELECT chapter_id, difficulty, count(*)::int AS questions FROM questions
       WHERE subject_id = $1 AND is_active AND ${visibleTo(req.user, params)} GROUP BY chapter_id, difficulty`,
      params
    );
    const total: Record<string, number> = {};
    const byDifficulty: Record<string, Record<string, number>> = {};
    for (const r of rows) {
      const key = r.chapter_id || 'none';
      total[key] = (total[key] || 0) + r.questions;
      byDifficulty[key] = { ...byDifficulty[key], [r.difficulty]: r.questions };
    }
    res.status(200).json({ success: true, data: total, byDifficulty });
  } catch (error: any) {
    sendError(res, error, 'Question counts');
  }
};

// @desc    Add one question
// @route   POST /api/assessments/questions
export const createQuestion = async (req: AuthRequest, res: Response) => {
  try {
    const subject = await loadSubject(req, req.body.subjectId, req.body.board);
    const chapter = isUuid(req.body.chapterId) ? await Chapters.findById(req.body.chapterId) : null;
    if (!chapter || chapter.subjectId !== subject._id) throw new HttpError(400, 'Please choose a chapter');

    const question = await Questions.insert({
      ...questionFields(req.body),
      ...syllabusFields(subject, chapter),
      schoolId: contentSchoolId(req.user),
      createdBy: req.user._id,
    });
    res.status(201).json({ success: true, message: 'Question added', data: question });
  } catch (error: any) {
    sendError(res, error, 'Create question');
  }
};

// @desc    Edit a question (own school's, or the shared bank for the owner)
// @route   PUT /api/assessments/questions/:id
export const updateQuestion = async (req: AuthRequest, res: Response) => {
  try {
    const existing = await Questions.findById(req.params.id);
    if (!existing || !existing.isActive || !canChange(req.user, existing)) throw new HttpError(404, 'Question not found');

    const updates: Record<string, any> = questionFields(req.body);
    // The form does not send these; keep what the question already has
    if (req.body.source === undefined) delete updates.source;
    if (req.body.imageUrl === undefined) delete updates.imageUrl;
    if (isUuid(req.body.chapterId) && req.body.chapterId !== existing.chapterId) {
      const chapter = await Chapters.findById(req.body.chapterId);
      if (!chapter || chapter.subjectId !== existing.subjectId) throw new HttpError(400, 'Please choose a chapter of the same subject');
      Object.assign(updates, { chapterId: chapter._id, chapter: chapter.number, topic: chapter.nameEn });
    }
    const question = await Questions.updateById(existing._id, updates);
    res.status(200).json({ success: true, message: 'Question saved', data: question });
  } catch (error: any) {
    sendError(res, error, 'Update question');
  }
};

// @desc    Remove a question (kept for past results)
// @route   DELETE /api/assessments/questions/:id
export const deleteQuestion = async (req: AuthRequest, res: Response) => {
  try {
    const existing = await Questions.findById(req.params.id);
    if (!existing || !existing.isActive || !canChange(req.user, existing)) throw new HttpError(404, 'Question not found');
    await Questions.updateById(existing._id, { isActive: false });
    res.status(200).json({ success: true, message: 'Question removed' });
  } catch (error: any) {
    sendError(res, error, 'Delete question');
  }
};

const QUESTION_COLUMNS: Record<string, string[]> = {
  chapter: ['chapter', 'chapterno', 'chapternumber', 'ch', 'lesson', 'lessonno', 'பாடம்'],
  questionEn: ['question', 'questionen', 'questionenglish', 'englishquestion', 'q'],
  questionTa: ['questiontamil', 'questionta', 'tamilquestion', 'கேள்வி'],
  optionAEn: ['optiona', 'a', 'option1', 'opta', 'optionaenglish'],
  optionBEn: ['optionb', 'b', 'option2', 'optb', 'optionbenglish'],
  optionCEn: ['optionc', 'c', 'option3', 'optc', 'optioncenglish'],
  optionDEn: ['optiond', 'd', 'option4', 'optd', 'optiondenglish'],
  optionATa: ['optionatamil', 'optionata', 'tamiloptiona'],
  optionBTa: ['optionbtamil', 'optionbta', 'tamiloptionb'],
  optionCTa: ['optionctamil', 'optioncta', 'tamiloptionc'],
  optionDTa: ['optiondtamil', 'optiondta', 'tamiloptiond'],
  answer: ['answer', 'correctanswer', 'correct', 'key', 'ans', 'answerkey', 'பதில்'],
  explanationEn: ['explanation', 'explanationen', 'explanationenglish', 'solution'],
  explanationTa: ['explanationtamil', 'explanationta', 'விளக்கம்'],
  difficulty: ['difficulty', 'level'],
  marks: ['marks', 'mark', 'score'],
  source: ['source', 'section', 'reference', 'page'],
  imageUrl: ['image', 'imageurl', 'picture', 'diagram'],
};
const QUESTION_TEMPLATE_HEADERS = [
  'Chapter', 'Question', 'Option A', 'Option B', 'Option C', 'Option D', 'Answer', 'Explanation',
  'Difficulty', 'Marks', 'Question (Tamil)', 'Option A (Tamil)', 'Option B (Tamil)', 'Option C (Tamil)',
  'Option D (Tamil)', 'Explanation (Tamil)', 'Source', 'Image URL',
];

// Header -> field; letters, digits and Tamil kept, everything else dropped
const headerKey = (header: string) => header.toLowerCase().replace(/[\s_\-().:/,]+/g, '');

const normaliseQuestionRow = (row: Record<string, any>) => {
  const fields: Record<string, any> = {};
  for (const [header, value] of Object.entries(row)) {
    const key = headerKey(header);
    const field = Object.keys(QUESTION_COLUMNS).find((f) => QUESTION_COLUMNS[f].includes(key));
    if (field && fields[field] === undefined) fields[field] = value;
  }
  return fields;
};

// @desc    Excel template for questions
// @route   GET /api/assessments/questions/template
export const questionTemplate = async (req: AuthRequest, res: Response) => {
  try {
    // With ?subjectId= the template lists that subject's chapters
    const subject = isUuid(req.query.subjectId) ? await Subjects.findById(req.query.subjectId as string) : null;
    const chapters = subject ? await loadChapters(subject) : [];
    const ch = (n: number) => (chapters.length ? chapters[Math.min(n, chapters.length) - 1].number : n);
    sendWorkbook(res, subject ? `questions-${subject.nameEn.toLowerCase().replace(/\W+/g, '-')}-${subject.classGrade}th.xlsx` : 'questions-template.xlsx', [
      {
        name: 'Questions',
        rows: [
          QUESTION_TEMPLATE_HEADERS,
          [ch(1), 'Which of these is a prime number?', '4', '6', '7', '9', 'C', '7 has only two factors: 1 and 7.', 'easy', 1,
            'இவற்றில் எது பகா எண்?', '4', '6', '7', '9', '7-க்கு 1 மற்றும் 7 என இரண்டு காரணிகள் மட்டுமே உள்ளன.', 'p. 12', ''],
          [ch(1), 'The value of 2³ × 2² is', '2⁵', '2⁶', '4⁵', '2¹', 'A', 'Add the powers of the same base: 3 + 2 = 5.', 'medium', 1,
            '', '', '', '', '', '', 'p. 15', ''],
          [ch(2), 'Assertion (A): Every square is a rectangle.\nReason (R): A square has four right angles.',
            'Both A and R are true, and R is the correct explanation of A', 'Both A and R are true, but R is not the correct explanation of A',
            'A is true but R is false', 'A is false but R is true', 'A', 'A rectangle has four right angles, and a square has them too.', 'hard', 2,
            '', '', '', '', '', '', '§2.3', ''],
          [ch(2), 'In the figure, find the angle x.', '30°', '45°', '60°', '90°', 'B', 'Angles on a straight line add up to 180°.', 'medium', 1,
            '', '', '', '', '', '', 'Fig. 2.4', 'https://example.com/figure-2-4.png'],
        ],
        widths: [9, 48, 16, 16, 16, 16, 8, 40, 11, 7, 40, 16, 16, 16, 16, 40, 14, 30],
      },
      howToSheet('Uploading questions: one row per question (Questions sheet)', [
        ['Chapter (required)', 'The chapter number, as in the Chapters sheet. Or choose one chapter in the app before uploading and leave this empty.'],
        ['Question (required)', 'The question in English. Press Alt+Enter in a cell for a new line (e.g. Assertion / Reason).'],
        ['Option A to D (required)', 'All four options.'],
        ['Answer (required)', 'A, B, C or D (the correct option).'],
        ['Explanation', 'Why the answer is right. Students see it after answering and in their Mistake Book.'],
        ['Difficulty', 'easy, medium or hard (empty = medium). Tests can be set as easy, medium, hard or mixed.'],
        ['Marks', 'A whole number from 1 to 20 (empty = 1).'],
        ['Tamil columns', 'Optional: the same question, options and explanation in Tamil for Tamil-medium students. Empty Tamil options copy the English ones.'],
        ['Source', 'Optional: where it is in the textbook, e.g. p. 12 or §2.3.'],
        ['Image URL', 'Optional: a web address (https://…) of a diagram for the question.'],
        [],
        ['Tips', '• Keep the first row (the column names) as it is. • Delete the sample rows before uploading. • Up to 1000 questions per file.'],
        ['', '• The file is for one subject of one class: choose that subject in the app, then upload.'],
        ['', '• Your questions are only for your school; the questions from the textbook are already in the app.'],
      ]),
      {
        name: 'Chapters',
        rows: subject
          ? [[`${subject.nameEn} ${subject.classGrade}th`], ['Chapter', 'Name', 'Name in Tamil'], ...chapters.map((c) => [c.number, c.nameEn, c.nameTa])]
          : [['Download the template from a subject in the Question Bank to see its chapter numbers here.']],
        widths: [10, 50, 50],
      },
    ]);
  } catch (error: any) {
    sendError(res, error, 'Question template');
  }
};

// @desc    Import questions for one subject from Excel; the Chapter column (or the chosen chapter) places each one
// @route   POST /api/assessments/questions/upload
export const uploadQuestions = async (req: AuthRequest, res: Response) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'Please upload an Excel file' });
  try {
    const subject = await loadSubject(req, req.body.subjectId, req.body.board);
    const chapters = await loadChapters(subject);
    const defaultChapter = isUuid(req.body.chapterId) ? chapters.find((c) => c._id === req.body.chapterId) || null : null;

    let rows: Record<string, any>[];
    try {
      const workbook = XLSX.readFile(req.file.path, { raw: false });
      rows = XLSX.utils
        .sheet_to_json<Record<string, any>>(workbook.Sheets[workbook.SheetNames[0]], { defval: '', raw: false })
        .map(normaliseQuestionRow)
        .filter((r) => Object.values(r).some((v) => clean(v)));
    } catch {
      throw new HttpError(400, 'Could not read the file. Please upload an Excel (.xlsx) file.');
    }
    if (rows.length === 0) throw new HttpError(400, 'The file has no question rows. Check the column names against the template.');
    if (rows.length > 1000) throw new HttpError(400, 'Please upload at most 1000 questions at a time');

    const errors: any[] = [];
    let added = 0;
    const schoolId = contentSchoolId(req.user);

    await withTransaction(async (client) => {
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        try {
          let chapter = defaultChapter;
          if (clean(row.chapter)) {
            const number = Number(clean(row.chapter).replace(/^(chapter|ch|lesson)\s*/i, ''));
            chapter = chapters.find((c) => c.number === number) || null;
            if (!chapter) throw new HttpError(400, `Chapter ${clean(row.chapter)} is not in ${subject.nameEn} ${subject.classGrade}th`);
          }
          if (!chapter) throw new HttpError(400, 'Chapter is missing: fill the Chapter column or choose a chapter before uploading');
          await Questions.insert(
            { ...questionFields(row), ...syllabusFields(subject, chapter), schoolId, createdBy: req.user._id },
            client
          );
          added++;
        } catch (error: any) {
          errors.push({ row: i + 2, question: clean(row.questionEn).slice(0, 80), error: error.message });
        }
      }
    });

    res.status(200).json({
      success: true,
      message: `${added} of ${rows.length} questions added to ${subject.nameEn} ${subject.classGrade}th`,
      summary: { total: rows.length, success: added, errors: errors.length },
      errors,
    });
  } catch (error: any) {
    sendError(res, error, 'Upload questions');
  } finally {
    fs.unlink(req.file.path, () => {});
  }
};

// -------------------------------------------------------------------- tests

/** Share of each level in a Mixed test. */
export const MIXED_SHARE = { easy: 0.4, medium: 0.4, hard: 0.2 };

/**
 * Picks `count` questions from a shuffled pool: all of one level, or Mixed
 * (40% easy, 40% medium, 20% hard, topping up from other levels when one runs
 * short). Throws if the pool cannot supply enough.
 */
export const pickByDifficulty = (pool: Doc[], count: number, difficulty?: string) => {
  if (DIFFICULTIES.includes(difficulty as string)) {
    const level = pool.filter((q) => q.difficulty === difficulty);
    if (level.length < count) {
      throw new HttpError(400, `Only ${level.length} ${difficulty} questions are available for the chosen chapters; you asked for ${count}`);
    }
    return level.slice(0, count);
  }
  if (pool.length < count) {
    throw new HttpError(400, `Only ${pool.length} questions are available for the chosen chapters; you asked for ${count}`);
  }
  if (difficulty !== 'mixed') return pool.slice(0, count);

  const want = { easy: Math.round(count * MIXED_SHARE.easy), hard: Math.round(count * MIXED_SHARE.hard), medium: 0 };
  want.medium = count - want.easy - want.hard;
  const picked: Doc[] = [];
  for (const level of DIFFICULTIES) {
    picked.push(...pool.filter((q) => q.difficulty === level).slice(0, want[level as keyof typeof want]));
  }
  // Top up from whatever is left when a level is short
  const used = new Set(picked.map((q) => q._id));
  for (const q of pool) {
    if (picked.length >= count) break;
    if (!used.has(q._id)) picked.push(q);
  }
  // Easy first, hard last
  return picked.sort((a, b) => DIFFICULTIES.indexOf(a.difficulty) - DIFFICULTIES.indexOf(b.difficulty));
};

/** Active students a class assessment is for. */
const assignedStudentsSql = `
  SELECT u.id, u.name, u.admission_number, u.section FROM users u
  WHERE u.school_id = $1 AND u.role = 'student' AND u.is_active AND u.class_grade = $2
    AND (cardinality($3::text[]) = 0 OR u.section = ANY($3::text[]))`;

const parseSections = (value: any): string[] =>
  [...new Set((Array.isArray(value) ? value : clean(value).split(',')).map((s: any) => clean(s).toUpperCase()).filter(Boolean))];

const parseDate = (value: any, label: string) => {
  if (!clean(value)) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) throw new HttpError(400, `${label} is not a valid date and time`);
  return date;
};

/** Validated duration and time window from a request body. */
const scheduleFields = (body: any, current?: Doc) => {
  const fields: Record<string, any> = {};
  if (body.duration !== undefined || !current) {
    const duration = Number(body.duration);
    if (!Number.isInteger(duration) || duration < 1 || duration > 300) throw new HttpError(400, 'Duration must be 1 to 300 minutes');
    fields.duration = duration;
  }
  if (body.startTime !== undefined) fields.startTime = parseDate(body.startTime, 'Start time');
  if (body.endTime !== undefined) fields.endTime = parseDate(body.endTime, 'End time');
  const start = fields.startTime !== undefined ? fields.startTime : current?.startTime;
  const end = fields.endTime !== undefined ? fields.endTime : current?.endTime;
  if (start && end && new Date(end) <= new Date(start)) throw new HttpError(400, 'End time must be after the start time');
  return fields;
};

/** Adds subject name, question count and (for school tests) how many students finished. */
const decorateTests = async (tests: Doc[]) => {
  const subjects = await Subjects.findByIds(tests.map((t) => t.subjectId).filter(Boolean));
  const ids = tests.map((t) => t._id);
  const counts = ids.length
    ? await query(
        `SELECT test_id, count(*) FILTER (WHERE status = 'completed')::int AS completed,
                round(avg(percentage) FILTER (WHERE status = 'completed')::numeric, 1)::float AS average
         FROM student_attempts WHERE test_id = ANY($1::uuid[]) GROUP BY test_id`,
        [ids]
      )
    : [];
  const byTest = new Map(counts.map((c) => [c.test_id, c]));
  const assigned = await Promise.all(
    tests.map(async (t) =>
      t.schoolId && t.classGrade
        ? (await query(`SELECT count(*)::int AS n FROM (${assignedStudentsSql}) s`, [t.schoolId, t.classGrade, t.sections || []]))[0].n
        : null
    )
  );
  return tests.map((t, i) => ({
    ...t,
    subjectName: subjects.get(t.subjectId)?.nameEn || t.subjects?.[0] || null,
    subjectNameTa: subjects.get(t.subjectId)?.nameTa || null,
    questionCount: t.questions?.length || 0,
    assignedStudents: assigned[i],
    completed: byTest.get(t._id)?.completed || 0,
    averagePercentage: byTest.get(t._id)?.average ?? null,
  }));
};

/** A test a teacher may see: its class and subject are theirs and it is open to one of their sections. */
const testVisible = (scope: StaffScope, test: Doc) =>
  coversAll(scope) ||
  scope!.some(
    (a) =>
      (!a.classGrade || a.classGrade === test.classGrade) &&
      (!a.subjectId || a.subjectId === test.subjectId) &&
      (!a.section || !test.sections?.length || test.sections.includes(a.section))
  );

/**
 * A school test the user manages, or (owner) a ready-made test. Teachers only
 * reach tests of their own classes and subjects; to change one, it must be for
 * sections they look after.
 */
const findOwnTest = async (req: AuthRequest, id: string, purpose: 'view' | 'change' = 'change') => {
  const test = await Tests.findById(id);
  if (!test || !test.isActive || !test.classGrade || !canChange(req.user, test)) return null;
  if (req.user.role === 'teacher') {
    const scope = await staffScopeOf(req);
    const allowed = purpose === 'view' ? testVisible(scope, test) : canTeach(scope, test.classGrade, test.subjectId, test.sections || []);
    if (!allowed) return null;
  }
  return test;
};

/**
 * Sections a teacher's new test goes to: the ones chosen, or when none are
 * chosen, the sections they look after. Throws if the class or subject is not theirs.
 */
const teacherSections = async (req: AuthRequest, classGrade: number, subjectId: string, chosen: string[]) => {
  if (req.user.role !== 'teacher') return chosen;
  const scope = await staffScopeOf(req);
  const sections = chosen.length ? chosen : sectionsFor(scope, classGrade, subjectId);
  if (!canTeach(scope, classGrade, subjectId, sections)) {
    throw new HttpError(403, 'You can only set tests for the classes and subjects you are assigned. Ask your school admin to assign them.');
  }
  return sections;
};

// @desc    The classes, sections and subjects the signed-in teacher looks after (null = no limit)
// @route   GET /api/assessments/my-classes
export const myClasses = async (req: AuthRequest, res: Response) => {
  try {
    const scope = req.user.role === 'teacher' ? await staffScopeOf(req) : null;
    res.status(200).json({ success: true, data: scope && !coversAll(scope) ? scope : null, assigned: scope === null || scope.length > 0 });
  } catch (error: any) {
    sendError(res, error, 'My classes');
  }
};

// @desc    Class assessments of the school (owner: ready-made tests)
// @route   GET /api/assessments/tests
export const listTests = async (req: AuthRequest, res: Response) => {
  try {
    const params: any[] = [];
    const where = ['is_active', 'class_grade IS NOT NULL', ownedBy(req.user, params)];
    if (req.user.role === 'teacher') where.push(testInScope(await staffScopeOf(req), params, 'tests'));
    if (isOwner(req.user) && isBoard(req.query.board)) {
      params.push(req.query.board);
      where.push(`board = $${params.length}`);
    }
    if (req.query.classGrade) {
      params.push(Number(req.query.classGrade));
      where.push(`class_grade = $${params.length}`);
    }
    if (isUuid(req.query.subjectId)) {
      params.push(req.query.subjectId);
      where.push(`subject_id = $${params.length}`);
    }
    const tests = await Tests.select(`SELECT * FROM tests WHERE ${where.join(' AND ')} ORDER BY created_at DESC LIMIT 500`, params);
    res.status(200).json({ success: true, data: await decorateTests(tests) });
  } catch (error: any) {
    sendError(res, error, 'List tests');
  }
};

// @desc    Ready-made tests from the owner for the school's board
// @route   GET /api/assessments/ready-made
export const listReadyMade = async (req: AuthRequest, res: Response) => {
  try {
    const params: any[] = [boardOf(req)];
    let sql = 'SELECT * FROM tests WHERE is_active AND is_published AND school_id IS NULL AND class_grade IS NOT NULL AND board = $1';
    if (req.query.classGrade) {
      params.push(Number(req.query.classGrade));
      sql += ` AND class_grade = $${params.length}`;
    }
    const tests = await Tests.select(`${sql} ORDER BY class_grade, created_at DESC`, params);
    // Which of them this school already uses
    const copies = await query('SELECT copied_from FROM tests WHERE school_id = $1 AND is_active AND copied_from IS NOT NULL', [req.user.schoolId]);
    const used = new Set(copies.map((c) => c.copied_from));
    res.status(200).json({
      success: true,
      data: (await decorateTests(tests)).map((t) => ({ ...t, alreadyUsed: used.has(t._id) })),
    });
  } catch (error: any) {
    sendError(res, error, 'List ready-made tests');
  }
};

// @desc    Create a class assessment from chosen questions or random ones from chapters
// @route   POST /api/assessments/tests
export const createTest = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, chapterIds, questionIds, autoPick, isPublished } = req.body;
    if (!clean(title)) throw new HttpError(400, 'Test title is required');
    const subject = await loadSubject(req, req.body.subjectId, req.body.board);
    if (req.body.classGrade !== undefined && Number(req.body.classGrade) !== subject.classGrade) {
      throw new HttpError(400, 'The subject does not belong to this class');
    }
    const sections = isOwner(req.user) ? [] : await teacherSections(req, subject.classGrade, subject._id, parseSections(req.body.sections));
    const chapters = await loadChapters(subject);
    const chosenChapters: string[] = (Array.isArray(chapterIds) ? chapterIds : []).filter((id: any) => chapters.some((c) => c._id === id));

    // Questions: picked by hand, or N random ones from the chosen chapters
    const params: any[] = [subject._id];
    const visible = visibleTo(req.user, params);
    let questions: Doc[];
    if (Array.isArray(questionIds) && questionIds.length) {
      params.push(questionIds.filter(isUuid));
      const found = await Questions.select(
        `SELECT * FROM questions WHERE subject_id = $1 AND is_active AND ${visible} AND id = ANY($${params.length}::uuid[])`,
        params
      );
      const byId = new Map(found.map((q) => [q._id, q]));
      questions = questionIds.map((id: string) => byId.get(id)).filter(Boolean) as Doc[];
      if (questions.length !== questionIds.length) throw new HttpError(400, 'Some questions are not available for this subject');
    } else {
      const count = Number(autoPick?.count);
      if (!Number.isInteger(count) || count < 1 || count > 200) throw new HttpError(400, 'Choose questions, or a number of random questions (1–200)');
      let chapterSql = '';
      if (chosenChapters.length) {
        params.push(chosenChapters);
        chapterSql = ` AND chapter_id = ANY($${params.length}::uuid[])`;
      }
      const pool = await Questions.select(
        `SELECT * FROM questions WHERE subject_id = $1 AND is_active AND ${visible}${chapterSql} ORDER BY random()`,
        params
      );
      questions = pickByDifficulty(pool, count, autoPick?.difficulty);
      // Keep textbook order: by chapter, then easy to hard
      const order = new Map(chapters.map((c) => [c._id, c.number]));
      questions.sort(
        (a, b) =>
          (order.get(a.chapterId) ?? 999) - (order.get(b.chapterId) ?? 999) ||
          DIFFICULTIES.indexOf(a.difficulty) - DIFFICULTIES.indexOf(b.difficulty)
      );
    }

    const test = await Tests.insert({
      title: clean(title),
      description: clean(description),
      createdBy: req.user._id,
      schoolId: contentSchoolId(req.user),
      type: 'exam',
      examType: 'Both',
      subjects: [subject.nameEn],
      board: subject.board,
      classGrade: subject.classGrade,
      subjectId: subject._id,
      chapterIds: chosenChapters.length ? chosenChapters : [...new Set(questions.map((q) => q.chapterId).filter(Boolean))],
      sections,
      questions: questions.map((q) => q._id),
      totalMarks: questions.reduce((sum, q) => sum + q.marks, 0),
      isPublished: Boolean(isPublished),
      isActive: true,
      ...scheduleFields(req.body),
    });

    res.status(201).json({ success: true, message: 'Test created', data: (await decorateTests([test]))[0] });
  } catch (error: any) {
    sendError(res, error, 'Create test');
  }
};

// @desc    Use a ready-made test for this school (a copy the school can schedule)
// @route   POST /api/assessments/tests/:id/copy
export const copyReadyMade = async (req: AuthRequest, res: Response) => {
  try {
    const source = await Tests.findById(req.params.id);
    if (!source || !source.isActive || !source.isPublished || source.schoolId || source.board !== boardOf(req)) {
      throw new HttpError(404, 'Ready-made test not found');
    }
    const test = await Tests.insert({
      ...pick(source, ['title', 'description', 'type', 'examType', 'subjects', 'board', 'classGrade', 'subjectId', 'chapterIds', 'questions', 'totalMarks']),
      title: clean(req.body.title) || source.title,
      createdBy: req.user._id,
      schoolId: req.user.schoolId,
      sections: await teacherSections(req, source.classGrade, source.subjectId, parseSections(req.body.sections)),
      copiedFrom: source._id,
      isPublished: req.body.isPublished === undefined ? true : Boolean(req.body.isPublished),
      isActive: true,
      ...scheduleFields({ duration: source.duration, ...req.body }),
    });
    res.status(201).json({ success: true, message: 'Test added to your school', data: (await decorateTests([test]))[0] });
  } catch (error: any) {
    sendError(res, error, 'Copy test');
  }
};

// @desc    One test with its questions and answers (staff)
// @route   GET /api/assessments/tests/:id
export const getTest = async (req: AuthRequest, res: Response) => {
  try {
    const test = await Tests.findById(req.params.id);
    const readyMadeForMe = test && !test.schoolId && test.isPublished && !isOwner(req.user) && test.board === req.school?.board;
    if (!test || !test.isActive || !test.classGrade || !(canChange(req.user, test) || readyMadeForMe)) {
      throw new HttpError(404, 'Test not found');
    }
    if (req.user.role === 'teacher' && test.schoolId && !testVisible(await staffScopeOf(req), test)) throw new HttpError(404, 'Test not found');
    const [decorated] = await decorateTests([test]);
    res.status(200).json({ success: true, data: { ...decorated, questions: await questionsInOrder(test.questions) } });
  } catch (error: any) {
    sendError(res, error, 'Get test');
  }
};

// @desc    Change a test's title, sections, schedule or publish it
// @route   PATCH /api/assessments/tests/:id
export const updateTest = async (req: AuthRequest, res: Response) => {
  try {
    const test = await findOwnTest(req, req.params.id);
    if (!test) throw new HttpError(404, 'Test not found');
    const updates: Record<string, any> = scheduleFields(req.body, test);
    if (req.body.title !== undefined) {
      if (!clean(req.body.title)) throw new HttpError(400, 'Test title is required');
      updates.title = clean(req.body.title);
    }
    if (req.body.description !== undefined) updates.description = clean(req.body.description);
    if (req.body.sections !== undefined && !isOwner(req.user)) {
      updates.sections = await teacherSections(req, test.classGrade, test.subjectId, parseSections(req.body.sections));
    }
    if (req.body.isPublished !== undefined) updates.isPublished = Boolean(req.body.isPublished);
    const updated = await Tests.updateById(test._id, updates);
    res.status(200).json({ success: true, message: 'Test saved', data: (await decorateTests([updated!]))[0] });
  } catch (error: any) {
    sendError(res, error, 'Update test');
  }
};

// @desc    Remove a test (results are kept)
// @route   DELETE /api/assessments/tests/:id
export const deleteTest = async (req: AuthRequest, res: Response) => {
  try {
    const test = await findOwnTest(req, req.params.id);
    if (!test) throw new HttpError(404, 'Test not found');
    await Tests.updateById(test._id, { isActive: false });
    res.status(200).json({ success: true, message: 'Test removed' });
  } catch (error: any) {
    sendError(res, error, 'Delete test');
  }
};

// @desc    Results of a school test: every assigned student, summary, per-question accuracy
// @route   GET /api/assessments/tests/:id/results
export const testResults = async (req: AuthRequest, res: Response) => {
  try {
    const test = await findOwnTest(req, req.params.id, 'view');
    if (!test || !test.schoolId) throw new HttpError(404, 'Test not found');

    const students = await query(
      `SELECT s.*, a.id AS attempt_id, a.status, a.marks_obtained, a.total_marks, a.percentage,
              a.correct_answers, a.wrong_answers, a.skipped_answers, a.time_taken, a.end_time
       FROM (${assignedStudentsSql}) s
       LEFT JOIN LATERAL (
         SELECT * FROM student_attempts sa WHERE sa.test_id = $4 AND sa.student_id = s.id
         ORDER BY (sa.status = 'completed') DESC, sa.created_at DESC LIMIT 1
       ) a ON true
       ORDER BY s.section NULLS FIRST, a.percentage DESC NULLS LAST, s.name`,
      [test.schoolId, test.classGrade, test.sections || [], test._id]
    );

    const completed = students.filter((s) => s.status === 'completed');
    const percentages = completed.map((s) => s.percentage);
    const questionStats = await query(
      `SELECT ans->>'questionId' AS question_id,
              count(*) FILTER (WHERE (ans->>'isCorrect')::boolean)::int AS correct,
              count(*) FILTER (WHERE (ans->>'selectedAnswer')::int >= 0 AND NOT (ans->>'isCorrect')::boolean)::int AS wrong,
              count(*) FILTER (WHERE (ans->>'selectedAnswer')::int < 0)::int AS skipped
       FROM student_attempts sa, jsonb_array_elements(sa.answers) ans
       WHERE sa.test_id = $1 AND sa.status = 'completed'
       GROUP BY 1`,
      [test._id]
    );
    const statsById = new Map(questionStats.map((q) => [q.question_id, q]));
    const questions = await questionsInOrder(test.questions);

    res.status(200).json({
      success: true,
      data: {
        test: (await decorateTests([test]))[0],
        summary: {
          assigned: students.length,
          completed: completed.length,
          inProgress: students.filter((s) => s.status === 'in-progress').length,
          notStarted: students.filter((s) => !s.status).length,
          average: percentages.length ? Math.round((percentages.reduce((a, b) => a + b, 0) / percentages.length) * 10) / 10 : null,
          highest: percentages.length ? Math.max(...percentages) : null,
          lowest: percentages.length ? Math.min(...percentages) : null,
        },
        students: students.map((s) => ({
          _id: s.id,
          name: s.name,
          admissionNumber: s.admission_number,
          section: s.section,
          status: s.status || 'not-started',
          attemptId: s.attempt_id,
          marksObtained: s.marks_obtained,
          totalMarks: s.total_marks,
          percentage: s.percentage,
          correct: s.correct_answers,
          wrong: s.wrong_answers,
          skipped: s.skipped_answers,
          timeTaken: s.time_taken,
          submittedAt: s.end_time,
        })),
        questions: questions.map((q, index) => {
          const st = statsById.get(q._id) || { correct: 0, wrong: 0, skipped: 0 };
          const answered = st.correct + st.wrong + st.skipped;
          return {
            number: index + 1,
            _id: q._id,
            question: q.question,
            chapter: q.chapter,
            correct: st.correct,
            wrong: st.wrong,
            skipped: st.skipped,
            correctRate: answered ? Math.round((st.correct / answered) * 1000) / 10 : null,
          };
        }),
      },
    });
  } catch (error: any) {
    sendError(res, error, 'Test results');
  }
};
