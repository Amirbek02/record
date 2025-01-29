import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

export interface IFormData {
  email: string;
  password: string;
  password_confirm: string;
  user_status: string;
  first_name: string;
  last_name: string;
  paid: string;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export interface ILoginData extends IFormLogin {
  email: string;
  password: string;
}

export interface IRegisterData extends IFormData {
  token?: string;
}

export interface IVerificationData {
  email: string;
  code: string;
}

export interface IVerificationResponse extends IVerificationData {
  token?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: unknown | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  login: (formData: IFormLogin) => Promise<void>;
  register: (formData: IFormData) => Promise<void>;
  verification: (formData: IVerificationData) => Promise<void>;
  clearMessages: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      isLoading: false,
      error: null,
      successMessage: null,

      login: async (formData: ILoginData) => {
        set({ isLoading: true, error: null });

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/sign-in/`,
            formData,
            { headers: { 'Content-Type': 'application/json' } },
          );

          set({
            token: data.token,
            user: data.user,
            isAuthenticated: true,
          });
          localStorage.setItem('token', data.token);
          console.log('Кирүү ийгиликтүү аткарылды:', data.token);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            set({ error: error.response?.data?.message || 'Кирүү мүмкүн эмес' });
            console.error('Кирүүдө ката кетти:', error.response?.data);
          } else {
            set({ error: 'Кирүү мүмкүн эмес' });
            console.error('Кирүүдө ката кетти:', error);
          }
        } finally {
          set({ isLoading: false });
        }
      },
      register: async (formData: IFormData) => {
        set({ isLoading: true, error: null });

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/sign-up/`,
            formData,
            { headers: { 'Content-Type': 'application/json' } },
          );

          set({
            successMessage: 'Катталуу ийгиликтүү аткарылды!',
            token: data.token,
            user: data.user,
            isAuthenticated: true,
          });
          console.log('Катталуу ийгиликтүү:', data.token);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            set({ error: error.response?.data?.message || 'Катталуу мүмкүн эмес' });
            console.error('Катталууда ката кетти:', error.response?.data);
          } else {
            set({ error: 'Катталуу мүмкүн эмес' });
            console.error('Катталууда ката кетти:', error);
          }
        } finally {
          set({ isLoading: false });
        }
      },
      verification: async (formData: IVerificationData) => {
        set({ isLoading: true, error: null });

        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/sign-up-confirmation/`,
            formData,
            { headers: { 'Content-Type': 'application/json' } },
          );
          set({
            successMessage: 'Катталуу ийгиликтүү аткарылды!',
            token: data.token,
            isAuthenticated: true,
          });
          console.log(data);

          console.log('Тастыкталды');
          localStorage.setItem('token', data.token);
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            set({ error: error.response?.data?.message || 'Тастыктоо мүмкүн эмес' });
            console.error('Тастыктоодо ката кетти:', error.response?.data);
          } else {
            set({ error: 'Тастыктоо мүмкүн эмес' });
            console.error('Тастыктоодо ката кетти:', error);
          }
        } finally {
          set({ isLoading: false });
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
