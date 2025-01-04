import React from "react";
import BankCard from "@/components/UI/bankCard";
import H1Text from "./H1Text";

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
    <div className="p-4 flex flex-col gap-10">
     <H1Text/>
      <div className=" flex flex-wrap justify-center max-w-[836px] gap-5">
        {banks.map((bank) => (
          <BankCard key={bank.id} imgSrc={bank.bank} />
        ))}
      </div>
    </div>
  );
};

export default PaymentCards;
