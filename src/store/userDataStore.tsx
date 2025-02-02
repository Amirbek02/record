import { create } from "zustand";

export interface TestStatistics {
  // Define the structure if test_statistics has specific fields
  id: number;
  user: number;
  video: number;
  true_answer_count: number;
  false_answer_count: number;
  accuracy_percentage: number;
  last_update_date: string; // ISO date string
  created_date: string;
}

export interface VideoStatistics {
  id: number;
  user: number;
  video: number;
  true_answer_count: number;
  false_answer_count: number;
  accuracy_percentage: number;
  last_update_date: string; // ISO date string
  created_date: string; // ISO date string
}

export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
  address: string | null;
  date_of_birth: string | null;
  gender: string | null;
  user_status: string; // Example: "Менеджер"
  paid: string; // Example: "Не оплачено"
  test_statistics: TestStatistics[]; // If it has a structure, replace with the actual type
  video_statistics: VideoStatistics[];
  // If it has a structure, replace with the actual type
}

interface UserStoreState {
  userDataState: UserData[] | null; // Store a single user object
  isLoading: boolean;
  error: string | null;
  fetchUserData: () => Promise<void>; // Function to fetch data
}

const userDataStore = create<UserStoreState>()((set) => ({
  userDataState: null,
  isLoading: false,
  error: null,

  fetchUserData: async () => {
    set({ isLoading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found. User might not be logged in.");
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/account/profile/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Use the dynamic token
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);
      set({ userDataState: data });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message || "Видеону жүктөөдө ката чыкты." });
      } else {
        set({ error: "Видеону жүктөөдө ката чыкты." });
      }
      console.error("Error fetching data:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default userDataStore;
