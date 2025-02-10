"use client";
import React, { useEffect } from "react";
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
import useTestStore from "@/store/useTestStore";
import useAxiosInterceptors from "@/lib/setupAxiosInterceptors";
import Link from "next/link";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

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
  const sanitizedHTML = DOMPurify.sanitize(description);
  const content = parse(sanitizedHTML);
  return (
    <TestCard withLink href={href} isCarouselCard className="w-full ">
      <TestCardMedia imgSrc={imgSrc} className="w-full lg:h-[211px]">
        {" "}
        <TestCardTitle className="lg:text-base lg:right-1">
          {testTitle}
        </TestCardTitle>
      </TestCardMedia>
      <TestCardSubtitle className="lg:text-sm leading-none ml-5">
        {testDescriptionTitle}
      </TestCardSubtitle>
      <TestCardDescription className="max-w-[356px]  lg:text-xs ml-5">
        {content}
      </TestCardDescription>
    </TestCard>
  );
};

const MainTestCarousel = () => {
  useAxiosInterceptors();
  const { allCategory, getTests } = useTestStore();

  useEffect(() => {
    getTests();
  }, [getTests]);
  return (
    <div className="mt-10  md:ml-10 ml-4 lg:ml-4 flex flex-col  justify-center  md:p-2  md:items-center">
      <h1 className="text-xl font-semibold self-start">Негизги тест</h1>
      <Carousel
        opts={{ loop: true, align: "center" }}
        className=" relative  w-full max-w-[780px] md:max-w-[900px] lg:max-w-[1400px] "
      >
        <CarouselContent className="py-3">
          {allCategory.map((item) => (
            <CarouselItem key={item.id} className="max-w-[285px]  ">
              <Link
                href={`/in/all-tests/${item.subject_category.id}/${item.id}`}
              >
                <CarouselCard
                  imgSrc={item.background_image}
                  testTitle={item.subject_category.subject_category_name}
                  testDescriptionTitle={item.title}
                  description={item.description}
                  href={`/in/all-tests/${item.subject_category.id}/${item.id}`}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mt-[20px]" />
      </Carousel>
    </div>
  );
};

export default MainTestCarousel;
