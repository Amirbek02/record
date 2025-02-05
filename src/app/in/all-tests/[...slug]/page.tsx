import React from 'react';
import FurtherTestCarousel from '@/components/user/UserIn/furtherTests/FurtherTestCarousel';
import TakeTest from '@/components/user/TakeTest';
import GoodResultTest from '@/components/user/UserIn/GoodResultTest';
// import TitleTest from '@/components/tests/TitleTest';
import Mathematika from '@/components/user/test-questuions/Mathematika';

const TestsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const tests = (await params).slug.length;
  const routeComponents: Record<string, React.ReactNode> = {
    1: <FurtherTestCarousel isLoggedIn />,
    2: <TakeTest />,
    3: <Mathematika />,
    5: <GoodResultTest />,

    // Add more routes/components as needed
  };
  return <div>{routeComponents[tests] || <div>404 - Page Not Found</div>}</div>;
};

export default TestsPage;
