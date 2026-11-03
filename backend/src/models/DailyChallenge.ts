import { Table } from '../db/table';

export const DailyChallenges = new Table('daily_challenges', [
  'date', 'questionIds', 'reward', 'completedBy', 'isActive',
]);

/** Server-local calendar date as YYYY-MM-DD (the MongoDB version stored local midnight). */
export const localDateString = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};
