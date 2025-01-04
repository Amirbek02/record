import React from 'react';
import { Checkbox } from "@/components/UI/checkbox";
import { Pencil, RefreshCw, Trash2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/UI/accordion';

const TestPassedStudents = () => {
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
    { id: 10, name: "Айдана Асылбекова" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 ">
        <div className="flex items-center bg-[#F6EEFF] gap-10 p-3 rounded-lg my-4">
            <h1 className='text-[24px]'>Тест тапшырган окуучулардын  тизмеси</h1>
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
      <div className="space-y-4">
        {students.map((student) => (
          <div key={student.id} className="flex bg-[#F6EEFF] items-center justify-between p-3  rounded-lg shadow-sm hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 w-6">{student.id}</span>
              <Checkbox id={`student-${student.id}`} />
              <label 
                htmlFor={`student-${student.id}`}
                className="text-[24px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {student.name}
              </label>
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
            <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger></AccordionTrigger>
                    <AccordionContent>Content</AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPassedStudents;