import React from 'react';
import { Checkbox } from "@/components/UI/checkbox";
import { Pencil, RefreshCw, Trash2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import StudentsCardAccordion from "./StudentsCardAccordion";
import StudentsAdditionalTest from './StudentsAdditionalTest';

const StudentsInfo = () => {
  const students = [
    { id: 1, name: "Айдана Асылбекова" },
    { id: 2, name: "Айдана Асылбекова" },
    { id: 3, name: "Айдана Асылбекова" },
    { id: 4, name: "Айдана Асылбекова" },
    { id: 5, name: "Айдана Асылбекова" },
    { id: 6, name: "Айдана Асылбекова" },
    { id: 7, name: "Айдана Асылбекова" },
    { id: 8, name: "Айдана Асылбекова" },
    { id: 9, name: "Айдана Асылбекова" },
    { id: 10, name: "Айдана Асылбекова" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex items-center  bg-[#F6EEFF] p-3 rounded-lg my-4 gap-32">
        <h1 className="text-[24px]">Катталган окуучу жөнүндө маалымат</h1>
        <div className="flex items-center gap-4">
          <button className="p-1 hover:text-blue-600">
            <Pencil className="h-4 w-4" />
          </button>
          <button className="p-1 hover:text-green-600">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button className="p-1 hover:text-red-600">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <Accordion type="multiple"  className="space-y-2">
        {students.map((student) => (
          <AccordionItem
            key={student.id}
            value={`student-${student.id}`}
            className="bg-[#F6EEFF] rounded-lg  "
          >
            <AccordionTrigger className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 w-6">{student.id}</span>
                <Checkbox id={`student-${student.id}`} className="rounded-sm" />
                <label
                  htmlFor={`student-${student.id}`}
                  className="text-[24px] font-normal"
                >
                  {student.name}
                </label>
                <div className="flex items-center gap-4 ml-4">
                  <button className="p-1 hover:text-blue-600">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button className="p-1 hover:text-green-600">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                  <button className="p-1 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-2 bg-white flex items-start rounded-lg">
              <div className='flex '>
              <StudentsCardAccordion />
              <StudentsAdditionalTest />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default StudentsInfo;
