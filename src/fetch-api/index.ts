import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from '../utils/axios';

export const fetchQuestions = async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
  const headers: AxiosRequestConfig['headers'] = {
    ...(config.headers || {}),
  }
  
  return axiosInstance({
    ...config,
    headers,
  });
};


