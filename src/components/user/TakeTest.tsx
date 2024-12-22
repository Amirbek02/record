//ЖРТ га даярдоо  Сынамык тестке кош келдиңиз! 1

import CustomButton from "../UI/CustomButton";

const TakeTest = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col px-[15px]  small:px-[35px] pb-[120px] pt-[40px] ">
        <div className="flex justify-center items-center flex-col ">
          <p className="text-center font-montserrat text-[rgb(76,76,76)] text-[20px] lg:text-[36px] font-[500] leading-[24px] lg:leading-[44px]  tracking-[0.2px]">
            Сынамык тестке кош келдиңиз!
          </p>
          <h1 className="text-[rgb(240,26,38)] font-montserrat text-[22px] font-[700] leading-[27px] lg:leading-[44px] lg:text-[36px]">
            ЖРТ га даярдоо
          </h1>
          <p className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] lg:hidden">
            Негизги тест
          </p>
          <p className="font-montserrat text-[#4c4c4c] text-[32px] font-[500] leading-[39px] tracking-[0.2px] hidden lg:block">
            Математика
          </p>
        </div>

        <div className="pt-[24px] pb-[60px]">
          <h2 className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] pb-[24px] lg:hidden">
            1-бөлүм. Математика
          </h2>
          <p className="font-montserrat text-[#4c4c4c] text-[20px] font-[500] leading-[80%] tracking-[0.2px] lg:hidden">
            Негизги тест
          </p>
          <p className="text-[rgb(76,76,76)] font-montserrat text-[16px] font-[500] leading-[28px]">
            Тест{" "}
            <span className="text-[rgb(240,26,38)] font-[700]">
              30 тапшырмадан
            </span>{" "}
            турат.
          </p>
          <p className="text-[rgb(76,76,76)] font-montserrat text-[16px] font-[500] leading-[28px]">
            Аны аткарууга{" "}
            <span className="text-[rgb(240,26,38)] font-[700]">30 мүнөт</span>{" "}
            убакыт берилет.
          </p>
          <p className="text-[rgb(76,76,76)] font-montserrat text-[16px] font-[500] leading-[28px]">
            Тапшырманы аткарып жатып, тандаган жообуңарды{" "}
            <span className=" text-[rgb(0,131,53)] font-[700]">
              өзгөртсөңөр болот
            </span>
            , бирок жоопту ар бир тапшырмада{" "}
            <span className="text-[rgb(240,26,38)] font-[700]">
              бир гана жолу
            </span>{" "}
            өзгөртө аласыз.
          </p>
          <p className="text-[rgb(76,76,76)] font-montserrat text-[16px] font-[500] leading-[28px]">
            Оңдой турган жаңы (туура) жоопту{" "}
            <span className="text-[rgb(0,131,53)] font-[700]">
              чарчы кылып боёшуңуз керек.
            </span>{" "}
            Тестти тапшыргандан кийин Сиз канча суроого туура жооп бергениңиз
            тууралуу, туура жана туура эмес жооптордун жалпы пайыздык көрсөткүчү
            камтылган
            <span className="text-[rgb(240,26,38)] font-[700]">
              {" "}
              жыйынтыкты ватсап аркылуу
            </span>{" "}
            аласыз.
          </p>
          <h3 className="text-[rgb(0,131,53)] font-montserrat pt-[24px] text-[24px] font-[700] leading-[28px]">
            Ийгилик каалайбыз!
          </h3>
        </div>
        <CustomButton
          title="Тестти баштоо"
          containerStyles="h-[40px] small:h-[50px] w-[220px] small:w-[360px] rounded-[10px]"
          textStyles="font-[500] small:font-[700] text-[18px] small:text-[20px] leading-[30px] font-poppins text-[rgb(255,255,255)]"
        />
      </div>
    </div>
  );
};

export default TakeTest;
