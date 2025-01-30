import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

interface Profile {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_picture: string | null;
  address: string | null;
  date_of_birth: string | null;
  gender: string | null;
  user_status: string;
  paid: string;
}

interface ProfileState {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  fetchProfile: (token: string) => Promise<void>;
  setProfile: (profile: Profile) => void;
  clearProfileMessages: () => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: null,
      isLoading: false,
      error: null,
      successMessage: null,

      fetchProfile: async (token: string) => {
        set({ isLoading: true, error: null });
        console.log("Fetching profile...");

        try {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/account/profile/`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          console.log("Profile data received:", data);
          set({ profile: data[0], isLoading: false });
        } catch (error) {
          console.error("Profile fetch error:", error);
          set({ error: "Ошибка при загрузке профиля", isLoading: false });
        }
      },

      setProfile: (profile: Profile) => {
        set({
          profile,
          successMessage: "Профиль успешно обновлен!",
        });
      },

      clearProfileMessages: () => set({ error: null, successMessage: null }),
    }),
    {
      name: "profile",
    }
  )
);

export default useProfileStore;
