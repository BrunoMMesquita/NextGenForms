import axios from 'axios';
// import { getAccessToken } from '@/infrastructure/auth/getAccessToken';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API token
axiosInstance.interceptors.request.use(
  async (config) => {
    // const token = await getAccessToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
