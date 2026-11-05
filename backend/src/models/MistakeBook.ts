import { Table } from '../db/table';

export const MistakeBook = new Table('mistake_book', [
  'studentId', 'questionId', 'attemptId', 'selectedAnswer', 'correctAnswer', 'isReviewed',
  'reviewedAt', 'notes', 'source', 'wrongCount', 'fixedIn',
]);
