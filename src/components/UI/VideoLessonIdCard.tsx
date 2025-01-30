import Image from "next/image";
import React from "react";

const VideoLessonIdCard = () => {
  return (
    <div className="mt-3">
      <label
        htmlFor="video-upload"
        className="w-[801px] h-[287px] border border-[#7C7C7C] rounded-xl gap-1 flex items-center flex-col justify-center cursor-pointer"
      >
        <Image
          src="/icons/download.svg"
          alt="download"
          width={24}
          height={24}
        />
        <p className="text-[#989898] font-inter font-medium text-[14px] leading-[16.94px] ml-2">
          видео сабак
        </p>
        <input
          type="file"
          id="video-upload"
          className="w-[0%] h-[30px] bg-[#f5f5f5] border border-[#e83d3d] rounded-xl opacity-0 cursor-pointer"
        />
      </label>

      <div className="bg-[#ebf1ff] w-[801px] h-[45px] pl-10 mt-1 ">
        <p className="text-[#989898] font-montserrat font-normal text-[12px] leading-[14.63px] pt-1">
          Математика боюнча 1- видео сабакка кош келиңиз
        </p>
      </div>
    </div>
  );
};

export default VideoLessonIdCard;
