'use client'
import React from 'react'
import useVideosStore from '@/store/videoStore/VideosStore'

const VideoLessons = () => {
const {fetch,videoCategories}=useVideosStore()

React.useEffect(() => {
  
    fetch(
      "https://api.recordonline.kg/api/v1/video/4/",
      "subVideoCategories"
    );
  }, [fetch]);

console.log(videoCategories)
  return (
    <div>VideoLessons</div>
  )
}

export default VideoLessons