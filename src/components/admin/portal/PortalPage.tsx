"use client";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";

const PortalPage = () => {
  const portals = [
    { id: 1, title: "ЖРТ га даярдоо" },
    { id: 2, title: "ЖРТ га даярдоо" },
    { id: 3, title: "ЖРТ га даярдоо" }, // Этот будет снизу
  ];

  const topPortals = portals.slice(0, 2); // Первые 2 элемента
  const bottomPortal = portals[2]; // Третий элемент отдельно

  const fileItems = new Array(2).fill(null);
  const textItems = [
    { id: 1, type: "single", inputs: 1 },
    { id: 2, type: "multi", inputs: 3 },
  ];

  return (
    <div className="flex">
      <div className="max-w-3xl mx-auto p-4 space-y-8">
        {/* Верхние элементы порталов */}
        <ul className="space-y-3">
          {topPortals.map((portal) => (
            <PortalItem key={portal.id} title={portal.title} />
          ))}
        </ul>

        {/* File Inputs */}
        <div>
          <ul className="flex gap-4">
            {fileItems.map((_, index) => (
              <FileItem key={index} />
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
const FileItem = () => (
  <li className="w-[473px] flex justify-between items-center h-[227px] border rounded-xl">
    <input type="file" />
    <EditDeleteRefresh />
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
