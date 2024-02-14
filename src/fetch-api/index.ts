import { AxiosRequestConfig } from 'axios';
import axiosInstance from '../utils/axios';

export const fetchQuestions = async (config: AxiosRequestConfig) => {
  const headers = {
    ...(config.headers || {}),
  }
  
  return axiosInstance({
    ...config,
    headers,
  });
};


