"use client";
import { useState } from "react";

import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";
const Getting = () => {
  type Student = {
    id: number;

    title: string;
    opinion: string;
  };

  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,

      title: "Иван",
      opinion: "Прекрасный учитель и курс!",
    },
    {
      id: 2,

      title: "Алина",
      opinion: "Очень полезные занятия!",
    },
    {
      id: 3,

      title: "Марат",
      opinion: "Учитель всегда помогал нам.",
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

  return (
    <div className="p-4">
      <div className="grid border relative space-x-10 rounded-xl border-black p-8 w-4/6">
        <p className="absolute pl-3 bg-slate-500 rounded-tl-[10px] opacity-50 pr-3 text-[18px] ">
          4 - болум
        </p>
        <div className="absolute top-0  left-[100px]">
          ЖРТге кантип даярданабыз
        </div>
        <div className="flex  absolute right-0 top-0 ">
          <EditDeleteRefresh />
        </div>
        {students.map((student) => (
          <div
            key={student.id}
            className="border pt-10  mb-10  p-4 rounded-lg bg-white shadow-lg flex flex-col items-center"
          >
            <input
              type="text"
              value={student.title}
              onChange={(e) =>
                handleInputChange(student.id, "title", e.target.value)
              }
              className="border rounded-md p-2 mb-2 w-full text-start"
            />

            <textarea
              value={student.opinion}
              onChange={(e) =>
                handleInputChange(student.id, "opinion", e.target.value)
              }
              className="border rounded-md p-2 mb-2 w-full text-start"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getting;
