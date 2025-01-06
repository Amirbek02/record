//тест результат
"use client";

import React from "react";
import Clock from "@/components/UI/clock";
import ProgressInfo from "@/components/UI/ProgressInfo";
import SendResult from "./SendResult";
import Image from "next/image";

export interface ResultProps {
  correct_answers: number;
  incorrect_answers: number;
  total_questions: number;
  time_spent: number;
  emoji: string;
}

const PoorResult = () => {
  const [sendResult, setSendResult] = React.useState(false);
  const result: ResultProps = {
    correct_answers: 20,
    incorrect_answers: 10,
    total_questions: 30,
    time_spent: 3400,
    emoji: "/images/line.png",
  };

  const handleEnd = () => setSendResult(true);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="lg:pb-0 md:pb-0 pb-[100px]">
        {" "}
        <div className="text-3xl md:pl-3 pl-0 md:block lg:block hidden  font-bold mt-20">
          Математика
        </div>
        <Clock
          time={result.time_spent}
          className="absolute right-[7%]  top-0"
        />
      </div>

      {/* Прогресс маалыматтары */}
      <ProgressInfo
        correct_answers={result.correct_answers}
        incorrect_answers={result.incorrect_answers}
        total_questions={result.total_questions}
      />

      {/* Эмоциялык сүрөт */}
      {!sendResult && (
        <Image
          src={result.emoji}
          alt="emoji"
          width={150}
          height={150}
          className="mx-auto bg-yellow-300 rounded-full mb-5 mt-3"
        />
      )}

      <p className="text-2xl lg:block hidden md:block font-semibold text-center w-[450px] pb-8 mx-auto">
        Тестти аткаруунун жыйынтыгы боюнча сиз видео сабакты кайталап көрүп
        чыгыңыз!
      </p>

      {sendResult ? (
        <SendResult />
      ) : (
        <div className="lg:max-w-[978px] items-center mx-auto flex justify-center">
          <button
            onClick={handleEnd}
            className="border rounded-xl w-[315px] p-2 bg-blue-800 text-white text-[20px] font-bold"
          >
            Видео сабак
          </button>
        </div>
      )}
    </div>
  );
};

export default PoorResult;
