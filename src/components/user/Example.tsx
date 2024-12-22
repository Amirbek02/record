"use client";

import React from "react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const ExamplePage = () => {
  return (
    <div className={`${montserrat.className} max-w-6xl mx-auto p-4`}>
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl text-[#4C4C4C] lg:text-[36px] font-medium mb-2">
          Сынамык тестке кош келдиңиз!
        </h2>
        <p className="font-bold text-[36px] text-red">ЖРТ га даярдоо </p>
        <h1 className="font-semibold text-[32px]">Математика </h1>
        <p className="font-bold text-2xl">Көрсөтмө </p>
      </div>

      <div className="hidden sm:block">
        <p className="text-xl   lg:text-[22px] mb-4">
          1-ден 30 чейинки суроолор эки чондукту камтыйт, алрдын ар бири тик
          букртуу рамкага: бири{" "}
          <b className="uppercase text-black">а калонкасында,</b>
          экинчи <b className="uppercase text-black">б калонкасында</b> алынган
          . Сиз бул эки чондукту салыштыруунуз жана жоопту тандап алуунуз керек{" "}
        </p>
        <div className="justify-center ">
          <h3 className="text-[18px] w-3/4">
            Эгерде{" "}
            <b className="uppercase text-2xl underline">а калонкасындагы</b>
            чондук чон болсо, анда (А); <br />
            Эгерде{" "}
            <b className="uppercase underline text-2xl">Б калонкасындагы</b>
            чондук чон болсо, анда (Б);
            <br /> Эгерде эки чондук барабар болсо , анда (В);
            <br /> Эгерде бар болгон маалымат аркулуу бул чондуктардын кайсынысы
            чон экендигин, же алардын барабар экендигин аныктоо мункун болбосо ,
            анда (Г).
          </h3>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default ExamplePage;
