'use client'
import React from "react";
import TestInstructions from "../UI/TestInstructions";
import useInstructionStore from "@/store/useInstructionStore";
import { useParams } from "next/navigation";
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';
const TestInstructionPage = () => {
  useAxiosInterceptors();
  const { instructionData, getInstructions } = useInstructionStore();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[1]) : Number(slug);
  React.useEffect(() => {
    getInstructions(idParams);
  }, [getInstructions, idParams]);
  return (
    <div>
      <TestInstructions testData={instructionData} />
    </div>
  );
};

export default TestInstructionPage;
