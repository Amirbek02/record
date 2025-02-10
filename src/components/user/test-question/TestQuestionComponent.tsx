import React, { useState, useEffect } from "react";
import Timer from "@/components/UI/timer";
import Image from "next/image";
import ResultTest from "../ResultTest";
import useAxiosInterceptors from "@/lib/setupAxiosInterceptors";
import ReadingCarousel from "./ReadingCarousel";
import { AllTest, QuestionReadingData, BaseQuestion } from "@/types/categories";
import { Button } from "@/components/UI/button";
import parse from "html-react-parser";
const TestQuestionComponent = ({
  testsData,
  readingTestData,
  readingTest,
}: {
  testsData: AllTest | null;
  readingTestData: QuestionReadingData[] | null;
  readingTest: boolean;
}) => {
  useAxiosInterceptors();
  const initialTime = 30 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const [finalTimeSpent, setFinalTimeSpent] = useState<null | number>(null);
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

  const questions = readingTest
    ? readingTestData || []
    : testsData?.test_questions || [];
  const sortedQuestions = [...questions].sort((a, b) => a.question_number - b.question_number);
  const currentQuestion = sortedQuestions[currentQuestionIndex] || null;

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
    questions?.forEach((question, index) => {
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
  if (!testsData) {
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
        subjectName={testsData?.title}
      />
    );
  }

  const answerMap: {
    [key in "а" | "б" | "в" | "г" | "д"]: keyof BaseQuestion;
  } = {
    а: "var_A_text",
    б: "var_B_text",
    в: "var_C_text",
    г: "var_D_text",
    д: "var_E_text",
  };
  return (
    <div className="px-4 py-8 w-full">
      <h1 className="w-full font-medium text-lg sm:text-xl lg:text-2xl underline  text-center mb-5">
        {testsData?.title}
      </h1>
      {readingTest && <ReadingCarousel />}
      <div className={`md:fixed top-[20%] md:right-[1%]  xl:right-[5%] z-30`}>
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
          <div className="flex flex-col items-center mb-3 max-w-[800px] mx-auto">
            {currentQuestion?.question_text ? (
              <p className="text-start text-sm sm:text-base lg:text-lg">
                {`${currentQuestionIndex + 1}. `}
                {parse(currentQuestion?.question_text)}
              </p>
            ) : (
              currentQuestion &&
              "question_image" in currentQuestion &&
              currentQuestion?.question_image && (
                <Image
                  src={currentQuestion?.question_image}
                  alt="Question Image"
                  width={500}
                  height={400}
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
              )
            )}
          </div>
          <div className="flex flex-col items-start">
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
                        "question_image" in currentQuestion &&
                        currentQuestion.question_image
                          ? "flex-row-reverse"
                          : ""
                      }  items-center justify-start cursor-pointer gap-2 hover:bg-gray-100 p-1 w-full rounded`}
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
                      <span className="font-medium">
                        {typeof optionText === "string"
                          ? parse(optionText)
                          : optionText}
                      </span>
                    </label>
                  )
                );
              })}
          </div>
        </div>
        <div className="flex gap-4 flex-col mt-4 md:flex-row md:justify-end flex-none justify-center md:mr-[10%]">
          <Button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="bg-blue-600 text-lg md:w-[140px] md:h-[56px] rounded-[4px] text-white disabled:font-medium font-bold disabled:text-darkGrey disabled:opacity-1 disabled:bg-[#D0D0D0]"
          >
            Артка
          </Button>
          <Button
            onClick={handleNext}
            className="bg-blue-600 text-lg md:w-[140px] md:h-[56px] rounded-[4px] text-white disabled:font-medium font-bold disabled:text-darkGrey disabled:opacity-1 disabled:bg-[#D0D0D0]"
          >
            {currentQuestionIndex === questions.length - 1
              ? "Аяктоо"
              : "Алдыга"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestQuestionComponent;
