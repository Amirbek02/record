import React from "react";
import ContactButtons from "../UI/ContactButton";
import Image from "next/image";

const TeamMember: React.FC<{
  name?: string;
  image: string;
  customClass: string;
  extraContent?: React.ReactNode;
}> = ({ name, image, customClass, extraContent }) => (
  <div className={`rounded-lg overflow-hidden shadow-md ${customClass}`}>
    <Image
      src={image}
      alt={name || "Team Member"}
      layout="responsive"
      width={150}
      height={150}
      className="rounded-lg"
    />
    {name && (
      <div className="absolute bottom-2 left-2 bg-gray-300 opacity-70 px-3 py-1 rounded-full shadow flex items-center ">
        <Image
          src="/images/AboutUs/Group58.png"
          alt="icon"
          width={18}
          height={18}
          className="mr-2   text-[#ffffff]"
        />
        <p className="text-[10px] lg:text-xs font-semibold text-[#ffffff] opacity-100 z-100">
          {name}
        </p>
      </div>
    )}
    {extraContent && <div className="absolute bottom-2 left-2">{extraContent}</div>}
  </div>
);

const FeatureItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
    <div className="w-[60px] h-[60px] bg-gray-100 flex items-center justify-center rounded-full ">
      <Image src={icon} alt="feature icon" width={28} height={28} />
    </div>
    <div className="flex-1 text-gray-700 leading-[40px]">{text}</div>
  </div>
);

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Нуржан",
      image: "/images/AboutUs/image7.jpg",
      customClass:
        "absolute mt-[40px] w-[133px] h-[133px] top-[-70px] left-[60px] lg:w-[160px] lg:h-[160px] lg:top-[-100px] lg:left-[250px] mb-[20px]",
    },
    {
      id: 2,
      name: "Адыл",
      image: "/images/AboutUs/image8.jpg",
      customClass:
        "absolute mt-[40px] w-[152px] h-[140px] right-[8px] top-[-90px] md:w-[202px] md:h-[200px] lg:w-[202px] lg:h-[200px] lg:top-[-70px] lg:right-[50px]",
    },
    {
      id: 3,
      image: "/images/AboutUs/portrait-teacher-giving-online-class 1.jpg",
      customClass:
        "absolute w-[280px] h-[220px] bottom-[100px] md:w-[300px] md:h-[243px] lg:w-[320px] lg:h-[260px] mt-[20px] lg:bottom-[80px] lg:left-[24px] lg:right-[72px]",
      extraContent: (
        <div className="relative mb-[30px] sm:z-[9999] flex items-center bg-gray-300 rounded-full h-[26px] px-2 space-x-2 text-white  z-100">
          <div className="bg-blue-600 text-[#ffffff] px-4 py-1 rounded-full text-xs font-semibold">
            Математика
          </div>
          <div className="text-xs font-semibold text-[#ffffff]">Алтынай</div>
        </div>
      ),
    },
    {
      id: 4,
      name: "Айжан",
      image: "/images/AboutUs/image10.jpg",
      customClass:
        "absolute bottom-[-60px] right-[0px] w-[196px] h-[184px] md:w-[240px] md:h-[226px] lg:w-[240px] lg:h-[226px] lg:bottom-[20px] lg:right-[30px]",
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
    <div className="flex items-center justify-center min-h-screen ">
      <section className="relative py-8 sm:py-16 ">
        <h2 className="mb-[24px] text-[24px] sm:text-center sm:mb-[60px] px-4 lg:text-[40px] font-medium  text-blue-700 text-left lg:mb-[130px]">
          Биз жөнүндө
        </h2>

        <div className="container  lg:mx-auto  lg:px-4 lg:px-0 flex flex-col gap-4 sm:gap-[30px] lg:gap-8 lg:flex-row ">
          <div className="  w-full lg:text-[24px] font-semibold lg:w-[518px] lg:mt-[70px] space-y-10 order-1 lg:order-2">
            {features.map((feature, index) => (
              <FeatureItem key={index} icon={feature.icon} text={feature.text} />
            ))}
          </div>
 



          
          <div className="relative w-[360px] h-[447px] mt-[60px] sm:w-full lg:w-[705px] lg:h-[447px] bg-gray-100 rounded-lg shadow-lg py-6 px-4 order-2 lg:order-1">
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
            <div className="absolute sm:mt-6 lg:bottom-[15px] ">
              <ContactButtons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
