import { TestPage, VideoLessons } from "./mainTest/mainTest";
import TestCarouselCard from "../UI/TestCarouselCard";

const PreparationTest = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 md:px-0">
      <h1 className="text-2xl text-[#C00510] md:text-3xl font-bold mb-4">
        ЖРТ га даярдоо
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold mb-4">Негизги тест</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 w-full mb-8">
        {TestPage.map((item) => (
          <TestCarouselCard
            key={item.id}
            testTitle={item.testTitle}
            testDescriptionTitle={item.testDescriptionTitle}
            description={item.description}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Предметтик тест
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 w-full ">
        {VideoLessons.map((item) => (
          <TestCarouselCard
            key={item.id}
            testTitle={item.testTitle}
            testDescriptionTitle={item.testDescriptionTitle}
            description={item.description}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default PreparationTest;
