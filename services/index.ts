// Centralized export for all API services
export { default as api } from './api';
export { default as authService } from './authService';
export { default as studentService } from './studentService';
export { default as questionService } from './questionService';

// Export types
export type { LoginCredentials, RegisterData, User, AuthResponse } from './authService';
export type {
  StartAttemptData,
  SubmitAnswer,
  SubmitAttemptData,
  StudentAttempt,
  Analytics,
  MistakeBookEntry,
} from './studentService';
export type {
  Question,
  GetQuestionsParams,
  GetRandomQuestionsParams,
  CreateQuestionData,
} from './questionService';
