"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/images/logo.svg";

const Header = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="max-w-[1440px] w-[90%] flex items-center justify-center md:justify-between pt-[25px] pb-[9px] mx-[auto]">
			<div className="flex flex-col items-center">
				<Image
					src={logo}
					alt=""
					width={166}
					height={61}
					className="w-[166px] h-[61px]"
				/>
				<h1 className="font-black text-[#2F2F99] text-[4.63px]">
					Аналитикалык жана билим берүү уюму
				</h1>
			</div>
			<nav className="hidden items-center gap-[55px] md:gap-[30px] md:flex">
				<a
					href="#"
					className={`lg:text-[22px] md:text-[16px] ${
						activeIndex === 0
							? "text-[#2E3095] font-bold"
							: "text-[#252641] font-normal"
					}`}
					onClick={() => setActiveIndex(0)}>
					Сынамык тест
				</a>
				<a
					href="#"
					className={`lg:text-[22px] md:text-[16px] ${
						activeIndex === 1
							? "text-[#2E3095] font-bold"
							: "text-[#252641] font-normal"
					}`}
					onClick={() => setActiveIndex(1)}>
					Видео
				</a>
				<a
					href="#"
					className={`lg:text-[22px] md:text-[16px] ${
						activeIndex === 2
							? "text-[#2E3095] font-bold"
							: "text-[#252641] font-normal"
					}`}
					onClick={() => setActiveIndex(2)}>
					Биз жөнүндө
				</a>
			</nav>
			<div className="hidden gap-[12px] md:flex">
				<button className="md:py-[10px] md:px-[13px]  lg:pt-[14.93px] lg:pb-[15.87px] lg:pl-[31px] lg:pr-[25px] font-medium text-[16px] lg:text-[22px] border-[1.5px] border-[black]  rounded-[80px] text-[#6C6C6C]">
					Кирүү
				</button>
				<button className="md:py-[10px] md:px-[13px]  lg:pt-[14.93px] lg:pb-[15.87px] lg:pl-[31px] lg:pr-[25px] font-medium text-[16px] lg:text-[22px]  rounded-[80px] bg-[#2E3095] text-[#fff]">
					Катталуу
				</button>
			</div>
		</div>
	);
};

export default Header;
