import React from 'react';
import { Pencil, RefreshCw, Trash2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/UI/accordion';

const RegisteredStudentsTest = () => {
  const students = [
    { id: 1, name: "Негизги тест" },
    { id: 2, name: "Биология" },
    { id: 3, name: "Химия" },
    { id: 4, name: "Тарых" },
    { id: 5, name: "Англис тил" },
  ];

  return (
    <div className="w-[554px] mx-auto p-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="main-test">
          <div className="flex items-center justify-between bg-[#F6EEFF] p-3 rounded-lg">
            <h1 className="text-[18px]">Тест</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-transparent hover:bg-[#2E3095] hover:text-white transition-all duration-200">
                <Pencil className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-full bg-transparent hover:bg-[#2E3095] hover:text-white transition-all duration-200">
                <RefreshCw className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-full bg-transparent hover:bg-[#2E3095] hover:text-white transition-all duration-200">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <AccordionTrigger />
          </div>
          <AccordionContent>
            <div>
              {students.map((student) => (
                <div key={student.id} className="bg-[#F6EEFF] rounded-lg">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`student-${student.id}`}>
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-4 hover:bg-[#F6EEFF] w-full  ">
                          {/* <span className="text-gray-500 w-6 hover:text-[#2E3095]">
                            {student.id}
                          </span> */}
                          <button
                            // htmlFor={`student-${student.id}`}
                            className="text-[16px] text-start px-4 w-full h-20 rounded-[10px] hover:text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:bg-[#2E3095]"
                          >
                            {student.name}
                          </button>
                        </div>
                      </div>
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

export default RegisteredStudentsTest;
