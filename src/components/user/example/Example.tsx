import React from "react";

interface ExamplePageProps {
  title: string;
  subtitle: string;
  sectionTitle: string;
  instructionsTitle: string;
  comparisonDetails: {
    points: {
      columnA: string;
      columnB: string;
      result: string;
      result1: string;
      result2: string;
      result3: string;
    }[];
  };
  additionalDetails: {
    title: string;
    content: string[];
  }[];
  backButtonText: string;
  startButtonText: string;
}

const ExamplePage: React.FC<ExamplePageProps> = ({
  title,
  subtitle,
  sectionTitle,
  instructionsTitle,
  comparisonDetails,
  additionalDetails,
  backButtonText,
  startButtonText,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {comparisonDetails.points.map((point, index) => (
        <div key={index} className="text-center mb-3 sm:mb-8">
          <h2 className="text-[16px] md:text-2xl lg:text-3xl text-[#4C4C4C] font-medium mb-2">
            {title}
          </h2>
          <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-red">
            {subtitle}
          </p>
          <h1 className="font-medium text-lg sm:text-xl lg:text-2xl underline mt-2">
            {sectionTitle}
          </h1>
          <p className="font-semibold text-center sm:text-left text-lg sm:text-xl sm:mt-6">
            {instructionsTitle}
          </p>
        </div>
      ))}
      <div className="text-justify">
        <p className="text-[10px] lg:block hidden md:block sm:text-lg lg:text-2xl mb-4">
          1-ден 30 чейинки суроолор эки чоңдукту камтыйт,алардын ар бири тик
          буртуу рамкага : бири{" "}
          <b className="uppercase underline tet-[13px] lg:text-[24px] sm:text-xl">
            {comparisonDetails.points[0].columnA}
          </b>
          , экинчиси{" "}
          <b className="uppercase underline tet-[13px] lg:text-[24px] sm:text-xl">
            {comparisonDetails.points[0].columnA}
          </b>{" "}
          алынган . Сиз бул эки чондукту салыштыруунуз жана жоопту тандап
          алуунуз керек:
        </p>
        <div className="flex justify-center">
          <h3 className="text-[10px] sm:text-base lg:text-2xl w-full md:w-3/4">
            <span>
              Эгерде{" "}
              <b className="uppercase underline tet-[13px] lg:text-[24px] sm:text-xl">
                {comparisonDetails.points[0].columnA}
              </b>{" "}
              чондук чон болсо, анда ({comparisonDetails.points[0].result1});{" "}
              <br />
              Эгерде{" "}
              <b className="uppercase underline tet-[13px] lg:text-[24px] sm:text-xl">
                {comparisonDetails.points[0].columnB}
              </b>{" "}
              чондук чон болсо, анда ({comparisonDetails.points[0].result}).{" "}
              <br />
              Эгерде эки чондук барабар болсо, анда (
              {comparisonDetails.points[0].result2}). <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              corporis earum ab distinctio cum. (
              {comparisonDetails.points[0].result3}). <br />
            </span>
          </h3>
        </div>

        {additionalDetails.map((detail, index) => (
          <div key={index} className="mt-6">
            <h3 className="font-bold lg:text-[24px] text-[13px]">
              {detail.title}
            </h3>
            {detail.content.map((text, subIndex) => (
              <p key={subIndex} className="sm:text-2xl text-[10px]">
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-5 justify-end mt-8">
        <button className="border text-xs sm:text-xl font-semibold bg-[#E0E0E0] hover:bg-gray-300 w-full md:w-[185px] py-2 rounded-[10px]">
          {backButtonText}
        </button>
        <button className="border text-xs sm:text-xl font-semibold text-white bg-blue-800  hover:bg-sky-800 w-full md:w-[245px] py-2 rounded-[10px]">
          {startButtonText}
        </button>
      </div>
    </div>
  );
};

export default ExamplePage;
