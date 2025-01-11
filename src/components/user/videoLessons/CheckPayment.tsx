import React from "react";
import smile from "../../../../public/images/smile.svg";
import Image from "next/image";

const CheckPayment = () => {
	return (
		<div className="w-[90%] max-w-[1440px] mx-auto py-[30px]">
			<h1 className=" hidden md:block md:text-[24px] font-semibold md:font-bold tracking-[2%] text-[#4C4C4C] mb-[15px] md:mb-[24px]">
				1- бөлүм. Математика
			</h1>
			<div className="flex flex-col">
				<h2 className="text-center font-bold text-[24px] md:text-[32px] md:font-medium leading-[130%] text-[#4C4C4C] order-2 md:order-1">
					2-видео сабак көрүү үчүн төлөм аткарыңыз!
				</h2>
				<Image
					src={smile}
					alt=""
					width={150}
					height={150}
					className="mx-auto mt-[70px] order-1 md:order-2"
				/>
			</div>
			<div className="flex flex-col gap-[8px] items-center mt-[80px]">
				<button className="font-semibold text-[20px] py-[10px] px-[100px] w-full md:w-[422px] rounded-[5px] text-[#FFFFFF] bg-blue-600">
					Төлөм аткаруу
				</button>
				<button className="font-semibold text-[20px] py-[10px] px-[100px] w-full md:w-[422px] rounded-[5px] text-[#4C4C4C] bg-[#EAEAEA]">
					Аяктоо
				</button>
			</div>
		</div>
	);
};

export default CheckPayment;
