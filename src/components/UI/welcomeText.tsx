import React from "react";

const WelcomeText = ({ subjectTitle }: { subjectTitle: string }) => {
  return (
    <div className="flex flex-col items-center lg:gap-4 md:gap-2 md:pb-0 pb-[150px]">
    
      <h3 className="lg:text-4xl md:text-2xl text-[22px] text-[#C00510] font-bold">ЖРТ га даярдоо </h3>
      <h4 className="lg:text-[32px] text-xl font-medium text-darkGrey">{subjectTitle}</h4>
   
    </div>
  );
};
export default WelcomeText;
