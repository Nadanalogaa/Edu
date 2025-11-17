import api from './api';

export interface StartAttemptData {
  testId: string;
  questionIds: string[];
  totalMarks: number;
}

export interface SubmitAnswer {
  questionId: string;
  selectedAnswer: number;
  timeTaken: number;
}

export interface SubmitAttemptData {
  answers: SubmitAnswer[];
  timeTaken: number;
}

export interface StudentAttempt {
  _id: string;
  studentId: string;
  testId: string;
  answers: Array<{
    questionId: string;
    selectedAnswer: number;
    isCorrect: boolean;
    marksObtained: number;
    timeTaken: number;
  }>;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  totalMarks: number;
  marksObtained: number;
  percentage: number;
  timeTaken: number;
  startTime: string;
  endTime?: string;
  status: 'in-progress' | 'completed' | 'abandoned';
  createdAt: string;
}

export interface SubmitAttemptResponse {
  success: boolean;
  message: string;
  data: {
    attempt: StudentAttempt;
    coinsEarned: number;
  };
}

export interface Analytics {
  overview: {
    totalAttempts: number;
    totalQuestions: number;
    totalCorrect: number;
    totalWrong: number;
    totalSkipped: number;
    accuracy: string;
  };
  subjectPerformance: Array<{
    subject: string;
    percentage: string;
    attempted: number;
    correct: number;
    wrong: number;
  }>;
}

export interface MistakeBookEntry {
  _id: string;
  studentId: string;
  questionId: {
    _id: string;
    subject: string;
    topic: string;
    question: { en: string; ta: string };
    options: { en: string[]; ta: string[] };
    correctAnswer: number;
    explanation: { en: string; ta: string };
    videoUrl?: string;
  };
  attemptId: string;
  selectedAnswer: number;
  correctAnswer: number;
  isReviewed: boolean;
  reviewedAt?: string;
  notes?: string;
  createdAt: string;
}

const studentService = {
  /**
   * Start a new test attempt
   */
  startAttempt: async (data: StartAttemptData) => {
    const response = await api.post<{ success: boolean; data: StudentAttempt }>(
      '/student/attempts/start',
      data
    );
    return response.data.data;
  },

  /**
   * Submit a test attempt
   */
  submitAttempt: async (attemptId: string, data: SubmitAttemptData) => {
    const response = await api.post<SubmitAttemptResponse>(
      `/student/attempts/${attemptId}/submit`,
      data
    );
    return response.data.data;
  },

  /**
   * Get student's exam history
   */
  getAttempts: async (params?: {
    status?: 'in-progress' | 'completed' | 'abandoned';
    limit?: number;
    page?: number;
  }) => {
    const response = await api.get<{
      success: boolean;
      count: number;
      total: number;
      data: StudentAttempt[];
    }>('/student/attempts', { params });
    return response.data;
  },

  /**
   * Get student's performance analytics
   */
  getAnalytics: async () => {
    const response = await api.get<{ success: boolean; data: Analytics }>(
      '/student/analytics'
    );
    return response.data.data;
  },

  /**
   * Get mistake book entries
   */
  getMistakes: async (params?: {
    subject?: string;
    isReviewed?: boolean;
    limit?: number;
    page?: number;
  }) => {
    const response = await api.get<{
      success: boolean;
      count: number;
      total: number;
      data: MistakeBookEntry[];
    }>('/student/mistakes', { params });
    return response.data;
  },

  /**
   * Mark a mistake as reviewed
   */
  markMistakeReviewed: async (mistakeId: string, notes?: string) => {
    const response = await api.put<{ success: boolean; data: MistakeBookEntry }>(
      `/student/mistakes/${mistakeId}/review`,
      { notes }
    );
    return response.data.data;
  },
};

export default studentService;
