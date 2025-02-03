import { create } from 'zustand';
import axios from 'axios';

interface TestContent {
  id: number;
  test: {
    id: number;
    test_category: {
      id: number;
      test_category_name: string;
    };
  };
  question_text: string;
}

interface TestStore {
  testContents: TestContent[];
  filteredTests: TestContent[];
  isLoading: boolean;
  error: string | null;
  fetchTests: () => Promise<void>;
  filterByCategory: (categoryId: number) => void;
}

const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

const useTestStore = create<TestStore>((set, get) => ({
  testContents: [],
  filteredTests: [],
  isLoading: false,
  error: null,

  fetchTests: async () => {
    try {
      set({ isLoading: true });

      const token = getToken();
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const response = await axios.get<TestContent[]>(
        'https://api.recordonline.kg/api/v1/TestContent/',
        { headers }
      );

      set({ testContents: response.data, filteredTests: response.data, isLoading: false });
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      set({ error: error instanceof Error ? error.message : 'Неизвестная ошибка', isLoading: false });
    }
  },

  filterByCategory: (categoryId: number) => {
    const { testContents } = get();
    const filtered = testContents.filter((test) => test.test.test_category.id === categoryId);
    set({ filteredTests: filtered });
  },
}));

export default useTestStore;
