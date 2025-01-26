import { create } from "zustand";


export type SubjectCategory = {
  id: number;
  subject_category_name: string;
  last_update_date: string;
  created_date: string;
};


export type VideoData = {
  category: number;
  video_category: number;
  subject_name: string;
  subject_category: SubjectCategory;
  description: string;
  video_url: string;
  video_order: number;
  is_paid: boolean;
  last_update_date: string;
  created_date: string;
};

interface VideosState {
  allVideos: VideoData[] | null;
  videoCategories:VideoData[]|null
  subVideoCategories:SubjectCategory[]|null
  fetch: (url: string, type: "videos" | "subCategoryVideos"|'subVideoCategories') => Promise<void>;
}

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NjE5MDQyLCJpYXQiOjE3Mzc3NTUwNDIsImp0aSI6IjQwMjI1NTEzYWM3NjQ5YTBiYTNjOWU5OGM5ZjVjYjExIiwidXNlcl9pZCI6Nn0.ntJ9C-1sdFfrTa452d0P1WAFsO7X5v7HIMoTI97BjJ8'

const useVideosStore = create<VideosState>()((set) => ({
  allVideos: null,
  videoCategories: null,
  subVideoCategories:null,
  fetch: async (url, type) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      // Update the appropriate state based on the type
      if (type === "videos") {
        set({ allVideos: data });
      } else if (type === "subCategoryVideos") {
        set({ videoCategories: data });
      } else if (type === "subVideoCategories") {
        set({ subVideoCategories: data });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

export default useVideosStore;