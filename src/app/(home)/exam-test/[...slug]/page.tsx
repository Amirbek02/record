import React from 'react';
import TestList from '@/components/user/Alltestlist/TestList';
import TakeTest from '@/components/user/TakeTest';
import TestQuestions from '@/components/user/test-questuions/TestQuestions';
import ResultTest from '@/components/user/ResultTest';
import WhatsAppAcceptingMessage from '@/components/user/WhatsAppAcceptingMessage';
import TestExample from '@/components/user/example/TestExample';

export type Props = {
  id: number;
  subject_category: {
    id: number;
    subject_category_name: string;
    last_update_date: string;
    created_date: string;
  };
  test_category: {
    test_category_name: string;
  };
  first_test: boolean;
  description: string;
  tag: string;
  background_image: string;
  title: string;
  pathName: string;
};
const mocktests: Props[] = [
  {
    id: 1,
    title: 'Кыргыз тил',
    description:
      '30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!',
    tag: 'Кыргыз тил боюнча негизги тестке кош келиңиз',
    background_image: '/images/test.png',
    pathName: '/exam-test/kyrgyz/1',
    subject_category: {
      id: 0,
      subject_category_name: '',
      last_update_date: '',
      created_date: '',
    },
    test_category: {
      test_category_name: '',
    },
    first_test: false,
  },
  {
    id: 2,
    title: 'Математика',
    tag: 'Математика боюнча даярдалган видео сабакка кош келиңиз',
    description:
      '30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!',
    background_image: '/images/test.png',
    pathName: '/exam-test/mathematics/1',
    subject_category: {
      id: 0,
      subject_category_name: '',
      last_update_date: '',
      created_date: '',
    },
    test_category: {
      test_category_name: '',
    },
    first_test: false,
  },
];

const TestsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const tests = (await params).slug.length;
  console.log(tests);
  const routeComponents: Record<string, React.ReactNode> = {
    1: <TestList tests={mocktests} />,
    2: <TakeTest />,
    3: <TestExample />,
    4: <TestQuestions />,
    5: <ResultTest />,
    6: <WhatsAppAcceptingMessage />,

    // Add more routes/components as needed
  };
  return <div>{routeComponents[tests] || <div>404 - Page Not Found</div>}</div>;
};

export default TestsPage;
