import React from "react";
import WelcomeText from "@/components/UI/welcomeText";
import Clock from "@/components/UI/clock";
import ProgressInfo from "@/components/UI/ProgressInfo";
import { Button } from "../UI/button";
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
  const result: ResultProps = {
    correct_answers: 20,
    incorrect_answers: 10,
    total_questions: 30,
    time_spent: 3400,
    emoji: "/images/line.png",
  };

  return (
    <div>
      <div className="relative">
        <WelcomeText subjectTitle="Математика" />
        <Clock
          time={result.time_spent}
          className="absolute  right-[7%] top-7"
        />
      </div>
      <ProgressInfo
        correct_answers={result.correct_answers}
        incorrect_answers={result.incorrect_answers}
        total_questions={result.total_questions}
      />
      <Image
        src={result.emoji}
        alt="emoji"
        width={150}
        height={150}
        className="mx-auto mb-5 mt-3"
      />
      <div className="max-w-[978px] mx-auto flex justify-end">
      <Button className="text-xl font-bold"> Аяктоо</Button>
      </div>
    </div>
  );
};

export default ResultTest;
