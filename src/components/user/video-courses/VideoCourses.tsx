import {videoCourses} from "./VideoCours";
import VideoCarouselCard from "../VideoCarouselCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "@/components/UI/carousel";

const VideoCourses = () => {
    const slideCount = videoCourses.length;

    return (
        <div className="h-[1340px] pl-2 md:pl-0 pb-10 md:pb-0">
            <Carousel
        opts={{
          loop: true,
          align: "start",
          containScroll: "trimSnaps",
          slidesToScroll: 1,
          draggable: true, 
        }}
        className="relative lg:w-[60%] w-[100%] max-w-[1440px] overflow-hidden md:mx-10 mx-1"
      >
        <h1 className="md:text-[20px] text-[14px] text-[#2E3095] font-bold md:mt-20 md:mb-6 mb-4 mt-10 " >1-бөлүм. Математика </h1>
        <CarouselContent className="ml-0 flex">
          {videoCourses.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-[33.3%] md:min-w-[28.5%] basis-[65%] min-w-[65%] first:pl-0"
            >
              <VideoCarouselCard
                testTitle={item.title}
                description={item.description}
                videoSrc={item.videoSrc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {slideCount > 3 && <CarouselDots className="mt-[50px] hidden md:block" />}
      </Carousel>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          containScroll: false,
          slidesToScroll: 1,
        }}
        className="relative md:w-[60%] w-[100%] max-w-[1440px] overflow-hidden md:mx-10 mx-1"
      >
        <h1 className="md:text-[20px] text-[14px] text-[#2E3095] font-bold md:mt-10 md:mb-6 mb-4 mt-4 " >2-бөлүм. Математика </h1>
        <CarouselContent className="ml-0 flex">
          {videoCourses.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-[33.3%] md:min-w-[28.5%] basis-[65%] min-w-[65%] first:pl-0"
            >
              <VideoCarouselCard
                testTitle={item.title}
                description={item.description}
                videoSrc={item.videoSrc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {slideCount > 3 && <CarouselDots className="mt-[50px] hidden md:block" />}
      </Carousel>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          containScroll: false,
          slidesToScroll: 1,
        }}
        className="relative md:w-[60%] w-[100%] max-w-[1440px] overflow-hidden md:mx-10 mx-1"
      >
        <h1 className="md:text-[20px] text-[14px] text-[#2E3095] font-bold md:mt-10 mt-4 md:mb-6 mb-4 mt-4 " >1-бөлүм. Кыргыз тил  </h1>
        <CarouselContent className="ml-0 flex">
          {videoCourses.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-[33.3%] md:min-w-[28.5%] basis-[65%] min-w-[65%] first:pl-0"
            >
              <VideoCarouselCard
                testTitle={item.title}
                description={item.description}
                videoSrc={item.videoSrc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {slideCount > 3 && <CarouselDots className="mt-[50px] hidden md:block" />}
      </Carousel>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          containScroll: false,
          slidesToScroll: 1,
        }}
        className="relative md:w-[60%] w-[100%] max-w-[1440px] overflow-hidden md:mx-10 mx-1"
      >
        <h1 className="md:text-[20px] text-[14px]  text-[#2E3095] font-bold md:mt-10 md:mb-6 mb-4 mt-4 " >2-бөлүм. Кыргыз тил  </h1>
        <CarouselContent className="ml-0 flex">
          {videoCourses.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-[33.3%] md:min-w-[28.5%] basis-[65%] min-w-[65%] first:pl-0"
            >
              <VideoCarouselCard
                testTitle={item.title}
                description={item.description}
                videoSrc={item.videoSrc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {slideCount > 3 && <CarouselDots className="mt-[50px] hidden md:block" />}
      </Carousel>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          containScroll: false,
          slidesToScroll: 1,
        }}
        className="relative md:w-[60%] w-[100%] max-w-[1440px] overflow-hidden md:mx-10 mx-1"
      >
        <h1 className="md:text-[20px] text-[14px] text-[#2E3095] font-bold md:mt-10 md:mb-6 mb-4 mt-4 " >Предметтик тест.  Биология </h1>
        <CarouselContent className="ml-0 flex">
          {videoCourses.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-[33.3%] md:min-w-[28.5%] basis-[65%] min-w-[65%] first:pl-0"
            >
              <VideoCarouselCard
                testTitle={item.title}
                description={item.description}
                videoSrc={item.videoSrc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {slideCount > 3 && <CarouselDots className="mt-[50px] hidden md:block" />}
      </Carousel>
        </div>
    );
};

export default VideoCourses;