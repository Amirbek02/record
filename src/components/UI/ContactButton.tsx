import React from "react";
import Link from "next/link";
import { Button } from "./button";

const ContactButtons: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-4 lg:flex-row lg:justify-start lg:items-center  ">
      
         {/* "Кат куржуну" */}
         <div className="mt-[350px] mr-[180px]">
        <Link href="mailto:example@example.com" passHref legacyBehavior>
          <Button
            asChild
            variant="default"
            size="default"
            className=" w-[163px] h-[51px]  rounded-full shadow font-bold text-[20px] text-[#010D2D] bg-[#ffffff] hover:bg-blue-600 hover:text-[#ffffff] transition-colors lg:w-[202px] lg:h-[51px] lg:font-semibold lg:rounded-xl lg:text-[20px] "
          >
            <a>Кат куржуну</a>
          </Button>
        </Link>
      </div>
      {/* "Чалуу" */}
      <div className="mt-[-200px] lg:mt-[350px]">
        <Link href="tel:+996704164171" passHref legacyBehavior>
          <Button
            asChild
            variant="default"
            size="default"
            className="bg-[#008335] w-[109px] h-[41px]  ml-[238px] rounded-full font-bold text-[20px] text-[#ffffff] hover:bg-blue-600 hover:text-[#ffffff] transition-colors lg:w-[153px] lg:h-[51px] lg:font-semibold lg:rounded-xl lg:text-[20px] lg:bg-[#ffffff] lg:text-[#010D2D] lg:mt-0 lg:ml-[-180px]"
          >
            <a>Чалуу</a>
          </Button>
        </Link>
      </div>

   
    </div>
  );
};

export default ContactButtons;
