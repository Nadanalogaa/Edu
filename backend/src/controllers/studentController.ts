import { Response } from 'express';
import { StudentAttempts } from '../models/StudentAttempt';
import { MistakeBook } from '../models/MistakeBook';
import { Questions } from '../models/Question';
import { Users } from '../models/User';
import { Tests, populateTests } from '../models/Test';
import { pick, isUuid } from '../db/table';
import { query, withTransaction } from '../config/database';
import { AuthRequest } from '../middleware/auth';

// @desc    Start a new test attempt
// @route   POST /api/student/attempts/start
// @access  Private (Student)
export const startAttempt = async (req: AuthRequest, res: Response) => {
  try {
    const { testId, questionIds, totalMarks } = req.body;

    if (!isUuid(testId) || !(await Tests.findById(testId))) {
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

// @desc    Submit test attempt
// @route   POST /api/student/attempts/:id/submit
// @access  Private (Student)
export const submitAttempt = async (req: AuthRequest, res: Response) => {
  try {
    const { answers, timeTaken } = req.body;

    const attempt = await StudentAttempts.findById(req.params.id);

    if (!attempt) {
      return res.status(404).json({
        success: false,
        message: 'Attempt not found',
      });
    }

    // Verify ownership
    if (attempt.studentId !== req.user._id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized',
      });
    }

    // Calculate results
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let skippedAnswers = 0;
    let marksObtained = 0;

    const processedAnswers = [];
    const mistakes = [];
    const questions = await Questions.findByIds(answers.map((a: any) => a.questionId));

    for (const answer of answers) {
      const question = questions.get(String(answer.questionId));

      if (!question) continue;

      const isCorrect = answer.selectedAnswer === question.correctAnswer;
      const marks = isCorrect ? question.marks : 0;

      if (answer.selectedAnswer === -1) {
        skippedAnswers++;
      } else if (isCorrect) {
        correctAnswers++;
        marksObtained += marks;
      } else {
        wrongAnswers++;
        // Add to mistake book
        mistakes.push({
          questionId: question._id,
          selectedAnswer: answer.selectedAnswer,
          correctAnswer: question.correctAnswer,
        });
      }

      processedAnswers.push({
        questionId: question._id,
        selectedAnswer: answer.selectedAnswer,
        isCorrect,
        marksObtained: marks,
        timeTaken: answer.timeTaken || 0,
      });
    }

    const percentage = (marksObtained / attempt.totalMarks) * 100;
    const coinsEarned = Math.floor(marksObtained / 4); // 1 coin per 4 marks

    const updatedAttempt = await withTransaction(async (client) => {
      const updated = await StudentAttempts.updateById(
        attempt._id,
        {
          answers: processedAnswers,
          correctAnswers,
          wrongAnswers,
          skippedAnswers,
          marksObtained,
          percentage,
          timeTaken,
          endTime: new Date(),
          status: 'completed',
        },
        client
      );

      // Add mistakes to mistake book
      for (const mistake of mistakes) {
        await MistakeBook.insert({ studentId: req.user._id, attemptId: attempt._id, ...mistake }, client);
      }

      // Update student stats
      await query(
        'UPDATE users SET total_points = total_points + $1, coins = coins + $2, updated_at = now() WHERE id = $3',
        [marksObtained, coinsEarned, req.user._id],
        client
      );

      return updated;
    });

    res.status(200).json({
      success: true,
      message: 'Test submitted successfully',
      data: {
        attempt: updatedAttempt,
        coinsEarned,
      },
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
      testId: pick(tests.get(a.testId), ['title', 'type', 'examType', 'duration']),
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

// @desc    Get mistake book
// @route   GET /api/student/mistakes
// @access  Private (Student)
export const getMistakes = async (req: AuthRequest, res: Response) => {
  try {
    const { subject, isReviewed, limit = 20, page = 1 } = req.query;

    const params: any[] = [req.user._id];
    let where = 'WHERE student_id = $1';
    if (isReviewed !== undefined) {
      params.push(isReviewed === 'true');
      where += ` AND is_reviewed = $${params.length}`;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const rows = await MistakeBook.select(
      `SELECT * FROM mistake_book ${where} ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, Number(limit), skip]
    );
    const questions = await Questions.findByIds(rows.map((m) => m.questionId));
    const attempts = await StudentAttempts.findByIds(rows.map((m) => m.attemptId));

    let mistakes = rows.map((m) => ({
      ...m,
      questionId: questions.get(m.questionId) || null,
      attemptId: pick(attempts.get(m.attemptId), ['createdAt']),
    }));

    // Filter by subject if provided
    if (subject) {
      mistakes = mistakes.filter((m: any) => m.questionId?.subject === subject);
    }

    const [{ total }] = await query(`SELECT count(*)::int AS total FROM mistake_book ${where}`, params);

    res.status(200).json({
      success: true,
      count: mistakes.length,
      total,
      data: mistakes,
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
       WHERE is_active = true AND is_published = true
         AND ($1::uuid = ANY(shared_with_students) OR ($2::text IS NOT NULL AND $2::text = ANY(shared_with_grades)))
       ORDER BY shared_at DESC NULLS LAST`,
      [studentId, student.grade || null]
    );

    res.status(200).json({
      success: true,
      data: await populateTests(tests, { creatorFields: ['name'], withQuestions: true }),
    });
  } catch (error: any) {
    console.error('Get shared tests error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching shared tests',
    });
  }
};
