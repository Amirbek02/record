"use client";
import { useState } from "react";
import Image from "next/image";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";
const AdminPanel = () => {
  type Student = {
    id: number;
    imgSrc: string;
    ball: number;
    firstName: string;
    opinion: string;
  };

  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      imgSrc: "/icons//Download.svg",
      ball: 95,
      firstName: "Иван",
      opinion: "Прекрасный учитель и курс!",
    },
    {
      id: 2,
      imgSrc: "/icons//Download.svg",
      ball: 88,
      firstName: "Алина",
      opinion: "Очень полезные занятия!",
    },
    {
      id: 3,
      imgSrc: "/icons//Download.svg",
      ball: 92,
      firstName: "Марат",
      opinion: "Учитель всегда помогал нам.",
    },
    {
      id: 4,
      imgSrc: "/icons//Download.svg",
      ball: 89,
      firstName: "Динара",
      opinion: "Курс превзошел мои ожидания!",
    },
    {
      id: 5,
      imgSrc: "/icons//Download.svg",
      ball: 94,
      firstName: "Канат",
      opinion: "Очень доволен результатами.",
    },
    {
      id: 6,
      imgSrc: "/icons//Download.svg",
      ball: 90,
      firstName: "Жанара",
      opinion: "Замечательная программа обучения.",
    },
  ]);

  const handleInputChange = (
    id: number,
    field: keyof Student,
    value: string | number
  ) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      )
    );
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImageSrc = URL.createObjectURL(file);
      handleInputChange(id, "imgSrc", newImageSrc);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl  font-bold mb-6 text-center">
        Биздин бүтүрүүчүлөр
      </h2>
      <div className="grid border relative rounded-xl border-black p-8 grid-cols-3 gap-6">
        <p className="absolute pl-3 bg-slate-500 rounded-tl-[10px] opacity-50 pr-3 text-[18px] ">
          2 - болум
        </p>
        <div className="flex  absolute right-0 top-0 ">
          <EditDeleteRefresh />
        </div>
        {students.map((student) => (
          <div
            key={student.id}
            className="border pt-10 p-4 rounded-lg bg-white shadow-lg flex flex-col items-center"
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id={`fileInput-${student.id}`}
              onChange={(e) => handleImageChange(e, student.id)}
            />
            <label
              htmlFor={`fileInput-${student.id}`}
              className="cursor-pointer"
            >
              <Image
                src={student.imgSrc}
                alt={student.firstName}
                width={70}
                height={70}
                className="rounded-full mb-4 bg-slate-500 object-cover"
              />
            </label>

            <input
              type="text"
              value={student.firstName}
              onChange={(e) =>
                handleInputChange(student.id, "firstName", e.target.value)
              }
              className="border rounded-md p-2 mb-2 w-full text-center"
              placeholder="Имя студента"
            />

            <input
              type="number"
              value={student.ball}
              onChange={(e) =>
                handleInputChange(student.id, "ball", +e.target.value)
              }
              className="border rounded-md p-2 mb-2 w-full text-center"
              placeholder="Баллы"
            />

            <textarea
              value={student.opinion}
              onChange={(e) =>
                handleInputChange(student.id, "opinion", e.target.value)
              }
              className="border rounded-md p-2 mb-2 w-full text-center"
              placeholder="Отзыв студента"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
