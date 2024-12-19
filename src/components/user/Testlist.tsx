"use client";
import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const TestPage = () => {
  const test = [
    {
      id: 1,
      title: "Кыргыз тил",
      description: "Кыргыз тил боюнча негизги тестке кош келиңиз",
      tag: "Кыргыз тил",
      imgSrc: "/images/test.jpg",
    },
    {
      id: 2,
      title: "Математика",
      tag: "Математика боюнча даярдалган видео сабакка кош келиңиз",
      description:
        "30 Видео сабак 4 тестик суроо камтылган. Сабакты көрүп бүткөндөн кийин...",
      imgSrc: "/images/test.jpg",
    },
  ];

  return (
    <div className={`${montserrat.className} max-w-6xl mx-auto p-4`}>
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl text-[#4C4C4C] lg:text-[36px] font-medium mb-2">
          Сынамык тестке кош келиңиз!
        </h2>
      </div>

      <div>
        <p
          className={`${montserrat.className}text-xl font-bold text-[#4C4C4C] lg:text-[32px] mb-4`}
        >
          Негизги тест
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {test.map((testi) => (
            <div key={testi.id} className="space-y-4 text-center">
              <Image
                src={testi.imgSrc}
                width={605}
                height={345}
                alt="img"
                className="mx-auto"
              />
              <h3 className="text-lg  font-medium">{testi.title}</h3>
              <p className="text-sm">{testi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
