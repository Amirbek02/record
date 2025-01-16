import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/UI/carousel";
import Footer from "../footer/Footer";
import TestCarouselCard from "../TestCarouselCard";
import { mainTestsData } from "./mainTest";
import { VideoLessons } from "./mainTest";
import Image from "next/image";

const MainTestCarousel = () => {
  const slideCount = mainTestsData.length;

  return (
    <div className="flex flex-col gap-2 md:flex md:gap-20 md:my-0 my-[30px]">
      {/* <div className="flex md:flex">
        <div className="bg-[#2E3095] md:mt-20 mt-40 flex flex-col justify-center relative md:left-[150px]  text-center  w-full md:w-[60%] max-w-[838px] h-auto md:h-[200px] rounded-10 rounded-tl-[300px] rounded-bl-[10px] rounded-br-[200px] p-4 md:p-6 text-white">
          <Image
            className="absolute md:left-[-150px] left-[-100px]  sm:left-[-140px] lg:left-[-150px] bottom-0 "
            src="/images/education.png"
            alt=""
            width={415}
            height={311}
          />
          <h2 className="text-[12px] md:text-xl font-semibold md:text-center text-end">
            Жалпы республикалык тестке
          </h2>
          <h1 className="text-[16px] md:text-3xl text-[#FFE500] text-end mr-6 font-bold mt-2">
            Oнлайн даярдан
          </h1>
          <p className="text-[12px] m-auto md:text-[16px] hidden lg:block  mt-2 w-[392px]">
            Кыргыз тил Математика Англис тил Математика Физика Тарых Биология
          </p>
        </div>
        <Image
          className="relative left-[-40px] top-[140px] h-[155px] hidden lg:block"
          src="/images/test foto.png"
          alt=""
          width={215}
          height={155}
        />
      </div> */}
      <div className="flex flex-col gap-8 items-end mt-[50px]">
        <h1 className="text-[20px] relative md:left-[-86%] md:left-0 left-[-56%] mt-[50px] md:mt-[10px]">
          Негизги тест
        </h1>
        <Carousel
          opts={{
            loop: true,
            align: "start",
            containScroll: false,
            slidesToScroll: 1,
          }}
          className="relative w-[95%] max-w-[1440px] overflow-hidden"
        >
          <CarouselContent className="ml-0 flex">
            {mainTestsData.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 md:basis-[28.5%] md:min-w-[28.5%] basis-[65%] min-w-[65%] first:pl-0"
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
          {slideCount > 3 && <CarouselDots className="mt-[50px]" />}
        </Carousel>
      </div>
      <div className="flex flex-col gap-8 items-end">
        <h1 className="text-[20px] relative md:left-[-86%] left-[-56%]">
          Негизги тест
        </h1>
        <Carousel
          opts={{
            loop: true,
            align: "start",
            containScroll: false,
            slidesToScroll: 1,
          }}
          className="relative w-[95%] max-w-[1440px] overflow-hidden"
        >
          <CarouselContent className="ml-0 flex">
            {VideoLessons.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 md:basis-[28.5%] md:min-w-[28.5%] basis-[65%] min-w-[65%] first:pl-0"
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
          {slideCount > 3 && <CarouselDots className="mt-[50px]" />}
        </Carousel>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default MainTestCarousel;
