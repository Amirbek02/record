import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

export interface IFormData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: unknown | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  login: (email: string, password: string) => Promise<void>;
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

      login: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
          const { data } = await axios.post(
            'https://api.recordonline.kg/api/v1/sign-in/',
            { email, password },
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

      clearMessages: () => set({ error: null, successMessage: null }),
    }),
    {
      name: 'auth',
    },
  ),
);

export default useAuthStore;
