import { create } from 'zustand';
import axios from 'axios';
import { AllTest, Category, SubjectCategory } from '@/types/categories';

interface TestContent {
  id: number;
  test: {
    id: number;
    title: string;
    subject_category: {
      id: number;
      subject_category_name: string;
    };
  };
  question_text: string;
}

interface TestStore {
  testContents: TestContent[];
  filteredTests: TestContent[];
  categories: Category[];
  allCategory: AllTest[];
  testText: AllTest[];
  subcategories: SubjectCategory[];
  isLoading: boolean;
  error: string | null;
  fetchTests: () => Promise<void>;
  getSubCategories: () => Promise<void>;
  getCategory: () => Promise<void>;
  getSubById: (id: number) => Promise<void>;
  getTests: () => Promise<void>;
}
const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};
const useTestStore = create<TestStore>((set) => ({
  testContents: [],
  categories: [],
  filteredTests: [],
  allCategory: [],
  subcategories: [],
  testText: [],
  isLoading: false,
  error: null,

  getSubCategories: async () => {
    try {
      const response = await axios.get<SubjectCategory[]>(
        'https://api.recordonline.kg/api/v1/subjectcategories/',
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      set({ subcategories: response.data });
    } catch (error) {
      console.error('Ошибка при загрузке категорий:', error);
      set({ error: String(error) });
    }
  },

  fetchTests: async () => {
    try {
      set({ isLoading: true });
      const response = await axios.get<TestContent[]>(
        'https://api.recordonline.kg/api/v1/TestContent/',
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      set({ testContents: response.data, filteredTests: response.data, isLoading: false });
    } catch (error) {
      set({ error: String(error) });
    }
  },

  getTests: async () => {
    try {
      const response = await axios.get<AllTest[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/tests/`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      set({ allCategory: response.data, isLoading: false });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: 'An unknown error occurred', isLoading: false });
      }
    }
  },
  getSubById: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<AllTest[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/tests/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      set({ testText: response.data, isLoading: false });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: 'An unknown error occurred', isLoading: false });
      }
    }
  },
  getCategory: async () => {
    try {
      const response = await axios.get<Category[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/testcategories/`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      set({ categories: response.data, isLoading: false });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: 'An unknown error occurred', isLoading: false });
      }
    }
  },
}));

export default useTestStore;
