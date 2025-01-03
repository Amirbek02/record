"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "../../UI/carousel";
import tests from "./Test";

const TestIII = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalTime = 30 * 60;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const progress = (timeLeft / totalTime) * 100;
  const circleRadius = 50;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (progress / 100) * circumference;

  const currentQuestion = tests[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < tests.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="max-w-6xl relative mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#4C4C4C] font-medium mb-2">
          Сынамык тестке кош келдиңиз!
        </h2>
        <div className="text-center">
          <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-red">
            ЖРТ га даярдоо
          </p>
          <h1 className="font-medium text-lg sm:text-xl lg:text-2xl underline mt-2">
            1-бөлүм. Математика
          </h1>
        </div>

        <div className="flex justify-center items-center  right-0 top-0 lg:absolute mt-6">
          <svg width="120" height="120" className="relative">
            <circle
              cx="60"
              cy="60"
              r={circleRadius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r={circleRadius}
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
            <text
              x="60"
              y="60"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-bold text-lg fill-blue-700"
            >
              {timeLeft > 0 ? formatTime(timeLeft) : "ЖРТ Түшүндө!"}
            </text>
          </svg>
        </div>

        {/* Уведомление об истечении времени */}
        {timeLeft <= 0 && (
          <p className="mt-4 text-lg text-gray-700 font-bold text-red-500 text-right">
            Убакыт бутту!
          </p>
        )}
      </div>

      <Carousel>
        <div>
          <p>
            Суроо {currentQuestionIndex + 1}/{tests.length}
          </p>
          <h3 className="text-[10px] sm:text-base lg:text-2xl w-full md:w-3/4">
            {currentQuestion.question}
          </h3>

          {currentQuestion.image && (
            <Image
              className="justify-center items-center"
              src={currentQuestion.image}
              alt="img"
              width={740}
              height={210}
            />
          )}

          <div>
            <ul className="flex items-center justify-center gap-10">
              {currentQuestion.options.map((option, index) => (
                <li key={index}>
                  <label className="flex flex-col items-center">
                    <p className="font-semibold text-[36px]">{option}</p>
                    <input
                      type="radio"
                      name="question"
                      className="rounded-full w-14 h-[30px]"
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Carousel>

      <div className="flex gap-5 justify-end mt-8">
        <button
          onClick={handlePrev}
          className="border text-xs sm:text-xl font-semibold bg-gray-200 hover:bg-gray-300 w-full md:w-[185px] py-2 rounded-xl"
        >
          Артка
        </button>
        <button
          onClick={handleNext}
          className="border text-xs sm:text-xl font-semibold text-white bg-sky-700 hover:bg-sky-800 w-full md:w-[185px] py-2 rounded-xl"
        >
          Алдыга
        </button>
      </div>
    </div>
  );
};

export default TestIII;
