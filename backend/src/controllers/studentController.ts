import { Response } from 'express';
import StudentAttempt from '../models/StudentAttempt';
import MistakeBook from '../models/MistakeBook';
import Question from '../models/Question';
import User from '../models/User';
import Test from '../models/Test';
import { AuthRequest } from '../middleware/auth';

// @desc    Start a new test attempt
// @route   POST /api/student/attempts/start
// @access  Private (Student)
export const startAttempt = async (req: AuthRequest, res: Response) => {
  try {
    const { testId, questionIds, totalMarks } = req.body;

    const attempt = await StudentAttempt.create({
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

    const attempt = await StudentAttempt.findById(req.params.id);

    if (!attempt) {
      return res.status(404).json({
        success: false,
        message: 'Attempt not found',
      });
    }

    // Verify ownership
    if (attempt.studentId.toString() !== req.user._id.toString()) {
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

    for (const answer of answers) {
      const question = await Question.findById(answer.questionId);

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
          questionId: answer.questionId,
          selectedAnswer: answer.selectedAnswer,
          correctAnswer: question.correctAnswer,
        });
      }

      processedAnswers.push({
        questionId: answer.questionId,
        selectedAnswer: answer.selectedAnswer,
        isCorrect,
        marksObtained: marks,
        timeTaken: answer.timeTaken || 0,
      });
    }

    const percentage = (marksObtained / attempt.totalMarks) * 100;

    // Update attempt
    attempt.answers = processedAnswers as any;
    attempt.correctAnswers = correctAnswers;
    attempt.wrongAnswers = wrongAnswers;
    attempt.skippedAnswers = skippedAnswers;
    attempt.marksObtained = marksObtained;
    attempt.percentage = percentage;
    attempt.timeTaken = timeTaken;
    attempt.endTime = new Date();
    attempt.status = 'completed';

    await attempt.save();

    // Add mistakes to mistake book
    if (mistakes.length > 0) {
      const mistakeBookEntries = mistakes.map((mistake) => ({
        studentId: req.user._id,
        questionId: mistake.questionId,
        attemptId: attempt._id,
        selectedAnswer: mistake.selectedAnswer,
        correctAnswer: mistake.correctAnswer,
      }));

      await MistakeBook.insertMany(mistakeBookEntries);
    }

    // Update student stats
    const student = await User.findById(req.user._id);
    if (student) {
      student.totalPoints = (student.totalPoints || 0) + marksObtained;
      student.coins = (student.coins || 0) + Math.floor(marksObtained / 4); // 1 coin per 4 marks
      await student.save();
    }

    res.status(200).json({
      success: true,
      message: 'Test submitted successfully',
      data: {
        attempt,
        coinsEarned: Math.floor(marksObtained / 4),
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

    const query: any = { studentId: req.user._id };
    if (status) query.status = status;

    const skip = (Number(page) - 1) * Number(limit);

    const attempts = await StudentAttempt.find(query)
      .populate('testId', 'title type examType duration')
      .limit(Number(limit))
      .skip(skip)
      .sort({ createdAt: -1 });

    const total = await StudentAttempt.countDocuments(query);

    res.status(200).json({
      success: true,
      count: attempts.length,
      total,
      data: attempts,
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
    const attempts = await StudentAttempt.find({
      studentId,
      status: 'completed',
    }).populate('testId', 'subjects examType');

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

    for (const attempt of attempts) {
      totalQuestions += attempt.totalQuestions;
      totalCorrect += attempt.correctAnswers;
      totalWrong += attempt.wrongAnswers;
      totalSkipped += attempt.skippedAnswers;

      // Get questions from this attempt to categorize by subject
      for (const answer of attempt.answers) {
        const question = await Question.findById(answer.questionId);
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
    const student = await User.findById(studentId);

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

    const query: any = { studentId: req.user._id };
    if (isReviewed !== undefined) query.isReviewed = isReviewed === 'true';

    const skip = (Number(page) - 1) * Number(limit);

    let mistakes = await MistakeBook.find(query)
      .populate('questionId')
      .populate('attemptId', 'createdAt')
      .limit(Number(limit))
      .skip(skip)
      .sort({ createdAt: -1 });

    // Filter by subject if provided
    if (subject) {
      mistakes = mistakes.filter((m: any) => m.questionId?.subject === subject);
    }

    const total = await MistakeBook.countDocuments(query);

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

    const mistake = await MistakeBook.findOne({
      _id: req.params.id,
      studentId: req.user._id,
    });

    if (!mistake) {
      return res.status(404).json({
        success: false,
        message: 'Mistake not found',
      });
    }

    mistake.isReviewed = true;
    mistake.reviewedAt = new Date();
    if (notes) mistake.notes = notes;

    await mistake.save();

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
    const student = await User.findById(studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Find tests shared with this student or their grade
    const query: any = {
      isActive: true,
      isPublished: true,
      $or: [
        { sharedWithStudents: studentId },
      ],
    };

    // If student has a grade, also include tests shared with that grade
    if (student.grade) {
      query.$or.push({ sharedWithGrades: student.grade });
    }

    const tests = await Test.find(query)
      .populate('createdBy', 'name')
      .populate('questions')
      .sort({ sharedAt: -1 });

    res.status(200).json({
      success: true,
      data: tests,
    });
  } catch (error: any) {
    console.error('Get shared tests error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching shared tests',
    });
  }
};
