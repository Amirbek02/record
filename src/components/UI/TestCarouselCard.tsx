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
    <TestCard withLink href={href}>
      <TestCardMedia imgSrc={imgSrc}>
        {" "}
        <TestCardTitle>{testTitle}</TestCardTitle>
      </TestCardMedia>
      <TestCardSubtitle>{testDescriptionTitle}</TestCardSubtitle>
      <TestCardDescription className="max-w-[356px]">{description}</TestCardDescription>
    </TestCard>
  );
};

export default TestCarouselCard;
