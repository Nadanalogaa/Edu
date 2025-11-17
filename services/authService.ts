import api from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'teacher' | 'admin';
  schoolId?: string;
  grade?: string;
  phone?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  schoolId?: string;
  grade?: string;
  phone?: string;
  language: 'en' | 'ta';
  theme: 'light' | 'dark';
  coins?: number;
  streak?: number;
  totalPoints?: number;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface ProfileUpdateData {
  name?: string;
  phone?: string;
  language?: 'en' | 'ta';
  theme?: 'light' | 'dark';
  grade?: string;
}

const authService = {
  /**
   * Login user with email and password
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', credentials);

    // Store token and user data in localStorage
    if (response.data.success && response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }

    return response.data;
  },

  /**
   * Register new user
   */
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/register', data);

    // Store token and user data in localStorage
    if (response.data.success && response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }

    return response.data;
  },

  /**
   * Get current user information
   */
  getMe: async (): Promise<User> => {
    const response = await api.get<{ success: boolean; data: User }>('/auth/me');

    // Update user data in localStorage
    if (response.data.success) {
      localStorage.setItem('user', JSON.stringify(response.data.data));
    }

    return response.data.data;
  },

  /**
   * Update user profile
   */
  updateProfile: async (data: ProfileUpdateData): Promise<User> => {
    const response = await api.put<{ success: boolean; data: User }>('/auth/profile', data);

    // Update user data in localStorage
    if (response.data.success) {
      localStorage.setItem('user', JSON.stringify(response.data.data));
    }

    return response.data.data;
  },

  /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  },

  /**
   * Get stored user from localStorage
   */
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error('Error parsing user data:', error);
        return null;
      }
    }
    return null;
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  },

  /**
   * Get stored token
   */
  getToken: (): string | null => {
    return localStorage.getItem('token');
  },
};

export default authService;
