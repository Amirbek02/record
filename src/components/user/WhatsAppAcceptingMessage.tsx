import React from "react";
import { Button } from "../UI/button";

const WhatsAppAcceptingMessage = () => {
  return (
    <div className="flex justify-center items-center h-screen m-0 p-0">
      <div className="flex flex-col mx-auto  md:max-w-[720px] gap-[60px]">
        <h1 className=" text-blue-600 md:text-darkGrey text-center md:text-start mx-auto md:mx-0 md:max-w-[720px] max-w-[293px] md:text-4xl text-[22px] font-bold md:font-medium">
          Whatsapp номериңиз кабыл алынды!
        </h1>
        <div className="flex md:flex-row flex-col w-[363px] md:w-[634px] mx-auto md:gap-8 gap-6 justify-between">
          <p className="md:w-[320px] w-full text-base md:text-xl">
            Видео сабактарды көрүү үчүн кийинки баскычты басыңыз!{" "}
          </p>
          <Button className="md:w-[229px] h-[56px] text-2xl font-bold">
            Катталуу
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppAcceptingMessage;
