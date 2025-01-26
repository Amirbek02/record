"use client";
import React from "react";
import VideoOrTestContainer from "@/components/UI/VideoOrTestContainer";
import Link from "next/link";
 type Category={
  category_name:string
 }

 export type SubVideoCategory = {
  id: number;
  subject_category_name: string;
  last_update_date: string; // Using ISO string format for dates
  created_date: string;
};

const VideoLessonsList = ({
  subvideoCategories,
  category,
}: {
  subvideoCategories:SubVideoCategory[]|null;
  category?:Category
}) => {
  console.log(category)
  return (
    <div className="">
      <div>
        <p className="">
          {category?.category_name}
        </p>
        <div className=" ">
          {subvideoCategories?.map((subvideo) => (
            <Link key={subvideo.id} href={`/in/video-lessons/${subvideo.id}`}>
              <VideoOrTestContainer
                subjectName={subvideo.subject_category_name}
              />hii1
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoLessonsList;
