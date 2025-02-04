"use client";
import userInTests from "@/store/userInTests";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "../UI/button";
import { Test } from "@/store/userInTests";

const TakeTest = ({takeTestData,userIn}:{takeTestData:Test|null, userIn?:boolean}) => {
  const { testt, getSubById } = userInTests();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[1]) : Number(slug);
  useEffect(() => {
    getSubById(idParams);
  }, [getSubById, idParams]);
		const parentRout=userIn?'/in/all-tests':'/exam-tests'
  return (
    <div>
      <div className="flex justify-center items-center flex-col px-[15px]  small:px-[35px] pb-[120px] pt-[40px] ">
        <div className="flex justify-center items-center flex-col ">
          <p className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] lg:hidden">
            {takeTestData?.test_category?.test_category_name}
          </p>
        </div>

        <div className="pt-[24px] pb-[60px]">
          <h2 className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] pb-[24px] lg:hidden">
            {takeTestData?.title}
          </h2>
          <p>{takeTestData?.description}</p>
        </div>
        <div className="lg:flex lg:self-end">
          <Button asChild>
            <Link
              href={`${parentRout}/${testt?.test_category?.id}/${testt?.subject_category?.id}/${testt?.id}`}
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
