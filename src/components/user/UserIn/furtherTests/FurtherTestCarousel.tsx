"use client";
import React, { useEffect } from "react";
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
import { useParams } from "next/navigation";
import userInTests from "@/store/userInTests";

const FurtherTestCarousel = () => {
  const { test, getTests } = userInTests();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[0]) : undefined;

  useEffect(() => {
    getTests();
  }, [getTests]);

  const subjectCategoryTests = test.filter(
    (item) => item.test_category?.id === idParams
  );

  const testCategoryName = subjectCategoryTests.length
    ? subjectCategoryTests[0].test_category?.test_category_name
    : "Тест категориясы жок";

  return (
    <div className="flex flex-col pb-10 pl-4 gap-8 items-end mt-3 max-w-[1440px]">
      <h1 className="text-2xl font-bold text-red self-start ml-11 -mb-4">
        ЖРТ га даярдоо
      </h1>
      <h1 className="font-semibold text-[22px] self-start ml-11 -mb-2">
        {testCategoryName}
      </h1>
      
      <FurtherTestMobile testData={mockTestsData} />

      <Carousel
        opts={{ loop: true, align: "center", containScroll: "trimSnaps" }}
        className="relative hidden md:block"
      >
        <CarouselContent className="ml-4 py-2">
          {subjectCategoryTests.map((item) => (
            <CarouselItem key={item.id} className="max-w-[400px] flex justify-center pl-4">
              <Link href={`/in/all-tests/${item.subject_category.id}/${item.id}`}>
                <TestCarouselCard
                  imgSrc={item.background_image}
                  testTitle={item.test_category.test_category_name}
                  testDescriptionTitle={item.title}
                  description={item.description}
                  href="#"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {subjectCategoryTests.length > 2 && <CarouselDots className="mt-[50px]" />}
      </Carousel>

      <NextPrevButtons />
    </div>
  );
};

export default FurtherTestCarousel;
