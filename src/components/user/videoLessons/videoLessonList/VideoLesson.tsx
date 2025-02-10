import React from "react";
import { VideoData } from "@/store/videoStore/VideosStore";
import NextPrevButtons from "@/components/UI/nextPrevButtons";

const VideoLesson = ({ video }: { video: VideoData | null }) => {
  const extractVideoId = (videoUrl?: string) => {
    if (!videoUrl) return null;
    try {
      const url = new URL(videoUrl);
      return new URLSearchParams(url.search).get("v");
    } catch (e) {
      console.error("Ошибка при обработке URL видео:", e);
      return null;
    }
  };
  return (
    <div className="w-[90%] max-w-[1440px] mx-auto py-[30px]">
      <div>
        <div className="w-full h-auto md:w-[734px] lg:w-[834px] lg:h-[502px] rounded-[15px] overflow-hidden">
          <div className="relative rounded-[15px] w-full h-full overflow-hidden border-[8px] transition-all duration-500 ease-in-out md:border-[2px] md:border-[#008335]">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${extractVideoId(
                video?.video_url
              )}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="transition-all duration-500 ease-in-out md:hidden w-[127px] h-[26px] flex items-center justify-center rounded-[80px] bg-blue-600 absolute bottom-[15px] right-[15px]">
              <h3 className=" ">
                {video?.subject_category.subject_category_name}
              </h3>
            </div>
          </div>
        </div>
        <h2 className="text-[16px] md:text-[20px] font-semibold md:font-medium ">
          {video?.subject_name}
        </h2>
        <div className="flex gap-[10px] mt-[100px] md:mt-[70px] justify-end">
          <NextPrevButtons />
        </div>
      </div>
    </div>
  );
};

export default VideoLesson;
