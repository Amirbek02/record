import React from "react";
import FurtherTestCarousel from "@/components/user/UserIn/furtherTests/FurtherTestCarousel";
import TakeTest from "@/components/user/TakeTest";
import TestExample from "@/components/user/example/TestExample";
import TestIII from "@/components/user/test-questuions/TestQuestions";
import GoodResultTest from "@/components/user/UserIn/GoodResultTest";

const TestsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const tests = (await params).slug.length;
  console.log(tests);
  const routeComponents: Record<string, React.ReactNode> = {
    1: <FurtherTestCarousel />,
    2: <TakeTest />,
    3: <TestExample/>,
    4: <TestIII />,
    5: <GoodResultTest/>,

    // Add more routes/components as needed
  };
  return <div>{routeComponents[tests] || <div>404 - Page Not Found</div>}</div>;
};

export default TestsPage;
