import axios from 'axios';
import { create } from 'zustand';

type Test = {
  id: number;
  subject_category: {
    id: number;
    subject_category_name: string;
    last_update_date: string;
    created_date: string;
  };
  test_category: {
    test_category_name: string;
  };
  first_test: boolean;
  description: string;
  background_image: string;
  title: string;
};

type ISubject = {
  id: number;
  subject_category_name: string;
};

interface TrialTestState {
  data: ISubject[];
  test: Test[];
  loading: boolean;
  error: string | null;
  getSub: () => Promise<void>;
  getTest: () => Promise<void>;
  getSubById: (id: number) => Promise<void>;
}

const token = localStorage.getItem('token');
const useTrialTestStore = create<TrialTestState>((set) => ({
  data: [],
  loading: false,
  error: null,
  test: [],
  getSub: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('https://api.recordonline.kg/api/v1/subjectcategories/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ data: response.data, loading: false });
    } catch (error: any) {
      set({ error: error?.message || 'error', loading: false });
    }
  },
  getSubById: async (id: number) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.recordonline.kg/api/v1/subjectcategories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      set({ data: [response.data], loading: false });
    } catch (error: any) {
      set({ error: error?.message || 'error', loading: false });
    }
  },
  getTest: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`https://api.recordonline.kg/api/v1/tests/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ test: response.data, loading: false });
    } catch (error: any) {
      set({ error: error?.message || 'error', loading: false });
    }
  },
}));

export default useTrialTestStore;
