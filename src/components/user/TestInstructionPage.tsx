'use client'
import React from "react";
import TestInstructions from "../UI/TestInstructions";
import useTestStore from "@/store/useTestStore";
import { useParams } from "next/navigation";
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';
const TestInstructionPage = () => {
  useAxiosInterceptors();
  const { testText, getSubById } = useTestStore();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[1]) : Number(slug);
  React.useEffect(() => {
    getSubById(idParams);
  }, [getSubById, idParams]);
  return (
    <div>
      <TestInstructions testData={testText} />
    </div>
  );
};

export default TestInstructionPage;
