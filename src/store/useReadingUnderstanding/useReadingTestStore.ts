import { create } from "zustand";
import axios from "axios";
import { QuestionReadingData } from "@/types/categories";


interface ReadingTestStore {
  readingTestData: QuestionReadingData[] | null;
  getReadingTests: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const useReadingTestStore = create<ReadingTestStore>((set) => ({
  readingTestData: null,
  isLoading: false,
  error: null,
  getReadingTests: async () => {
  
    set({ isLoading: true, error: null }); // Start loading

    try {
      const response = await axios.get<QuestionReadingData[]>(
        'https://api.recordonline.kg/api/v1/okup-tushunuu-questions/'
      );
      set({ readingTestData: response.data, isLoading: false });
    } catch (error) {
      console.error("Ошибка при загрузке категорий:", error);
      set({ error: String(error), isLoading: false });
    }
  },
}));


export default useReadingTestStore;
