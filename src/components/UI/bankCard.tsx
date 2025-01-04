import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BankCard = ({
  imgSrc,
  className,
  onClick,
}: {
  imgSrc: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer shadow-[0px_4px_5px_rgba(0,0,0,0.1)] w-[400px] h-[222px] rounded-[20px]  border-[1px] border-[#0000004d] flex justify-center items-center",
        className
      )}
    >
      <Image src={imgSrc} width={273} height={94} alt="bank-logo" />
    </div>
  );
};

export default BankCard;
