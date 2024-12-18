import React from "react";
import Image from "next/image";

const Training = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #2E3095 19.25%, #0F0F2F 100%)",
      }}
      className=" pt-10 pb-5 sm:pb-16 sm:pt-20"
    >
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl pb-6 text-white lg:text-[40px] font-medium mb-2">
            ЖРТ ка кантип даярдайбыз?
          </h2>
          <p className="text-white hidden lg:block pb-4 sm:pb-16 font-medium text-lg md:text-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center">
              <Image
                src="/images/Vector.svg"
                alt="Video lesson"
                width={94}
                height={71}
              />
            </div>
            <p className="text-white text-[25px] text-center">
              01. Видео сабак
            </p>
            <h4 className="text-white text-[18px] text-center">
              Видеосабактар көргөнгө ыңгайлуу. Каалаган убакта кайра кайра
              көргөнгө мүмкүнчүлүк түзөт.
            </h4>
          </div>

          <div className="rotate-90 lg:rotate-0">
            <Image src="/images/Line.svg" alt="img" width={2} height={249} />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center">
              <Image
                src="/images/Vector1.svg"
                alt="Video lesson"
                width={94}
                height={71}
              />
            </div>
            <p className="text-white text-[25px] text-center">Тест</p>
            <h4 className="text-white text-[18px] text-center">
              Сабактарды көргөн соң, тест тапшыруу менен канчалык теманы
              түшүнгөнүңүздү текшерсеңиз болот.
            </h4>
          </div>

          <div className="rotate-90 lg:rotate-0">
            <Image src="/images/Line.svg" alt="img" width={2} height={249} />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center">
              <Image
                src="/images/Vector2.svg"
                alt="Video lesson"
                width={94}
                height={71}
              />
            </div>
            <p className="text-white text-[25px] text-center">Университет</p>
            <h4 className="text-white pb-18 text-[18px] text-center">
              Кесип, университет тандоо боюнча да сабактар болот
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
