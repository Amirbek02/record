import React from "react";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import Link from "next/link";

const TestInstructions = ({
  subjectTitle,
  instructions,
  isLoggedIn,
}: {
  subjectTitle: string;
  instructions: string;
}) => {
  const rootPath = isLoggedIn ? "/in/all-tests" : "/exam-tests";
  return (
    <div>
      <p>{subjectTitle}</p>
      <div className="max-w-[894px] max-h-[440px]">
        <Image src={instructions} width={894} height={440} alt="instructions" />
        <Button>
          {" "}
          <Link
            href={`${rootPath}/${testt?.test_category?.id}/${testt?.subject_category?.id}/${testt?.id}`}
          >
            Тестти баштоо
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TestInstructions;
