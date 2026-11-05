import { PoolClient } from 'pg';
import { query, Queryable } from '../config/database';
import { Doc } from '../db/table';
import { StudentAttempts } from '../models/StudentAttempt';
import { MistakeBook } from '../models/MistakeBook';
import { questionsInOrder } from '../models/Question';

// Shared rules for class assessments: when a test is open, scoring, and what a
// student may see before submitting (never the answers).

/** Slack after the timer ends (slow networks) before an attempt is closed for good. */
export const SUBMIT_GRACE_MS = 2 * 60 * 1000;

export type TestState = 'upcoming' | 'open' | 'closed';

export const testState = (test: Doc, now = new Date()): TestState => {
  if (test.startTime && new Date(test.startTime) > now) return 'upcoming';
  if (test.endTime && new Date(test.endTime) <= now) return 'closed';
  return 'open';
};

/** When an attempt's time runs out: start + duration, but never after the test closes. */
export const attemptEndsAt = (attempt: Doc, test: Doc) => {
  const byDuration = new Date(attempt.startTime).getTime() + test.duration * 60 * 1000;
  const closes = test.endTime ? new Date(test.endTime).getTime() : Infinity;
  return new Date(Math.min(byDuration, closes));
};

/** A question as a student sees it while taking a test: no answer, no explanation. */
export const studentQuestion = (q: Doc) => ({
  _id: q._id,
  question: q.question,
  options: q.options,
  marks: q.marks,
  chapterId: q.chapterId,
  imageUrl: q.imageUrl || null,
});

/** Is this class assessment assigned to the student (their school, class and section)? */
export const isAssignedTo = (test: Doc, student: Doc) =>
  test.isActive &&
  test.isPublished &&
  test.schoolId === student.schoolId &&
  test.classGrade === student.classGrade &&
  (!test.sections?.length || (student.section && test.sections.includes(student.section)));

/**
 * Scores an in-progress attempt against every question of its test (unanswered
 * = skipped), records mistakes and the student's points, and completes it.
 * `answers` are the latest answers; earlier saved answers fill any gaps.
 */
export const scoreAttempt = async (
  client: PoolClient,
  attempt: Doc,
  test: Doc,
  answers: Array<{ questionId: string; selectedAnswer: number; timeTaken?: number }> = [],
  timeTaken?: number
) => {
  const chosen = new Map<string, { selectedAnswer: number; timeTaken: number }>();
  for (const saved of attempt.answers || []) {
    chosen.set(String(saved.questionId), { selectedAnswer: Number(saved.selectedAnswer), timeTaken: saved.timeTaken || 0 });
  }
  for (const answer of answers || []) {
    const selected = Number(answer.selectedAnswer);
    chosen.set(String(answer.questionId), {
      selectedAnswer: Number.isInteger(selected) && selected >= 0 && selected <= 3 ? selected : -1,
      timeTaken: Number(answer.timeTaken) || 0,
    });
  }

  const questions = await questionsInOrder(test.questions);
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let skippedAnswers = 0;
  let marksObtained = 0;
  const processed = [];

  for (const question of questions) {
    const pick = chosen.get(question._id) || { selectedAnswer: -1, timeTaken: 0 };
    const answered = pick.selectedAnswer >= 0;
    const isCorrect = answered && pick.selectedAnswer === question.correctAnswer;
    const marks = isCorrect ? question.marks : 0;

    if (!answered) skippedAnswers++;
    else if (isCorrect) correctAnswers++;
    else wrongAnswers++;
    marksObtained += marks;

    processed.push({
      questionId: question._id,
      selectedAnswer: pick.selectedAnswer,
      isCorrect,
      marksObtained: marks,
      timeTaken: pick.timeTaken,
    });

    if (answered && !isCorrect) {
      await MistakeBook.insert(
        {
          studentId: attempt.studentId,
          questionId: question._id,
          attemptId: attempt._id,
          selectedAnswer: pick.selectedAnswer,
          correctAnswer: question.correctAnswer,
        },
        client
      );
    }
  }

  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0) || attempt.totalMarks || 1;
  const percentage = Math.round((marksObtained / totalMarks) * 10000) / 100;
  const elapsed = Math.round((Date.now() - new Date(attempt.startTime).getTime()) / 1000);
  const coinsEarned = Math.floor(marksObtained / 4);

  const updated = await StudentAttempts.updateById(
    attempt._id,
    {
      answers: processed,
      totalQuestions: questions.length,
      totalMarks,
      correctAnswers,
      wrongAnswers,
      skippedAnswers,
      marksObtained,
      percentage,
      timeTaken: Math.max(0, Math.min(Number(timeTaken) || elapsed, test.duration * 60)),
      endTime: new Date(),
      status: 'completed',
    },
    client
  );

  await query(
    'UPDATE users SET total_points = total_points + $1, coins = coins + $2, updated_at = now() WHERE id = $3',
    [marksObtained, coinsEarned, attempt.studentId],
    client
  );

  return { attempt: updated!, coinsEarned };
};

/** Locks an attempt row for the rest of the transaction (stops double submits). */
export const lockAttempt = async (client: Queryable, attemptId: string) => {
  const [row] = await query('SELECT * FROM student_attempts WHERE id = $1 FOR UPDATE', [attemptId], client);
  return StudentAttempts.toDoc(row);
};
