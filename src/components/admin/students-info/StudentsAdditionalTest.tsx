import React from 'react';
import { Checkbox } from "@/components/UI/checkbox";
import { Pencil, RefreshCw, Trash2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/UI/accordion';
import AnswerSheet from './AnswerSheet';

const StudentsAdditionalTest = () => {
  const students = [
    { id: 1, name: "Биология 110 бал" },
    { id: 2, name: "Математика 110 бал" },
    { id: 3, name: "Тарых 90 бал" },
    { id: 4, name: "Англис тил 110 бал" },
    { id: 5, name: "Химия 110 бал" },
  ];

  return (
    <div className="w-full max-w-[554px] mx-auto p-4 ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="main-test">
          <div className="flex items-center  justify-between bg-[#F6EEFF] p-3 rounded-lg">
            <h1 className="text-[18px]">Кошумча предметтик тестер</h1>
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
            <AccordionTrigger />
          </div>
          <AccordionContent>
            <div className="">
              {students.map((student) => (
                <div key={student.id} className="bg-[#F6EEFF] rounded-lg ">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`student-${student.id}`}>
                      <div className="flex items-center  justify-between p-3">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-500 w-6">{student.id}</span>
                          <Checkbox id={`student-${student.id}`} />
                          <label
                            htmlFor={`student-${student.id}`}
                            className="text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {student.name}
                          </label>
                        </div>
                        <AccordionTrigger />
                      </div>
                      <AccordionContent className="px-3">
                        Окуучунун жооптору
                        <AnswerSheet />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default StudentsAdditionalTest;