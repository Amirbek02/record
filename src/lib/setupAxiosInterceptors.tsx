'use client';
import { useEffect } from 'react';
import useAuthStore from '../store/authStore';
import axios from 'axios';

const useAxiosInterceptors = () => {
  const { refreshAccessToken, accessToken } = useAuthStore();

  useEffect(() => {
    console.log('Old token:', accessToken);
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // Интерцептор для ответов
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const newToken = await refreshAccessToken();
          console.log('New token:', newToken);
          return axios(originalRequest);
        }
        return Promise.reject(error);
      },
    );

    // Очистка интерцепторов при размонтировании
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refreshAccessToken]);
};

export default useAxiosInterceptors;
