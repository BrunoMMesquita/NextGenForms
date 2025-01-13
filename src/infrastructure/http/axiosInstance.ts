import { getAuthCookie, uuidv4 } from '@/utils';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json, */*',
    'x-csrf-token': uuidv4(),
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const access = await getAuthCookie();
    const { accessToken, idpAccessToken, refreshToken, cryptoContextId } = access;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers['x-refresh-token'] = refreshToken;
      config.headers['x-crypto-context'] = cryptoContextId;
      config.headers['x-access-token'] = idpAccessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
