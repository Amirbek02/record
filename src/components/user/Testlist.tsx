"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const TestPage = () => {
  const test = [
    {
      id: 1,
      title: "Кыргыз тил",
      description:
        "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
      tag: "Кыргыз тил боюнча негизги тестке кош келиңиз",
      imgSrc: "/images/test.jpg",
    },
    {
      id: 2,
      title: "Математика",
      tag: "Математика боюнча даярдалган видео сабакка кош келиңиз",
      description:
        "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
      imgSrc: "/images/test.jpg",
    },
  ];

  return (
    <div className=" max-w-6xl mx-auto p-4">
      <div className="text-center mb-3 lg:mb-8">
        <h2 className="text-xl md:text-2xl text-[#4C4C4C] lg:text-[36px] font-medium ">
          Сынамык тестке кош келиңиз!
        </h2>
      </div>

      <div className="hidden sm:block">
        <p className="text-xl lg:text-start md:text-center font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
          Негизги тест
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          {test.map((testi) => (
            <div key={testi.id} className="space-y-4 text-start flex flex-col">
              <div className="relative">
                <Image
                  src={testi.imgSrc}
                  width={605}
                  height={345}
                  alt="img"
                  className="mx-auto"
                />
                <h3
                  className="absolute text-center w-64 border-black rounded-xl cursor-pointer p-2 bg-[#4C4C4C] hover:bg-[#2E3095] text-2xl font-medium text-white 
                  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  {testi.title}
                </h3>
              </div>

              <div className="flex flex-col  mt-auto">
                <p className="text-2xl font-medium">{testi.tag}</p>
                <p className="text-sm opacity-50">{testi.description}</p>
                <Link href="/" className="underline font-bold text-[20px]  ">
                  Толук оку
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="block sm:hidden">
        <p className="text-xl font-medium text-[#4C4C4C] mb-4">Негизги тест</p>
        {test.map((testi) => (
          <div key={testi.id} className="space-y-4 text-start">
            <div className="relative w-[339px]">
              <Image
                src={testi.imgSrc}
                width={365}
                height={195}
                alt="img"
                className="mx-auto"
              />
              <h3 className="absolute text-center w-32 border-black rounded-xl cursor-pointer p-2 bg-[#4C4C4C] hover:bg-[#2E3095] bottom-2 right-3 transform text-sm font-medium text-white">
                {testi.title}
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium">{testi.tag}</p>
              <p className="text-sm opacity-30">{testi.description}</p>
              <Link href="/" className="underline pb-5 font-bold text-[14px] ">
                Толук оку
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
