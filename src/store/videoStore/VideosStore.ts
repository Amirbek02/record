import { create } from 'zustand';

export type SubjectCategory = {
  id: number;
  subject_category_name: string;
  last_update_date: string;
  created_date: string;
};
export type Category = {
  id: number;
  category_name: string;
  last_update_date: string;
  created_date: string;
};

interface VideoCategory {
  id: number;
  category_name: string;
  last_update_date: string; // ISO date string
  created_date: string; // ISO date string
}

// Define the main VideoData type
export interface VideoData {
  id: number;
  category: Category;
  video_category: VideoCategory;
  subject_name: string;
  subject_category: SubjectCategory;
  description: string;
  video_url: string;
  video_order: number;
  is_paid: boolean;
  last_update_date: string;
  created_date: string;
}

interface VideosState {
  allVideos: VideoData[] | null;
  videoCategories: VideoData[] | null;
  subVideoCategories: Category[] | null;
  video: VideoData | null;
  fetch: (
    url: string,
    type: 'videos' | 'subCategoryVideos' | 'subVideoCategories' | 'video',
  ) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const useVideosStore = create<VideosState>()((set) => ({
  allVideos: null,
  videoCategories: null,
  subVideoCategories: null,
  video: null,
  isLoading: false,
  error: null,

  fetch: async (url, type) => {
    set({ isLoading: true, error: null });
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found. User might not be logged in.');
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${token}`, // Use the dynamic token
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched data:', data);

      // Update the appropriate state based on the type
      if (type === 'videos') {
        set({ allVideos: data });
      } else if (type === 'subCategoryVideos') {
        set({ videoCategories: data });
      } else if (type === 'subVideoCategories') {
        set({ subVideoCategories: data });
<<<<<<< HEAD
      } else if (type === "video") {
=======
      } else if (type === 'video') {
>>>>>>> 06b44df6ebe5c395b407537ab9f3ac91ffbf97f1
        set({ video: data as VideoData | null });
      }
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message || 'Видеону жүктөөдө ката чыкты.' });
      } else {
        set({ error: 'Видеону жүктөөдө ката чыкты.' });
      }
      console.error('Error fetching data:', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useVideosStore;
