import React from 'react';
// import TestList from '@/components/user/Alltestlist/TestList';
import TakeTest from '@/components/user/TakeTest';
import ResultTest from '@/components/user/ResultTest';
import WhatsAppAcceptingMessage from '@/components/user/WhatsAppAcceptingMessage';
import FurtherTestCarousel from '@/components/user/UserIn/furtherTests/FurtherTestCarousel';


const TestsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const tests = (await params).slug.length;
  const routeComponents: Record<string, React.ReactNode> = {
    1: <FurtherTestCarousel/>,
    2: <TakeTest />,
    5: (
      <ResultTest
        correct_answers={0}
        incorrect_answers={0}
        total_questions={0}
        time_spent={0}
        emoji={''}
        resultText={''}
        subjectName={''}
      />
    ),
    6: <WhatsAppAcceptingMessage />,

    // Add more routes/components as needed
  };
  return <div>{routeComponents[tests] || <div>404 - Page Not Found</div>}</div>;
};

export default TestsPage;
