//негизги тест
"use client";
import React from "react";
import TestCardNoSign from "@/components/user/TestCardNoSign"; // Импортируем компонент TestCardNoSign

const TestPage = () => {
  const test = [
    {
      id: 1,
      title: "Кыргыз тил",
      description:
        "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
      tag: "Кыргыз тил боюнча негизги тестке кош келиңиз",
      imgSrc: "/images/test.png",
    },
    {
      id: 2,
      title: "Математика",
      tag: "Математика боюнча даярдалган видео сабакка кош келиңиз",
      description:
        "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
      imgSrc: "/images/test.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center mb-3 lg:mb-8">
        <h2 className="text-xl md:text-2xl text-[#4C4C4C] lg:text-[36px] font-medium">
          Сынамык тестке кош келиңиз!
        </h2>
      </div>

      {/* Для десктопа */}
      <div className="hidden sm:block">
        <p className="text-xl lg:text-start md:text-center font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
          Негизги тест
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          {test.map((testi) => (
            <TestCardNoSign
              key={testi.id}
              testTitle={testi.title}
              testDescriptionTitle={testi.tag}
              description={testi.description}
              imgSrc={testi.imgSrc}
            />
          ))}
        </div>
      </div>

      {/* Для мобильной версии */}
      <div className="block sm:hidden">
        <p className="text-xl font-medium text-[#4C4C4C] mb-4">Негизги тест</p>
        {test.map((testi) => (
          <TestCardNoSign
            key={testi.id}
            testTitle={testi.title}
            testDescriptionTitle={testi.tag}
            description={testi.description}
            imgSrc={testi.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default TestPage;
