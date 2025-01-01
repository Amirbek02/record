import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
interface NextPrevButtonsProps {
  className?: string;
  onClickPrev?: () => void;
  onClickNext?: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
}

const NextPrevButtons: React.FC<NextPrevButtonsProps> = ({
  className,
  onClickPrev,
  onClickNext,
  disablePrev = true,
  disableNext = false,
}) => {
  return (
    <div className={"flex gap-3 justify-end"}>
      {/* Back Button */}
      <Button
        className={cn(
          "bg-blue-600 w-[140px] h-[56px] rounded-[4px] text-white disabled:font-medium font-bold disabled:text-darkGrey disabled:opacity-1 disabled:bg-[#D0D0D0]",
          className
        )}
        disabled={disablePrev}
        onClick={onClickPrev}
      >
        Артка
      </Button>

      {/* Next Button */}
      <Button
        className={cn(
          "bg-blue-600 w-[140px] h-[56px] rounded-[4px] text-white disabled:font-medium font-bold disabled:text-darkGrey disabled:opacity-1 disabled:bg-[#D0D0D0] mr-[100px]",
          className
        )}
        disabled={disableNext}
        onClick={onClickNext}
      >
        Алдыга
      </Button>
    </div>
  );
};

export default NextPrevButtons;
