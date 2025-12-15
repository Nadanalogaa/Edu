import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// Get API URL from environment or use localhost for development
const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;

  // In production, if no API URL is set, show helpful error
  if (!envUrl && import.meta.env.PROD) {
    console.error(
      '⚠️ VITE_API_URL is not configured!\n' +
      'Please set VITE_API_URL environment variable in Vercel:\n' +
      '1. Go to your Vercel project settings\n' +
      '2. Navigate to Environment Variables\n' +
      '3. Add: VITE_API_URL = https://your-backend-url.com/api\n' +
      '4. Redeploy your application'
    );
  }

  return envUrl || 'http://localhost:5001/api';
};

// Create axios instance with base configuration
const api: AxiosInstance = axios.create({
  baseURL: getApiUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor - Add JWT token to all requests
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized - Token expired or invalid
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      // Redirect to login if not already there
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    }

    // Handle 403 Forbidden - Insufficient permissions
    if (error.response?.status === 403) {
      console.error('Access denied: Insufficient permissions');
    }

    // Handle network errors
    if (!error.response) {
      console.error('Network error: Please check your connection');
    }

    return Promise.reject(error);
  }
);

export default api;
