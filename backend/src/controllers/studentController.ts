import { Response } from 'express';
import { StudentAttempts } from '../models/StudentAttempt';
import { MistakeBook } from '../models/MistakeBook';
import { Questions } from '../models/Question';
import { Users } from '../models/User';
import { Tests, populateTests } from '../models/Test';
import { pick, isUuid } from '../db/table';
import { query, withTransaction } from '../config/database';
import { AuthRequest } from '../middleware/auth';
import { Subjects } from '../models/Syllabus';
import { questionsInOrder } from '../models/Question';
import { textbookFor } from '../utils/textbook';
import {
  attemptEndsAt, isAssignedTo, lockAttempt, scoreAttempt, studentQuestion, testState, SUBMIT_GRACE_MS,
} from '../utils/assessments';

// @desc    Start a new test attempt
// @route   POST /api/student/attempts/start
// @access  Private (Student)
export const startAttempt = async (req: AuthRequest, res: Response) => {
  try {
    const { testId, questionIds, totalMarks } = req.body;

    const test = isUuid(testId) ? await Tests.findById(testId) : null;
    // Class assessments are started through /student/assessments/:id/start (time window, one attempt)
    if (!test || !test.isActive || test.classGrade || (test.schoolId && test.schoolId !== req.user.schoolId)) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }

    const attempt = await StudentAttempts.insert({
      studentId: req.user._id,
      testId,
      answers: [],
      totalQuestions: questionIds.length,
      totalMarks,
      startTime: new Date(),
      status: 'in-progress',
    });

    res.status(201).json({
      success: true,
      message: 'Test attempt started',
      data: attempt,
    });
  } catch (error: any) {
    console.error('Start attempt error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error starting attempt',
    });
  }
};

// @desc    Submit test attempt (once; scored against every question of the test)
// @route   POST /api/student/attempts/:id/submit
// @access  Private (Student)
export const submitAttempt = async (req: AuthRequest, res: Response) => {
  try {
    const { answers, timeTaken } = req.body;

    const result = await withTransaction(async (client) => {
      const attempt = isUuid(req.params.id) ? await lockAttempt(client, req.params.id) : null;
      if (!attempt || attempt.studentId !== req.user._id) return { status: 404, message: 'Attempt not found' };
      if (attempt.status !== 'in-progress') return { status: 409, message: 'This test has already been submitted' };

      const test = await Tests.findById(attempt.testId);
      if (!test) return { status: 404, message: 'Test not found' };
      if (test.classGrade && Date.now() > attemptEndsAt(attempt, test).getTime() + SUBMIT_GRACE_MS) {
        // Too late: score what was saved before time ran out
        return { scored: await scoreAttempt(client, attempt, test, [], test.duration * 60), late: true };
      }
      return { scored: await scoreAttempt(client, attempt, test, Array.isArray(answers) ? answers : [], timeTaken) };
    });

    if ('status' in result) {
      return res.status(result.status).json({ success: false, message: result.message });
    }
    res.status(200).json({
      success: true,
      message: result.late ? 'Time was over; your saved answers were submitted' : 'Test submitted successfully',
      data: result.scored,
    });
  } catch (error: any) {
    console.error('Submit attempt error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error submitting attempt',
    });
  }
};

