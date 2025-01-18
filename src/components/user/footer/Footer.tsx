'use client'

import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo.svg";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from 'next/navigation'

const Footer = () => {
	const pathName=usePathname()
	  const shouldRenderFooter = !pathName.startsWith('/in/')
	return (
		<div className={`first-line:w-[90%] mx-auto max-w-[1440px] py-[20px] ${shouldRenderFooter? 'block' :'hidden'}`} >
			<div className="flex flex-col md:flex-row md: justify-between items-center">
				<div>
					<Image
						src={logo}
						alt=""
						width={82}
						height={31}
						className="md:w-[100px] lg:w-[170px]"
					/>
					<h1 className="text-[3.5px] text-center font-montserrat font-black text-[#2F2F99] lg:text-[6px]">
						Аналитикалык жана билим берүү уюму
					</h1>
				</div>
				<p className="w-[229px] text-[10px] md:text-[15px] md:w-[300px] lg:w-[448px] leading-[16px] lg:leading-[32px] text-center mt-[30px] text-[#4C4C4C] lg:text-[20px]">
					ЖРТ абитуриенттин билим деңгээлин жана логикалык ой жүгүртүүсүн
					баалоо максатында өткөрүлөт
				</p>
				<nav className="mt-[20px] flex gap-[17px] md:flex-col">
					<div className="flex gap-[9px] items-center md:gap-[15px]">
						<Phone className="w-[16px] h-[16px] text-[#4C4C4C] md:w-[24px] md:h-[24px]" />
						<a
							href="tel:+9969999999"
							className=" text-[9px]  text-[#4C4C4C] font-semibold md:text-[16px]">
							(996) 9999999
						</a>
					</div>
					<div className="flex gap-[9px] items-center md:gap-[15px]">
						<Mail className="w-[16px] h-[16px] text-[#4C4C4C] md:w-[24px] md:h-[24px]" />
						<a
							href="mailto:Zhrt@gmail.com"
							className="text-[9px] text-[#4C4C4C] font-semibold md:text-[16px]">
							Zhrt@gmail.com
						</a>
					</div>
					<div className="flex gap-[9px] items-center md:gap-[15px]">
						<MapPin className="w-[16px] h-[16px] text-[#4C4C4C] md:w-[24px] md:h-[24px]" />
						<a
							href="Location: Osh, Bishkek, Kyrgyzstan"
							className=" text-[9px] text-[#4C4C4C] font-semibold md:text-[16px]">
							720000 Osh
						</a>
					</div>
				</nav>
			</div>
			<h2 className="text-[10px] text-[#4C4C4C] md:text-[18px] text-center mt-[20px] md:mt-[50px]">
				Copyright 2024 | All Rights Reserved
			</h2>
		</div>
	);
};

export default Footer;
