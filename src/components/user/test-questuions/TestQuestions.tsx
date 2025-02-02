'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Timer from "@/components/UI/timer";
import Image from "next/image";
import { useTestContentStore } from "../../../store/TestApiStore";
import ResultTest from "../../user/ResultTest";
 

interface TestContent {
  id: number;
  question_image?: string;
  question_text?: string;
  true_answer: string;
  var_A_text?: string;
  var_B_text?: string;
  var_C_text?: string;
  var_D_text?: string;
  var_E_text?: string;
}


const TestQuestions = ({ initialTime = 30 * 60 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const totalTime = initialTime;
  const { testContents, isLoading, error, fetchTestContents, } = useTestContentStore();
  const router = useRouter();


  useEffect(() => {
    fetchTestContents();
  }, []);

  
  useEffect(() => {
    if (timeLeft <= 0) {
      finishTest();
    } else {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  if (isLoading) return <p>Суроолор жүктөлүүдө...</p>;
  if (error) return <p>Ката кетти: {error}</p>;
  if (!testContents || testContents.length === 0) return <p>Суроолор табылган жок</p>;

  const questions: TestContent[] = testContents
  // .filter(test => test.test.id === ) 
  // .slice(0, 30);
  

const currentQuestion = questions[currentQuestionIndex];

  const getAvailableOptions = () => {
    const options: string[] = [];
    ["А", "Б", "В", "Г"].forEach(option => {
      if (option) {
        options.push(option);
      }
    });
    return options;
  };

  const handleAnswerSelect = (option: string) => {
    if (timeLeft > 0) { 
      setAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: option
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

const finishTest = () => {
    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = answers[index];
        if (selectedAnswer) {
            if (selectedAnswer === question.true_answer) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        }
    });

    setCorrectAnswers(correctCount);
    setIncorrectAnswers(incorrectCount);
    setTestFinished(true);
};

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };



  if (testFinished) {
    return (
      <ResultTest
        emoji={correctAnswers > incorrectAnswers ? "/images/emoji/emoji_1.png" : "/images/emoji/emoji_2.png"} 
        correct_answers={correctAnswers}
        incorrect_answers={incorrectAnswers}
        total_questions={questions.length}
        time_spent={totalTime - timeLeft}
        subjectName="Математика"
      />
    );
  }
  const stripHtml = (html: string) => {
    return html.replace(/<[^>]+>/g, "");
  };

  const availableOptions = getAvailableOptions();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="font-medium text-lg sm:text-xl lg:text-2xl underline mt-2">
          1-бөлүм. Математика
        </h1>
        <div className="flex lg:justify-end md:justify-end absolute right-10 justify-center m-3 top-0 right-0">
          <Timer timeLeft={timeLeft} totalTime={totalTime} />
          {timeLeft <= 0 && (
            <p className="mt-4 text-lg text-red-500 font-bold">Убакыт бутту!</p>
          )}
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="w-full">
          <p className="text-start text-sm sm:text-base lg:text-lg mb-4">
            Суроо {currentQuestionIndex + 1}/{questions.length}
          </p>

          <div className="flex flex-col items-center mb-6">
            {currentQuestion.question_text ? (
              <p className="text-start text-sm sm:text-base lg:text-lg">
                {currentQuestion.question_text ? stripHtml(currentQuestion.question_text) : ""}
              </p>
            ) : (
              currentQuestion.question_image && (
                <Image
                  src={currentQuestion.question_image}
                  alt="Question Image"
                  width={740}
                  height={210}
                  className="mb-4"
                />
            )
            )}
          </div>

          <div className="flex flex-wrap gap-8 justify-center mt-4">
            {availableOptions.map((option) => (
              <label 
                key={`${currentQuestionIndex}-${option}`} 
                className="flex items-center cursor-pointer gap-2 hover:bg-gray-100 p-2 rounded"
              >
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={answers[currentQuestionIndex] === option}
                  onChange={() => handleAnswerSelect(option)}
                  className="w-5 h-5"
                  disabled={testFinished || timeLeft <= 0}
                />
                <span className="font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:flex gap-4 md:flex md:justify-end flex-none justify-center mt-8">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="border text-xl font-semibold bg-gray-200 hover:bg-gray-300 w-full md:w-[185px] py-2 rounded-xl"
        >
          Артка
        </button>
        <button
          onClick={handleNext}
          className="border text-xl font-semibold text-white bg-sky-700 hover:bg-sky-800 w-full md:w-[185px] py-2 rounded-xl"
        >
          {currentQuestionIndex === questions.length - 1 ? "Аяктоо" : "Алдыга"}
        </button>
      </div>
    </div>
  );
};

export default TestQuestions;