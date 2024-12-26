import React from "react";
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
}

const TestCardNoSign = ({
  testTitle,
  testDescriptionTitle,
  description,
  imgSrc,
}: TestProps) => {
  return (
    <TestCard withLink>
      <TestCardMedia imgSrc={imgSrc} className="lg:max-w-[600px] lg:h-[350px]">
        {" "}
        <TestCardTitle className=" lg:w-[300px] lg:h-[64px]  lg:text-[24px] lg:bottom-[50%] lg:right-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%]">
          {testTitle}
        </TestCardTitle>
      </TestCardMedia>
      <TestCardSubtitle className="max-w-[600px]">{testDescriptionTitle}</TestCardSubtitle>
      <TestCardDescription className="max-w-[556px]">{description}</TestCardDescription>
    </TestCard>
  );
};

export default TestCardNoSign;
