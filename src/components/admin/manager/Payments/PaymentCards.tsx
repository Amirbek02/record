import React from "react";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";
import CancelSaveButtons from "@/components/UI/cancelSaveButtons";
import H1Text from "@/components/user/payments/H1Text";
import BankCard from "@/components/UI/bankCard";

const PaymentCards = () => {
  const banks = [
    {
      id: 1,
      bank: "/images/image 2.png",
    },
    {
      id: 2,
      bank: "/images/image 3.png",
    },
    {
      id: 3,
      bank: "/images/image 4.png",
    },
  ];
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-1 px-2">
        <EditDeleteRefresh />
        <div className="p-4 flex flex-col gap-10 pb-[100px]">
          <H1Text />
          <div className=" flex flex-wrap justify-center gap-5">
            {banks.map((bank) => (
              <BankCard key={bank.id} imgSrc={bank.bank} />
            ))}
          </div>
        </div>
        <CancelSaveButtons />
      </div>
    </div>
  );
};

export default PaymentCards;
