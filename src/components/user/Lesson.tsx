'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import useVideoStore from '@/store/useVideoStore';
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';

const VideoLessons = () => {
  useAxiosInterceptors();
  const { videos, isLoading, error, fetchVideos } = useVideoStore();

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ката: {error}</div>;
  }

  const freeVideos = videos.filter((video) => video.is_paid === false);

  const extractVideoId = (videoUrl: string) => {
    try {
      const url = new URL(videoUrl);
      return new URLSearchParams(url.search).get('v');
    } catch (e) {
      console.error('Ошибка при обработке URL видео:', e);
      return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4" id="videoLessons">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl text-[#002038] lg:text-[32px] font-medium mb-2">
          Видео сабактар
        </h2>
        <p className="text-[#002038] hidden lg:block font-medium text-lg md:text-xl">
          ЖРТ га даярдалган видео сабактар
        </p>
      </div>

      <div className="flex flex-col items-center">
        {freeVideos.length > 0 && (
          <div className="space-y-4 max-w-[800px]">
            <div className="relative w-full h-auto pb-[56.25%] ">
              {freeVideos[0].video_url ? (
                // Проверка наличия ID видео
                extractVideoId(freeVideos[0].video_url) ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl border"
                    src={`https://www.youtube.com/embed/${extractVideoId(freeVideos[0].video_url)}`}
                    title={freeVideos[0].subject_name || 'Видео'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                ) : (
                  <div>Некорректный URL видео</div>
                )
              ) : (
                <div>Видео URL отсутствует</div>
              )}

              <span className="absolute m-2 bottom-0 right-0 w-[154px] text-center cursor-pointer bg-[#4C4C4C] hover:bg-[#2E3095] text-white px-4 py-1 rounded-full z-10">
                {freeVideos[0].subject_category_name || 'Категория'}
              </span>
            </div>

            <h3 className="text-lg w-full lg:w-[450px] text-[#252641] md:text-xl font-semibold">
              {freeVideos[0].subject_name || 'Название урока'}
            </h3>
            <p className="text-gray-500 w-full lg:w-[470px] text-sm md:text-base">
              {freeVideos[0].description || 'Описание отсутствует'}
            </p>
            <Link href="#" className="text-[#696984] underline font-semibold">
              Толук оку
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoLessons;
