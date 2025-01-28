'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useGraduates } from '@/store/Graduates';

const Graduates = () => {
  const { graduates, isLoading, error, fetchGraduates } = useGraduates();

  useEffect(() => {
    fetchGraduates();
  }, [fetchGraduates]);

  if (isLoading) {
    return (
      <section className="bg-[#2E3095] lg:mt-64 mt-0 md:mt-40 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <p className="text-gray-400 text-center">Жүктөлүүдө...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#2E3095] lg:mt-64 mt-0 md:mt-40 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <p className="text-red-500 text-center">Ката: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#2E3095] lg:mt-64 mt-0 md:mt-40 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-gray-400 text-center text-[24px] md:text-[40px] font-bold mb-20">
          Биздин бүтүрүүчүлөр
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-20">
          {graduates.map((graduate) => (
            <div
              key={graduate.id}
              className="bg-gradient-to-b from-[#1A1A25] to-[#2E3095] items- rounded-xl shadow-lg p-2 flex flex-col">
              <div className="flex gap-5">
                <Image
                  src={graduate.image}
                  alt={graduate.first_name}
                  className="relative top-[-40px] md:top-[-50px] lg:top-[-50px] left-[20px] md:left-10 lg:left-0 rounded-full object-cover w-[110px] h-[110px] lg:w-[120px] lg:h-[120px] xs:w-[100px] xs:h-[100px]"
                  width={150}
                  height={150}
                />
                <div className="flex flex-col gap-1 items-center mt-2">
                  <p className="text-red font-bold text-[24px] xl:text-[30px]">
                    {graduate.score} баллл
                  </p>
                  <h3 className="text-[12px] xl:text-[15px] font-bold text-gray-400">
                    {graduate.first_name} {graduate.last_name}
                  </h3>
                </div>
              </div>
              <div className="text-gray-400 relative top-[-20px] text-center">
                {graduate.review}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Graduates;
