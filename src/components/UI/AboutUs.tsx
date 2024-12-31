import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-16">
      <h2 className="text-4xl font-semibold text-[#4C4C4C] mb-[53px] text-center">
        Биз жөнүндө
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-[23px]">
        {/* Левая часть: Карточки с изображениями */}
        <div
          className="relative w-[705px] h-[447px] bg-gray-100 rounded-lg shadow-lg"
          style={{ background: "#F3F4F6" }}
        >
          {/* Верхний индикатор */}
          <div className="flex justify-start gap-2 ml-[23px] mt-[8px]">
            <div className="w-[13px] h-[13px] bg-[#EE6767] rounded-full"></div>
            <div className="w-[13px] h-[13px] bg-[#F6C566] rounded-full"></div>
            <div className="w-[13px] h-[13px] bg-[#5BEB7B] rounded-full"></div>
          </div>

          {/* Карточка 1 */}
          <div className="absolute top-[-40px] left-[210px] w-[160px] h-[160px] rounded-lg shadow-lg">
            <img
              src="/images/AboutUs/image7.jpg"
              alt="Нуржан"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 w-auto h-[30px] px-3 py-1 rounded-md shadow flex items-center">
              <img
                src="/icons/Group58.png"
                alt="internet"
                className="w-[16px] h-[16px] mr-2 z-10"
              />
              <div className="absolute inset-0 bg-[#C9D3E7] opacity-40 rounded-lg"></div>
              <div className="relative z-10">
                <p className="text-sm font-semibold text-white" style={{color:"white"}}>Нуржан</p>
              </div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="absolute top-[-23px] right-[68px] w-[203px] h-[200px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/AboutUs/image8.jpg"
              alt="Адыл"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex items-center bottom-[-8px] left-[51px] right-2 w-[140px] h-[30px] px-3 py-1 rounded-lg shadow">
              <div
                className="absolute inset-0 bg-[#C9D3E7] opacity-40 rounded-lg"
                style={{ backdropFilter: "blur(16px)" }}
              ></div>
              <div className="relative flex items-center z-10">
                <img
                  className="w-[16px] h-[16px] mr-2"
                  src="/icons/Group58.png"
                  alt="internet"
                />
                <p className="text-sm font-semibold text-white" style={{color:"white"}}>Адыл</p>
              </div>
            </div>
          </div>

          {/* Карточка 3: Алтынай */}
          <div
            className="absolute bottom-[78px] left-[18px] w-[300px] h-[243px] rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundColor: "rgba(201, 211, 231, 0.4)" }}
          >
            <img
              src="/images/AboutUs/portrait-teacher-giving-online-class 1.jpg"
              alt="Алтынай"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 w-auto h-[30px] px-3 py-1 rounded-full shadow">
              <div className="absolute inset-0 w-[199px] h-[22px] bg-[#C9D3E7] opacity-40 rounded-full"></div>
              <div className="relative flex items-center z-10">
                <img
                  src="/icons/Group58.png"
                  alt="internet"
                  className="w-[16px] h-[16px] mr-2"
                />
                <div className="flex flex-row text-white">
                  <p className="w-[86px] h-[16px] font-semibold text-[10px] text-center mr-[20px] bg-blue-600 rounded-full" style={{color:"white"}}>
                    Математика
                  </p>
                  <p className="text-[11px]" style={{color:"white"}}>Алтынай</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 4: Айжан */}
          <div
            className="absolute bottom-[16px] right-[60px] w-[240px] h-[226px] rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundColor: "rgba(230, 255, 230, 0.4)" }}
          >
            <img
              src="/images/AboutUs/image10.jpg"
              alt="Айжан"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-2 left-2 w-[159px] h-[30px] px-3 py-1 rounded-lg shadow flex items-center"
              style={{
                backdropFilter: "blur(16px)",
                backgroundColor: "#C9D3E766",
              }}
            >
              <img
                src="/icons/Group58.png"
                alt="internet"
                className="w-[16px] h-[16px] mr-2 z-10"
              />
              <div className="relative z-10">
                <p className="text-sm font-semibold text-white" style={{color:"white"}}>Айжан</p>
              </div>
            </div>
          </div>

          {/* Кнопки */}
          <div className="absolute mt-[16px] bottom-[16px] left-[16px] flex flex-row gap-4">
  <a
    href="mailto:example@example.com"
    className="px-6 py-3 text-[18px] font-semibold rounded-xl shadow-md  text-[#2E3095] hover:bg-[#2E3095] hover:text-[#ffffff] transition-colors"
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
            <li className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] aspect-square bg-[#FBFBFB] flex items-center justify-center rounded-full">
                <img
                  src="/images/AboutUs/Group72.jpg"
                  alt="users"
                  className="w-[28px] h-[26px]"
                />
              </div>
              <p className="text-[24px] text-gray-700">
                Кесиптин мыкты билген агай - эжейлерден видео сабактар.
              </p>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] aspect-square bg-[#FBFBFB] flex items-center justify-center rounded-full">
                <img
                  src="/images/AboutUs/Group73.jpg"
                  alt="users"
                  className="w-[28px] h-[26px]"
                />
              </div>
              <p className="text-[24px] text-gray-700">Кайтарым байланыш.</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] aspect-square bg-[#FBFBFB] flex items-center justify-center rounded-full">
                <img
                  src="/images/AboutUs/users2.jpg"
                  alt="users"
                  className="w-[30px] h-[26px]"
                />
              </div>
              <p className="text-[24px] text-gray-700">
                ЖРТ га биз менен даярданган +100 окуучулар алдынкы
                университеттерге окууга тапшырды.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
