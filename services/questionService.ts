import api from './api';

export interface Question {
  _id: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Maths';
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: {
    en: string;
    ta: string;
  };
  options: {
    en: string[];
    ta: string[];
  };
  correctAnswer: number;
  explanation: {
    en: string;
    ta: string;
  };
  videoUrl?: string;
  marks: number;
  examType: 'NEET' | 'JEE' | 'Both';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetQuestionsParams {
  subject?: string;
  topic?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  examType?: 'NEET' | 'JEE' | 'Both';
  limit?: number;
  page?: number;
}

export interface GetRandomQuestionsParams {
  subject?: string;
  topic?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  count?: number;
  examType?: 'NEET' | 'JEE' | 'Both';
}

export interface CreateQuestionData {
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Maths';
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: {
    en: string;
    ta: string;
  };
  options: {
    en: string[];
    ta: string[];
  };
  correctAnswer: number;
  explanation: {
    en: string;
    ta: string;
  };
  videoUrl?: string;
  marks?: number;
  examType?: 'NEET' | 'JEE' | 'Both';
}

const questionService = {
  /**
   * Get questions with filters
   */
  getQuestions: async (params?: GetQuestionsParams) => {
    const response = await api.get<{
      success: boolean;
      count: number;
      total: number;
      page: number;
      pages: number;
      data: Question[];
    }>('/questions', { params });
    return response.data;
  },

  /**
   * Get random questions for practice or test
   */
  getRandomQuestions: async (params?: GetRandomQuestionsParams) => {
    const response = await api.get<{
      success: boolean;
      count: number;
      data: Question[];
    }>('/questions/random', { params });
    return response.data.data;
  },

  /**
   * Get a single question by ID
   */
  getQuestionById: async (id: string) => {
    const response = await api.get<{
      success: boolean;
      data: Question;
    }>(`/questions/${id}`);
    return response.data.data;
  },

  /**
   * Get topics for a specific subject
   */
  getTopicsBySubject: async (subject: string) => {
    const response = await api.get<{
      success: boolean;
      data: string[];
    }>(`/questions/topics/${subject}`);
    return response.data.data;
  },

  /**
   * Create a new question (Teacher/Admin only)
   */
  createQuestion: async (data: CreateQuestionData) => {
    const response = await api.post<{
      success: boolean;
      message: string;
      data: Question;
    }>('/questions', data);
    return response.data.data;
  },

  /**
   * Update a question (Teacher/Admin only)
   */
  updateQuestion: async (id: string, data: Partial<CreateQuestionData>) => {
    const response = await api.put<{
      success: boolean;
      message: string;
      data: Question;
    }>(`/questions/${id}`, data);
    return response.data.data;
  },

  /**
   * Delete a question (Admin only)
   */
  deleteQuestion: async (id: string) => {
    const response = await api.delete<{
      success: boolean;
      message: string;
    }>(`/questions/${id}`);
    return response.data;
  },
};

export default questionService;
