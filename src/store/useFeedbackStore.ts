import axios from 'axios';
import { create } from 'zustand';

interface FeedbackData {
  first_name: string;
  last_name: string;
  phone_number: string;
  text: string;
  email?: string;
}

interface FeedbackState {
  token: string | null;
  setToken: (token: string | null) => void;
  sendFeedback: (data: FeedbackData) => Promise<void>;
  error: string | null;
  clearError: () => void;
}

export const useFeedbackStore = create<FeedbackState>((set, get) => ({
  token: null,
  error: null,

  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    set({ token });
  },

  clearError: () => {
    set({ error: null });
  },

  sendFeedback: async (data) => {
    const { token } = get();
    set({ error: null }); // Сбрасываем ошибку перед новой отправкой

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks/`,
        {
          ...data,
          email: token ? undefined : data.email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        },
      );
      console.log('Обратная связь отправлена успешно:', response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Произошла ошибка при отправке!';
      set({ error: errorMessage });
      console.error('Ошибка при отправке обратной связи:', errorMessage);
    }
  },
}));
