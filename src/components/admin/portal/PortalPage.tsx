"use client";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";
import { useState, useRef } from "react";
import Image from "next/image";

const PortalPage = () => {
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
  const portals = [
    { id: 1, title: "ЖРТ га даярдоо" },
    { id: 2, title: "ЖРТ га даярдоо" },
    { id: 3, title: "ЖРТ га даярдоо" },
  ];

  const topPortals = portals.slice(0, 2);
  const bottomPortal = portals[2];

  const fileItems = new Array(2).fill(null);
  const textItems = [
    { id: 1, type: "single", inputs: 1 },
    { id: 2, type: "multi", inputs: 3 },
  ];

  return (
    <div className="flex">
      <div className="max-w-7xl mx-auto p-4 space-y-8">
        <ul className="space-y-3">
          {topPortals.map((portal) => (
            <PortalItem key={portal.id} title={portal.title} />
          ))}
        </ul>

        {/* File Inputs */}
        <div>
          <ul className="flex gap-4">
            {fileItems.map((_, index) => (
              <FileItem
                key={index}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                handleClick={handleClick}
                fileInputRef={fileInputRef}
              />
            ))}
          </ul>
        </div>

        {/* Text Input Blocks */}
        <div>
          <ul className="flex gap-4">
            {textItems.map((item) => (
              <TextItem key={item.id} inputs={item.inputs} />
            ))}
          </ul>
        </div>

        {/* Нижний блок портала */}
        <div className="pt-8">
          <ul className="space-y-3">
            <PortalItem title={bottomPortal.title} />
          </ul>
        </div>
      </div>
    </div>
  );
};

// Компонент для отображения элементов портала
const PortalItem = ({ title }: { title: string }) => (
  <li className="flex border rounded-xl h-[36px] w-[632px] pl-3 bg-[#D9D9D9] justify-between items-center">
    <p>{title}</p>
    <EditDeleteRefresh />
  </li>
);

// Компонент для элементов с input type="file"
const FileItem = ({
  selectedImage,
  setSelectedImage,
  handleClick,
  fileInputRef,
}: {
  selectedImage: File | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
  handleClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}) => (
  <li className="w-[473px] relative flex justify-between items-center h-[227px] border rounded-xl">
    <div className="flex flex-col items-center">
      {/* Верхний элемент */}
      <div className="flex flex-col  mr-20 justify-center items-center mb-4 md:mb-0 border rounded-xl border-black h-[227px] w-[206px]">
        {selectedImage ? (
          <Image
            width={180}
            height={180}
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
        />
      </div>
    </div>
    <div className="absolute top-0 right-0">
      <EditDeleteRefresh />
    </div>
    <input
      className="border absolute right-2 bottom- rounded-xl p-3 w"
      type="text"
      placeholder="text"
    />
  </li>
);

// Компонент для элементов с input type="text"
const TextItem = ({ inputs }: { inputs: number }) => (
  <li className="w-[473px] flex justify-between items-center h-[327px] border rounded-xl">
    <div className="flex flex-col gap-2">
      {Array.from({ length: inputs }).map((_, index) => (
        <input
          key={index}
          type="text"
          className="border rounded p-1 w-full"
          placeholder={`Input ${index + 1}`}
        />
      ))}
    </div>
    <EditDeleteRefresh />
  </li>
);

export default PortalPage;
