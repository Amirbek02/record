'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import userInTests from "@/store/userInTests";
import Math1 from "../test-questuions/TestQuestions";
import Mathematika from "../test-questuions/Mathematika";
import Analogies from "../test-questuions/Analogies";
import Reading from "../test-questuions/Reading";
import Grammer from "../test-questuions/Grammer";

// Тест компоненттеринин массиви
const testComponents = [
  { id: 1, component: <Math1 /> },
  { id: 2, component: <Mathematika /> },
  { id: 3, component: <Analogies /> },
  { id: 4, component: <Reading /> },
  { id: 5, component: <Grammer /> },
];

const ExamplePage = () => {
  const router = useRouter();
  const { test, getTests } = userInTests();
  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  useEffect(() => {
    getTests();
  }, [getTests]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Тест тандоо</h1>

      {/* Тест ID тандаган кнопкалар */}
      <div className="flex flex-wrap gap-4 justify-center">
        {testComponents.map(({ id }) => (
          <button
            key={id}
            onClick={() => setSelectedTest(id)}
            className={`border px-4 py-2 rounded-md ${
              selectedTest === id ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Тест {id}
          </button>
        ))}
      </div>

      {/* Тиешелүү компонентти көрсөтүү */}
      <div className="mt-6">
        {selectedTest
          ? testComponents.find((t) => t.id === selectedTest)?.component
          : "Тестти тандаңыз"}
      </div>
    </div>
  );
};

export default ExamplePage;
