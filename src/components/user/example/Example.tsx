"use client";

import React from "react";

interface ExamplePageProps {
  title: string;
  subtitle: string;
  sectionTitle: string;
  instructionsTitle: string;
  comparisonDetails: {
    text: string;
    points: string[];
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
      <div className="text-center mb-3 sm:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#4C4C4C] font-medium mb-2">
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

      <div className="text-justify">
        <p className="text-[10px] sm:text-lg lg:text-2xl mb-4">
          {comparisonDetails.text}
        </p>
        <div className="flex justify-center">
          <h3 className="text-[10px] sm:text-base lg:text-2xl w-full md:w-3/4">
            {comparisonDetails.points.map((point, index) => (
              <span key={index}>
                {point} <br />
              </span>
            ))}
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
        <button className="border text-xs sm:text-xl font-semibold bg-gray-200 hover:bg-gray-300 w-full md:w-[185px] py-2 rounded-lg">
          {backButtonText}
        </button>
        <button className="border text-xs sm:text-xl font-semibold text-white bg-sky-700 hover:bg-sky-800 w-full md:w-[245px] py-2 rounded-lg">
          {startButtonText}
        </button>
      </div>
    </div>
  );
};

export default ExamplePage;
