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

const TestCarouselCard = ({
  testTitle,
  testDescriptionTitle,
  description,
  imgSrc,
  href
}: TestProps) => {
  return (
    <TestCard withLink href={href} className="max-w-[420px]">
      <TestCardMedia imgSrc={imgSrc} className="w-full">
        {" "}
        <TestCardTitle>{testTitle}</TestCardTitle>
      </TestCardMedia>
      <TestCardSubtitle className="pl-5 max-w-[400px]">{testDescriptionTitle}</TestCardSubtitle>
      <TestCardDescription className="max-w-[356px] px-6">{description}</TestCardDescription>
    </TestCard>
  );
};

export default TestCarouselCard;
