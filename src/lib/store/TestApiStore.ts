import { create } from "zustand";
import axios from "axios";


const API_BASE_URL = "https://api.recordonline.kg/api/v1";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NjYyNjg2LCJpYXQiOjE3Mzc3OTg2ODYsImp0aSI6IjA1MTZkOWJjNjlmNTQ3ZGQ5ZjRlZDdkZTk0MjEzODRhIiwidXNlcl9pZCI6MX0.OnCqcwRz3w5mchqvketF5eKI2H107W9OmVjc32CWS1Y";
const REFRESH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczODQwMzQ4NiwiaWF0IjoxNzM3Nzk4Njg2LCJqdGkiOiI2ZWZjODg1MjU2OGE0NTllYWUwZDdjZGI2MjhmY2NjOSIsInVzZXJfaWQiOjF9.zzEsQEUGy73V5IIhWfFlOFj1Nt-BiJjioao-JTeK0EU";


type TestCategory = {
  id: number;
  test_category_name: string;
  created_date: string;
  last_update_date: string;
};

type StoreState = {
  testCategories: TestCategory[];
  furtnerTests: any[];
  subjectCategories: any[];
  isLoading: boolean;
  error: string | null;
};

type StoreActions = {
  fetchTestCategories: () => Promise<void>;
  fetchFurtnerTests: () => Promise<void>;
  fetchSubjectCategories: () => Promise<void>;
};


const createAxiosInstance = (token: string) => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const handleApiError = async (
  error: any,
  endpoint: string,
  set: any
): Promise<any> => {
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
    const errorMessage = error.response?.data || error.message;
    set({
      error: errorMessage,
      isLoading: false
    });
    console.error("API error:", error);
    throw error;
  }
};


type Store = StoreState & StoreActions;

export const useApiStore = create<Store>((set) => ({
  testCategories: [],
  furtnerTests: [],
  subjectCategories: [],
  isLoading: false,
  error: null,

  fetchTestCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await createAxiosInstance(ACCESS_TOKEN).get("/testcategories/");
      set({
        testCategories: response.data,
        isLoading: false
      });
      console.log('API Response:', response.data);
    } catch (error: any) {
      const data = await handleApiError(error, "/testcategories/", set);
      set({
        testCategories: data,
        isLoading: false
      });
    }
  },

  fetchFurtnerTests: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await createAxiosInstance(ACCESS_TOKEN).get("/tests/");
      set({
        furtnerTests: response.data,
        isLoading: false
      });
      console.log('testFurtner', response.data);
    } catch (error: any) {
      const data = await handleApiError(error, "/tests/", set);
      set({
        furtnerTests: data,
        isLoading: false
      });
    }
  },

  fetchSubjectCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await createAxiosInstance(ACCESS_TOKEN).get("/subjectcategories/");
      set({
        subjectCategories: response.data,
        isLoading: false
      });
      console.log('subjectCategoriesTest', response.data);
    } catch (error: any) {
      const data = await handleApiError(error, "/subjectcategories/", set);
      set({
        subjectCategories: data,
        isLoading: false
      });
    }
  }
}));