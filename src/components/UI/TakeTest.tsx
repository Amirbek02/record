// "use client";
import Link from "next/link";
// import { Button } from "../UI/button";
import { AllTest } from "@/types/categories";
import CustomButton from "./CustomButton";
const TakeTest = ({
  takeTestData,
  userIn,
}: {
  takeTestData: AllTest | null;
  userIn?: boolean;
}) => {
  const parentRout = userIn ? "/in/all-tests" : "/exam-test";
  return (
    <>
      <div className="flex justify-center items-center flex-col px-[15px]  small:px-[35px] pb-[120px] pt-[40px] ">
        <div className="flex justify-center items-center flex-col ">
          <p className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] ">
            {takeTestData?.subject_category?.subject_category_name}
          </p>
        </div>

        <div className="pt-[24px] pb-[60px]">
          <h2 className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] pb-[24px]">
            {takeTestData?.title}
          </h2>
          <p>{takeTestData?.description}</p>
        </div>
        {/* <div className="lg:flex lg:self-end">
          <Button asChild>
            <Link
              href={`${parentRout}/${takeTestData?.subject_category?.id}/${takeTestData?.id}/${takeTestData?.id}`}
            >
              Тестти баштоо
            </Link>
          </Button> */}
        <div className=" h-full w-full  lg:flex lg:items-end lg:justify-end  mt-3 ">
          <Link href={`${parentRout}/${takeTestData?.test_category?.id}/`}>
            <CustomButton
              title="Артка"
              containerStyles="hidden lg:block bg-[rgba(224,224,224,1)] h-[40px] small:h-[50px] w-[220px] lg:w-[185px]  small:rounded-[5px] lg:self-end mr-[16px]"
              textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] lg:text-[24px] leading-[30px] font-poppins text-[rgba(76,76,76,1)]"
            />
          </Link>
          <Link
            href={`${parentRout}/${takeTestData?.subject_category?.id}/${takeTestData?.id}/${takeTestData?.id}`}
          >
            <CustomButton
              title="Тестти баштоо"
              containerStyles="h-[40px] small:h-[50px] w-[220px] lg:w-[218px] small:w-[360px] small:rounded-[5px] lg:self-end"
              textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] lg:text-[24px] leading-[30px] font-poppins text-[rgb(255,255,255)]"
            />
          </Link>
        </div>
      {/* </div> */}
    </div>
    </>
  );
};

export default TakeTest;
