import React from 'react';
import Banner from './Banner';
import MainTestCarousel from './MainTestCarousel';
import VideoLessonCarousel from './VideoLessonCarousel';
import { useRouter } from 'next/navigation';

const MainPage = () => {
  const router = useRouter();

  const loginWithToken = async () => {
    try {
      router.push('/sign-up');
    } catch (err) {
      console.error('Токен менен кирүү учурунда ката кетти:', err);
    }
  };

  const token = localStorage.getItem('token');
  if (!token) {
    loginWithToken();
  }
  return (
    <div className="flex flex-col gap-1 w-full">
      <Banner />
      <MainTestCarousel />
      <VideoLessonCarousel />
    </div>
  );
};

export default MainPage;
