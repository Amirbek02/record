import React from "react";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import Link from "next/link";
import { Instruction } from "@/types/categories";

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
    <div className="flex flex-col items-center mx-[10%]">
      <h1 className="text-2xl font-semibold self-start my-2">Көрсөтмө</h1>
      <p className="text-lg font-medium">{testData?.instruction_title}</p>
      <div className="max-w-[894px] max-h-[440px]">
        <Image
          src={testData?.instruction_image || ""}
          width={894}
          height={200}
          alt="instructions"
        />
        <div className="flex justify-end">
          <Button className="text-2xl font-bold lg:w-[184px] lg:h-[36px] px-10">
            {" "}
            <Link
              href={`${rootPath}/${testData?.test.subject_category?.id}/${testData?.id}/${testData?.id}/${testData?.id}`}
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
