"use client";

import React from "react";
import Clock from "@/components/UI/clock";
import ProgressInfo from "@/components/UI/ProgressInfo";

import Image from "next/image";
import Link from "next/link";

export interface ResultProps {
  correct_answers: number;
  incorrect_answers: number;
  total_questions: number;
  time_spent: number;
  emoji: string;
  title: string;
  titleComment: string;
}

const GoodResultTest = () => {
  const [sendResult, setSendResult] = React.useState(false);

  const result: ResultProps = {
    correct_answers: 25,
    incorrect_answers: 5,
    total_questions: 30,
    time_spent: 3400,
    emoji: "/images/goodemogi.png",
    title: "Сизди куттуктайбыз!",
    titleComment: "Тестти аткаруунун жыйынтыгы боюнча сиз 2-бөлүмгө өттүңүз! ",
  };

  // Логика в зависимости от результата
  const isGoodResult = result.correct_answers >= 3; // Условие для хорошего результата
  const emoji = isGoodResult ? "/images/goodemogi.png" : "/images/smile.svg"; // Изображение
  const buttonText = isGoodResult ? "2-бөлүм" : "Видео сабак"; // Текст кнопки
  const buttonLink = isGoodResult ? "/" : "/"; // Ссылка кнопки
  const title = isGoodResult
    ? "Сизди куттуктайбыз!"
    : "Тестти аткаруунун жыйынтыгы боюнча сиз  видео сабактты кайталап көрүп чыгыңыз!";
  const titleComment = isGoodResult
    ? "Тестти аткаруунун жыйынтыгы боюнча сиз 2-бөлүмгө өттүңүз!"
    : "";

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="lg:pb-0 justify-center items-center md:pb-0 pb-[100px]">
        <div className="text-3xl md:pl-3 pl-0 md:block lg:block hidden font-bold mt-20">
          Математика
        </div>
        <Clock time={result.time_spent} className="absolute right-[7%] top-0" />
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
          src={emoji}
          alt="emoji"
          width={150}
          height={150}
          className="mx-auto mb-5 mt-3"
        />
      )}

      {/* Текст результата */}
      {!sendResult && (
        <div className="flex justify-center items-center">
          <div className="items-center w-auto md:w-[430px] lg:w-[450px] lg:pb-0 md:pb-0 pb-3 text-center flex justify-center font-bold text-2xl">
            {title}
          </div>
        </div>
      )}
      {!sendResult && (
        <div className="flex justify-center text-center items-center">
          <div className="flex w-[450px] pb-3 lg:block md:block hidden font-bold text-lg">
            {titleComment}
          </div>
        </div>
      )}

      {/* Кнопка */}
      <div className="lg:max-w-[978px] items-center mx-auto flex justify-center">
        <Link
          href={buttonLink}
          className="border rounded-xl bg-blue-800 text-center lg:text-2xl text-[16px] text-white p-2 w-[200px]"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default GoodResultTest;
