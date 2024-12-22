import React from "react";
import girl from "../../../../public/images/education.png";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import play from "../../../../public/icons/play.svg";

const MainSection = () => {
	return (
		<div className="w-[90%] max-w-[1440px] mx-auto  py-[35px] ">
			<div className="flex items-center  flex-col-reverse mx-auto md:flex-row md:justify-between ">
				<div className="flex w-[420px] lg:w-[680px] flex-col items-center mt-[420px] xl:mt-[100px]  md:mt-[30px] md:items-start ">
					<h1 className="text-[#002038] text-[16px] font-medium md:text-[25px] lg:text-[37px]">
						Жалпы республикалык тестке
					</h1>
					<h1 className="text-red text-[16px] font-bold mt-[8px] md:text-[25px] lg:text-[36px]">
						Oнлайн даярдан
					</h1>
					<p className="hidden md:block text-black text-[13px] mt-[8px] mb-[20px] w-full lg:w-[80%] lg:text-[18px]">
						КРнын ЖОЖдоруна өтүү үчүн негизги тестти сөзсүз тапшыруу
						керек. Медициналык жана фармацевтикалык адистикке өтүү үчүн
						химия жана биология предметтик  тесттерин сөзсүз тапшыруу
						керек
					</p>
					<div className="md:flex md:gap-[20px] md:items-center">
						<button className="py-[12px] md:px-[47px] px-[67px] rounded-[80px] bg-blue-600 text-[#FFF] text-[16px] font-semibold mt-[8px]">
							Тест тапшыруу
						</button>
						<div className="mt-[29px] md:mt-[5px] flex gap-[10px] items-center justify-center">
							<button className="w-[28px] md:w-[46px] md:h-[46px] h-[28px] rounded-full border-[0.35px] border-[black] flex items-center justify-center">
								<IoMdPlay className="w-[12px] h-[12px] md:w-[20px] md:h-[20px] text-[#00732E] md:text-blue-600 ml-[3px]" />
							</button>
							<h1 className="text-[#252641] text-[16px] ">
								Видео сабак
							</h1>
						</div>
					</div>
				</div>

				<div className=" mr-[320px] md:mr-[280px]">
					<div className="relative w-[full] md:mt-[-150px]">
						<div className="absolute left-[55px] w-[202px] h-[400px] rounded-[60px] bg-[#008335] xl:w-[340px] xl:h-[610px] xl:left-[-130px]"></div>
						<div className="w-[240px] xl:w-[400px]  absolute top-[6px] left-[50px] md:left-[20px] xl:left-[-170px] ">
							<Image
								src={girl}
								alt=""
								className=" h-[317px] w-[500px] object-cover z-20 xl:w-[700px] xl:h-[530px]"
							/>
						</div>
						<div className="absolute top-[323px] xl:top-[530px] xl:left-[-160px]  z-40  flex items-center justify-center gap-[13px] w-[309px] h-[79px] xl:w-[399px] xl:h-[110px] rounded-[20px] backdrop-blur-[40px] bg-white/90 ">
							<div className="w-[40px] h-[40px] bg-[#F88C3D] rounded-[8px] flex items-center justify-center xl:w-[50px] xl:h-[50px]">
								<MdEmail className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] text-[#FFF]" />
							</div>
							<div>
								<h3 className="font-semibold text-[16px] xl:text-[24px] mb-[2px] text-[#595959]">
									Сизди куттуктайбыз!
								</h3>
								<h3 className="font-semibold text-[16px] xl:text-[20px] text-[#595959]">
									Алтын сертификаттын ээси
								</h3>
							</div>
						</div>
						<div className="absolute left-[-20px] xl:left-[-230px] top-[60px] xl:top-[90px] hidden md:flex items-center justify-center backdrop-blur-[70px] bg-white/80 w-[105px] h-[43px] xl:w-[172px] xl:h-[61px] border-[0.35px] border-green rounded-[10px]">
							<h3 className="text-[#595959] text-[16px] font-bold xl:text-[24px]">
								200 Бал
							</h3>
						</div>
						<div className="absolute top-[120px] xl:top-[170px] left-[210px] xl:left-[120px] hidden md:flex items-center justify-center backdrop-blur-[70px] bg-white/80 w-[105px] h-[43px] border-[0.35px] border-green rounded-[10px] xl:w-[172px] xl:h-[61px]">
							<h3 className="text-[#595959] text-[16px] font-bold xl:text-[24px]">
								200 Бал
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
