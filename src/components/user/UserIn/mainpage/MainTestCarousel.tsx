import React from 'react';
import { mockTestsData } from '../furtherTests/mockData';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/UI/carousel';
import {
  TestCard,
  TestCardMedia,
  TestCardTitle,
  TestCardSubtitle,
  TestCardDescription,
} from '@/components/UI/TestCard';

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
        {' '}
        <TestCardTitle className="lg:text-base lg:right-1">{testTitle}</TestCardTitle>
      </TestCardMedia>
      <TestCardSubtitle className="lg:text-sm leading-none ml-5">
        {testDescriptionTitle}
      </TestCardSubtitle>
      <TestCardDescription className="max-w-[356px]  lg:text-xs ml-5">
        {description}
      </TestCardDescription>
    </TestCard>
  );
};

const MainTestCarousel = () => {
  return (
    <div className="mt-10 flex flex-col  justify-center items-end">
      <h1 className="text-xl font-semibold self-start pl-10">Негизги тест</h1>
      <Carousel
        opts={{ loop: true, align: "center"}}
        className=" relative  w-full max-w-[360px] lg:max-w-[1400px] ">
        <CarouselContent className='py-3 pl-9'>
          {mockTestsData.map((item) => (
            <CarouselItem
              key={item.id}
              className="max-w-[285px]  ">
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
