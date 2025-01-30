"use client";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import useProfileStore from "../../store/profileStore";

const Profile = () => {
  const { token } = useAuthStore((state) => state);
  const { profile, isLoading, error, fetchProfile } = useProfileStore(
    (state) => state
  );
  const [name, setName] = useState("");

  useEffect(() => {
    if (token) {
      console.log("Получение профиля с помощью токена:", token);
      fetchProfile(token);
    }
  }, [token, fetchProfile]);

  useEffect(() => {
    if (profile) {
      setName(`${profile.first_name || ""} ${profile.last_name || ""}`);
    }
  }, [profile]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="pb-5 sm:pb-16 sm:pt-20">
      <div className="max-w-7xl mx-auto p-4">
        {profile && (
          <div className="lg:flex gap-24">
            <div className="flex w-[100px] h-[100px] flex-col items-center">
              <Avatar>
                <AvatarImage
                  className="border md:justify-center justify-center flex items-center rounded-full"
                  src={
                    profile.profile_picture || "https://github.com/shadcn.png"
                  }
                  alt="Profile Picture"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <input
                id="image-upload"
                accept="image/*"
                type="file"
                className="hidden"
              />
              <label
                htmlFor="image-upload"
                className="text-[16px] cursor-pointer font-bold"
              >
                Cурот
              </label>{" "}
            </div>

            <div className="pt-10">
              <form
                action="profile"
                className="space-y-4 justify-center flex flex-col"
              >
                <div className="flex flex-col">
                  <label htmlFor="name">Аты жөнү</label>
                  <input
                    className="border w-auto lg:w-[505px] h-[35px] rounded-md"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="tel">Телефон номер</label>
                  <input
                    className="border w-auto lg:w-[505px] h-[35px] rounded-sm"
                    type="tel"
                    id="tel"
                    value={profile.phone_number}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    className="border w-auto lg:w-[505px] h-[35px] rounded-sm"
                    type="email"
                    id="email"
                    value={profile.email}
                    readOnly
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="password">Сыр соз </label>
                  <input
                    className="border w-auto lg:w-[505px] h-[35px] rounded-sm"
                    type="password"
                    id="password"
                    readOnly
                  />
                </div>
              </form>

              <button
                className="border p-3 mt-6 flex justify-center max-w-[600px] font-semibold text-[20px] items-center hover:bg-blue-500 bg-blue-800 text-white lg:w-[505px] h-[45px] rounded-xl"
                type="submit"
              >
                Сактоо
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
