"use client";

import VideoLessonIdCard from "@/components/UI/VideoLessonIdCard";
import VideoLessonsCard from "@/components/UI/VideoLessonsCard";
import { videoLessons } from "@/utils/videolesson";
import Image from "next/image";
import React, { useState } from "react";

const VideoLessons = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleCardClick = () => {
    setIsCardOpen((prev) => !prev);
    setIsCardVisible(false);
  };

  return (
    <div className="flex  bg-[#fafafc] w-full">
      <div className=" w-full flex flex-col pb-10">
        <div className="relative pt-8 pl-7">
          <div className=" w-[930px] flex justify-between mb-3">
            <h1 className="text-2xl font-semibold text-[#4C4C4C] leading-[28px]">
              1-бөлүм Математика
            </h1>
            <div className="flex gap-3">
              <Image src="/icons/edit.svg" alt="edit" width={16} height={16} />
              <Image
                src="/icons/again.svg"
                alt="again"
                width={16}
                height={16}
              />
              <Image
                src="/icons/delete.svg"
                alt="delete"
                width={16}
                height={18}
              />
            </div>
          </div>

          {isCardVisible && (
            <div className="w-[930px] bg-[#fff] rounded-[4px] border border-gray-300 flex flex-wrap gap-4 pt-[30px] pr-[8px] pb-[40px] pl-[40px]">
              {videoLessons.length > 0 ? (
                videoLessons.map((lesson) => (
                  <div key={lesson.id} onClick={handleCardClick}>
                    <VideoLessonsCard title={lesson.title} />
                  </div>
                ))
              ) : (
                <p>Нет доступных уроков</p>
              )}
            </div>
          )}

          {isCardOpen && (
            <div className="w-[930px] bg-[#fff] rounded-[4px] border border-gray-300 pt-[30px] pr-[8px] pb-[40px] pl-[20px] mt-4">
              <VideoLessonIdCard />
            </div>
          )}
        </div>

        <div className="flex justify-end w-[930px]  gap-2 mt-[88px]">
          <button className="w-[146px] h-[34px] bg-[#434343] rounded-[34px] text-white">
            Артка
          </button>
          <button className="w-[146px] h-[34px] bg-[#27AE60] rounded-[34px] text-white">
            Сактоо
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoLessons;
