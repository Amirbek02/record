"use client";
import React from "react";
import Image from "next/image";
import blockData from "@/components/admin/leading/LeadingPage";

const TestPage = ({ blockData }) => {
  const { blockOne, blockTwo, blockThree, blockFour } = blockData;

  return (
    <div className="p-6 space-y-12">
      {/* 1-Блок */}
      <div className="p-6 border rounded-lg shadow-lg bg-white max-w-md mx-auto">
        <div className="mb-4">
          {blockOne.text.map((line, index) => (
            <p key={index} className="text-lg font-medium">
              {line}
            </p>
          ))}
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {blockOne.buttonText}
        </button>
        <div className="mt-4 flex flex-col items-center">
          <div className="border border-dashed border-gray-400 rounded-lg p-4 w-full h-32 flex items-center justify-center">
            <p className="text-gray-500">{blockOne.uploadText}</p>
          </div>
        </div>
      </div>

      {/* 2-Блок */}
      <div className="p-6 border rounded-lg shadow-lg bg-white max-w-2xl mx-auto">
        <h2 className="text-lg font-medium mb-4">{blockTwo.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {blockTwo.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-gray-500">⬇️</span>
              </div>
              <p className="text-sm text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Блок */}
      <div className="p-6 border rounded-lg shadow-lg bg-white max-w-md mx-auto">
        <h2 className="text-lg font-medium mb-4">{blockThree.title}</h2>
        <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
          <div className="w-full h-40 bg-gray-100 flex items-center justify-center mb-4">
            <p className="text-gray-500">{blockThree.imageText}</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              -
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              +
            </button>
          </div>
        </div>
      </div>

      {/* 4-Блок */}
      <div className="p-6 border rounded-lg shadow-lg bg-white max-w-lg mx-auto">
        <h2 className="text-lg font-medium mb-4">{blockFour.title}</h2>
        <div className="space-y-4">
          {blockFour.tasks.map((task, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 bg-gray-50"
            >
              <h3 className="text-sm font-bold">{task.label}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
