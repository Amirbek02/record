import React from "react";
import BankCard from "@/components/UI/bankCard";
import { Button } from "@/components/UI/button";
import H1Text from "./H1Text";

const DataContainer = ({
  label,
  text,
}: {
  label: string;
  text?: string | number;
}) => {
  return (
    <div className="w-[311px] h-[45px] bg-[#FFFFFF] flex gap-9 justify-start items-center text-base font-medium">
      <p className="ml-1">{label}</p>
      <p className="text-blue-600">{text}</p>
    </div>
  );
};
const MobileAcceptPayment = () => {
  return (
    <div className="h-screen w-full md:hidden flex justify-center items-center">
      <div className="flex flex-col gap-6  w-full max-w-[358px] mx-1">
        <div className=" rounded-[5px] font-semibold text-darkGrey text-xl w-full  h-[56px] flex justify-center items-center border-[0.5px] border-darkGrey">
          Төлөм кабыл алынды
        </div>
        <Button className="font-semibold h-[56px] text-xl font-montserrat max-w-[358px]">
          Видео сабак
        </Button>
      </div>
    </div>
  );
};
const AcceptPayment = ({
  bankCard = "/images/image 4.png",
  fullName = "Асель Асанова",
  amount = 2500,
  accepted = "Төлөм кабыл алынды",
  isAdmin = false,
}: {
  bankCard?: string;
  fullName?: string;
  amount?: number;
  accepted?: string;
  isAdmin?: boolean;
}) => {
  return (
    <>
      {!isAdmin && <MobileAcceptPayment />}
      <div className={`m-4 ${!isAdmin ? "hidden" : "block"} md:block`}>
        {!isAdmin && <H1Text />}
        <div className=" mt-[45px] rounded-[20px] border-[1px] border-[#00000033] max-w-[789px] h-[383px] bg-[#FAFAFC] flex items-center justify-between gap-2 shadow-[0px_4px_5px_#3284E529]">
          <BankCard
            imgSrc={bankCard}
            className="w-[362px] h-[266px] shadow-transparent ml-5"
          />
          <div className="w-[332px] gap-[45px] flex flex-col items-center ml-4 mr-9 pt-6">
            <div className="flex flex-col gap-[10px]">
              <DataContainer label="ФИО" text={fullName} />
              <DataContainer label="Сумма" text={amount} />
              <DataContainer label={accepted} />
            </div>
            <Button className="font-bold text-[28px] md:w-full">
              {!isAdmin ? "Видео сабак" : "Катталуу"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptPayment;
