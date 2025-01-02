"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function PreparationBanner() {
  const isDesktop = useMediaQuery({ minWidth: 700 }); // Для десктопа
  const isMobile = useMediaQuery({ maxWidth: 699 }); // Для мобильных устройств

  return (
    <div className="lg:mt-[130px] mt-[40px] p-10">
      {/* Десктоп версия */}
      {isDesktop && (
        <div className="relative ml-10 flex items-center justify-between bg-[#2E3095] rounded-tl-[300px] rounded-tr-[30px] rounded-br-[200px] max-w-[838px] h-[200px] mx-auto p-4 lg:pt-[30px]">
          {/* Левое изображение */}
          <div className="absolute  left-[-200px] bottom-0 w-[500px]">
            <Image
              src="/images/education.png"
              alt="Education"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Текст */}
          <div className="flex relative flex-col  items-center text-center text-white w-full">
            <h2 className="text-xl font-semibold">
              Жалпы республикалык тестке
            </h2>
            <h1 className="text-3xl text-[#FFE500] font-bold mt-2">
              Онлайн даярдан
            </h1>
            <p className="flex text-[16px] mt-2 gap-4">
              Кыргыз тил • Математика • <br />
              Англис тил • Физика • Тарых • Биология
            </p>
            <Image
              className="absolute right-[-40px] bottom-[-80px] h-[155px] hidden lg:block"
              src="/images/test foto.png"
              alt=""
              width={215}
              height={155}
            />
          </div>
        </div>
      )}

      {/* Мобильная версия */}
      {isMobile && (
        <div className="relative flex items-center justify-between bg-[#2E3095] rounded-tl-[150px] rounded-br-[100px] w-[350px] h-[105px] mx-auto p-2">
          {/* Левое изображение */}
          <div className="absolute left-[-130px] bottom-0 w-[250px]">
            <Image
              src="/images/education.png"
              alt="Education"
              width={300}
              height={250}
              className="object-contain"
            />
          </div>

          {/* Текст */}
          <div className="flex flex-col items-center text-center text-white w-full">
            <h2 className="text-[14px] font-semibold">
              Жалпы республикалык тестке
            </h2>
            <h1 className="text-[20px] text-[#FFE500] font-bold mt-2">
              Онлайн даярдан
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
