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
  href:string
}

const TestCardNoSign = ({
  testTitle,
  testDescriptionTitle,
  description,
  imgSrc,
  href
}: TestProps) => {
  return (
    <TestCard withLink href={href} className="lg:max-w-[542px] max-w-[400px]">
      <TestCardMedia imgSrc={imgSrc} className="lg:max-w-[600px] lg:h-[350px] max-w-[400px]">
        {" "}
        <TestCardTitle className=" lg:w-[300px] lg:h-[64px]  lg:text-[24px] lg:bottom-[50%] lg:right-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%]">
          {testTitle}
        </TestCardTitle>
      </TestCardMedia>
      <TestCardSubtitle className="lg:max-w-[471px] max-w-[311px] ml-7 ">{testDescriptionTitle}</TestCardSubtitle>
      <TestCardDescription className="max-w-[542px] mx-auto  px-7  lg:text-xl">{description}</TestCardDescription>
    </TestCard>
  );
};

export default TestCardNoSign;
