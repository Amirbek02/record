"use client";

import React from "react";
import useReadingStore from "@/store/useReadingUnderstanding/useReadingStore";
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
    <Carousel className=" md:max-w-[550px] max-w-[360px]  lg:max-w-[450px] mx-auto  md:ml-[5%] xl:max-w-[700px] h-auto xl:ml-[5%] mb-2">
      <CarouselContent className="md:max-w-[660px]">
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
            <CarouselItem
              key={`${question.id}-${textIndex}`}
              className=" max-w-[300px] lg:max-w-[340px] flex justify-center"
            >
              <div className="p-4 border border-gray-300 rounded-lg shadow-md text-center">
                <h3 className="text-base font-semibold mb-2">
                  {question.title}
                </h3>
                <Image
                  src={text}
                  alt="окуу жана тушунуунун тексти"
                  width={300}
                  height={400}
                />
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
