import React from "react";
import Image from "next/image";

const training = [
  {
    id: 1,
    imgSrc: "/images/Vector.svg",
    title: "01. Видео сабак",
    description:
      "Видеосабактар көргөнгө ыңгайлуу. Каалаган убакта кайра кайра көргөнгө мүмкүнчүлүк түзөт.",
  },
  {
    id: 2,
    imgSrc: "/images/Vector1.svg",
    title: "Тест",
    description:
      "Сабактарды көргөн соң, тест тапшыруу менен канчалык теманы түшүнгөнүңүздү текшерсеңиз болот.",
  },
  {
    id: 3,
    imgSrc: "/images/Vector2.svg",
    title: "Университет",
    description: "Кесип, университет тандоо боюнча да сабактар болот",
  },
];

const Training = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #2E3095 19.25%, #0F0F2F 100%)",
      }}
      className="pt-10 pb-5 sm:pb-16 sm:pt-20"
    >
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center mb-8">
          <h2 className=" text-2xl md:text-3xl pb-6 text-white lg:text-[40px] font-medium mb-2">
            ЖРТ ка кантип даярдайбыз?
          </h2>
          <p className="text-white hidden lg:block pb-4 sm:pb-16 font-medium text-lg md:text-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-3">
          {training.map((item) => (
            <React.Fragment key={item.id}>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex justify-center">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={94}
                    height={71}
                  />
                </div>
                <p className="text-white text-[25px] text-center">
                  {item.title}
                </p>
                <h4 className="text-white text-[18px] text-center">
                  {item.description}
                </h4>
              </div>

              {item.id !== 3 && (
                <div className="rotate-90 lg:rotate-0">
                  <Image
                    src="/images/Line.svg"
                    alt="divider"
                    width={2}
                    height={249}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
