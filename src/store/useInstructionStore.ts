import { create } from "zustand";
import axios from "axios";
import { Instruction } from "@/types/categories";

interface InstructionStore {
  instructionData: Instruction | null;
  getInstructions: (id: number) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}
// const getToken = (): string | null => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("token");
//   }
//   return null;
// };
const useInstructionStore = create<InstructionStore>((set) => ({
  instructionData: null,
  isLoading: false,
  error: null,
  getInstructions: async (id: number) => {
    // const token = localStorage.getItem('token');
    //   if (!token) {
    //     throw new Error('Token not found. User might not be logged in.');
    //   }
    set({ isLoading: true, error: null }); // Start loading

    try {
      const response = await axios.get<Instruction>(
        `https://api.recordonline.kg/api/v1/test-instruction/${id}`,
        {
          headers: {
            // Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      set({ instructionData: response.data, isLoading: false });
    } catch (error) {
      console.error("Ошибка при загрузке категорий:", error);
      set({ error: String(error), isLoading: false });
    }
  },
}));


export default useInstructionStore;
