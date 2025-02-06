import React from 'react';
// import TestList from '@/components/user/Alltestlist/TestList';
import TakeTest1 from '@/components/user/TakeTest1';
import WhatsAppAcceptingMessage from '@/components/user/WhatsAppAcceptingMessage';
import FurtherTestCarousel from '@/components/user/UserIn/furtherTests/FurtherTestCarousel';
import TestInstructionPage from '@/components/user/TestInstructionPage';
import Mathematika from '@/components/user/test-questuions/Mathematika';

const TestsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const tests = (await params).slug.length;
  const routeComponents: Record<string, React.ReactNode> = {
    1: <FurtherTestCarousel />,
    2: <TakeTest1 />,
    3: <TestInstructionPage />,
    4: <Mathematika />,
    // 5: (
    //   <ResultTest
    //     correct_answers={0}
    //     incorrect_answers={0}
    //     total_questions={0}
    //     time_spent={0}
    //     emoji={''}
    //     resultText={''}
    //     subjectName={''}
    //   />
    // ),
    6: <WhatsAppAcceptingMessage />,

    // Add more routes/components as needed
  };
  return <div>{routeComponents[tests] || <div>404 - Page Not Found</div>}</div>;
};

export default TestsPage;
