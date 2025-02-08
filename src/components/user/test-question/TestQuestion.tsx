"use client";
import React, { useState, useEffect } from "react";
import Timer from "@/components/UI/timer";
import Image from "next/image";
import ResultTest from "../../user/ResultTest";
import useAxiosInterceptors from "@/lib/setupAxiosInterceptors";
import useTestStore from "@/store/useTestStore";
import { useParams } from "next/navigation";
import { TestQuestion } from "@/types/categories";
import ReadingCarousel from "./ReadingCarousel";

const TestQuestions = () => {
  useAxiosInterceptors();
  const { testText, isLoading, error, getSubById } = useTestStore();
  const initialTime = 30 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const [finalTimeSpent, setFinalTimeSpent] = useState<null | number>(null);

  const params = useParams();
  const slug = params?.slug;

  const idParams = Array.isArray(slug) ? Number(slug[2]) : Number(slug);

  useEffect(() => {
    getSubById(idParams);
  }, [getSubById, idParams]);

  useEffect(() => {
    if (timeLeft === 0) {
      finishTest();
    } else {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);
  useEffect(() => {
    if (testFinished && finalTimeSpent === null) {
      setFinalTimeSpent(initialTime - timeLeft);
    }
  }, [testFinished, timeLeft, finalTimeSpent, initialTime]);

  const questions = testText?.test_questions || [];
  const currentQuestion = questions[currentQuestionIndex] || null;
  const readingTitle = testText?.title === "Окуу жана түшүнүү";

  const handleAnswerSelect = (option: string) => {
    if (timeLeft > 0) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: option,
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      finishTest();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const finishTest = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      const selectedAnswer = answers[index]?.toLowerCase();
      console.log("selectedAnswer", selectedAnswer);

      const correctAnswer = question.true_answer.toLowerCase();
      console.log("correctAnswer", correctAnswer);

      if (selectedAnswer) {
        if (selectedAnswer === correctAnswer) {
          correctCount++;
        }
      }
    });

    setCorrectAnswers(correctCount);
    setTestFinished(true);
  };
  if (!testText) {
    return <div>Ката бар</div>;
  }
  if (testFinished) {
    const total_questions = questions.length;
    const incorrectAnswers = total_questions - correctAnswers;
    return (
      <ResultTest
        emoji={
          correctAnswers > incorrectAnswers
            ? "/images/goodemog.png"
            : "/images/smile1.png"
        }
        correct_answers={correctAnswers}
        resultText={
          correctAnswers > incorrectAnswers
            ? "Сизди куттуктайбыз! Тестти аткаруунун жыйынтыгы боюнча сиз 2-бөлүмгө өттүңүз! "
            : "Тестти аткаруунун жыйынтыгы боюнча сиз  видео сабактты кайталап көрүп чыгыңыз! "
        }
        incorrect_answers={incorrectAnswers}
        total_questions={questions.length}
        time_spent={
          finalTimeSpent !== null ? finalTimeSpent : initialTime - timeLeft
        }
        subjectName={testText?.title}
      />
    );
  }

  const answerMap: {
    [key in "а" | "б" | "в" | "г" | "д"]: keyof TestQuestion;
  } = {
    а: "var_A_text",
    б: "var_B_text",
    в: "var_C_text",
    г: "var_D_text",
    д: "var_E_text",
  };

  if (isLoading) return <p>Суроолор жүктөлүүдө...</p>;
  if (error) return <p>Ката кетти: {error}</p>;
  return (
    <div className="px-4 py-8 w-full">
      <h1 className="w-full font-medium text-lg sm:text-xl lg:text-2xl underline  text-center mb-5">
        {testText?.title}
      </h1>
      {readingTitle && <ReadingCarousel />}
        <div className="absolute top-[20%] right-[10%] z-30">
          <Timer timeLeft={timeLeft} totalTime={initialTime} />
          {timeLeft === 0 && (
            <p className="mt-4 text-lg text-red-500 font-bold">Убакыт бутту!</p>
          )}
        </div>
      <div className="w-full relative">
        <p className="text-start ml-[15%] text-sm sm:text-base lg:text-lg font-bold mb-4">
          Суроо {currentQuestionIndex + 1}/{questions.length}
        </p>
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center mb-6">
            {currentQuestion?.question_text ? (
              <p className="text-start text-sm sm:text-base lg:text-lg">
                {`${currentQuestionIndex + 1}. `}
                {currentQuestion?.question_text}
              </p>
            ) : (
              currentQuestion?.question_image && (
                <Image
                  src={currentQuestion?.question_image}
                  alt="Question Image"
                  width={400}
                  height={50}
                  className="w-full h-auto"
                />
              )
            )}
          </div>
          <div className="flex flex-col w-[50%] items-start">
            {currentQuestion &&
              ["а", "б", "в", "г", "д"]?.map((option) => {
                const optionText =
                  currentQuestion[
                    answerMap?.[option as keyof typeof answerMap]
                  ];
                return (
                  optionText && (
                    <label
                      key={`${currentQuestionIndex}-${option}`}
                      className={`flex ${
                        currentQuestion.question_image ? "flex-row-reverse" : ""
                      } items-center cursor-pointer gap-2 hover:bg-gray-100 p-2 rounded`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        checked={answers[currentQuestionIndex] === option}
                        onChange={() => handleAnswerSelect(option)}
                        className="w-4 h-4"
                        disabled={testFinished || timeLeft === 0}
                      />
                      <span className="font-medium">{optionText}</span>
                    </label>
                  )
                );
              })}
          </div>
        </div>
        {/* </div> */}

        <div className="lg:flex  gap-4 md:flex md:justify-end flex-none justify-center mr-[10%]">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="border mb-3 text-xl font-semibold bg-gray-200 hover:bg-gray-300 w-full md:w-[185px] py-2 rounded-xl"
          >
            Артка
          </button>
          <button
            onClick={handleNext}
            className="border text-xl font-semibold text-white bg-sky-700 hover:bg-sky-800 w-full md:w-[185px] py-2 rounded-xl"
          >
            {currentQuestionIndex === questions.length - 1
              ? "Аяктоо"
              : "Алдыга"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestQuestions;
