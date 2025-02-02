import React from "react";
import NextPrevButtons from "../../../UI/nextPrevButtons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/UI/carousel";
import TestCarouselCard from "../../../UI/TestCarouselCard";
import { mockTestsData } from "./mockData";
import FurtherTestMobile from "./FurtherTestMobile";
import Link from "next/link";
const FurtherTestCarousel = () => {
  const slideCount = mockTestsData.length;
  return (
    <div className="flex flex-col pb-10 pl-4  gap-8 items-end mt-3">
      <h1 className="text-2xl font-bold text-red self-start ml-11 -mb-4">
        ЖРТ га даярдоо
      </h1>
      <h1 className="font-semibold text-[22px] self-start ml-11 -mb-2">
        Математика
      </h1>
      <FurtherTestMobile testData={mockTestsData} />
      <Carousel
        opts={{ loop: true, align: "center", containScroll: "trimSnaps" }}
        className="  relative hidden md:block w-[95%] max-w-[1440px]"
      >
        <CarouselContent className="ml-4 py-2">
          {mockTestsData.map((item) => (
            <CarouselItem
              key={item.id}
              className="max-w-[400px] flex justify-center pl-4"
            >
             <Link href={`/in/all-tests/kyrgyz/${item.id}`}>
              <TestCarouselCard
                imgSrc={item.imgSrc}
                testTitle={item.testTitle}
                testDescriptionTitle={item.testDescriptionTitle}
                description={item.description}
                href="#"
              />
             </Link>
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
