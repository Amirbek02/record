import { create } from "zustand";
import axios from "axios";
import { TReading } from "@/types/categories";


interface InstructionStore {
  readingData: TReading[] | null;
  getReadingTexts: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

//   if (typeof window !== "undefined") {
//     return localStorage.getItem("token");
//   }
//   return null;
// };
const useReadingStore = create<InstructionStore>((set) => ({
  readingData: null,
  isLoading: false,
  error: null,
  getReadingTexts: async () => {
  
    set({ isLoading: true, error: null }); // Start loading

    try {
      const response = await axios.get<TReading[]>(
        'https://api.recordonline.kg/api/v1/okup-tushunuu-text/'
      );
      set({ readingData: response.data, isLoading: false });
    } catch (error) {
      console.error("Ошибка при загрузке категорий:", error);
      set({ error: String(error), isLoading: false });
    }
  },
}));


export default useReadingStore;