// @desc    Get student attempts
// @route   GET /api/student/attempts
// @access  Private (Student)
export const getMyAttempts = async (req: AuthRequest, res: Response) => {
  try {
    const { status, limit = 20, page = 1 } = req.query;

    const params: any[] = [req.user._id];
    let where = 'WHERE student_id = $1';
    if (status) {
      params.push(status);
      where += ` AND status = $${params.length}`;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const attempts = await StudentAttempts.select(
      `SELECT * FROM student_attempts ${where} ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, Number(limit), skip]
    );
    const tests = await Tests.findByIds(attempts.map((a) => a.testId));
    const data = attempts.map((a) => ({
      ...a,
      testId: pick(tests.get(a.testId), ['title', 'type', 'examType', 'duration', 'subjects']),
    }));

    const [{ total }] = await query(`SELECT count(*)::int AS total FROM student_attempts ${where}`, params);

    res.status(200).json({
      success: true,
      count: data.length,
      total,
      data,
    });
  } catch (error: any) {
    console.error('Get attempts error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching attempts',
    });
  }
};

// @desc    Get student performance analytics
// @route   GET /api/student/analytics
// @access  Private (Student)
export const getAnalytics = async (req: AuthRequest, res: Response) => {
  try {
    const studentId = req.user._id;

    // Get all completed attempts
    const attempts = await StudentAttempts.select(
      "SELECT * FROM student_attempts WHERE student_id = $1 AND status = 'completed'",
      [studentId]
    );

    // Calculate subject-wise performance
    const subjectStats: any = {
      Physics: { total: 0, correct: 0, wrong: 0, marks: 0, totalMarks: 0 },
      Chemistry: { total: 0, correct: 0, wrong: 0, marks: 0, totalMarks: 0 },
      Biology: { total: 0, correct: 0, wrong: 0, marks: 0, totalMarks: 0 },
      Maths: { total: 0, correct: 0, wrong: 0, marks: 0, totalMarks: 0 },
    };

    let totalAttempts = attempts.length;
    let totalQuestions = 0;
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalSkipped = 0;

    // Load every answered question once to categorise answers by subject
    const questions = await Questions.findByIds(
      attempts.flatMap((attempt) => attempt.answers.map((answer: any) => answer.questionId))
    );

    for (const attempt of attempts) {
      totalQuestions += attempt.totalQuestions;
      totalCorrect += attempt.correctAnswers;
      totalWrong += attempt.wrongAnswers;
      totalSkipped += attempt.skippedAnswers;

      for (const answer of attempt.answers) {
        const question = questions.get(answer.questionId);
        if (question && subjectStats[question.subject]) {
          subjectStats[question.subject].total++;
          if (answer.isCorrect) {
            subjectStats[question.subject].correct++;
            subjectStats[question.subject].marks += answer.marksObtained;
          } else {
            subjectStats[question.subject].wrong++;
          }
          subjectStats[question.subject].totalMarks += question.marks;
        }
      }
    }

    // Calculate percentages
    const subjectPerformance = Object.keys(subjectStats).map((subject) => ({
      subject,
      percentage:
        subjectStats[subject].totalMarks > 0
          ? ((subjectStats[subject].marks / subjectStats[subject].totalMarks) * 100).toFixed(2)
          : 0,
      attempted: subjectStats[subject].total,
      correct: subjectStats[subject].correct,
      wrong: subjectStats[subject].wrong,
    }));

    // Get user stats
    const student = await Users.findById(studentId);

    res.status(200).json({
      success: true,
      data: {
        overview: {
          totalAttempts,
          totalQuestions,
          totalCorrect,
          totalWrong,
          totalSkipped,
          accuracy: totalQuestions > 0 ? ((totalCorrect / totalQuestions) * 100).toFixed(2) : 0,
        },
        subjectPerformance,
        userStats: {
          totalPoints: student?.totalPoints || 0,
          coins: student?.coins || 0,
          streak: student?.streak || 0,
        },
      },
    });
  } catch (error: any) {
    console.error('Get analytics error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching analytics',
    });
  }
};

// @desc    Get mistake book (from tests and practice), with filters and a summary
// @route   GET /api/student/mistakes?status=open|done|all&source=test|practice&subjectId=&limit=&page=
// @access  Private (Student)
export const getMistakes = async (req: AuthRequest, res: Response) => {
  try {
    const { isReviewed, status, source, subjectId, limit = 30, page = 1 } = req.query;
    const params: any[] = [req.user._id];
    const where = ['m.student_id = $1'];
    const state = status || (isReviewed === undefined ? 'all' : isReviewed === 'true' ? 'done' : 'open');
    if (state !== 'all') where.push(state === 'done' ? 'm.is_reviewed' : 'NOT m.is_reviewed');
    if (source === 'test' || source === 'practice') {
      params.push(source);
      where.push(`m.source = $${params.length}`);
    }
    if (isUuid(subjectId)) {
      params.push(subjectId);
      where.push(`q.subject_id = $${params.length}`);
    }
    const take = Math.min(100, Math.max(1, Number(limit) || 30));
    const skip = (Math.max(1, Number(page) || 1) - 1) * take;

    const rows = await query(
      `SELECT m.id AS mistake_id, m.selected_answer, m.is_reviewed, m.reviewed_at, m.source AS mistake_source, m.wrong_count,
              m.fixed_in, m.created_at AS mistake_created, m.updated_at AS mistake_updated, t.title AS test_title,
              c.name_en AS chapter_en, c.name_ta AS chapter_ta, s.name_ta AS subject_ta, q.*
       FROM mistake_book m
       JOIN questions q ON q.id = m.question_id
       LEFT JOIN chapters c ON c.id = q.chapter_id
       LEFT JOIN subjects s ON s.id = q.subject_id
       LEFT JOIN student_attempts a ON a.id = m.attempt_id
       LEFT JOIN tests t ON t.id = a.test_id
       WHERE ${where.join(' AND ')}
       ORDER BY m.is_reviewed, m.updated_at DESC
       LIMIT ${take} OFFSET ${skip}`,
      params
    );
    const [summary] = await query(
      `SELECT count(*) FILTER (WHERE NOT m.is_reviewed)::int AS open,
              count(*) FILTER (WHERE NOT m.is_reviewed AND m.source = 'test')::int AS open_tests,
              count(*) FILTER (WHERE NOT m.is_reviewed AND m.source = 'practice')::int AS open_practice,
              count(*) FILTER (WHERE m.is_reviewed)::int AS done,
              count(*) FILTER (WHERE m.fixed_in IS NOT NULL)::int AS fixed
       FROM mistake_book m WHERE m.student_id = $1`,
      [req.user._id]
    );
    const subjects = await query(
      `SELECT s.id AS subject_id, s.name_en, s.name_ta, count(*) FILTER (WHERE NOT m.is_reviewed)::int AS open
       FROM mistake_book m JOIN questions q ON q.id = m.question_id JOIN subjects s ON s.id = q.subject_id
       WHERE m.student_id = $1 GROUP BY s.id, s.name_en, s.name_ta, s.sort_order ORDER BY s.sort_order`,
      [req.user._id]
    );

    const data = rows.map((r) => ({
      _id: r.mistake_id,
      source: r.mistake_source,
      testTitle: r.test_title || null,
      selectedAnswer: r.selected_answer,
      isReviewed: r.is_reviewed,
      reviewedAt: r.reviewed_at,
      fixedIn: r.fixed_in,
      wrongCount: r.wrong_count,
      createdAt: r.mistake_created,
      updatedAt: r.mistake_updated,
      question: {
        _id: r.id,
        subject: r.subject,
        subjectTa: r.subject_ta,
        chapter: r.chapter,
        chapterName: { en: r.chapter_en || r.topic, ta: r.chapter_ta || r.chapter_en || r.topic },
        difficulty: r.difficulty,
        question: r.question,
        options: r.options,
        correctAnswer: r.correct_answer,
        explanation: r.explanation,
        imageUrl: r.image_url || null,
        source: r.source || null,
        textbook: textbookFor({ board: r.board, classGrade: r.class_grade, subject: r.subject, source: r.source }),
      },
    }));

    res.status(200).json({
      success: true,
      count: data.length,
      summary: {
        open: summary.open, openTests: summary.open_tests, openPractice: summary.open_practice, done: summary.done, fixed: summary.fixed,
      },
      subjects: subjects.map((s) => ({ subjectId: s.subject_id, nameEn: s.name_en, nameTa: s.name_ta, open: s.open })),
      data,
    });
  } catch (error: any) {
    console.error('Get mistakes error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching mistakes',
    });
  }
};

// @desc    Mark mistake as reviewed
// @route   PUT /api/student/mistakes/:id/review
// @access  Private (Student)
export const markMistakeReviewed = async (req: AuthRequest, res: Response) => {
  try {
    const { notes } = req.body;

    const existing = await MistakeBook.findById(req.params.id);

    if (!existing || existing.studentId !== req.user._id) {
      return res.status(404).json({
        success: false,
        message: 'Mistake not found',
      });
    }

    const mistake = await MistakeBook.updateById(existing._id, {
      isReviewed: true,
      reviewedAt: new Date(),
      ...(notes && { notes }),
    });

    res.status(200).json({
      success: true,
      message: 'Mistake marked as reviewed',
      data: mistake,
    });
  } catch (error: any) {
    console.error('Mark mistake reviewed error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error marking mistake as reviewed',
    });
  }
};

// @desc    Get tests shared with student
// @route   GET /api/student/tests
// @access  Private (Student)
export const getSharedTests = async (req: AuthRequest, res: Response) => {
  try {
    const studentId = req.user._id;

    // Get student's grade
    const student = await Users.findById(studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Find tests shared with this student or, if they have one, their grade
    const tests = await Tests.select(
      `SELECT * FROM tests
       WHERE is_active = true AND is_published = true AND school_id = $3
         AND ($1::uuid = ANY(shared_with_students) OR ($2::text IS NOT NULL AND $2::text = ANY(shared_with_grades)))
       ORDER BY shared_at DESC NULLS LAST`,
      [studentId, student.grade || null, student.schoolId]
    );

    res.status(200).json({
      success: true,
      // Students never receive correct answers or explanations before submitting
      data: (await populateTests(tests, { creatorFields: ['name'], withQuestions: true })).map((t) => ({
        ...t,
        questions: t.questions.map(studentQuestion),
      })),
    });
  } catch (error: any) {
    console.error('Get shared tests error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching shared tests',
    });
  }
};

// ------------------------------------------------------- class assessments

/** The student's latest attempt at a test (a completed one wins). */
const latestAttempt = async (studentId: string, testId: string, client?: any) => {
  const [row] = await query(
    `SELECT * FROM student_attempts WHERE student_id = $1 AND test_id = $2
     ORDER BY (status = 'completed') DESC, created_at DESC LIMIT 1`,
    [studentId, testId],
    client
  );
  return StudentAttempts.toDoc(row);
};

// @desc    Class assessments for the student's class and section, with status
// @route   GET /api/student/assessments
export const listAssessments = async (req: AuthRequest, res: Response) => {
  try {
    const student = req.user;
    if (!student.classGrade) {
      return res.status(200).json({ success: true, data: [] });
    }
    const tests = await Tests.select(
      `SELECT * FROM tests
       WHERE is_active AND is_published AND school_id = $1 AND class_grade = $2
         AND (cardinality(sections) = 0 OR $3::text = ANY(sections))
       ORDER BY COALESCE(start_time, created_at) DESC`,
      [student.schoolId, student.classGrade, student.section || null]
    );
    const subjects = await Subjects.findByIds(tests.map((t) => t.subjectId).filter(Boolean));
    const attempts = tests.length
      ? await StudentAttempts.select(
          `SELECT DISTINCT ON (test_id) * FROM student_attempts
           WHERE student_id = $1 AND test_id = ANY($2::uuid[])
           ORDER BY test_id, (status = 'completed') DESC, created_at DESC`,
          [student._id, tests.map((t) => t._id)]
        )
      : [];
    const byTest = new Map(attempts.map((a) => [a.testId, a]));
    const now = new Date();

    const data = tests.map((t) => {
      const attempt = byTest.get(t._id);
      const state = testState(t, now);
      let status: string;
      if (attempt?.status === 'completed') status = 'completed';
      else if (attempt?.status === 'in-progress' && state === 'open') status = 'in-progress';
      else if (state === 'upcoming') status = 'upcoming';
      else if (state === 'closed') status = 'missed';
      else status = 'available';
      const subject = subjects.get(t.subjectId);
      return {
        _id: t._id,
        title: t.title,
        description: t.description,
        subjectName: subject?.nameEn || t.subjects?.[0],
        subjectNameTa: subject?.nameTa,
        questionCount: t.questions.length,
        totalMarks: t.totalMarks,
        duration: t.duration,
        startTime: t.startTime,
        endTime: t.endTime,
        status,
        attempt: attempt && {
          _id: attempt._id,
          status: attempt.status,
          marksObtained: attempt.status === 'completed' ? attempt.marksObtained : undefined,
          percentage: attempt.status === 'completed' ? attempt.percentage : undefined,
          submittedAt: attempt.endTime,
        },
      };
    });

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('List assessments error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error fetching tests' });
  }
};

// @desc    Start (or resume) a class assessment; questions come without answers
// @route   POST /api/student/assessments/:id/start
export const startAssessment = async (req: AuthRequest, res: Response) => {
  try {
    const test = isUuid(req.params.id) ? await Tests.findById(req.params.id) : null;
    if (!test || !isAssignedTo(test, req.user)) {
      return res.status(404).json({ success: false, message: 'Test not found' });
    }

    const result = await withTransaction(async (client) => {
      // One student, one attempt: lock the student's row so two taps cannot start two
      await query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [req.user._id], client);
      let attempt = await latestAttempt(req.user._id, test._id, client);

      if (attempt?.status === 'completed') return { status: 409, message: 'You have already submitted this test', attemptId: attempt._id };
      if (attempt?.status === 'in-progress' && Date.now() > attemptEndsAt(attempt, test).getTime() + SUBMIT_GRACE_MS) {
        const scored = await scoreAttempt(client, attempt, test, [], test.duration * 60);
        return { status: 409, message: 'Time is over for this test; your saved answers were submitted', attemptId: scored.attempt._id };
      }
      if (!attempt) {
        const state = testState(test);
        if (state === 'upcoming') return { status: 403, message: 'This test has not started yet' };
        if (state === 'closed') return { status: 403, message: 'This test is closed' };
        attempt = await StudentAttempts.insert(
          {
            studentId: req.user._id,
            testId: test._id,
            answers: [],
            totalQuestions: test.questions.length,
            totalMarks: test.totalMarks,
            startTime: new Date(),
            status: 'in-progress',
          },
          client
        );
      }
      return { attempt };
    });

    if ('status' in result) {
      return res.status(result.status).json({ success: false, message: result.message, attemptId: result.attemptId });
    }

    const { attempt } = result;
    const subject = test.subjectId ? await Subjects.findById(test.subjectId) : null;
    res.status(200).json({
      success: true,
      data: {
        attempt: {
          _id: attempt._id,
          startTime: attempt.startTime,
          endsAt: attemptEndsAt(attempt, test),
          serverTime: new Date(),
          answers: (attempt.answers || []).map((a: any) => ({ questionId: a.questionId, selectedAnswer: a.selectedAnswer })),
        },
        test: {
          _id: test._id,
          title: test.title,
          subjectName: subject?.nameEn,
          subjectNameTa: subject?.nameTa,
          duration: test.duration,
          totalMarks: test.totalMarks,
          questions: (await questionsInOrder(test.questions)).map(studentQuestion),
        },
      },
    });
  } catch (error: any) {
    console.error('Start assessment error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error starting test' });
  }
};

// @desc    Save answers while the test is in progress (not scored yet)
// @route   PUT /api/student/attempts/:id/progress
export const saveProgress = async (req: AuthRequest, res: Response) => {
  try {
    const answers = (Array.isArray(req.body.answers) ? req.body.answers : [])
      .filter((a: any) => isUuid(a?.questionId))
      .map((a: any) => ({
        questionId: a.questionId,
        selectedAnswer: Number.isInteger(a.selectedAnswer) && a.selectedAnswer >= 0 && a.selectedAnswer <= 3 ? a.selectedAnswer : -1,
      }));
    const [row] = await query(
      `UPDATE student_attempts SET answers = $1, updated_at = now()
       WHERE id = $2 AND student_id = $3 AND status = 'in-progress' RETURNING id`,
      [JSON.stringify(answers), isUuid(req.params.id) ? req.params.id : null, req.user._id]
    );
    if (!row) return res.status(409).json({ success: false, message: 'This test is no longer in progress' });
    res.status(200).json({ success: true, saved: answers.length });
  } catch (error: any) {
    console.error('Save progress error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error saving answers' });
  }
};

// @desc    A submitted attempt with correct answers and explanations
// @route   GET /api/student/attempts/:id/review
export const reviewAttempt = async (req: AuthRequest, res: Response) => {
  try {
    const attempt = await StudentAttempts.findById(req.params.id);
    if (!attempt || attempt.studentId !== req.user._id) {
      return res.status(404).json({ success: false, message: 'Attempt not found' });
    }
    if (attempt.status !== 'completed') {
      return res.status(409).json({ success: false, message: 'Answers are shown after you submit the test' });
    }
    const test = await Tests.findById(attempt.testId);
    const questions = await questionsInOrder(test?.questions || attempt.answers.map((a: any) => a.questionId));
    const answers = new Map(attempt.answers.map((a: any) => [a.questionId, a]));
    const subject = test?.subjectId ? await Subjects.findById(test.subjectId) : null;

    res.status(200).json({
      success: true,
      data: {
        attempt: pick(attempt, ['marksObtained', 'totalMarks', 'percentage', 'correctAnswers', 'wrongAnswers', 'skippedAnswers', 'timeTaken', 'endTime']),
        test: test && { _id: test._id, title: test.title, subjectName: subject?.nameEn, subjectNameTa: subject?.nameTa },
        questions: questions.map((q) => {
          const a: any = answers.get(q._id);
          return {
            _id: q._id,
            question: q.question,
            options: q.options,
            explanation: q.explanation,
            correctAnswer: q.correctAnswer,
            marks: q.marks,
            imageUrl: q.imageUrl || null,
            textbook: textbookFor(q),
            selectedAnswer: a ? a.selectedAnswer : -1,
            isCorrect: Boolean(a?.isCorrect),
          };
        }),
      },
    });
  } catch (error: any) {
    console.error('Review attempt error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error loading answers' });
  }
};
