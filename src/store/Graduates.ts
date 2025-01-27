import { create } from "zustand";
import axios from "axios";


const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NjYyNjg2LCJpYXQiOjE3Mzc3OTg2ODYsImp0aSI6IjA1MTZkOWJjNjlmNTQ3ZGQ5ZjRlZDdkZTk0MjEzODRhIiwidXNlcl9pZCI6MX0.OnCqcwRz3w5mchqvketF5eKI2H107W9OmVjc32CWS1Y"; 
const REFRESH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczODQwMzQ4NiwiaWF0IjoxNzM3Nzk4Njg2LCJqdGkiOiI2ZWZjODg1MjU2OGE0NTllYWUwZDdjZGI2MjhmY2NjOSIsInVzZXJfaWQiOjF9.zzEsQEUGy73V5IIhWfFlOFj1Nt-BiJjioao-JTeK0EU"; 

export const useGraduates = create((set) => ({
  graduates: [],
  isLoading: false,
  error: null, 
  
  fetchGraduates: async () => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.get("https://api.recordonline.kg/api/v1/graduates/", {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      });
      
      set({ 
        graduates: response.data,
        isLoading: false 
      });
      
      console.log('graduates', response.data);
    } catch (error: any) {
      if (error.response?.status === 401) {
        try {
          const refreshResponse = await axios.post("/api/token/refresh/", {
            refresh: REFRESH_TOKEN
          });
          
          const newAccessToken = refreshResponse.data.access;
          

          const retryResponse = await axios.get("https://api.recordonline.kg/api/v1/graduates/", {
            headers: {
              Authorization: `Bearer ${newAccessToken}`
            }
          });
          
          set({ 
            graduates: retryResponse.data,
            isLoading: false 
          });
        } catch (refreshError) {
          set({ 
            error: "Authentication failed",
            isLoading: false 
          });
        }
      } else {
        set({ 
          error: error.response ? error.response.data : error.message, 
          isLoading: false 
        });
      }
      
      console.error("Error fetching data:", error);
    }
  },
}));