import type { ExamResult } from '../types';

const dummyExamHistory: ExamResult[] = [
    { subject: 'Physics', score: 75, correct: 20, incorrect: 5, unanswered: 0, date: '2023-10-01T00:00:00.000Z', questions: [], answers: [] },
    { subject: 'Chemistry', score: 60, correct: 15, incorrect: 0, unanswered: 10, date: '2023-10-08T00:00:00.000Z', questions: [], answers: [] },
    { subject: 'Biology', score: 88, correct: 22, incorrect: 2, unanswered: 1, date: '2023-10-15T00:00:00.000Z', questions: [], answers: [] },
    { subject: 'Physics', score: 82, correct: 22, incorrect: 4, unanswered: 0, date: '2023-10-22T00:00:00.000Z', questions: [], answers: [] },
    { subject: 'Chemistry', score: 70, correct: 18, incorrect: 2, unanswered: 5, date: '2023-10-29T00:00:00.000Z', questions: [], answers: [] },
    { subject: 'Biology', score: 92, correct: 23, incorrect: 1, unanswered: 1, date: '2023-11-05T00:00:00.000Z', questions: [], answers: [] },
];

export function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      // If examHistory is not found, provide dummy data to showcase the chart feature
      if (key === 'examHistory') {
        return dummyExamHistory as T;
      }
      return defaultValue;
    }
    return JSON.parse(serializedState) as T;
  } catch (e) {
    console.warn("Could not load state from local storage", e);
    return defaultValue;
  }
}

export function saveToLocalStorage<T>(key: string, value: T): void {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.warn("Could not save state to local storage", e);
  }
}
