import React from "react";
import { Check } from "lucide-react";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";
import { Input } from "@/components/UI/input";
import { Label } from "@radix-ui/react-label";
//mockData
const mocksubjects = [
  {
    id: 1,
    subject: "Кыргыз-тил",
  },
  {
    id: 2,
    subject: "Кыргыз-тил",
  },
  {
    id: 3,
    subject: "Кыргыз-тил",
  },
];

type SubjectProps = {
  id: number;
  subject: string;
};

const ListBox = ({ subject }: { subject: string }) => {
  return (
    <div>
      <ul className=" shadow-[0px_4px_4px_0px_#00000040] flex gap-3  w-[525px] bg-[#F6EEFF]  h-[76px] items-center rounded-[10px]">
        <li className="grow pl-2">
          <Input
            type="text"
            defaultValue={subject}
            className="bg-[#F6EEFF] text-[#27004E] md:text-xl font-semibold border-none"
          />
        </li>
        <li className="grow-0 pr-4">
          <EditDeleteRefresh />
        </li>
      </ul>
    </div>
  );
};

const ListContent = ({
  imageUrl = "/images/test.png",
  email = "Email",
  phone = "Ватсап номери",
  subjects = mocksubjects,
}: {
  imageUrl?: string;
  email?: string;
  phone?: string;
  subjects?: SubjectProps[];
}) => {
  return (
    <div>
      <div className="max-w-[795px] flex gap-[46px] -mb-3 ">
        <div className="max-w-[194px]">
          <div
            className="w-[194px] h-[180px] bg-center bg-cover bg-no-repeat rounded-[14.35px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          {/* <p className="text-center font-semibold py-2">Photo</p> */}
          <div className="flex flex-col items-center">
            <Label
              htmlFor="picture"
              className="text-center font-semibold py-2 cursor-pointer"
            >
              Picture
            </Label>
            <Input id="picture" type="file" className="hidden" />
          </div>
          <ul className="text-[#9A9A9A] font-medium">
            <li className="flex gap-1 items-center">
              <Check size={15} />
              <Input type="email" placeholder="email" className="border-none" />
            </li>
            <li className="flex gap-1 items-center">
              <Check size={15} />
              <Input
                type="tel"
                placeholder="Ватсап номери"
                className="border-none"
              />
            </li>
          </ul>
        </div>
        <div className="w-[554px] py-3 bg-[#F6EEFF] gap-3 flex flex-col justify-center items-center">
          {subjects.map((subject) => (
            <ListBox key={subject.id} subject={subject.subject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListContent;
