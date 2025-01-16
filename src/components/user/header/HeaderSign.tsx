"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const link = [
	{
		path: "",
		icon: "/icons/home.svg",
		post: "Башкы бет",
	},
	{
		path: "",
		icon: "/icons/test.svg",
		post: "Тест",
	},
	{
		path: "",
		icon: "/icons/pc.svg",
		post: "Видео сабак",
	},
	{
		path: "",
		icon: "/icons/pay.svg",
		post: "Төлөм",
	},
	{
		path: "",
		icon: "/icons/chel.svg",
		post: "Жеке кабинет",
	},
];

const HeaderSign = () => {
	const pathname = usePathname();
	return (
		<div>
			<div
				className={` flex flex-col items-center fixed top-0 pt-[30px] left-0 w-[296px] h-full bg-[#FFFF]  `}
				style={{
					borderRadius: "0px 40px 40px 0px",
					boxShadow: " 10px 4px 4px 0px rgba(229, 229, 255, 0.54)",
				}}>
				<div className="flex flex-col items-center mb-[70px]">
					<Link href="#">
						<Image
							src="/images/logo.svg"
							alt=""
							width={166}
							height={61}
							className="w-[105px] h-[31px] md:w-[130px] md:h-[40px] lg:w-[166px] lg:h-[61px]"
						/>
					</Link>
					<h1 className="text-[3px] font-montserrat font-black text-[#2F2F99] lg:text-[6px]">
						Аналитикалык жана билим берүү уюму
					</h1>
				</div>
				<div className="flex flex-col gap-[24px] mt-[61px]">
					{link.map((item, index) => (
						<Link
							href="ac"
							key={index}
							className="flex gap-[16px] items-center">
							<Image
								src={item.icon}
								width={23}
								height={23}
								alt=""
								className=""
							/>
							<h1
								className={`lg:text-[20px] xl:text-[22px] md:text-[16px] ${
									pathname === item.path
										? "text-[#2E3095] font-bold"
										: "text-[#2E3095] font-normal"
								}`}>
								{item.post}
							</h1>
						</Link>
					))}
				</div>
				<div className="mt-auto mb-[30px] ml-[-65px]">
					<Link
						href="/"
						className={`flex gap-[20px] items-center h-[20px] border-l-[1px] `}>
						<Image
							src="/icons/settings.svg"
							width={23}
							height={23}
							alt=""
						/>
						<h1
							className={`lg:text-[20px] xl:text-[22px] md:text-[16px] ${
								pathname === "/test"
									? "text-[#2E3095] font-bold"
									: "text-[#2E3095] font-normal"
							}`}>
							Жөндөө
						</h1>
					</Link>
					<Link
						href="/"
						className={`flex gap-[16px] items-center h-[20px] border-l-[1px] mt-[15px]`}>
						<Image src="/icons/exit.svg" width={23} height={23} alt="" />
						<h1
							className={`lg:text-[20px] xl:text-[22px] md:text-[16px] ${
								pathname === "/test"
									? "text-[#2E3095] font-bold"
									: "text-[#2E3095] font-normal"
							} `}>
							Чыгуу
						</h1>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeaderSign;