import axios from "axios";
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
		id: number;
		test_category_name: string;
	};
	first_test: boolean;
	description: string;
	background_image: string;
	title: string;
};

type ISubject = {
	id: number;

	test_category_name: string;
};

interface TrialTestState {
	data: ISubject[];
	test: Test[];
	loading: boolean;
	error: string | null;
	getSub: () => Promise<void>;
	getTests: () => Promise<void>;
	// getSubById: (id: number) => Promise<void>;
}

const getToken = (): string | null => {
	if (typeof window !== "undefined") {
		return localStorage.getItem("token");
	}
	return null;
};

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NTAyOTMwLCJpYXQiOjE3Mzg1MDI2MzAsImp0aSI6IjZmNzc0MDg3MDczYTRmMmFhZmJmMWRiNjEzNWU5YTVhIiwidXNlcl9pZCI6MTF9.wUAz1YsihLzYp4retXZTPbtMvUWtZT059dygDrVOe2g";
const userInTests = create<TrialTestState>((set) => ({
	data: [],
	loading: false,
	error: null,
	test: [],
	getSub: async () => {
		set({ loading: true, error: null });
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_BASE_URL}/testcategories/`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			set({ data: response.data, loading: false });
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				set({ error: error.message, loading: false });
			} else {
				set({ error: "An unknown error occurred", loading: false });
			}
		}
	},
	// getSubById: async (id: number) => {
	// 	set({ loading: true, error: null });
	// 	try {
	// 		const response = await axios.get(
	// 			`${process.env.NEXT_PUBLIC_API_BASE_URL}/subjectcategories/${id}`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${token}`,
	// 				},
	// 			}
	// 		);
	// 		set({ data: [response.data], loading: false });
	// 	} catch (error: unknown) {
	// 		if (axios.isAxiosError(error)) {
	// 			set({ error: error.message, loading: false });
	// 		} else {
	// 			set({ error: "An unknown error occurred", loading: false });
	// 		}
	// 	}
	// },
	getTests: async () => {
		set({ loading: true, error: null });
		try {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_API_BASE_URL}/tests/`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			set({ test: response.data, loading: false });
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				set({ error: error.message, loading: false });
			} else {
				set({ error: "An unknown error occurred", loading: false });
			}
		}
	},
}));

export default userInTests;
