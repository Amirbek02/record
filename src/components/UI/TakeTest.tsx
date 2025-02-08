"use client";
import Link from "next/link";
import { Button } from "../UI/button";
import { AllTest } from "@/types/categories";
const TakeTest = ({
  takeTestData,
  userIn,
}: {
  takeTestData: AllTest | null;
  userIn?: boolean;
}) => {
  const parentRout = userIn ? "/in/all-tests" : "/exam-test";
  return (
    <div>
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
        <div className="lg:flex lg:self-end">
          <Button asChild>
            <Link
              href={`${parentRout}/${takeTestData?.subject_category?.id}/${takeTestData?.id}/${takeTestData?.id}`}
            >
              Тестти баштоо
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TakeTest;
