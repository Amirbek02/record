import React from "react";
import BankCard from "@/components/UI/bankCard";
import H1Text from "./H1Text";
import Image from "next/image";

const MobilePaymentCards = ({
  imgSrc = "/images/image 1.png",
  onClick,
}: {
  imgSrc?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="w-[351px] h-auto bg-cover bg-center md:hidden cursor-pointer"
      onClick={onClick}
    >
      <Image width={351} height={70} src={imgSrc} alt="bankcards" />
    </div>
  );
};

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
      <H1Text />
      <h1 className="font-semibold text-[28px] text-darkGrey pb-5 md:hidden text-center">
        Төлөм
      </h1>
      <div className=" flex flex-wrap justify-center  md:gap-5 gap-1">
        {banks.map((bank) => (
          <React.Fragment key={bank.id}>
            <BankCard imgSrc={bank.bank} className="md:flex hidden" />
            <MobilePaymentCards />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PaymentCards;
