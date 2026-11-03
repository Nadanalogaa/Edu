import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// Get API URL from environment. Without one, production builds call the API on
// the same domain (the Docker image serves the app and the API together) and
// development uses the local backend.
const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  return envUrl || (import.meta.env.PROD ? '/api' : 'http://localhost:5001/api');
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
