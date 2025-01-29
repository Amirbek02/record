import React from "react";

import {
  TestCard,
  TestCardMedia,
  TestCardTitle,
  TestCardDescription,
} from "@/components/UI/TestCard";

interface TestProps {
  testTitle: string;
  description: string;
  videoSrc: string;
}
const VideoLesson = ({ testTitle, description, videoSrc}: TestProps) => {
  return (
    <div>
      <TestCard isCarouselCard className="shadow-none w-full border-none bg-transparent  overflow-hidden rounded-tr-[0px] rounded-tl-[0px] rounded-br-[30px] rounded-bl-[30px]">
        <TestCardDescription className="max-w-[356px]  lg:text-sm ml-0 text-[#252641]">
          {description}
        </TestCardDescription>
        <TestCardMedia videoSrc={videoSrc} className="w-full lg:h-[211px] -mb-6">
          {" "}
          <TestCardTitle className="lg:text-base lg:right-3 bottom-[20%]">
            {testTitle}
          </TestCardTitle>
        </TestCardMedia>
      </TestCard>
    </div>
  );
};

export default VideoLesson;
