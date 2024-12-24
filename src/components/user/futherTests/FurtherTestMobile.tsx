import React from "react";
import TestCarouselCard from "../TestCarouselCard";

type TestData = {
  id: number;
  testTitle: string;
  testDescriptionTitle: string;
  description: string;
  imgSrc: string;
};

interface FurtherTestMobileProps {
  testData: TestData[];
}

const FurtherTestMobile: React.FC<FurtherTestMobileProps> = ({ testData }) => {
  return (
    <div className="md:hidden w-fit mx-auto flex flex-col gap-6">
      {testData.map((data) => (
        <TestCarouselCard
          key={data.id}
          imgSrc={data.imgSrc}
          testTitle={data.testTitle}
          testDescriptionTitle={data.testDescriptionTitle}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default FurtherTestMobile;
