"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";

const AboutPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="justify-center items-center flex min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-4">
        <div className="w-full relative md:w-[669px] flex flex-col md:flex-row h-auto border rounded-[10px] border-black p-6 bg-white shadow-lg">
          <div className="flex  ">
            <p className="absolute  left-0 top-0 opacity-40 rounded-tl-[10px] pl-2 pr-2 bg-slate-400 ">
              3-блок{" "}
            </p>

            <div className="flex absolute right-0 top-0 ">
              <EditDeleteRefresh />
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* Верхний элемент */}
            <div className="flex flex-col mt-5 mr-20 justify-center items-center mb-4 md:mb-0 border rounded-xl border-black h-[200px] w-[236px]">
              {selectedImage ? (
                <Image
                  width={180}
                  height={170}
                  alt="Selected"
                  src={URL.createObjectURL(selectedImage)}
                  className="w-full h-full object-contain rounded-xl"
                />
              ) : (
                <div
                  className="cursor-pointer rounded-lg p-3 flex flex-col justify-center items-center"
                  onClick={handleClick}
                >
                  <Image
                    width={180}
                    height={180}
                    alt="Download Icon"
                    src="/icons/Download.svg"
                    className="w-10  rounded-lg h-10"
                  />
                  <span className="text-sm mt-2">Загрузить фото</span>
                </div>
              )}

              <input
                id="fileInput"
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex  gap-4 w-full max-w-[600px] mt-6">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex  justify-center  border rounded-xl border-black h-[60px] w-[66px]"
                  >
                    {selectedImage ? (
                      <Image
                        width={10}
                        height={10}
                        alt={`Selected ${index}`}
                        src={URL.createObjectURL(selectedImage)}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <div
                        className="cursor-pointer rounded-lg  flex flex-col justify-center items-center"
                        onClick={handleClick}
                      >
                        <Image
                          width={6}
                          height={6}
                          alt="Download Icon"
                          src="/icons/plus.svg"
                          className="w-4 rounded-lg h-4"
                        />
                      </div>
                    )}

                    <input
                      id={`fileInput-${index}`}
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="flex-1 mt-5 space-y-3 mb-4 md:mb-0">
            <div className=" w-4/5">
              <input
                placeholder="text1"
                id="input1"
                type="text"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className=" w-4/5">
              <input
                placeholder="text2"
                id="input2"
                type="text"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className=" w-4/5">
              <input
                placeholder="text3"
                id="input3"
                type="text"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
