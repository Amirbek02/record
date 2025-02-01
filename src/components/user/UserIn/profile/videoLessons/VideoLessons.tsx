import React from "react";
import VideoLesson from "./VideoLesson";
import { videoCourses } from "./VideoCours";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/UI/carousel";
const VideoLessons = () => {
  const carouselsData = [
    { id: 1, title: "Видео сабак 1" },
    { id: 2, title: "Видео сабак 2" },
    { id: 3, title: "Видео сабак 3" },
  ];
  return (
    <div className="mt-[60px]">
      {carouselsData.map((carousel) => (
        <div key={carousel.id} className="mb-8">
          <h1 className="text-xl font-semibold text-blue-600">{carousel.title}</h1>
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
              {videoCourses.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="max-w-[285px] py-3 flex justify-center"
                >
                  <VideoLesson
                    videoSrc={item.videoId}
                    testTitle={item.title}
                    description={item.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="mt-[20px]" />
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default VideoLessons;
