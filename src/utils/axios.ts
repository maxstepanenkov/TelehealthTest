import axios, { AxiosInstance, AxiosError } from 'axios';

const axiosInstance: AxiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject((error.response && error.response.data) || 'Error'),
);

export default axiosInstance;
