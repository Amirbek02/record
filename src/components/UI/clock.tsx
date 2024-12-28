import React from "react";
import { formatTime } from "@/utils/formatTimes";
import { cn } from "@/lib/utils";

const Clock = ({
  time,
  className = "",
}: {
  time: number;
  className?: string;
}) => {
  const rotatingDegree = ((time % 3600) / 60) * 6;
  const formatedTime = formatTime(time);
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="w-[100px] h-[100px] relative rounded-[50%]  border-[5px] border-darkGrey border-solid flex items-center justify-center">
        <div className="absolute top-[25%]  w-[4px] h-[23px] bg-darkGrey origin-bottom rotate-0" />
        <div
          className="absolute top-[18%] w-[4px] h-[30px] bg-darkGrey origin-bottom transform transition-transform duration-[100ms] ease-linear"
          style={{
            transform: `rotate(${rotatingDegree}deg)`,
          }}
        />
      </div>
      <p className="text-darkGrey text-xl font-semibold mt-2">{formatedTime}</p>
    </div>
  );
};

export default Clock;
