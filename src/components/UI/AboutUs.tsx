import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Нуржан",
      image: "/images/AboutUs/image7.jpg",
      style: { top: "-40px", left: "210px", width: "160px", height: "160px" },
      blockStyle: { width: "93px", height: "30px" }, // размер блока
    },
    {
      id: 2,
      name: "Адыл",
      image: "/images/AboutUs/image8.jpg",
      style: { top: "-23px", right: "68px", width: "203px", height: "200px" },
      blockStyle: {
        width: "159px",
        height: "30px",
        bottom: "-10px", // выравнивание блока
        left: "40px", 
      }, 
    },
    {
      id: 3,
      image: "/images/AboutUs/portrait-teacher-giving-online-class 1.jpg",
      style: { bottom: "78px", left: "18px", width: "300px", height: "243px" },
      extraContent: (
        <div className="flex flex-row text-white">
          <p className="w-[86px] h-[16px] font-semibold text-[10px] text-center bg-blue-600 rounded-full z-10 text-[#FFFFFF]">
            Математика
          </p>
          <p className="text-[11px] font-semibold ml-[15px] text-[#FFFFFF]">
            Алтынай
          </p>
        </div>
      ),
    },
    {
      id: 4,
      name: "Айжан",
      image: "/images/AboutUs/image10.jpg",
      style: { bottom: "16px", right: "60px", width: "240px", height: "226px" },
      blockStyle: { width: "159px", height: "30px" }, 
    },
  ];

  const features = [
    {
      icon: "/images/AboutUs/Group72.jpg",
      text: "Кесиптин мыкты билген агай - эжейлерден видео сабактар.",
    },
    { icon: "/images/AboutUs/Group73.jpg", text: "Кайтарым байланыш." },
    {
      icon: "/images/AboutUs/users2.jpg",
      text: "ЖРТ га биз менен даярданган +100 окуучулар алдынкы университеттерге окууга тапшырды.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16">
      <h2 className="text-4xl font-semibold text-[#4C4C4C] mb-[53px] text-center">
        Биз жөнүндө
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-[23px]">
        {/* Левая часть */}
        <div
          className="relative w-[705px] h-[447px] bg-gray-100 rounded-lg shadow-lg"
          style={{ background: "#F3F4F6" }}
        >
          <div className="flex justify-start gap-2 ml-[23px] mt-[8px]">
            <div className="w-[13px] h-[13px] bg-[#EE6767] rounded-full"></div>
            <div className="w-[13px] h-[13px] bg-[#F6C566] rounded-full"></div>
            <div className="w-[13px] h-[13px] bg-[#5BEB7B] rounded-full"></div>
          </div>

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="absolute rounded-lg overflow-hidden shadow-lg"
              style={member.style}
            >
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
              <div
                className="absolute bottom-2 left-2 px-3 py-1 rounded-md shadow flex items-center"
                style={member.blockStyle}
              >
                <div
                  className="absolute inset-0 bg-[#C9D3E7] opacity-40 rounded-lg"
                  style={{ backdropFilter: "blur(16px)" }}
                ></div>
                <div className="relative z-10 flex items-center">
                  <img
                    src="/icons/Group58.png"
                    alt="internet"
                    className="w-[16px] h-[16px] mr-2"
                  />
                  {member.name && (
                    <p className="text-[11px] font-semibold text-[#FFFFFF]">
                      {member.name}
                    </p>
                  )}
                </div>
                {member.extraContent && member.extraContent}
              </div>
            </div>
          ))}

          {/* Кнопки */}
          <div className="absolute mt-[16px] bottom-[16px] left-[16px] flex flex-row gap-4">
            <a
              href="mailto:example@example.com"
              className="px-6 py-3 text-[18px] font-semibold rounded-xl shadow-md text-[#2E3095] hover:bg-[#2E3095] hover:text-[#ffffff] transition-colors"
            >
              Кат куржуну
            </a>
            <a
              href="tel:+996704164171"
              className="px-6 py-3 text-[18px] font-semibold rounded-xl shadow-md text-[#2E3095] hover:bg-[#2E3095] hover:text-[#ffffff] transition-colors"
            >
              Чалуу
            </a>
          </div>
        </div>

        {/* Правая часть */}
        <div className="flex flex-col justify-between w-[508px] ml-[23px]">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] aspect-square bg-[#FBFBFB] flex items-center justify-center rounded-full">
                  <Image
                    src={feature.icon}
                    alt="icon"
                    width={28}
                    height={26}
                  />
                </div>
                <p className="text-[24px] text-gray-700">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
