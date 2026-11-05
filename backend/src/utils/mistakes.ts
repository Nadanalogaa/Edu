import { PoolClient } from 'pg';
import { query } from '../config/database';

// One open Mistake Book entry per student and question, from tests and practice.
// Answering the question correctly later (in practice, a test or the Mistake
// Book's own check) marks it fixed. A fixed mistake comes back once, a week
// later, as a check: still right = remembered; wrong = it goes back to "to fix".

/** Days until a fixed mistake is checked again. */
export const RECHECK_DAYS = 7;

/** SQL: a fixed entry (alias m) waiting for, and due for, its check. */
export const DUE_SQL = `(m.is_reviewed AND m.rechecked_at IS NULL AND m.recheck_at <= now())`;

/** Settles any pending check of this question: `passed` when answered right after it fell due. */
const settleRecheck = (studentId: string, questionId: string, passed: boolean, client?: PoolClient) =>
  query(
    `UPDATE mistake_book SET rechecked_at = now(), recheck_passed = $3, updated_at = now()
     WHERE student_id = $1 AND question_id = $2 AND is_reviewed AND rechecked_at IS NULL
       ${passed ? 'AND recheck_at <= now()' : ''}
     RETURNING id`,
    [studentId, questionId, passed],
    client
  );

export const recordMistake = async (
  m: { studentId: string; questionId: string; selectedAnswer: number; correctAnswer: number; attemptId?: string | null; source: 'test' | 'practice' },
  client?: PoolClient
) => {
  // Wrong again: an earlier fix did not stick
  await settleRecheck(m.studentId, m.questionId, false, client);
  return query(
    `INSERT INTO mistake_book (student_id, question_id, attempt_id, selected_answer, correct_answer, source)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (student_id, question_id) WHERE NOT is_reviewed DO UPDATE SET
       selected_answer = EXCLUDED.selected_answer, correct_answer = EXCLUDED.correct_answer,
       attempt_id = COALESCE(EXCLUDED.attempt_id, mistake_book.attempt_id), source = EXCLUDED.source,
       wrong_count = mistake_book.wrong_count + 1, updated_at = now()`,
    [m.studentId, m.questionId, m.attemptId || null, m.selectedAnswer, m.correctAnswer, m.source],
    client
  );
};

/**
 * Marks the student's open mistake on this question as fixed (to be checked
 * again in a week), and counts a due check as remembered. True if an open one was fixed.
 */
export const fixMistake = async (studentId: string, questionId: string, via: 'test' | 'practice' | 'check', client?: PoolClient) => {
  await settleRecheck(studentId, questionId, true, client);
  const rows = await query(
    `UPDATE mistake_book SET is_reviewed = true, reviewed_at = now(), fixed_in = $3, updated_at = now(),
            recheck_at = now() + interval '${RECHECK_DAYS} days'
     WHERE student_id = $1 AND question_id = $2 AND NOT is_reviewed RETURNING id`,
    [studentId, questionId, via],
    client
  );
  return rows.length > 0;
};
