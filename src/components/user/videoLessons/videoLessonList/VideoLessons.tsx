"use client";
import React from "react";
import { VideoData } from "@/store/videoStore/VideosStore";
import Link from "next/link";
import {
  TestCard,
  TestCardMedia,
  TestCardTitle,
  TestCardSubtitle,
  TestCardDescription,
} from "@/components/UI/TestCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/UI/carousel";

interface TestProps {
  testTitle: string;
  testDescriptionTitle: string;
  description: string;
  videoSrc: string;
  href: string;
  disabled:boolean
}

const VideoCardLesson = ({
  testTitle,
  testDescriptionTitle,
  description,
  videoSrc,
  href,
  disabled
}: TestProps) => {
  return (
    <Link href={disabled ? "/in/payment" : href } className=" w-full">
    <TestCard
      isCarouselCard
      className="w-full"
    >
      <TestCardMedia
        videoSrc={videoSrc}
        className="w-full  lg:h-[211px]"
      >
        {" "}
        <TestCardTitle className="lg:text-base lg:right-1">
          {testTitle}
        </TestCardTitle>
      </TestCardMedia>
      <TestCardSubtitle className="lg:text-sm leading-none ml-5">
        {testDescriptionTitle}
      </TestCardSubtitle>
      <TestCardDescription className="max-w-[356px]  lg:text-xs ml-5">
        {description}
      </TestCardDescription>
    </TestCard>
    </Link>
  );
};

const VideoLessons = ({ videosData }: { videosData: VideoData[] | null }) => {
  console.log(videosData, "this");
  if (!videosData) return <p>No videos available</p>;
  const groupedByCategory = videosData?.reduce<Record<string, VideoData[]>>(
    (acc, item) => {
      const categoryName = item.subject_category.subject_category_name;

      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }

      acc[categoryName].push(item);
      return acc;
    },
    {}
  );

  // Output grouped data
  console.log(groupedByCategory);

  return (
    <div className="mt-[60px]">
      {Object.entries(groupedByCategory).map(
        ([subjectCategory, videos], index) => (
          <div key={index} className="mb-8">
            {/* Category Name */}
            <h1 className="text-xl font-semibold text-blue-600">
              {subjectCategory}
            </h1>

            {/* Carousel for this category */}
            <Carousel
              opts={{
                loop: true,
                align: "start",
                slidesToScroll: 1,
                containScroll: false,
              }}
              className="relative w-full max-w-[1400px]"
            >
              <CarouselContent>
                {videos.map((video) => (
                  <CarouselItem
                    key={video.id}
                    className="max-w-[285px] py-3 flex justify-center"
                  >
                    <VideoCardLesson
                      href={`/in/video-lessons/${video.video_category.id}/${video.id}`} // Add a link to the video
                      videoSrc={video.video_url}
                      testTitle={video.subject_category.subject_category_name}
                      testDescriptionTitle={
                        video.subject_name
                      }
                      description={video.description}
                      disabled={video.is_paid }
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="mt-[20px]" />
            </Carousel>
          </div>
        )
      )}
    </div>
  );
};

export default VideoLessons;
