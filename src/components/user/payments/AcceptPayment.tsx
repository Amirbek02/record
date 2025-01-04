import React from "react";
import BankCard from "@/components/UI/bankCard";
import { Button } from "@/components/UI/button";
import H1Text from "./H1Text";

const DataContainer = ({ label, text }: { label: string; text?: string }) => {
  return (
    <div className="w-[311px] h-[45px] bg-[#FFFFFF] flex gap-9 justify-start items-center text-base font-medium">
      <p className="ml-1">{label}</p>
      <p className="text-blue-600">{text}</p>
    </div>
  );
};
const AcceptPayment = () => {
  return (
    <div className="m-4">
      <H1Text />
      <div className=" mt-[45px] rounded-[20px] border-[1px] border-[#00000033] max-w-[789px] h-[383px] bg-[#FAFAFC] flex items-center justify-between gap-2 shadow-[0px_4px_5px_#3284E529]">
        <BankCard
          imgSrc="/images/image 3.png"
          className="w-[362px] h-[266px] shadow-transparent ml-5"
        />
        <div className="w-[332px] gap-[45px] flex flex-col items-center mr-9">
          <div className="flex flex-col gap-[10px]">
            <DataContainer label="ФИО" text="Асель Асанова" />
            <DataContainer label="Сумма" text="2500" />
            <DataContainer label="Төлөм кабыл алынды" />
          </div>
          <Button className="font-bold text-[28px] md:w-full">
            Видео сабак
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AcceptPayment;
