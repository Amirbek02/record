import React from "react";
import NextPrevButtons from "../../UI/nextPrevButtons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/UI/carousel";
import TestCarouselCard from "../TestCarouselCard";
import { mockTestsData } from "./mockData";
import FurtherTestMobile from "./FurtherTestMobile";
const FurtherTestCarousel = () => {
  const slideCount = mockTestsData.length;
  return (
    <div className="flex flex-col  gap-8 items-end">
      <FurtherTestMobile testData={mockTestsData} />
      <Carousel
        opts={{ loop: true, align: "center", containScroll: "trimSnaps" }}
        className="  relative hidden md:block w-[95%] max-w-[1440px]"
      >
        <CarouselContent className="ml-0">
          {mockTestsData.map((item) => (
            <CarouselItem
              key={item.id}
              className="max-w-[400px] flex justify-center pl-0 -mr-2"
            >
              <TestCarouselCard
                imgSrc={item.imgSrc}
                testTitle={item.testTitle}
                testDescriptionTitle={item.testDescriptionTitle}
                description={item.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {slideCount > 2 && <CarouselDots className="mt-[50px]" />}
      </Carousel>
      <NextPrevButtons />
    </div>
  );
};

export default FurtherTestCarousel;
