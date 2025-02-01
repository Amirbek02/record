'use client';
import React from 'react';
import Banner from './Banner';
import MainTestCarousel from './MainTestCarousel';
import VideoLessonCarousel from './VideoLessonCarousel';

const MainPage = () => {
  return (
    <div className="flex flex-col gap-1">
      <Banner />
      <MainTestCarousel />
      <VideoLessonCarousel />
    </div>
  );
};

export default MainPage;
