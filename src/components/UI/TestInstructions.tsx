import React from "react";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import Link from "next/link";
import { AllTest } from "@/types/categories";

const TestInstructions = ({
  testData,
  isLoggedIn,
}: {
  isLoggedIn?:boolean;
  testData:AllTest
}) => {
  const rootPath = isLoggedIn ? "/in/all-tests" : "/exam-test";
  return (
    <div className="flex flex-col items-center mx-[10%]">
      <p className="text-[32px] font-medium">{testData?.title}</p>
      <p className="text-2xl font-semibold self-start">Көрсөтмө</p>
      <div className="max-w-[894px] max-h-[440px]">
        <Image src={testData?.background_image} width={894} height={440} alt="instructions" />
        <div className="flex justify-end">
        <Button className='text-2xl font-bold lg:w-[184px] lg:h-[36px] px-10'>
          {" "}
          <Link
            href={`${rootPath}/${testData?.subject_category?.id}/${testData?.id}/${testData?.id}/${testData?.id}`}
          >
            Тестти баштоо
          </Link>
        </Button>
        </div>
      </div>
    </div>
  );
};

export default TestInstructions;
