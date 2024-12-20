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
        <p className="text-xl font-bold text-[#4C4C4C] lg:text-[32px] mb-4">
          1-ден 30 чейинки суроолор эки чондукту камтыйт, алрдын ар бири тик
          букртуу рамкага: бири <b>а калонкасында,</b>экинчи{" "}
          <b>б калонкасында</b> алынган . Сиз бул эки чондукту салыштыруунуз
          жана жоопту тандап алуунуз керек{" "}
        </p>
        <div></div>
        <p></p>
      </div>
    </div>
  );
};

export default ExamplePage;
