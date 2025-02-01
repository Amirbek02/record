import { create } from 'zustand';
import axios from 'axios';

interface ProcessedVideo {
  id: number;
  subject_name: string;
  subject_category_name: string;
  description: string;
  video_url: string;
  is_paid: boolean;
}

interface VideoStore {
  videos: ProcessedVideo[];
  isLoading: boolean;
  error: string | null;
  fetchVideos: () => Promise<void>;
}

const useVideoStore = create<VideoStore>((set) => ({
  videos: [],
  isLoading: false,
  error: null,

  fetchVideos: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/video/`);
      console.log(response, 'response');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const processedVideos = response.data.map((video: any) => ({
        id: video.id,
        subject_name: video.subject_name,
        subject_category_name: video.subject_category.subject_category_name,
        description: video.description,
        video_url: video.video_url,
        is_paid: video.is_paid,
      }));

      set({ videos: processedVideos });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Видеону жүктөөдө ката чыкты.',
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useVideoStore;
