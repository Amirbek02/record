import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamMember: React.FC<{
  name?: string;
  image: string;
  customClass: string;
  extraContent?: React.ReactNode;
}> = ({ name, image, customClass, extraContent }) => (
  <div className={`rounded-xl overflow-hidden shadow-md ${customClass}`}>
    <Image
      src={image}
      alt={name || "Team Member"}
      layout="responsive"
      width={150}
      height={150}
      className="rounded-lg"
    />
    {name && (
      <div className="absolute bottom-2 left-2 bg-gray-200 bg-opacity-70 text-white px-3 py-1 rounded-full flex items-center">
        <Image
          src="/images/AboutUs/Group58.png"
          alt="icon"
          width={18}
          height={18}
          className="mr-2"
        />
        <p className="text-[10px] lg:text-xs font-semibold text-white">
          {name}
        </p>
      </div>
    )}
    {extraContent && (
      <div className="absolute bottom-2 left-2">{extraContent}</div>
    )}
  </div>
);

const FeatureItem: React.FC<{ icon: string; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
    <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[60px] bg-gray-100 flex items-center justify-center rounded-full ">
      <Image src={icon} alt="feature icon" width={25} height={28} />
    </div>
    <div className="flex-1 text-gray-700 text-[14px] lg:leading-[40px] md:leading-[40px] leading-[20px]">
      {text}
    </div>
  </div>
);

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Нуржан",
      image: "/images/AboutUs/image7.jpg",
      customClass:
        "absolute mt-[40px] w-[133px] h-[133px] sm:left-[200px] left-[55px] top-[-70px] md:left-[300px] lg:left-[60px] lg:w-[160px] lg:h-[160px] lg:top-[-100px] lg:left-[250px] mb-[20px]",
    },
    {
      id: 2,
      name: "Адыл",
      image: "/images/AboutUs/image8.jpg",
      customClass:
        "absolute mt-[40px] w-[152px] h-[140px] right-[0px] top-[-90px] md:w-[202px] md:h-[200px] lg:w-[202px] lg:h-[200px] lg:top-[-70px] lg:right-[50px]",
    },
    {
      id: 3,
      image: "/images/AboutUs/portrait-teacher-giving-online-class 1.jpg",
      customClass:
        "absolute w-[280px] h-[220px] bottom-[100px] md:w-[300px] md:h-[243px] lg:w-[320px] lg:h-[260px] mt-[20px] lg:bottom-[80px] lg:left-[24px] lg:right-[72px]",
      extraContent: (
        <div className="relative mb-[30px]  sm:z-[9999] flex items-center bg-opacity-60  bg-[#C9D3E7] rounded-[8px] h-[26px] px-2  text-white  z-100">
          <Image
            src="/images/AboutUs/Group58.png"
            alt="icon"
            width={18}
            height={18}
            className="mr-2"
          />
          <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
            Математика
          </div>
          <div className="text-xs font-semibold pl-2 text-white">Алтынай</div>
        </div>
      ),
    },
    {
      id: 4,
      name: "Айжан",
      image: "/images/AboutUs/image10.jpg",
      customClass:
        "absolute bottom-[-60px] right-[0px] w-[196px] h-[180px] md:w-[240px] md:h-[226px] lg:w-[240px] lg:h-[226px] lg:bottom-[20px] lg:right-[30px]",
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
    <div>
      <div className="flex hidden lg:block items-center justify-center ">
        <div>
          <section className="relative max-w-7xl mx-auto ">
            <h2 className=" text-[24px] lg:pb-0 md:pb-0 pb-5 sm:text-center sm:mb-[60px] px-4 lg:text-[40px] font-semibold lg:font-medium   text-blue-700 text-left lg:mb-[60px]">
              Биз жөнүндө
            </h2>

            <div className="container    lg:mx-auto  lg:px-4 flex flex-col gap-4 sm:gap-[30px] lg:gap-8 lg:flex-row ">
              <div className="  w-full  lg:text-[24px] font-semibold lg:w-[518px] lg:mt-[70px] space-y-10 order-1 lg:order-2">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={feature.icon}
                    text={feature.text}
                  />
                ))}
              </div>

              <div className="relative w-[360px] h-[447px] rounded-xl mt-[60px] sm:w-full lg:w-[705px] lg:h-[447px] bg-gray-100  py-6 px-4 order-2 lg:order-1">
                <div className="absolute top-4 left-4">
                  <ul className=" gap-[2px] mr-[12px] flex space-x-2 lg:gap-[9px]">
                    <li className="w-[6px] h-[6px] lg:w-[13px] lg:h-[13px] rounded-full bg-[#5BEB7B]"></li>
                    <li className="w-[6px] h-[6px] lg:w-[13px] lg:h-[13px] rounded-full bg-[#F6C566]"></li>
                    <li className="w-[6px] h-[6px] lg:w-[13px] lg:h-[13px] rounded-full bg-[#EE6767]"></li>
                  </ul>
                </div>

                {teamMembers.map((member) => (
                  <TeamMember key={member.id} {...member} />
                ))}

                {/* Кнопки */}
                <div className=" left-0 flex gap-5 sm:mt-6 ">
                  <div className="">
                    <Link
                      className="border absolute w-auto bottom-2  rounded-[20px] p-2  bg-white hover:bg-blue-800 text-black hover:text-white font-bold text-[22px]  "
                      href="/"
                    >
                      Кат куржуну
                    </Link>
                  </div>

                  <div className="">
                    <Link
                      className="border rounded-[20px] bottom-[160px] lg:bottom-2   lg:left-52  absolute  p-2 pl-7 bg-emerald-500 lg:bg-blue-800 hover:bg-white  text-white hover:text-black font-bold text-[22px] pr-7"
                      href="/"
                    >
                      Чалуу
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="relative lg:hidden block max-w-7xl mx-auto ">
        <div className="flex flex-col items-center justify-center">
          {" "}
          <h2 className=" text-[24px] pb-10 sm:text-center  px-4  font-semibold   text-blue-700 text-left ">
            Биз жөнүндө
          </h2>
          <div className="container       flex flex-col gap-4 sm:gap-[30px]  ">
            <div className="  w-full font-semibold  space-y-10 order-1 ">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  text={feature.text}
                />
              ))}
            </div>

            <div className="relative w-auto h-[447px] rounded-xl mt-[60px] sm:w-full  bg-gray-100  py-6 px-4 order-2">
              <div className="absolute top-4 left-4">
                <ul className=" gap-[2px] mr-[12px] flex space-x-2 ">
                  <li className="w-[6px] h-[6px] lg:w-[13px] lg:h-[13px] rounded-full bg-[#5BEB7B]"></li>
                  <li className="w-[6px] h-[6px] lg:w-[13px] lg:h-[13px] rounded-full bg-[#F6C566]"></li>
                  <li className="w-[6px] h-[6px] lg:w-[13px] lg:h-[13px] rounded-full bg-[#EE6767]"></li>
                </ul>
              </div>

              {teamMembers.map((member) => (
                <TeamMember key={member.id} {...member} />
              ))}

              {/* Кнопки */}
              <div className=" left-0 flex gap-5 sm:mt-6 ">
                <div className="">
                  <Link
                    className="border absolute w-auto bottom-2  rounded-[20px] p-2  bg-white hover:bg-blue-800 text-black hover:text-white font-bold text-[16px] sm:text-[22px]  "
                    href="/"
                  >
                    Кат куржуну
                  </Link>
                </div>

                <div className="">
                  <Link
                    className="border rounded-[20px] bottom-[160px]  absolute  p-2 pl-7 bg-emerald-500 hover:bg-white  text-white hover:text-black font-bold text-[22px] pr-7"
                    href="/"
                  >
                    Чалуу
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
