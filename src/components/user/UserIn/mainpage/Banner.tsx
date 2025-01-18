//жалпы республикалык тестке онлайн даярдан баннер
"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

type BannerData = {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
  subjects: string;
  subjects1?: string;
  subjects2?: string;
  subjects3?: string;
  subjects4?: string;
  subjects5?: string;
};

const banners: BannerData[] = [
  {
    id: 1,
    imageSrc: "/images/education.png",
    title: "Жалпы республикалык тестке",
    subtitle: "Онлайн даярдан",
    subjects: "Кыргыз тил",
    subjects1: "Математика",
    subjects2: "Англис тил",
    subjects3: "Физика",
    subjects4: "Тарых",
    subjects5: "Биология",
  },
];

export default function Banner() {
  const isDesktop = useMediaQuery({ minWidth: 700 });
  const isMobile = useMediaQuery({ maxWidth: 699 });

  return (
    <div className="lg:mt-[130px] mt-[40px] p-2 ">
      {banners.map((banner) => {
        const allSubjects = [
          banner.subjects,
          banner.subjects1,
          banner.subjects2,
          banner.subjects3,
          banner.subjects4,
          banner.subjects5,
        ].filter(Boolean);

        return (
          <div key={banner.id}>
            {isDesktop && (
              <div className="relative ml-10  flex items-center justify-between bg-[#2E3095] rounded-tl-[300px] rounded-tr-[30px] rounded-br-[200px] max-w-[838px] h-[200px] mx-auto p-4 lg:pt-[30px]">
                <div className="absolute left-[-200px] bottom-0 w-[500px]">
                  <Image
                    src={banner.imageSrc}
                    alt="Education"
                    width={600}
                    height={400}
                    className="object-contain"
                  />
                </div>

                <div className="flex relative flex-col pl-0 xs:pl-[20px] sm:items-center sm:pl-[30px] sm:text-center lg:items-center lg:text-center text-white w-full">
                  <h2 className="text-xl font-semibold">{banner.title}</h2>
                  <h1 className="text-3xl text-[#FFE500] font-bold mt-2">
                    {banner.subtitle}
                  </h1>
                  <div className=" hidden md:block  lg:block">
                    <ul className=" sm:flex max-w-[400px] items-center text-center justify-center  flex-wrap text-[16px] mt-2 gap-5">
                      {allSubjects.map((subject, index) => (
                        <li
                          key={index}
                          className="flex  font-bold text-[16px] "
                        >
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Image
                    className="absolute right-[-40px] md:right-[-20px] bottom-[-80px] md:block h-[155px] hidden lg:block"
                    src="/images/test foto.png"
                    alt=""
                    width={215}
                    height={155}
                  />
                </div>
              </div>
            )}

            {isMobile && (
              <div className="border border-red relative flex items-center justify-between bg-[#2E3095] rounded-tr-[20px] rounded-bl-[150px] rounded-tl-[100px] rounded-br-[170px] max-w-[338px] h-[105px] mx-auto p-6">
                <div className="absolute left-[-80px] bottom-0 w-[250px]">
                  <Image
                    src={banner.imageSrc}
                    alt="Education"
                    width={300}
                    height={250}
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col pl-[60px] items-center text-center text-white w-full">
                  <h2 className="text-[14px]">{banner.title}</h2>
                  <h1 className="text-[16px] text-[#FFE500] font-bold mt-2">
                    {banner.subtitle}
                  </h1>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
