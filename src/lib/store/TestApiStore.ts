import { create } from "zustand";
import axios from "axios";

const API_BASE_URL = "https://api.recordonline.kg/api/v1";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NjYyNjg2LCJpYXQiOjE3Mzc3OTg2ODYsImp0aSI6IjA1MTZkOWJjNjlmNTQ3ZGQ5ZjRlZDdkZTk0MjEzODRhIiwidXNlcl9pZCI6MX0.OnCqcwRz3w5mchqvketF5eKI2H107W9OmVjc32CWS1Y";
const REFRESH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczODQwMzQ4NiwiaWF0IjoxNzM3Nzk4Njg2LCJqdGkiOiI2ZWZjODg1MjU2OGE0NTllYWUwZDdjZGI2MjhmY2NjOSIsInVzZXJfaWQiOjF9.zzEsQEUGy73V5IIhWfFlOFj1Nt-BiJjioao-JTeK0EU";

type TestContent = {
  id: number;
  test: {
    id: number;
    title: string;
  };
  question: {
    id: number;
    question_text: string;
    question_image: string | null;
    var_A_text: string;
    var_B_text: string;
    var_C_text: string;
    var_D_text: string;
    var_E_text: string | null;
  };
};

type TestContentStore = {
  testContents: TestContent[];
  isLoading: boolean;
  error: string | null;
  fetchTestContents: () => Promise<void>;
};

const createAxiosInstance = (token: string) => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const handleApiError = async (error: any, endpoint: string, set: any): Promise<any> => {
  if (error.response?.status === 401) {
    try {
      const refreshResponse = await axios.post(
        `${API_BASE_URL}/token/refresh/`,
        { refresh: REFRESH_TOKEN }
      );
      const newAccessToken = refreshResponse.data.access;
      
      const retryResponse = await createAxiosInstance(newAccessToken).get(endpoint);
      return retryResponse.data;
    } catch (refreshError) {
      set({
        error: "Authentication failed",
        isLoading: false
      });
      console.error("Refresh token error:", refreshError);
      throw refreshError;
    }
  } else {
    const errorMessage = error.response?.data?.detail || error.message;
    set({
      error: errorMessage,
      isLoading: false
    });
    console.error("API error:", error);
    throw error;
  }
};

export const useTestContentStore = create<TestContentStore>((set) => ({
  testContents: [],
  isLoading: false,
  error: null,

  fetchTestContents: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await createAxiosInstance(ACCESS_TOKEN).get("/TestContent/");
      set({
        testContents: response.data,
        isLoading: false
      });
      console.log('Test Contents:', response.data);
    } catch (error: any) {
      const data = await handleApiError(error, "/TestContent/", set);
      set({
        testContents: data,
        isLoading: false
      });
    }
  },
}));