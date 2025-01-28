import { create } from 'zustand';
import axios from 'axios';

interface Graduate {
  review: string;
  score: string;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  birthday: string;
  image: string;
}

interface GraduatesState {
  graduates: Graduate[];
  isLoading: boolean;
  error: string | null;
  fetchGraduates: () => Promise<void>;
}

export const useGraduates = create<GraduatesState>((set) => ({
  graduates: [],
  isLoading: false,
  error: null,

  fetchGraduates: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get('https://api.recordonline.kg/api/v1/graduates/');

      set({
        graduates: response.data,
        isLoading: false,
      });

      console.log('graduates', response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        try {
          const refreshResponse = await axios.post('/api/token/refresh/');

          const newAccessToken = refreshResponse.data.access;

          const retryResponse = await axios.get('https://api.recordonline.kg/api/v1/graduates/', {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          });

          set({
            graduates: retryResponse.data,
            isLoading: false,
          });
        } catch {
          set({
            error: 'Authentication failed',
            isLoading: false,
          });
        }
      } else {
        const errorMessage =
          axios.isAxiosError(error) && error.response
            ? error.response.data
            : (error as Error).message;

        set({
          error: errorMessage,
          isLoading: false,
        });
      }

      console.error('Error fetching data:', error);
    }
  },
}));
