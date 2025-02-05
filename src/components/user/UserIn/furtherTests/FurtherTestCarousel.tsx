'use client';
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/UI/carousel';
import TestCarouselCard from '../../../UI/TestCarouselCard';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';
import useTestStore from '@/store/useTestStore';

const FurtherTestCarousel = ({isLoggedIn}:{isLoggedIn?:boolean}) => {
  useAxiosInterceptors();
  const { allCategory, getTests } = useTestStore();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[0]) : undefined;
  console.log('params', params);
  const parentRoute= isLoggedIn? "/in/all-tests":'/exam-test'

  useEffect(() => {
    getTests();
  }, [getTests]);

  const subjectCategoryTests = allCategory.filter((item) => item.subject_category?.id === idParams);

  const testCategoryName = subjectCategoryTests.length
    ? subjectCategoryTests[0].test_category?.test_category_name
    : 'Тест категориясы жок';

  return (
    <div className="flex flex-col pb-10 pl-4 gap-8 items-end mt-3 max-w-[1440px]">
      <h1 className="text-2xl font-bold text-red self-start ml-11 -mb-4">ЖРТ га даярдоо</h1>
      <h1 className="font-semibold text-[22px] self-start ml-11 -mb-2">{testCategoryName}</h1>

      {/* <FurtherTestMobile testData={mockTestsData} /> */}

      <Carousel
        opts={{ loop: true, align: 'center', containScroll: 'trimSnaps' }}
        className="relative md:block">
        <CarouselContent className="ml-4 py-2">
          {subjectCategoryTests.map((item) => (
            <CarouselItem key={item.id} className="max-w-[400px] flex justify-center pl-4">
              <Link href={`${parentRoute}/${item.subject_category.id}/${item.id}`}>
                <TestCarouselCard
                  imgSrc={item.background_image}
                  testTitle={item.subject_category.subject_category_name}
                  testDescriptionTitle={item.title}
                  description={item.description}
                  href={`${parentRoute}/${item.subject_category.id}/${item.id}`}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {subjectCategoryTests.length > 2 && <CarouselDots className="mt-[50px]" />}
      </Carousel>
    </div>
  );
};

export default FurtherTestCarousel;
