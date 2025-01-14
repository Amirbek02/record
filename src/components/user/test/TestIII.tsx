"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "../../UI/carousel";
import tests from "./Test";
import Timer from "@/components/UI/timer";
import Image from "next/image";

const TestIII = ({ initialTime = 30 * 60 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalTime = initialTime;

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
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

        <div className="flex lg:justify-end md:justify-end md:absolute  lg:absolute justify-center m-3  top-0 right-0 ">
          <Timer timeLeft={timeLeft} totalTime={totalTime} />

          {timeLeft <= 0 && (
            <p className="mt-4 text-lg text-gray-700 font-bold text-red-500 text-right">
              Убакыт бутту!
            </p>
          )}
        </div>
      </div>

      {/* Carousel with Navigation */}
      <div className="relative lg:mt-0 md:mt-0  mt-[-80px] flex items-center justify-center">
        <Image
          onClick={currentQuestionIndex === 0 ? undefined : handlePrev}
          className={`md:block lg:block hidden cursor-pointer ${
            currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          } `}
          src="/icons/prev.svg"
          alt="Previous"
          width={24}
          height={24}
        />

        <Carousel>
          <div className="flex flex-col items-center">
            <p className="text-start items-start flex justify-start text-sm sm:text-base lg:text-lg">
              Суроо {currentQuestionIndex + 1}/{tests.length}
            </p>
            <h3 className="text-[10px] sm:text-base lg:text-2xl w-full md:w-3/4">
              {currentQuestion.question}
            </h3>

            {currentQuestion.image && (
              <Image
                className="justify-center items-center mt-4"
                src={currentQuestion.image}
                alt="Question Image"
                width={740}
                height={210}
              />
            )}

            <div className="mt-4">
              <ul className="flex items-center justify-center gap-4 lg:gap-8">
                {currentQuestion.options.map((option, index) => (
                  <li key={index}>
                    <label className="flex flex-col items-center">
                      <p className="font-semibold text-base sm:text-lg lg:text-2xl">
                        {option}
                      </p>
                      <input
                        type="radio"
                        name="question"
                        className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                      />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Carousel>
        <Image
          onClick={
            currentQuestionIndex === tests.length - 1 ? undefined : handleNext
          }
          className={`md:block lg:block hidden cursor-pointer ${
            currentQuestionIndex === tests.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          src="/icons/next.svg"
          alt="Next"
          width={24}
          height={24}
        />
      </div>

      <div className="lg:flex gap-4 md:flex md:justify-end lg:space-y-0 md:space-y-0 space-y-3 flex-none justify-center lg:justify-end mt-8">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className={`border text-xl sm:text-xl font-semibold bg-gray-200 hover:bg-gray-300 w-full md:w-[185px] py-2 rounded-xl ${
            currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Артка
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === tests.length - 1}
          className={`border text-xl sm:text-xl font-semibold text-white bg-sky-700 hover:bg-sky-800 w-full md:w-[185px] py-2 rounded-xl ${
            currentQuestionIndex === tests.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Алдыга
        </button>
      </div>
    </div>
  );
};

export default TestIII;
