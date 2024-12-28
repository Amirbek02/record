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
    <div className="flex flex-col gap-2 max-w-[978px] mx-auto my-8">
      <p className="text-[23px] font-extrabold">{total_questions} Суроо</p>
      <Progress value={progress} />
      <div className="text-[23px] font-medium flex gap-3 justify-between">
        <p className="max-w-[69px] text-blue-600">
          {total_questions}/{correct_answers} Туура
        </p>
        <p className="w-[135px] text-red">
          {total_questions}/{incorrect_answers} Туура эмес
        </p>
      </div>
    </div>
  );
};

export default ProgressInfo;
