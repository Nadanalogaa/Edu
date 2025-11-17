
export type Role = 'admin' | 'teacher' | 'student';

export interface Student {
  id: string;
  name: string;
  class: number;
  school: string;
  performanceTrend: 'up' | 'down' | 'stable';
  attemptRate: number; // percentage
  overallScore: number; // percentage
  riskLevel: 'high' | 'medium' | 'low';
}

export interface Topic {
  name: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Maths';
  strength: 'weak' | 'average' | 'strong';
}

export interface PerformanceDataPoint {
  date: string; // e.g., 'Jan', 'Feb'
  score: number;
}

export interface School {
  id: string;
  name: string;
  avgScore: number;
  topStudent: string;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  videoExplanationUrl?: string;
}

export interface Mistake extends Question {
  yourAnswer: string;
}

export interface ExamResult {
  subject: string;
  score: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  date: string; // ISO string
  questions: Question[];
  answers: (string | null)[];
}