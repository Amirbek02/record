"use client";

import React from "react";

const ExamplePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-3 sm:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#4C4C4C] font-medium mb-2">
          Сынамык тестке кош келдиңиз!
        </h2>
        <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-red-600">
          ЖРТ га даярдоо
        </p>
        <h1 className="font-medium text-lg sm:text-xl lg:text-2xl underline mt-2">
          1-бөлүм. Математика
        </h1>
        <p className="font-semibold text-center sm:text-left text-lg sm:text-xl sm:mt-6">
          Көрсөтмө
        </p>
      </div>

      <div className="text-justify">
        <p className="text-[10px] sm:text-lg lg:text-2xl mb-4">
          1-ден 30 чейинки суроолор эки чондукту камтыйт, алрдын ар бири тик
          букртуу рамкага: бири{" "}
          <b className="uppercase text-[13px] sm:text-black">а калонкасында</b>,
          экинчи{" "}
          <b className="uppercase text-[13px] sm:text-black">б калонкасында</b>{" "}
          алынган. Сиз бул эки чондукту салыштыруунуз жана жоопту тандап алуунуз
          керек.
        </p>
        <div className="flex justify-center">
          <h3 className="text-[10px] sm:text-base lg:text-2xl w-full md:w-3/4">
            Эгерде{" "}
            <b className="uppercase tet-[13px] lg:text-[24px] sm:text-xl underline">
              а калонкасындагы
            </b>{" "}
            чондук чон болсо, анда (А); <br />
            Эгерде{" "}
            <b className="uppercase underline tet-[13px] lg:text-[24px] sm:text-xl">
              Б калонкасындагы
            </b>{" "}
            чондук чон болсо, анда (Б); <br />
            Эгерде эки чондук барабар болсо, анда (В); <br />
            Эгерде бар болгон маалымат аркулуу бул чондуктардын кайсынысы чон
            экендигин же алардын барабар экендигин аныктоо мумкун болбосо, анда
            (Г).
          </h3>
        </div>
        <p className=" sm:text-2xl text-[10px] mt-4">
          Кээ бир суроолордо салыштырылуучу чондуктар жонундо кошумча маалымат
          берилет. Ал салыштырылуучу чондуктардын устуно жайгаштырылат жана
          рамкаларга камтылбаган. Тапшырманын эки колонкасында да катышуучу
          символ{" "}
          <b className="uppercase lg:text-2xl text-[13px] sm:text-black">
            а калонкасындагы
          </b>{" "}
          жана{" "}
          <b className="uppercase text-[13px] lg:text-[24px] sm:text-black">
            б калонкасындагы
          </b>{" "}
          чондуктар учун бирдей мааниге ээ болот.
        </p>
        <h3 className="font-bold lg:text-[24px] text-[13px]  mt-6">Сандар</h3>
        <p className="sm:text-2xl text-[10px]">
          Тестте жалан чыныгы сандар гана пайдаланылат.
        </p>
        <h3 className="font-bold lg:text-[24px] text-[13px] mt-6">Фигуралар</h3>
        <p className=" sm:text-2xl text-[10px]">
          Тапшырмалар менен кошо келтирилген фигуралар чыгаруу учун пайдалуу
          маалыматты берет. Фигуралар атайын эскертилгенден башка учурларда
          масштабда жана тегиздикте суроттолгон.
        </p>
      </div>

      <div className="flex gap-5 justify-end mt-8">
        <button className="border text-xs sm:text-xl font-semibold bg-gray-200 hover:bg-gray-300 w-full md:w-[185px] py-2 rounded-lg">
          Артка
        </button>
        <button className="border text-xs sm:text-xl font-semibold text-white bg-sky-700 hover:bg-sky-800 w-full md:w-[245px] py-2 rounded-lg">
          Тестти баштоо
        </button>
      </div>
    </div>
  );
};

export default ExamplePage;
