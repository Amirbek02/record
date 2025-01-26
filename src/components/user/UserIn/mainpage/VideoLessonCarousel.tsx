"use client";
import React from "react";
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
  href: string;
}

const CarouselCardVideo = ({
  testTitle,
  testDescriptionTitle,
  description,
  videoSrc,
  href,
}: TestProps) => {
  return (
    <TestCard
      withLink
      href={href}
      isCarouselCard
      className="w-full flex  flex-col justify-stretch"
    >
      <TestCardMedia videoSrc={videoSrc} className="w-full lg:h-[211px]">
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
  );
};

const VideoLessonCarousel = () => {
  const url = "https://api.recordonline.kg/api/v1/video/";
  const { fetch, allVideos } = useVideosStore();

  React.useEffect(() => {
    fetch(url, "videos");
  }, [fetch]);
  console.log(allVideos);
  const paidVideos = allVideos?.filter((video) => video.is_paid);
  const unPaidVideos = allVideos?.filter((video) => !video.is_paid);
  console.log(paidVideos, "-thispaids");
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
          {allVideos?.map((item) => (
            <CarouselItem
              key={item.subject_category.id}
              className=" max-w-[285px] py-3 flex justify-center md:basis-1/2 "
            >
              <CarouselCardVideo
                videoSrc={item.video_url}
                testTitle={item.subject_category.subject_category_name}
                testDescriptionTitle={item.subject_name}
                description={item.description}
                href="href"
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
