import React from "react";

const WelcomeText = ({ subjectTitle }: { subjectTitle: string }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-medium text-darkGrey">
        Сынамык тестке кош келдиңиз!
      </h1>
      <h3 className="text-4xl text-[#C00510] font-bold">ЖРТ га даярдоо </h3>
      <h4 className="text-[32px] font-medium text-darkGrey">{subjectTitle}</h4>
      <p className="text-[28px] font-normal text-darkGrey">
        Тестти аткаруунун жыйынтыгы
      </p>
    </div>
  );
};
export default WelcomeText;
