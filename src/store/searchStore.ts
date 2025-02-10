import { create } from "zustand";

interface SearchState {
	results: any[]; // Можно заменить `any[]` на конкретный тип данных ответа API
	loading: boolean;
	error: string | null;
	search: (query: string, category: string) => Promise<void>;
	clearResults: () => void;
}

const useSearchStore = create<SearchState>((set) => ({
	results: [],
	loading: false,
	error: null,

	search: async (query, category) => {
		set({ loading: true, error: null });

		try {
			const response = await fetch(
				`https://api.recordonline.kg/api/v1/${category}/search?query=${query}`
			);

			if (!response.ok) {
				throw new Error(
					`Ошибка ${response.status}: ${response.statusText}`
				);
			}

			const data = await response.json().catch(() => {
				throw new Error("Ошибка обработки данных (не JSON)");
			});

			set({ results: data, loading: false });
		} catch (error) {
			set({
				error:
					error instanceof Error ? error.message : "Неизвестная ошибка",
				loading: false,
			});
		}
	},

	clearResults: () => set({ results: [], error: null, loading: false }),
}));

export default useSearchStore;
