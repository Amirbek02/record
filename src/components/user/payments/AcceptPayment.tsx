import React from "react";
import BankCard from "@/components/UI/bankCard";
import { Button } from "@/components/UI/button";
import H1Text from "./H1Text";

const DataContainer = ({ label, text }: { label: string; text?: string|number }) => {
  return (
    <div className="w-[311px] h-[45px] bg-[#FFFFFF] flex gap-9 justify-start items-center text-base font-medium">
      <p className="ml-1">{label}</p>
      <p className="text-blue-600">{text}</p>
    </div>
  );
};
const MobileAcceptPayment = () => {
  return (
    <div className=" md:hidden  flex flex-col gap-4 h-screen justify-center items-center">
      <div className="font-semibold text-darkGrey text-xl w-[358px] h-[56px] flex justify-center items-center border-[0.5px] border-darkGrey">
        Төлөм кабыл алынды
      </div>
      <Button className="font-bold text-[28px] max-w-[358px]">
        Видео сабак
      </Button>
    </div>
  );
};
const AcceptPayment = ({
  bankCard = "/images/image 4.png",
  fullName = "Асель Асанова",
  amount=2500,
  accepted='Төлөм кабыл алынды'
}: {
  bankCard?: string;
  fullName?: string;
  amount?:number;
  accepted?:string
}) => {
  return (
    <>
      <MobileAcceptPayment />
      <div className="m-4 hidden md:block">
        <H1Text />
        <div className=" mt-[45px] rounded-[20px] border-[1px] border-[#00000033] max-w-[789px] h-[383px] bg-[#FAFAFC] flex items-center justify-between gap-2 shadow-[0px_4px_5px_#3284E529]">
          <BankCard
            imgSrc={bankCard}
            className="w-[362px] h-[266px] shadow-transparent ml-5"
          />
          <div className="w-[332px] gap-[45px] flex flex-col items-center mr-9 pt-6">
            <div className="flex flex-col gap-[10px]">
              <DataContainer label="ФИО" text={fullName} />
              <DataContainer label="Сумма" text={amount} />
              <DataContainer label={accepted} />
            </div>
            <Button className="font-bold text-[28px] md:w-full">
              Видео сабак
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptPayment;
