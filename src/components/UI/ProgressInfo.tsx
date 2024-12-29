"use client";
import React from "react";
import { Progress } from "./progress";
export interface ResultProps {
  correct_answers: number;
  incorrect_answers: number;
  total_questions: number;
}
const ProgressInfo = ({
  total_questions,
  correct_answers,
  incorrect_answers,
}: ResultProps) => {
  const [progress, setProgress] = React.useState(0);
  const progressPercentage = (correct_answers / total_questions) * 100;

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPercentage), 300);
    return () => clearTimeout(timer);
  }, [progressPercentage]);
  return (
    <div className="flex flex-col gap-2  lg:max-w-[978px] px-6 lg:px-0 mx-auto md:my-8 my-1">
      <p className="md:hidden block text-base font-normal text-blue-600 py-2 pl-1">Жыйынтыгы</p>
      <p className="lg:text-[23px] md:text-lg  md:font-bold lg:font-extrabold">{total_questions} Суроо</p>
      <Progress value={progress} />
      <div className="lg:text-[23px] md:text-lg text-sm font-medium flex gap-3 justify-between">
        <p className="max-w-[69px] text-blue-600">
          {total_questions}/{correct_answers} Туура
        </p>
        <p className="md:w-[135px] w-[82px] text-red">
          {total_questions}/{incorrect_answers} Туура эмес
        </p>
      </div>
    </div>
  );
};

export default ProgressInfo;
