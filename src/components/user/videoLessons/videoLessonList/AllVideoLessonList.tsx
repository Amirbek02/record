"use client";
import React from "react";
import VideoLessonsList from "./VideoLessonsList";
import useVideosStore from "@/store/videoStore/VideosStore";

const AllVideoLessonList = () => {
  const { fetch,subVideoCategories } = useVideosStore();

  React.useEffect(() => {
    // Fetch videos
    // fetch("https://api.recordonline.kg/api/v1/categories/", "categories");'
    fetch(
      "https://api.recordonline.kg/api/v1/subject-categories/",
      "subVideoCategories"
    );
  }, [fetch]);
  console.log('this is a subject', subVideoCategories);
  return (
    <div>
      <VideoLessonsList
       subvideoCategories={subVideoCategories}
      />
    </div>
  );
};
export default AllVideoLessonList;
