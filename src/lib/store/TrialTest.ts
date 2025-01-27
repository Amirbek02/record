import axios from "axios";
import { string } from "zod";
import { create } from "zustand";

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

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3OTcyOTY1LCJpYXQiOjE3Mzc5NzI2NjUsImp0aSI6IjRhNjJmMjdlYzU3OTQ3N2U5NTViZTMxZGY5MzE1ZDRmIiwidXNlcl9pZCI6MX0.3bX1fMMzOYnO4oSJ963O5Wze9LBVWFhOjctOxE5sptQ";
const useTrialTestStore = create<TrialTestState>((set) => ({
	data: [],
	loading: false,
	error: null,
	test: [],
	getSub: async () => {
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
			set({ error: error?.message || "error", loading: false });
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
				}
			);
			set({ data: [response.data], loading: false });
		} catch (error: any) {
			set({ error: error?.message || "error", loading: false });
		}
	},
	getTest: async () => {
		set({ loading: true, error: null });
		try {
			const response = await axios.get(
				`https://api.recordonline.kg/api/v1/tests/`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			set({ test: response.data, loading: false });
		} catch (error: any) {
			set({ error: error?.message || "error", loading: false });
		}
	},
}));

export default useTrialTestStore;
