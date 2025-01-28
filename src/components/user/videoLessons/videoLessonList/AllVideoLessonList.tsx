"use client";
import React from "react";
import VideoLessonsList from "./VideoLessonsList";
import useVideosStore from "@/store/videoStore/VideosStore";

const AllVideoLessonList = () => {
  const { fetch, subVideoCategories } = useVideosStore();

  React.useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/category-video`,
      "subVideoCategories"
    );
  }, [fetch]);
  console.log("this is a subject", subVideoCategories);
  return (
    <div className="flex flex-col gap-10">
      <VideoLessonsList subvideoCategories={subVideoCategories} isMainTestVideos />
    </div>
  );
};
export default AllVideoLessonList;
