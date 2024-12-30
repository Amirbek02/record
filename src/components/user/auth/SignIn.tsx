"use client";
import CustomButton from "@/components/UI/CustomButton";
import Image from "next/image";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const inputClass =
    "font-montserrat font-[400] box-border border-[0.6px] border-gray-300 placeholder-gray-300 text-[rgb(163,163,174)] w-[270px] mm:w-[356px] xl:w-[500px] rounded-[4px] py-[19px] pl-[15px] mb-[20px] text-[16px] leading-[20px]";

  return (
    <div className="flex justify-center items-center flex-col w-full h-auto ">
      <div className="pt-[24px] xl:pt-[120px]">
        <Image
          src="/icons/record-logo.svg"
          width={290}
          height={95}
          alt="sighIn"
        ></Image>
      </div>

      <form className="flex justify-center items-center flex-col relative">
        <h1 className="font-montserrat text-[rgb(85,87,87)] font-[500] text-[28px] xl:text-[32px] leading-[34px] xl:leading-[39px] pt-[82px] xl:pt-[76px]  pb-[40px]  ">
          Катталуу
        </h1>
        <input type="text" placeholder="Аты" className={inputClass} />
        <input type="text" placeholder="Фамилия" className={inputClass} />
        <input
          type="number"
          placeholder="Телефон номер"
          className={inputClass}
        />
        <div className="relative w-[270px] mm:w-[356px] xl:w-[500px]">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Сыр сөз"
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-[32px] right-[25px] transform -translate-y-1/2 self-center text-[rgba(0,0,0,0.44)] w-[20px] h-[14px]  "
          >
            {showPassword ? (
              <FaRegEyeSlash size={20} />
            ) : (
              <FaRegEye size={20} />
            )}
          </button>
        </div>
        <input
          type="text"
          placeholder="Сыр сөздү кайталоо"
          className={inputClass}
        />
        <CustomButton
          title="Кирүү"
          containerStyles="mm:rounded-[5px] mm:w-[356px] xl:w-[500px] mb-[163px]"
          textStyles=" font-[700] text-[24px] leading-[29px] tracking-[4.5%] text-[rgb(255,255,255)]"
        />

        {/* images */}
        <Image
          src="/images/smart_people.png"
          width={236}
          height={95}
          alt="sighIn"
          className="hidden xl:block absolute left-[-350px] top-[120px] z-2"
        ></Image>
        <Image
          src="/images/smart_people.png"
          width={236}
          height={95}
          alt="sighIn"
          className="hidden xl:block absolute right-[-360px] bottom-[195px] z-2"
        ></Image>
      </form>
    </div>
  );
};

export default SignIn;
