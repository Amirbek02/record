"use client";
import React from "react";
import Link from "next/link";
import useVideosStore from "@/store/videoStore/VideosStore";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/UI/carousel";
import {
  TestCard,
  TestCardMedia,
  TestCardTitle,
  TestCardSubtitle,
  TestCardDescription,
} from "@/components/UI/TestCard";

interface TestProps {
  testTitle: string;
  testDescriptionTitle: string;
  description: string;
  videoSrc: string;
  disabled?: boolean;
  href: string;
}

const CarouselCardVideo = ({
  testTitle,
  testDescriptionTitle,
  description,
  videoSrc,
  disabled = false,
  href, // Default to false
}: TestProps) => {
  return (
    <Link
      href={disabled ? "/in/payment" : `/in/video-lessons/${href}`}
      className=" w-full"
    >
      <TestCard
        isCarouselCard
        className={`w-full flex flex-col justify-stretch relative ${
          disabled ? "opacity-80 pointer-events-none" : ""
        }`} // Apply styles when disabled
      >
        <TestCardMedia videoSrc={videoSrc} className="w-full lg:h-[211px]">
          <TestCardTitle className="lg:text-base lg:right-1">
            {testTitle}
          </TestCardTitle>
        </TestCardMedia>
        <TestCardSubtitle className="lg:text-sm leading-none ml-5">
          {testDescriptionTitle}
        </TestCardSubtitle>
        <TestCardDescription className="max-w-[356px] lg:text-xs ml-5">
          {description}
        </TestCardDescription>
      {disabled && (
        <div className="z-30 transform -translate-x-1/2 -translate-y-1/2 absolute top-[50%] left-[50%]  flex items-center justify-center bg-green bg-opacity-50 text-white text-bold text-sm p-3 rounded-sm">
          Сатып алуу
        </div>
      )}
      </TestCard>
    </Link>
  );
};

const VideoLessonCarousel = () => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/video/`;
  const { fetch, allVideos } = useVideosStore();

  React.useEffect(() => {
    fetch(url, "videos");
  }, [fetch,url]);
  console.log(allVideos);
  const paidVideos = (allVideos?.filter((video) => video.is_paid) || []).slice(
    0,
    4
  );
  const unPaidVideos = allVideos?.filter((video) => !video.is_paid) || [];
  const combinedVideos = [...paidVideos, ...unPaidVideos];
  const isUserRegistered = Boolean(localStorage.getItem("token"));
  return (
    <div className="mt-10 flex flex-col pl-8  mx-0 justify-center mb-8">
      <h1 className="text-xl font-semibold">Видео сабак</h1>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
          containScroll: false,
        }}
        className=" relative max-w-[350px] md:max-w-[1400px]"
      >
        <CarouselContent>
          {combinedVideos?.map((item) => (
            <CarouselItem
              key={item.subject_category.id}
              className=" max-w-[285px] py-3 flex justify-center md:basis-1/2 "
            >
              <CarouselCardVideo
                videoSrc={item.video_url}
                testTitle={item.subject_category.subject_category_name}
                testDescriptionTitle={item.subject_name}
                description={item.description}
                disabled={item.is_paid && !isUserRegistered}
                href={`${item.video_category.id}/${item.id}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mt-[20px]" />
      </Carousel>
    </div>
  );
};

export default VideoLessonCarousel;
