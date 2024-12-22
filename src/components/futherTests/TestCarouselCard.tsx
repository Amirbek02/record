import React from "react";
import {
  TestCard,
  TestCardImage,
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

const TestCarouselCard = ({
  testTitle,
  testDescriptionTitle,
  description,
  imgSrc,
}: TestProps) => {
  return (
    <TestCard>
      <TestCardImage imgSrc={imgSrc}>
        {" "}
        <TestCardTitle>{testTitle}</TestCardTitle>
      </TestCardImage>
      <TestCardSubtitle>{testDescriptionTitle}</TestCardSubtitle>
      <TestCardDescription>{description}</TestCardDescription>
    </TestCard>
  );
};

export default TestCarouselCard;
