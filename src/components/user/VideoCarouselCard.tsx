'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TestCard, TestCardTitle, TestCardDescription } from '@/components/UI/VideoCoursesCard';
import { Play, Pause } from 'lucide-react';

interface TestProps {
  testTitle: string;
  // testDescriptionTitle: string;
  description: string;
  videoSrc: string;
}

const VideoCarouselCard = ({
  testTitle,
  // testDescriptionTitle,
  description,
  videoSrc,
}: TestProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    return () => video.removeEventListener('loadeddata', handleLoadedData);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(Math.round(percentage) || 0);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && isLoaded) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const percentage = (clickPosition / progressBar.offsetWidth) * 100;
      const newTime = (videoRef.current.duration * percentage) / 100;
      videoRef.current.currentTime = newTime;
    }
  };

  const togglePlay = () => {
    if (!videoRef.current || !isLoaded) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <TestCard withLink={false}>
      {/* <TestCardSubtitle>{testDescriptionTitle}</TestCardSubtitle> */}
      <TestCardDescription className="max-w-[300px]">{description}</TestCardDescription>

      <div className="relative w-full max-w-[300px]">
        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls={false}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex  text-[14px] bottom-6 p-4  from-black/50 to-transparent">
            <TestCardTitle className="text-white">{testTitle}</TestCardTitle>
          </div>
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    p-4 rounded-full bg-black/30 text-white hover:bg-black/40 
                    transition-all duration-200 z-10"
            onClick={togglePlay}>
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
        </div>

        <div className="flex items-center gap-2 mt-2 ml-4">
          <div
            className="flex-1 h-2 bg-gray-200 rounded-full cursor-pointer"
            onClick={handleProgressBarClick}>
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm text-gray-600 min-w-[40px]">{progress}%</span>
        </div>
      </div>
    </TestCard>
  );
};

export default VideoCarouselCard;
