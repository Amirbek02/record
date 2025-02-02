'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import TestCardNoSign from '@/components/UI/TestCardNoSign';
import useTrialTestStore from '@/store/TrialTest';
import useAxiosInterceptors from '@/lib/setupAxiosInterceptors';

const AllTestList = () => {
  useAxiosInterceptors();
  const { data, loading, error, getSub } = useTrialTestStore();

  useEffect(() => {
    getSub();
  }, [getSub]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tests: {error}</p>;

  const mainTests = Array.isArray(data)
    ? data.filter((test) => test.subject_category_name === 'Математика')
    : [];
  const subjectTests = Array.isArray(data)
    ? data.filter((test) => test.subject_category_name !== 'Математика')
    : [];

  return (
    <div className="w-[90%] mx-auto p-4 mb-8 max-w-6xl">
      {mainTests.length > 0 && (
        <div className="mb-[60px]">
          <p className="text-xl lg:text-start md:text-center font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
            Негизги тест
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto sm:w-full lg:w-full">
            {mainTests.map((testi) => (
              <Link key={testi.id} href={`/exam-test/${testi.id}`}>
                <TestCardNoSign
                  testTitle={testi.subject_category_name || 'Без названия'}
                  testDescriptionTitle={''}
                  description={''}
                  imgSrc="/images/test.png"
                  href={''}
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {subjectTests.length > 0 && (
        <div className="mt-[20px]">
          <p className="text-xl lg:text-start md:text-center font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
            Предметтик тест
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto sm:w-full lg:w-full">
            {subjectTests.map((testi) => (
              <Link key={testi.id} href={`/exam-test/${testi.id}`}>
                <TestCardNoSign
                  testTitle={testi.subject_category_name || 'Без названия'}
                  testDescriptionTitle={''}
                  description={''}
                  imgSrc="/images/test.png"
                  href={`/exam-test/${testi.id}`}
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {mainTests.length === 0 && subjectTests.length === 0 && (
        <p className="text-center text-gray-500">No tests available.</p>
      )}
    </div>
  );
};

export default AllTestList;
