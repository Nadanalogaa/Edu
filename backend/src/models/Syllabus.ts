import { Table } from '../db/table';

export const BOARDS = ['state_board', 'cbse'] as const;
export type Board = (typeof BOARDS)[number];
export const CLASS_GRADES = [6, 7, 8, 9, 10, 11, 12];

export const isBoard = (value: unknown): value is Board => BOARDS.includes(value as Board);
export const isClassGrade = (value: unknown) => CLASS_GRADES.includes(Number(value));

export const Subjects = new Table('subjects', [
  'board', 'classGrade', 'code', 'nameEn', 'nameTa', 'sortOrder', 'isActive',
]);

export const Chapters = new Table('chapters', ['subjectId', 'number', 'nameEn', 'nameTa', 'isActive']);
