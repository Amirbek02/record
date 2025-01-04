import React from "react";
import ExamplePage from "./Example";

const TestExample = () => {
  return (
    <ExamplePage
      title="Сынамык тестке кош келдиңиз!"
      subtitle="ЖРТ га даярдоо"
      sectionTitle="1-бөлүм. Математика"
      instructionsTitle="Көрсөтмө"
      comparisonDetails={{
        text: "1-ден 30 чейинки суроолор эки чондукту камтыйт...",
        points: [
          "Эгерде А калонкасындагы чондук чон болсо, анда (А);",
          "Эгерде Б калонкасындагы чондук чон болсо, анда (Б);",
          "Эгерде эки чондук барабар болсо, анда (В);",
          "Эгерде маалымат жетишсиз болсо, анда (Г).",
        ],
      }}
      additionalDetails={[
        {
          title: "Сандар",
          content: ["Тестте жалан чыныгы сандар гана пайдаланылат."],
        },
        {
          title: "Фигуралар",
          content: [
            "Тапшырмалар менен кошо келтирилген фигуралар чыгаруу үчүн пайдалуу маалыматты берет.",
          ],
        },
      ]}
      backButtonText="Артка"
      startButtonText="Тестти баштоо"
    />
  );
};

export default TestExample;
