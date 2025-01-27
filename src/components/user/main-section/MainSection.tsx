'use client';
import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { IoMdPlay } from 'react-icons/io';
import TakeTheTestForm from '../TakeTheTestForm';

const MainSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="w-[90%]  max-w-[1440px] mx-auto  py-[50px] md:py-[100px]">
      <div className="flex items-center  md:pl-[0]  flex-col-reverse mx-auto md:flex-row md:justify-between ">
        <div className="ml-[-10px] flex w-[280px]  lg:w-[680px] flex-col items-center mt-[420px] xl:mt-[100px]  md:mt-[30px] md:items-start ">
          <h1 className="text-[#002038] text-[14px] font-medium md:text-[25px] lg:text-[37px]">
            Жалпы республикалык тестке
          </h1>
          <h1 className="text-red text-[16px] font-bold mt-[8px] md:text-[25px] lg:text-[36px]">
            Oнлайн даярдан
          </h1>
          <p className="hidden md:block text-black text-[13px] mt-[8px] mb-[20px] w-full lg:w-[80%] lg:text-[18px]">
            КРнын ЖОЖдоруна өтүү үчүн негизги тестти сөзсүз тапшыруу керек. Медициналык жана
            фармацевтикалык адистикке өтүү үчүн химия жана биология предметтик  тесттерин сөзсүз
            тапшыруу керек
          </p>
          <div className="md:flex md:gap-[20px] md:items-center">
            <button
              onClick={openModal}
              className="py-[12px] md:px-[47px] px-[67px] rounded-[80px] bg-blue-600 text-[#FFF] text-[16px] font-semibold mt-[8px]">
              Тест тапшыруу
            </button>
            <div className="mt-[29px] md:mt-[5px] flex gap-[10px] items-center justify-center">
              <button className="w-[28px] md:w-[46px] md:h-[46px] h-[28px] rounded-full border-[0.35px] border-[black] flex items-center justify-center">
                <IoMdPlay className="w-[12px] h-[12px] md:w-[20px] md:h-[20px] text-[#00732E] md:text-blue-600 ml-[3px]" />
              </button>
              <h1 className="text-[#252641] text-[16px] ">Видео сабак</h1>
            </div>
          </div>
        </div>

        <div className=" mr-[320px]  md:mr-[300px]">
          <div className="relative w-[full] md:mt-[-150px]">
            <div className="absolute left-[55px] w-[202px] h-[400px] rounded-[60px] pb-20 bg-[#008335] md:bg-[#2E3095] xl:w-[340px] xl:h-[610px] xl:left-[-130px] p-6">
              <video
                className=" h-[317px] w-[500px] m-auto object-cover mt-2 z-20 xl:w-[280px] xl:h-[500px] rounded-t-[20px]  "
                autoPlay
                muted
                controls
                loop>
                <source
                  className="rounded-lg border-[0.35px] border-[#000]"
                  src="/video/IMG_3133.MOV"
                  type="video/MOV"
                />
                <source
                  className="rounded-lg border-[0.35px] border-[#000]"
                  src="/video/IMG_3133.MOV"
                  type="video/mp4"
                />
                <source
                  className="rounded-lg border-[0.35px] border-[#000]"
                  src="/video/IMG_3133.MOV"
                  type="video/webm"
                />
              </video>
            </div>

            <div className=" absolute left-[10px] top-[323px] xl:top-[530px] xl:left-[-160px]  z-40  flex items-center justify-center gap-[13px] w-[290px] h-[79px] xl:w-[399px] xl:h-[110px] rounded-[20px] backdrop-blur-[40px] bg-white/90 ">
              <div className="w-[40px] h-[40px] bg-[#F88C3D] rounded-[8px] flex items-center justify-center xl:w-[50px] xl:h-[50px]">
                <MdEmail className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] text-[#FFF]" />
              </div>
              <div>
                <h3 className="font-semibold text-[14px] xl:text-[24px] mb-[2px] text-[#595959]">
                  Сизди куттуктайбыз!
                </h3>
                <h3 className="font-semibold text-[14px] xl:text-[20px] text-[#595959]">
                  Алтын сертификаттын ээси
                </h3>
              </div>
            </div>
            <div className="absolute left-[-20px] xl:left-[-230px] top-[80px] xl:top-[90px] hidden md:flex items-center justify-center backdrop-blur-[70px] bg-white/80 w-[105px] h-[43px] xl:w-[172px] xl:h-[61px] border-[0.35px] border-green rounded-[10px]">
              <h3 className="text-[#595959] text-[16px] font-bold xl:text-[24px]">200 Бал</h3>
            </div>
            <div className="absolute top-[120px] xl:top-[170px] left-[210px] xl:left-[120px] hidden md:flex items-center justify-center backdrop-blur-[70px] bg-white/80 w-[105px] h-[43px] border-[0.35px] border-green rounded-[10px] xl:w-[172px] xl:h-[61px]">
              <h3 className="text-[#595959] text-[16px] font-bold xl:text-[24px]">200 Бал</h3>
            </div>
          </div>
        </div>

        {isModalVisible && (
          <div
            className="fixed inset-0 bg-[#212121AD] flex items-center justify-center z-50"
            onClick={closeModal}>
            <TakeTheTestForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
