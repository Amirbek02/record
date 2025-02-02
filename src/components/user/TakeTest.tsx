//ЖРТ га даярдоо  Сынамык тестке кош келдиңиз! 1
"use client";
import userInTests from "@/store/userInTests";
import CustomButton from "../UI/CustomButton";
import { useParams,useRouter } from "next/navigation";
import { useEffect } from "react";
import  Link  from "next/link";

const TakeTest = () => {
	const { test, getTests } = userInTests();
	const params = useParams();
	const slug = params?.slug;
	const idParams = Array.isArray(slug) ? Number(slug[1]) : undefined;
	console.log(idParams);
  const router = useRouter();


	useEffect(() => {
		getTests();
	}, [getTests]);
	console.log(test);

	const testCategoryFilter = test.filter((test) => test.id === idParams);
	const descr = testCategoryFilter.map((el) => el.description).join("");

	console.log(descr);

	const categoryName = testCategoryFilter.map(
		(el) => el.test_category.test_category_name
	);
	const title = testCategoryFilter.map((el) => el.title);

	return (
		<div>
			<div className="flex justify-center items-center flex-col px-[15px]  small:px-[35px] pb-[120px] pt-[40px] ">
				<div className="flex justify-center items-center flex-col ">
					<p className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] lg:hidden">
						{categoryName}
					</p>
					{/* <p className="font-montserrat text-[#4c4c4c] underline decoration-solid  text-[32px] font-[500] leading-[39px] tracking-[0.2px] hidden lg:block">
						{title}
					</p> */}
				</div>

				<div className="pt-[24px] pb-[60px]">
					<h2 className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] pb-[24px] lg:hidden">
						{title}
					</h2>
					<p>{descr}</p>
					{/* <p className="font-montserrat text-[#4c4c4c] text-[28px] font-[600] leading-[80%] tracking-[0.2px] hidden lg:block">
						Негизги тест
					</p>
					<p className="hidden lg:block font-montserrat text-[#4c4c4c] text-[24px] font-[500] leading-[80%] tracking-[0.2px] pt-[16px] pb-[22px]">
						Математика боюнча предметтик сынамык тест.
					</p>

					<p className="text-[rgb(76,76,76)] font-montserrat text-[16px] lg:text-[24px] font-[500] leading-[28px] lg:pb-[10px] ">
						Тест{" "}
						<span className="text-[rgb(240,26,38)] lg:text-[rgba(192,5,16,1)] font-[700]">
							30 тапшырмадан
						</span>{" "}
						турат.
					</p>
					<p className="text-[rgb(76,76,76)] font-montserrat text-[16px] lg:text-[24px] font-[500] leading-[28px] lg:pb-[8px]">
						Аны аткарууга{" "}
						<span className="text-[rgb(240,26,38)] lg:text-[rgba(192,5,16,1)] font-[700]">
							30 мүнөт
						</span>{" "}
						убакыт берилет.
					</p>
					<p className="text-[rgb(76,76,76)] font-montserrat text-[16px] lg:text-[24px] font-[500] leading-[28px]  lg:leading-[42px]  ">
						Тапшырманы аткарып жатып, тандаган жообуңарды{" "}
						<span className=" text-[rgb(0,131,53)] font-[700]">
							өзгөртсөңөр болот
						</span>
						, бирок жоопту ар бир тапшырмада{" "}
						<span className="text-[rgb(240,26,38)] lg:text-[rgba(192,5,16,1)] font-[700]">
							бир гана жолу
						</span>{" "}
						өзгөртө аласыз.
					</p>
					<p className="text-[rgb(76,76,76)] font-montserrat text-[16px] lg:text-[24px] font-[500] leading-[28px] lg:leading-[42px]">
						Оңдой турган жаңы (туура) жоопту{" "}
						<span className="text-[rgb(0,131,53)] font-[700]">
							чарчы кылып боёшуңуз керек.
						</span>{" "}
						Тестти тапшыргандан кийин Сиз канча суроого туура жооп
						бергениңиз тууралуу, туура жана туура эмес жооптордун жалпы
						пайыздык көрсөткүчү камтылган
						<span className="text-[rgb(240,26,38)] lg:text-[rgba(192,5,16,1)] font-[700]">
							{" "}
							жыйынтыкты ватсап аркылуу
						</span>{" "}
						аласыз.
					</p>
					<h3 className="text-[rgb(0,131,53)] lg:text-[rgb(240,26,38)] font-montserrat pt-[24px] text-[24px] font-[700] leading-[28px]">
						Ийгилик каалайбыз!
					</h3> */}
				</div>

				<div className="lg:flex lg:self-end">
					<CustomButton
						title="Артка"
						containerStyles="hidden lg:block bg-[rgba(224,224,224,1)] h-[40px] small:h-[50px] w-[220px] lg:w-[185px]  small:rounded-[5px] lg:self-end mr-[16px] "
						textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] lg:text-[24px] leading-[30px] font-poppins text-[rgba(76,76,76,1)]"
					/>
					{/* <Link href={`${router}/о`}> */}
          <CustomButton
						title="Тестти баштоо"
						containerStyles="h-[40px] small:h-[50px] w-[220px] lg:w-[218px] small:w-[360px] small:rounded-[5px] lg:self-end "
						textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] lg:text-[24px] leading-[30px] font-poppins text-[rgb(255,255,255)]"
					/>
          {/* </Link> */}
				</div>
			</div>
		</div>
	);
};

export default TakeTest;
