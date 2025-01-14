import { ArrowRight, RefreshCw, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const VideoPortal = () => {
	return (
		<div>
			<div className="w-[90%] lg:w-full max-w-[924px] mx-[auto]">
				<div>
					<div className="flex justify-between">
						<h1 className="text-[16px] sm:text-[20px] md:text-[24px] font-semibold text-[#4C4C4C]">
							Негизги тест
						</h1>
						<div className="flex items-center gap-[10px] sm:gap-[16px] ml-[10px] ">
							<Image
								src="/icons/pensil.svg"
								alt="edit"
								width={16}
								height={16}
							/>
							<RefreshCw
								strokeWidth={1}
								width={20}
								height={20}
								className="transform rotate-90"
							/>
							<Trash2 width={20} height={20} />
						</div>
					</div>
					<div className="grid sm:grid-cols-2 gap-x-[24px] gap-y-[16px] mt-[16px]">
						{Array(2)
							.fill(null)
							.map((_, index) => (
								<div
									key={index}
									className="flex py-[22px] px-[13px] w-full h-[60px] md:h-[80px] justify-between items-center border-[1px] border-[#C7C7C7] rounded-[5px]">
									<Image
										src="/images/maintest.png"
										alt=""
										width={70}
										height={70}
										className="object-cover w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-[5px]"
									/>
									<h2 className="text-[14px] md:text-[20px] font-medium text-[#4C4C4C] tracking-[2%]">
										Математика
									</h2>
									<button className=" w-[24px] h-[24px] flex items-center justify-center border-[1.5px] border-[#4C4C4C] rounded-full">
										<ArrowRight className="w-[17px] h-[17px] text-[#4C4C4C]" />
									</button>
								</div>
							))}
					</div>
				</div>
				<div className="mt-[40px]">
					<h1 className="text-[16px] sm:text-[20px] font-semibold text-[#4C4C4C]">
						Кошумча предметтер
					</h1>
					<div className="grid sm:grid-cols-2 gap-x-[24px] gap-y-[16px] mt-[16px]">
						{Array(6)
							.fill(null)
							.map((_, index) => (
								<div
									key={index}
									className="flex py-[22px] px-[13px] w-full h-[60px] md:h-[80px] justify-between items-center border-[1px] border-[#C7C7C7] rounded-[5px] ">
									<Image
										src="/images/maintest.png"
										alt=""
										width={70}
										height={70}
										className="object-cover w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-[5px]"
									/>
									<h2 className="text-[14px] md:text-[20px] font-medium text-[#4C4C4C] tracking-[2%]">
										Математика
									</h2>
									<button className=" w-[24px] h-[24px] flex items-center justify-center border-[1.5px] border-[#4C4C4C] rounded-full">
										<ArrowRight className="w-[17px] h-[17px] text-[#4C4C4C]" />
									</button>
								</div>
							))}
					</div>
				</div>
				<div className="flex gap-[10px] mt-[100px] md:mt-[70px] justify-end">
					<button className="hidden md:block w-[149px]  px-[15px] py-[10px] text-[#4C4C4C] bg-[#D0D0D0] rounded-[5px] font-medium text-[20px]">
						Артка
					</button>
					<button className="w-[350px] md:w-[149px] px-[15px] py-[10px] text-[#fff] bg-blue-600 rounded-[5px] font-medium text-[20px]">
						Алдыга
					</button>
				</div>
			</div>
		</div>
	);
};

export default VideoPortal;
