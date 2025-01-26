import axios from "axios";
import { create } from "zustand";

interface TrialTestState {
	data: any[];
	loading: boolean;
	error: string | null;
	getSubTest: () => Promise<void>;
}

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NjkzOTc0LCJpYXQiOjE3Mzc4Mjk5NzQsImp0aSI6ImFiNzZlZDcyYTdjZTQ5YWVhZmE0MjJmNGEzYTQ3MDRiIiwidXNlcl9pZCI6MX0.cq3C4OGGQD3n3_Zua8T7l5MmiEVHmF-9PBof5fbMiHU";

const useTrialTestStore = create<TrialTestState>((set) => ({
	data: [],
	loading: false,
	error: null,
	getSubTest: async () => {
		set({ loading: true, error: null });
		try {
			const response = await axios.get(
				"https://api.recordonline.kg/api/v1/subjectcategories/",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			set({ data: response.data, loading: false });
		} catch (error: any) {
			set({ error: error.message, loading: false });
		}
	},
}));

export default useTrialTestStore;
