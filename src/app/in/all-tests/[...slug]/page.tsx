import React from 'react'
import FurtherTestCarousel from '@/components/user/futherTests/FurtherTestCarousel'
import TakeTest from '@/components/user/TakeTest';
import TestIII from '@/components/user/test/TestIII';

const TestsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const tests = (await params).slug.length;
  console.log(tests);
  const routeComponents: Record<string, React.ReactNode> = {
    1: <FurtherTestCarousel />,
    2: <TakeTest />,
    3: <h1>Корсотмо бети</h1>,
    4: <TestIII />,
    5:  <h1>Результат бети</h1>,
 

    // Add more routes/components as needed
  };
  return <div>{routeComponents[tests] || <div>404 - Page Not Found</div>}</div>;
};

export default TestsPage;