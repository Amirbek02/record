import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import Cookies from 'js-cookie';

export interface IFormLogin {
  email: string;
  password: string;
}

export interface IFormRegister {
  email: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
  user_status: string;
  paid: string;
}

export interface IVerificationData {
  email: string;
  code: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: unknown | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  login: (formData: IFormLogin) => Promise<void>;
  register: (formData: IFormRegister) => Promise<void>;
  verification: (formData: IVerificationData) => Promise<void>;
  refreshAccessToken: () => Promise<void>;
  clearMessages: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoading: false,
      error: null,
      successMessage: null,

      login: async (formData: IFormLogin) => {
        set({ isLoading: true, error: null });

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/token/`,
            formData,
            {
              headers: { 'Content-Type': 'application/json' },
            },
          );

          set({
            accessToken: data.access,
            refreshToken: data.refresh,
            isAuthenticated: true,
          });
          Cookies.set('refreshToken', data.refresh, { expires: 7 });
          localStorage.setItem('token', data.access);
          console.log('Кирүү ийгиликтүү аяктады:', data);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            set({ error: error.response?.data?.message || 'Кирүүдө ката кетти' });
            console.error('Кирүүдө ката:', error.response?.data);
          } else {
            set({ error: 'Кирүүдө ката кетти' });
            console.error('Кирүүдө ката:', error);
          }
        } finally {
          set({ isLoading: false });
        }
      },

      register: async (formData: IFormRegister) => {
        set({ isLoading: true, error: null });

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/sign-up/`, // Регистрация API
            formData,
            { headers: { 'Content-Type': 'application/json' } },
          );

          set({
            successMessage: 'Каттоо ийгиликтүү аяктады!',
          });

          console.log('Каттоо ийгиликтүү:', data);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            set({ error: error.response?.data?.message || 'Каттоодо ката кетти' });
            console.error('Каттоодо ката:', error.response?.data);
          } else {
            set({ error: 'Каттоодо ката кетти' });
            console.error('Каттоодо ката:', error);
          }
        } finally {
          set({ isLoading: false });
        }
      },

      verification: async (formData: IVerificationData) => {
        set({ isLoading: true, error: null });

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/sign-up-confirmation/`, // Верификация API
            formData,
            { headers: { 'Content-Type': 'application/json' } },
          );

          set({
            successMessage: 'Верификация ийгиликтүү аяктады!',
            isAuthenticated: true,
            accessToken: data.access,
            refreshToken: data.refresh,
          });

          // Refresh токенди cookie'ге сактайбыз
          Cookies.set('refreshToken', data.refresh, { expires: 7 });

          console.log('Верификация ийгиликтүү:', data);
          localStorage.setItem('token', data.access);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            set({ error: error.response?.data?.message || 'Верификацияда ката кетти' });
            console.error('Верификацияда ката:', error.response?.data);
          } else {
            set({ error: 'Верификацияда ката кетти' });
            console.error('Верификацияда ката:', error);
          }
        } finally {
          set({ isLoading: false });
        }
      },

      refreshAccessToken: async () => {
        const refreshToken = Cookies.get('refreshToken');
        if (!refreshToken) {
          set({ isAuthenticated: false });
          return;
        }

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/token/refresh/`,
            { refresh: refreshToken },
            { headers: { 'Content-Type': 'application/json' } },
          );

          set({
            accessToken: data.access,
            isAuthenticated: true,
          });

          localStorage.setItem('token', data.access);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            set({ error: error.response?.data?.message || 'Токенди жаңыртууда ката кетти' });
            console.error('Токенди жаңыртууда ката:', error.response?.data);
          } else {
            set({ error: 'Токенди жаңыртууда ката кетти' });
            console.error('Токенди жаңыртууда ката:', error);
          }
        }
      },

      clearMessages: () => set({ error: null, successMessage: null }),
    }),
    {
      name: 'auth',
    },
  ),
);

export default useAuthStore;
