import React from "react";

import { CircleArrowRight } from "lucide-react";

const VideoOrTestContainer = ({
  imgUrl='/images/test.png',
  subjectName='математика',
}: {
  imgUrl?: string;
  subjectName: string;
}) => {
  return (
    <div className="flex gap-2 items-center p-3 justify-around border">
      <div
        className="bg-cover bg-center w-[70px] h-[70px]"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <p className="text-xl font-medium">{subjectName}</p>
      <CircleArrowRight className="cursor-pointer" />
    </div>
  );
};

export default VideoOrTestContainer;
