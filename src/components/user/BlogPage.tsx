"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TestCardNoSign from "@/components/user/TestCardNoSign";

const BlogPage = () => {
  const test = [
    {
      id: 1,
      title: "Кыргыз тил",
      description:
        "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
      tag: "Кыргыз тил боюнча негизги тестке кош келиңиз",
      imgSrc: "/images/text.jpg",
    },
    {
      id: 2,
      title: "Математика",
      tag: "Математика боюнча даярдалган видео сабакка кош келиңиз",
      description:
        "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
      imgSrc: "/images/text.jpg",
    },
    {
      id: 3,
      title: "Тарых",
      description:
        "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
      tag: "Кыргыз тил боюнча негизги тестке кош келиңиз",
      imgSrc: "/images/text.jpg",
    },
    {
      id: 4,
      title: "Биолиогия",
      tag: "Математика боюнча даярдалган видео сабакка кош келиңиз",
      description:
        "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
      imgSrc: "/images/text.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="hidden sm:block">
        <p className="text-xl sm:text-center lg:text-start font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
          Предметтик тест
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

      <div className="block sm:w-[400px] sm:hidden">
        <p className="text-xl justify-center font-bold text-[#4C4C4C] mb-4">
          Мобильный тест
        </p>
        {test.map((testi) => (
          <div
            key={testi.id}
            className="space-y-4 xs:justify-center text-start"
          >
            <div className="relative sm:w-[400px] w-[356px]">
              <Image
                src={testi.imgSrc}
                width={350}
                height={195}
                alt="img"
                className="mx-auto"
              />
              <Link
                href="/"
                className="absolute text-center w-32 border-black rounded-xl cursor-pointer p-2 bg-[#4C4C4C] hover:bg-[#2E3095] bottom-2 right-3 transform text-sm font-medium text-white"
              >
                {testi.title}
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium">{testi.tag}</p>
              <p className="text-sm opacity-30">{testi.description}</p>
              <b className="underline pb-5 cursor-pointer">Толук оку</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
