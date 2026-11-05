import { PoolClient } from 'pg';
import { query } from '../config/database';

// One open Mistake Book entry per student and question, from tests and practice.
// Answering the question correctly later (in practice or a test) marks it fixed.

export const recordMistake = (
  m: { studentId: string; questionId: string; selectedAnswer: number; correctAnswer: number; attemptId?: string | null; source: 'test' | 'practice' },
  client?: PoolClient
) =>
  query(
    `INSERT INTO mistake_book (student_id, question_id, attempt_id, selected_answer, correct_answer, source)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (student_id, question_id) WHERE NOT is_reviewed DO UPDATE SET
       selected_answer = EXCLUDED.selected_answer, correct_answer = EXCLUDED.correct_answer,
       attempt_id = COALESCE(EXCLUDED.attempt_id, mistake_book.attempt_id), source = EXCLUDED.source,
       wrong_count = mistake_book.wrong_count + 1, updated_at = now()`,
    [m.studentId, m.questionId, m.attemptId || null, m.selectedAnswer, m.correctAnswer, m.source],
    client
  );

/** Marks the student's open mistake on this question as fixed. True if there was one. */
export const fixMistake = async (studentId: string, questionId: string, via: 'test' | 'practice', client?: PoolClient) => {
  const rows = await query(
    `UPDATE mistake_book SET is_reviewed = true, reviewed_at = now(), fixed_in = $3, updated_at = now()
     WHERE student_id = $1 AND question_id = $2 AND NOT is_reviewed RETURNING id`,
    [studentId, questionId, via],
    client
  );
  return rows.length > 0;
};
