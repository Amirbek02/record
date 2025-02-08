import React from 'react';
import TakeTest1 from '@/components/user/TakeTest1';
import WhatsAppAcceptingMessage from '@/components/user/WhatsAppAcceptingMessage';
import FurtherTestCarousel from '@/components/user/UserIn/furtherTests/FurtherTestCarousel';
import TestInstructionPage from '@/components/user/TestInstructionPage';
import TestQuestions from '@/components/user/test-question/TestQuestion';


const TestsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const tests = (await params).slug.length;
  const routeComponents: Record<string, React.ReactNode> = {
    1: <FurtherTestCarousel/>,
    2: <TakeTest1 />,
    3:<TestInstructionPage/>,
    4:<TestQuestions/>,
    5: <WhatsAppAcceptingMessage />,

    // Add more routes/components as needed
  };
  return <div>{routeComponents[tests] || <div>404 - Page Not Found</div>}</div>;
};

export default TestsPage;
