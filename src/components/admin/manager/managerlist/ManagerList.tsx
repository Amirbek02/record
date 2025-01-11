import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import { Pencil, RefreshCcw, Trash2 } from "lucide-react";
import ListContent from "./ListContent";
import { Input } from "@/components/UI/input";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";
import CancelSaveButtons from "@/components/UI/cancelSaveButtons";

const ManagerList = () => {
  const managerData = [
    { id: 1, name: "Айдана Асылбекова" },
    { id: 2, name: "Бекзат Калыбеков" },
    { id: 3, name: "Гульжан Аманова" },
    { id: 4, name: "Данияр Турганов" },
    { id: 5, name: "Ержан Жумабек" },
    { id: 6, name: "Жанара Кулжанова" },
  ];
  return (
    <div className="max-w-[1197px] mx-auto my-3 flex flex-col">
      <h1 className="font-semibold text-[32px] underline underline-offset-[6px] mb-[100px] mx-3">
        Мугалимдердин тизмеси
      </h1>
      <div className="flex w-[97%] h-[59px] bg-[#F6EEFF] items-center rounded-[10px] mx-3 mb-[2px]">
        <Input
          type="text"
          defaultValue="Мугалимдердин тизмеси"
          className=" w-[60%] border-none font-semibold md:text-[32px] underline underline-offset-[6px] bg-transparent"
        />
        <div>
          <EditDeleteRefresh />
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full py-3">
        {managerData.map((manager, index) => (
          <AccordionItem value={`item-${manager.id}`} key={manager.id}>
            <AccordionTrigger className="h-[86px]">
              <ul className="flex items-center">
                <li className="text-2xl pr-4">{index + 1}</li>
                <li className="text-[#484848] font-semibold ">
                  <Input
                    defaultValue={manager.name}
                    type="text"
                    className="border-none bg-[#F6EEFF] md:text-[32px]"
                  />
                </li>
                <li className=" flex gap-3">
                  <Pencil size={16} className="cursor-pointer" />
                  <RefreshCcw size={16} className="cursor-pointer" />
                  <Trash2 size={16} className="cursor-pointer" />
                </li>
              </ul>
            </AccordionTrigger>
            <AccordionContent>
              <ListContent />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="self-end mt-11">
        <CancelSaveButtons />
      </div>
    </div>
  );
};

export default ManagerList;
