import React from "react";
import TestPage from "@/components/user/Testlist";
import TakeTest from "@/components/user/TakeTest";
import TestIII from "@/components/user/test/TestIII";
import ResultTest from "@/components/user/ResultTest";
import WhatsAppAcceptingMessage from "@/components/user/WhatsAppAcceptingMessage";


const TestsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const tests = (await params).slug.length;
  console.log(tests);
  const routeComponents: Record<string, React.ReactNode> = {
    1: <TestPage />,
    2: <TakeTest />,
    3: <h1>Корсотмо бети</h1>,
    4: <TestIII />,
    5: <ResultTest />,
    6:<WhatsAppAcceptingMessage/>
 

    // Add more routes/components as needed
  };
  return <div>{routeComponents[tests] || <div>404 - Page Not Found</div>}</div>;
};

export default TestsPage;
