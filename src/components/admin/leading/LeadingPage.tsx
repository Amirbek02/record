import TestPage from "@/components/admin/leading/LeadingPage";

export default function Home() {
  const blockData = {
    blockOne: {
      text: ["text 1", "text 2", "text"],
      buttonText: "Тест тапшыру",
      uploadText: "загрузить фото",
    },
    blockTwo: {
      title: "Биздин бүтүрүүчүлөр",
      items: ["Атт-көч", "Атт-көч", "Атт-көч", "Атт-көч"],
    },
    blockThree: {
      title: "Биз жонундо",
      imageText: "сурот жогут",
    },
    blockFour: {
      title: "ЖРТге кантип даярданабыз?",
      tasks: [
        { label: "Задание 1", description: "Описание" },
        { label: "Задание 2", description: "Описание" },
      ],
    },
  };

  return <TestPage blockData={blockData} />;
}
