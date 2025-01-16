"use client";
import React from "react";
import Clock from "@/components/UI/clock";
import ProgressInfo from "@/components/UI/ProgressInfo";
import { Button } from "../UI/button";
import SendResult from "./SendResult";
//local dependencies
import Image from "next/image";
export interface ResultProps {
  correct_answers: number;
  incorrect_answers: number;
  total_questions: number;
  time_spent: number;
  emoji: string;
}
const ResultTest = () => {
  const [sendResult, setSendResult] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const result: ResultProps = {
    correct_answers: 20,
    incorrect_answers: 10,
    total_questions: 30,
    time_spent: 3400,
    emoji: "/images/line.png",
  };

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
      <Clock
        time={result.time_spent}
        className="absolute  right-[7%] md:top-[200px] top-[20%]"
      />

      <ProgressInfo
        correct_answers={result.correct_answers}
        incorrect_answers={result.incorrect_answers}
        total_questions={result.total_questions}
      />
      {!(sendResult && isSmallScreen) && (
        <Image
          src={result.emoji}
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
            {" "}
            Аяктоо
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResultTest;
