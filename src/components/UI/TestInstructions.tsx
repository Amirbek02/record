import React from "react";
import Image from "next/image";
// import { Button } from "@/components/UI/button";
import Link from "next/link";
import { Instruction } from "@/types/categories";
import CustomButton from "./CustomButton";

const TestInstructions = ({
  testData,
  isLoggedIn,
}: {
  isLoggedIn?: boolean;
  testData: Instruction | null;
}) => {
  const rootPath = isLoggedIn ? "/in/all-tests" : "/exam-test";
  console.log(testData, "INSTRUCTIONS");
  return (
    <div className="flex flex-col  mx-[10%] gap-2">
      <h1 className="text-2xl font-semibold self-start my-2">Көрсөтмө</h1>
      <p className="text-lg font-medium text-center">{testData?.instruction_title}</p>
      <div className="max-w-[1100px]">
        <Image
          src={testData?.instruction_image||''}
          width={400}
          height={100}
          alt="instructions"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex  w-full my-5  justify-center lg:justify-end">
          {/* <Button  className="text-2xl font-bold lg:w-[184px] lg:h-[36px] px-10">
            {" "}
            <Link
              href={`${rootPath}/${testData?.test.subject_category?.id}/${testData?.id}/${testData?.id}/${testData?.id}`}
            >
              Тестти баштоо
            </Link>
          </Button> */}
          <Link
            href={`${rootPath}/$${testData?.test.subject_category?.id}/${testData?.id}/`}
          >
            <CustomButton
              title="Артка"
              containerStyles="hidden lg:block bg-[rgba(224,224,224,1)] h-[40px] small:h-[50px] w-[220px] lg:w-[185px]  small:rounded-[5px] lg:self-end mr-[16px]"
              textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] lg:text-[24px] leading-[30px] font-poppins text-[rgba(76,76,76,1)]"
            />
          </Link>
          <Link
            href={`${rootPath}/${testData?.test.subject_category?.id}/${testData?.id}/${testData?.id}/${testData?.id}`}
          >
            <CustomButton
              title="Тестти баштоо"
              containerStyles="h-[40px] small:h-[50px] w-[220px] lg:w-[218px] small:w-[360px] small:rounded-[5px] lg:self-end"
              textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] lg:text-[24px] leading-[30px] font-poppins text-[rgb(255,255,255)]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestInstructions;
