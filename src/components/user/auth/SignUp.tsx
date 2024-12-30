"use client";
import CustomButton from "@/components/UI/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  //   const toggleCheckbox = () => {
  //     setIsChecked(!isChecked);
  //   };

  const inputClass =
    "font-montserrat font-[400] box-border border-[0.6px] border-gray-300 placeholder-gray-300 text-[rgba(0,0,0,0.44)] w-[270px] mm:w-[360px] xl:w-[500px] rounded-[4px] py-[19px] pl-[15px] mb-[32px] text-[16px] leading-[20px]";

  return (
    <div className="flex justify-center items-center flex-col w-[360px] mm:w-auto">
      <div className="pt-[24px] xl:pt-[120px] pb-[82px] xl:pb-[40px]">
        <Image
          src="/icons/record-logo.svg"
          width={290}
          height={95}
          alt="sighIn"
        ></Image>
      </div>
      <h1 className="hidden xl:block  font-montserrat font-medium text-[36px] leading-[44px] tracking-[2%] text-[rgb(76,76,76)] pb-[75px]">
        Кош келдиңиз!
      </h1>

      <form className="flex justify-center items-center flex-col relative">
        {/* <h1 className="font-montserrat text-[rgb(85,87,87)] font-[500] text-[28px] xl:text-[32px] leading-[34px] xl:leading-[39px] pt-[82px] xl:pt-[76px]  pb-[40px]  ">
          Катталуу
        </h1> */}
        <div className="flex justify-center items-start flex-col">
          <span className="font-montserrat font-[400] text-[16px] leading-[20px] pb-[6px] text-[rgb(76,76,76)]">
            Телефон номери
          </span>
          <input
            type="number"
            placeholder="0990990990"
            className={inputClass}
          />
        </div>

        <div className="flex justify-center items-start flex-col">
          <span className=" font-montserrat font-[400] text-[16px] leading-[20px] pb-[6px] text-[rgb(76,76,76)]">
            Сыр сөз
          </span>
          <div className="relative w-[270px] mm:w-[356px] xl:w-[500px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="**********"
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
        </div>

        <div className="pb-[32px] flex items-center justify-start self-start pl-[50px] mm:pl-[0px] ">
          <label className="flex items-center justify-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="hidden"
            />
            <div className="w-[20px] h-[20px] border rounded-[4px] flex items-center justify-center  ">
              {isChecked && (
                <span className="text-[14px] font-bold text-[rgba(0,0,0,0.6)] ">
                  ✔
                </span>
              )}
            </div>
            <span className="font-roboto text-[14px] font-[400] leading-[16px] text-[rgba(0,0,0,0.6)] pl-[17px]">
              Эстеп кал
            </span>
          </label>
          <Link
            href=""
            className="font-roboto font-[400] text-[14px] leading-[16px] text-[rgb(46,48,149)] pl-[15px] mm:pl-[60px] xl:pl-[185px] underline pr-[15px]"
          >
            Сыр сөзүңүздү унуттуңузбу?
          </Link>
        </div>

        <CustomButton
          title="Кирүү"
          containerStyles="mm:rounded-[5px] mm:w-[356px] xl:w-[500px] mb-[32px]"
          textStyles=" font-[700] text-[24px] leading-[29px] tracking-[4.5%] text-[rgb(255,255,255)]"
        />

        <div className="flex justify-center items-center flex-col pb-[175px] ">
          <p className="pb-[32px] text-[rgb(76,76,76)] font-montserrat text-[16px] font-[500] leading-[20px] tracking-[2%] ">
            же
          </p>
          <div className="flex pb-[32px]">
            <Image
              src="/icons/google.svg"
              width={24}
              height={24}
              alt="google"
              className="mr-[40px]"
            ></Image>
            <Image
              src="/icons/iphone.svg"
              width={24}
              height={24}
              alt="sighIn"
            ></Image>
          </div>
          <Link
            href=""
            className="text-[rgb(46,48,149)] font-roboto text-[20px] font-normal leading-[23px] underline"
          >
            Катталуу{" "}
          </Link>
        </div>

        <Image
          src="/images/smart_people.png"
          width={236}
          height={95}
          alt="sighIn"
          className="hidden xl:block absolute left-[-350px] bottom-[240px] z-2"
        ></Image>
        <Image
          src="/images/smart_people.png"
          width={236}
          height={95}
          alt="sighIn"
          className="hidden xl:block absolute right-[-360px] bottom-[240px] z-2"
        ></Image>
      </form>
    </div>
  );
};

export default SignUp;
