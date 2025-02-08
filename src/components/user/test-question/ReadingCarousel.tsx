"use client";

import React from "react";
import useReadingStore from "@/store/useReadingStore";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";

const ReadingCarousel = () => {
  const { readingData, getReadingTexts } = useReadingStore();

  React.useEffect(() => {
    getReadingTexts();
  }, [getReadingTexts]);

  return (
    <Carousel className="w-full max-w-[1000px] h-full">
      <CarouselContent>
        {readingData?.map((question) => {
          // Collect all non-null texts from text1 - text7
          const texts = [
            question.text1,
            question.text2,
            question.text3,
            question.text4,
            question.text5,
            question.text6,
            question.text7,
          ].filter(Boolean);

          return texts.map((text, textIndex) => (
            <CarouselItem key={`${question.id}-${textIndex}`} className=" max-w-[500px]">
              <div className="p-4 border border-gray-300 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-bold mb-2">{question.title}</h3>
                {/* <p className="text-gray-700">{text}</p> */}
                <Image src={text} alt='окуу жана тушунуунун тексти' width={100} height={400} className="h-auto" />
              </div>
            </CarouselItem>
          ));
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReadingCarousel;
