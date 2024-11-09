import axios, { AxiosError } from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000', // Ensure this is correct
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Add a response interceptor to handle and log errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (axios.isAxiosError(error) && error.config) {
      console.error('Axios error:', {
        url: error.config.url,
        method: error.config.method,
        data: error.config.data,
        headers: error.config.headers,
        response: error.response?.data,
        status: error.response?.status,
      });
    } else {
      console.error('Unexpected error:', error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
