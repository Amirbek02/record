"use client";
import React, { useEffect } from "react";
import useTestStore from "@/store/useTestStore";
import { useParams } from "next/navigation";
import TestQuestionComponent from "./TestQuestionComponent";
import useReadingTestStore from "@/store/useReadingUnderstanding/useReadingTestStore";

const TestQuestions = () => {
  const {
    testText,
    isLoading: loadingTest,
    error: errorTest,
    getSubById,
  } = useTestStore();
  const {
    readingTestData,
    isLoading: loadingReadingTest,
    error: errorReadingTest,
    getReadingTests,
  } = useReadingTestStore();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[2]) : Number(slug);
  console.log(typeof idParams, slug);
  useEffect(() => {
    getSubById(idParams);
    getReadingTests();
  }, [getSubById, idParams, getReadingTests]);
  const readingTest = testText.id === 5;
  const isLoading = readingTest ? loadingReadingTest : loadingTest;
  const error = readingTest ? errorTest : errorReadingTest;
  if (isLoading) return <p>Суроолор жүктөлүүдө...</p>;
  if (error) return <p>Ката кетти: {error}</p>;
  return (
    <>
      <TestQuestionComponent
        testsData={testText}
        readingTestData={readingTestData}
        readingTest={readingTest}
      />
    </>
  );
};

export default TestQuestions;
