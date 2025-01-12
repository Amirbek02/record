import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import not from "../../../../public/icons/Notification.svg";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/UI/select";

const HeaderSearch = () => {
	return (
		<div className="flex justify-between py-[20px] items-center max-w-[1440px] w-[90%] mx-[auto]">
			<div className="relative w-[320px]">
				<AiOutlineSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 text-lg w-[25px] h-[25px] " />
				<input
					type="search"
					className="py-[16px] px-[50px] w-full rounded-[30px] outline-none"
					style={{ boxShadow: "0px 15px 40px 5px rgb(237, 237, 237)" }}
					placeholder="Издөө.."
				/>
			</div>
			<div className="flex gap-[20px]">
				<Image
					src="/icons/Notification.svg"
					alt=""
					width={27}
					height={29}
				/>
				<div>
					<Select>
						<SelectTrigger className="w-[36px] h-[36px] rounded-full pl-[6px] pr-0 flex relative [&>svg]:hidden bg-red border-none outline-none">
							<SelectValue
								placeholder="KYR"
								className="text-white data-[placeholder]:text-[#ffff]"
							/>
						</SelectTrigger>
						<SelectContent className="bg-[#FFFF]">
							<SelectItem value="light">ENG</SelectItem>
							<SelectItem value="dark">RU</SelectItem>
							<SelectItem value="system">KYR</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="w-[36px] h-[36px] rounded-full bg-green flex justify-center items-center">
					<h1 className="text-[#ffff] ">A</h1>
				</div>
			</div>
		</div>
	);
};

export default HeaderSearch;
