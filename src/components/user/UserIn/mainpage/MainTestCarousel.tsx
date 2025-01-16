import React from "react";
import { mockTestsData } from "../futherTests/mockData";
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
  imgSrc: string;
  href: string;
}

const CarouselCard = ({
  testTitle,
  testDescriptionTitle,
  description,
  imgSrc,
  href,
}: TestProps) => {
  return (
    <TestCard withLink href={href} isCarouselCard className="w-full ">
      <TestCardMedia imgSrc={imgSrc} className="w-full lg:h-[211px]">
        {" "}
        <TestCardTitle>{testTitle}</TestCardTitle>
      </TestCardMedia>
      <TestCardSubtitle className="lg:text-base ">
        {testDescriptionTitle}
      </TestCardSubtitle>
      <TestCardDescription className="max-w-[356px]  lg:text-xs">
        {description}
      </TestCardDescription>
    </TestCard>
  );
};

const MainTestCarousel = () => {
  return (
    <div className="mt-10 flex flex-col pl-8  mx-0 justify-center">
      <h1 className="text-xl font-semibold">Негизги тест</h1>
      <Carousel opts={{ loop: true, align: "start"}}  className=" relative w-full max-w-[1400px]"> 
        <CarouselContent>
          {mockTestsData.map((item) => (
            <CarouselItem key={item.id} className=" max-w-[285px] py-3 flex justify-center ">
              <CarouselCard
                imgSrc={item.imgSrc}
                testTitle={item.testTitle}
                testDescriptionTitle={item.testDescriptionTitle}
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

export default MainTestCarousel;
