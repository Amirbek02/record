"use client";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";
import { useState, useRef } from "react";
import Image from "next/image";

const PortalPage = () => {
  type Portal = {
    id: number;
    imgSrc: string;
    name: string;
    text: string;
    opinion: string;
  };

  const [portals, setPortals] = useState<Portal[]>([
    {
      id: 1,
      imgSrc: "/icons/Icon.svg",
      name: "ЖРТ га даярдоо ",
      text: "Иван",
      opinion: "Прекрасный учитель и курс!",
    },
    {
      id: 1,
      imgSrc: "/icons/Download.svg",
      name: "ЖРТ га даярдоо ",
      text: "Иван",
      opinion: "Прекрасный учитель и курс!",
    },
  ]);

  const handleImageChange = (id: number, file: File) => {
    const newImgSrc = URL.createObjectURL(file);
    setPortals((prev) =>
      prev.map((portal) =>
        portal.id === id ? { ...portal, imgSrc: newImgSrc } : portal
      )
    );
  };

  const handleTextChange = (id: number, field: keyof Portal, value: string) => {
    setPortals((prev) =>
      prev.map((portal) =>
        portal.id === id ? { ...portal, [field]: value } : portal
      )
    );
  };

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto p-4 space-y-8">
      <div>
        <ul className="space-y-4 w-full">
          {portals.map((portal) => (
            <PortalItem
              key={portal.id}
              portal={portal}
              onImageChange={handleImageChange}
              onTextChange={handleTextChange}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

// Компонент элемента портала
const PortalItem = ({
  portal,
  onImageChange,
  onTextChange,
}: {
  portal: {
    id: number;
    imgSrc: string;
    text: string;
    opinion: string;
  };
  onImageChange: (id: number, file: File) => void;
  onTextChange: (id: number, field: keyof typeof portal, value: string) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onImageChange(portal.id, file);
  };

  return (
    <li className="flex flex-col   p-4 space-y-4 ">
      <div className="flex justify-between border col-span-3 items-center bg-slate-100  pl-3 w-[500px] rounded-xl">
        <p className="">{portal.name}</p>
        <EditDeleteRefresh />
      </div>
      <div className="flex justify-between border col-span-3 items-center bg-slate-100  pl-3 w-[500px] rounded-xl">
        <p className="">{portal.name}</p>
        <EditDeleteRefresh />
      </div>
      <div className="flex items-center max-w-6xl   ">
        <div className="flex gap-4 max-w-6xl justify-between">
          <div className="border  rounded-xl">
            <div className="relative h-[200px] w-[400px]">
              <Image
                src={portal.imgSrc}
                alt="Portal Image"
                width={50}
                height={50}
                className="rounded-lg object-cover"
              />
              <button onClick={handleFileInputClick} className=" text-black  ">
                Изменить
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="border rounded-xl">
            <div className="relative p-3 w-[400px]">
              <Image
                src={portal.imgSrc}
                alt="Portal Image"
                width={50}
                height={50}
                className="rounded-lg justify-center items-center flex object-cover"
              />
              <button
                onClick={handleFileInputClick}
                className="absolute text-center top-10  text-black px-3 py-1 rounded-lg"
              >
                Изменить
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>

      <div className="flex  gap-4">
        <div className="border rounded-xl p-3">
          <input
            type="text"
            value={portal.text}
            onChange={(e) => onTextChange(portal.id, "text", e.target.value)}
            placeholder="Введите текст"
            className="border p-2 rounded-lg w-full"
          />
          <textarea
            value={portal.opinion}
            onChange={(e) => onTextChange(portal.id, "opinion", e.target.value)}
            placeholder="Введите отзыв"
            className="border p-2 rounded-lg w-full"
          />

          {/* Кнопки */}
          <EditDeleteRefresh />
        </div>
        <div className="border rounded-xl p-3 w-[469px] h-[305px]">
          <input
            type="text"
            value={portal.text}
            onChange={(e) => onTextChange(portal.id, "text", e.target.value)}
            placeholder="Введите текст"
            className="border p-2 rounded-lg w-full"
          />
          <textarea
            value={portal.opinion}
            onChange={(e) => onTextChange(portal.id, "opinion", e.target.value)}
            placeholder="Введите отзыв"
            className="border p-2 rounded-lg w-full"
          />

          {/* Кнопки */}
          <EditDeleteRefresh />
        </div>
      </div>
    </li>
  );
};

export default PortalPage;
