import React from "react";
import girl from "../../../../public/images/education.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const MainSection = () => {
	return (
		<div className="w-[90%] max-w-[1440px] mx-auto flex items-center">
			<div>
				<div className="relative w-[full]">
					<div className="absolute left-[65px] w-[202px] h-[400px] rounded-[60px] bg-[#008335]"></div>
					<div className="w-[240px] absolute top-[6px] left-[60px]">
						<Image
							src={girl}
							alt=""
							className=" h-[317px] w-[500px] object-cover z-20"
						/>
					</div>
					<div className="absolute top-[323px] z-40  flex items-center justify-center gap-[13px] w-[309px] h-[79px] rounded-[20px] backdrop-blur-lg bg-white/80 ">
						<div className="w-[40px] h-[40px] bg-[#F88C3D] rounded-[8px] flex items-center justify-center">
							<MdEmail className="w-[30px] h-[30px] text-[#FFF]" />
						</div>
						<div>
							<h3 className="font-bold text-[16px] mb-[2px] text-[#595959]">
								Сизди куттуктайбыз!
							</h3>
							<h3 className="font-bold text-[16px]  text-[#595959]">
								Алтын сертификаттын ээси
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<h1 className="">Жалпы республикалык тестке</h1>
			</div>
		</div>
	);
};

export default MainSection;
