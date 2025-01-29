"use client";
import React from "react";
import VideoOrTestContainer from "@/components/UI/VideoOrTestContainer";
import Link from "next/link";
 

 export type SubVideoCategory = {
  id: number;
  category_name: string;
  last_update_date: string; // Using ISO string format for dates
  created_date: string;
};

const VideoLessonsList = ({
  subvideoCategories,
  isMainTestVideos
}: {
  subvideoCategories:SubVideoCategory[]|null;
  isMainTestVideos?:boolean
}) => {
  
  return (
    <div className="">
      <div>
        <p className="text-2xl font-bold mb-5">
          {isMainTestVideos? "Негизги предметтер" :"Кошумча предметтер"}
        </p>
        <div className="flex flex-wrap gap-5">
          {subvideoCategories?.map((subvideo) => (
            <Link key={subvideo.id} href={`/in/video-lessons/${subvideo.id}`}>
              <VideoOrTestContainer
                subjectName={subvideo.category_name}
              />
            </Link>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default VideoLessonsList;
