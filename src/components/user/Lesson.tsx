import React from "react";
import Link from "next/link";

const VideoLessons = () => {
  const lessons = [
    {
      id: 1,
      title: "Кыргыз тил",
      description:
        "Vitae id porta viverra vitae id viverra non, nec ipsum ipsum ex viverra consectetur massa",
      tag: "Кыргыз тил",
      video: "/video/2.mp4",
    },
    {
      id: 2,
      title: "Математика",
      tag: "Математика боюнча даярдалган видео сабакка кош келиңиз",
      description:
        "30 Видео сабак 4 тестик суроо камтылган. Сабакты көрүп бүткөндөн кийин...",
      video: "/video/2.mp4",
    },
    {
      id: 3,
      title: "Англис тил",
      tag: "Тарых боюнча даярдалган видео сабакка кош келиңиз",
      description:
        "30 Видео сабак 4 тестик суроо камтылган. Сабакты көрүп бүткөндөн кийин...",
      video: "/video/2.mp4",
    },
    {
      id: 4,
      title: "Биология",
      tag: "Биология боюнча даярдалган видео сабакка кош келиңиз",
      description:
        "30 Видео сабак 4 тестик суроо камтылган. Сабакты көрүп бүткөндөн кийин...",
      video: "/video/2.mp4",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-[32px] font-medium mb-2">
          Видео сабактар
        </h2>
        <p className="text-[#002038] font-medium text-lg md:text-xl">
          ЖРТ га даярдалган видео сабактар
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2     items-center  ">
          <div className="relative">
            <video
              className="w-full h-auto md:max-w-[900px] lg:max-w-[525px] rounded-xl border"
              autoPlay
              muted
              loop
            >
              <source src="/video/2.mp4" type="video/mp4" />
              <source src="/video/2.webm" type="video/webm" />
              Ваш браузер не поддерживает видео.
            </video>
            <span className="absolute m-2 bottom-0 left-0  bg-green-600 text-white px-4 py-1 rounded-full z-10">
              Кыргыз тил
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-semibold">
            Кыргыз тил боюнча даярдалган видео сабакка кош келиңиз
          </h3>
          <p className="text-gray-500 text-sm md:text-base">
            30 Видео сабак 4 тестик суроо камтылган. Сабакты көрүп бүткөндөн
            кийин 4 тестик суроону аткарууга 10 мүнөт убакыт берилет.
          </p>
          <Link href="#" className=" font-semibold">
            Толук оку
          </Link>
        </div>

        <div className="space-y-6">
          {lessons.slice(1).map((lesson) => (
            <div
              key={lesson.id}
              className="flex flex-col sm:flex-row gap-4 items-center  pb-4"
            >
              <div className="relative">
                <video
                  className="w-full h-auto sm:max-w-[600px] md:max-w-[600px] lg:max-w-[300px] max-h-[200px] rounded-xl border"
                  autoPlay
                  muted
                  loop
                >
                  <source src={lesson.video} type="video/mp4" />
                  <source src={lesson.video} type="video/webm" />
                  Ваш браузер не поддерживает видео.
                </video>

                <span className=" absolute text-[14px] cursor-pointer z-10 right-2 bottom-0 bg-green-600 text-white px-2 py-1 rounded-full mb-2">
                  {lesson.title}
                </span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold  ">
                  {lesson.tag}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {lesson.description}
                </p>
                <Link
                  href="/"
                  className=" sm:hidden mt-1 text-lg font-semibold flex justify-center"
                >
                  Толук окуу
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoLessons;
