import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselPrevious,
  CarouselNext,
} from "@/components/UI/carousel";
import TestCarouselCard from "./TestCarouselCard";
import { mockTestsData } from "./mockData";
import FurtherTestMobile from "./FurtherTestMobile";
const FurtherTestCarousel = () => {
  const slideCount = mockTestsData.length;
  return (
    <div>
      <FurtherTestMobile testData={mockTestsData} />
      <Carousel
        opts={{ loop: false, align: "start", containScroll: "keepSnaps" }}
        className=" m-auto max-w-[58%] relative hidden md:block"
      >
        <CarouselContent>
          {mockTestsData.map((item) => (
            <CarouselItem key={item.id} className="basis-1/2  max-w-[420px]">
              <TestCarouselCard
                imgSrc={item.imgSrc}
                testTitle={item.testTitle}
                testDescriptionTitle={item.testDescriptionTitle}
                description={item.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {slideCount > 2 && (
          <>
            <CarouselDots className="mt-[50px]" />
            <div className="justify-end flex gap-3 mt-[50px]">
              <CarouselPrevious>Артка</CarouselPrevious>
              <CarouselNext className="mr-[85px]">Алдыга</CarouselNext>
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
};

export default FurtherTestCarousel;
