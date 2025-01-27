'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import useVideoStore from '@/useVideoStore';

const VideoLessons = () => {
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
          <div className="space-y-4 w-[800px]">
            <div className="relative w-full h-auto pb-[56.25%] ">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl border"
                src={`https://www.youtube.com/embed/${new URLSearchParams(
                  new URL(freeVideos[0].video_url).search,
                ).get('v')}`}
                title={freeVideos[0].subject_name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>

              <span className="absolute m-2 bottom-0 right-0 w-[154px] text-center cursor-pointer bg-[#4C4C4C] hover:bg-[#2E3095] text-white px-4 py-1 rounded-full z-10">
                {freeVideos[0].subject_category_name}
              </span>
            </div>

            <h3 className="text-lg w-full lg:w-[450px] text-[#252641] md:text-xl font-semibold">
              {freeVideos[0].subject_name}
            </h3>
            <p className="text-gray-500 w-full lg:w-[470px] text-sm md:text-base">
              {freeVideos[0].description}
            </p>
            <Link href="#" className="text-[#696984] underline font-semibold">
              Толук оку
            </Link>
          </div>
        )}

        {/* <div className="space-y-0">
          {freeVideos.slice(1).map((video) => (
            <div
              key={video.id}
              className="flex flex-col sm:flex-row gap-4 items-center pb-2"
            >
              <div className="relative">
                <iframe
                  className="w-full h-auto sm:max-w-[600px] md:max-w-[600px] lg:w-[270px] max-h-[300px] rounded-xl border"
                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                    new URL(video.video_url).search
                  ).get("v")}`}
                  title={video.subject_name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <span className="absolute text-[14px] w-[154px] text-center cursor-pointer pr-3 pl-3 z-10 right-2 bottom-0 bg-[#4C4C4C] hover:bg-[#2E3095] text-white px-2 py-1 rounded-full mb-2">
                  {video.subject_category_name}
                </span>
              </div>
              <div>
                <h3 className="text-lg lg:w-[388px] text-[#252641] md:text-xl font-semibold">
                  {video.subject_name}
                </h3>
                <p className="text-gray-500 lg:pt-5 lg:w-[300px] text-sm md:text-base">
                  {video.description}
                </p>
                <Link
                  href="#"
                  className="sm:hidden text-[#696984] text-start mt-1 underline text-lg font-semibold flex justify-start"
                >
                  Толук окуу
                </Link>
              </div>
            </div>
          ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default VideoLessons;
