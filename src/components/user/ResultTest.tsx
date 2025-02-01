"use client";
import React from "react";
import Clock from "@/components/UI/clock";
import ProgressInfo from "@/components/UI/ProgressInfo";
import { Button } from "../UI/button";
import SendResult from "./SendResult";

import Image from "next/image";
export interface ResultProps {
  correct_answers: number;
  incorrect_answers: number;
  total_questions: number;
  time_spent: number;
  emoji: string;
  subjectName:string;
}
const ResultTest: React.FC<ResultProps> = ({
  correct_answers,
  incorrect_answers,
  total_questions,
  time_spent,
  emoji,
  subjectName,
}) => {
  const [sendResult, setSendResult] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  const handleEnd = () => setSendResult(true);

  React.useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div>
      <h4 className="lg:text-[32px] text-xl font-medium text-darkGrey text-center mt-5">{subjectName}</h4>
      <p className="lg:text-[28px] md:text-lg font-normal text-darkGrey hidden md:block text-center py-10">
        Тестти аткаруунун жыйынтыгы
      </p>
      <Clock
        time={time_spent}
        className="absolute right-[7%] md:top-[200px] top-[20%]"
      />

      <ProgressInfo
        correct_answers={correct_answers}
        incorrect_answers={incorrect_answers}
        total_questions={total_questions}
      />
      {!(sendResult && isSmallScreen) && (
        <Image
          src={emoji}
          alt="emoji"
          width={137}
          height={137}
          className="mx-auto mb-5 mt-3 md:w-[150px] md:h-[150px]"
        />
      )}
      {sendResult ? (
        <SendResult />
      ) : (
        <div className="lg:max-w-[978px] mx-auto flex justify-end pb-10">
          <Button
            className="text-xl font-bold lg:ml-0 mx-6"
            onClick={handleEnd}
          >
            Аяктоо
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResultTest;
