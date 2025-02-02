'use client';
import React from 'react';
import VideoLessonsList from './VideoLessonsList';
import useVideosStore from '@/store/videoStore/VideosStore';
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';

const AllVideoLessonList = () => {
  useAxiosInterceptors();
  const { fetch, subVideoCategories } = useVideosStore();

  React.useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category-video`, 'subVideoCategories');
  }, [fetch]);
  console.log('this is a subject', subVideoCategories);
  return (
    <div className="mx-6 flex flex-col gap-10">
      <VideoLessonsList subvideoCategories={subVideoCategories} isMainTestVideos />
    </div>
  );
};
export default AllVideoLessonList;
