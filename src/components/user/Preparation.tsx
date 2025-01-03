"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function PreparationBanner() {
  const isDesktop = useMediaQuery({ minWidth: 700 });
  const isMobile = useMediaQuery({ maxWidth: 699 });

  return (
    <div className="lg:mt-[130px] mt-[40px] p-2 ">
      {isDesktop && (
        <div className="relative ml-10 flex items-center justify-between bg-[#2E3095] rounded-tl-[300px] rounded-tr-[30px] rounded-br-[200px] max-w-[838px] h-[200px] mx-auto p-4 lg:pt-[30px]">
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
          <div className="flex relative flex-col pl-0  xs:pl-[20px] sm:items-center sm:pl-[30px] sm:text-center  lg:items-center lg:text-center text-white w-full">
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
        <div className="relative flex  items-center  justify-between bg-[#2E3095] rounded-tr-[20px] rounded-bl-[150px] rounded-tl-[100px] rounded-br-[170px] max-w-[338px] h-[105px] mx-auto p-6">
          {/* Левое изображение */}
          <div className="absolute  left-[-80px] bottom-0 w-[250px]">
            <Image
              src="/images/education.png"
              alt="Education"
              width={300}
              height={250}
              className="object-contain"
            />
          </div>

          {/* Текст */}
          <div className="flex flex-col pl-[60px] items-center text-center text-white w-full">
            <h2 className="text-[14px] ">Жалпы республикалык тестке</h2>
            <h1 className="text-[16px] text-[#FFE500] font-bold mt-2">
              Онлайн даярдан
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
