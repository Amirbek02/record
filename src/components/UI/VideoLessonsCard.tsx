import React from "react";
import Image from "next/image";

interface VideoLessonsCardProps {
  title: string;
}

const VideoLessonsCard: React.FC<VideoLessonsCardProps> = ({ title }) => {
  return (
    <div className="mt-3">
      <div className="w-[279px] h-[72px] border border-[#7C7C7C] rounded-xl gap-1 flex items-center flex-col justify-center cursor-pointer">
        <Image
          src="/icons/download.svg"
          alt="download"
          width={20}
          height={20}
        />
        <p className="text-[#989898] font-inter font-medium text-[14px] leading-[16.94px]">
          видео сабак
        </p>
      </div>

      <div className="bg-[#ebf1ff] w-[279px] h-[45px] text-center mt-1 flex justify-center">
        <p className="text-[#989898] w-[219px] font-montserrat font-normal text-[12px] leading-[14.63px] pt-1">
          {title}
        </p>
      </div>
    </div>
  );
};

export default VideoLessonsCard;
