import React from "react";
import TestListIn from "./TestListIn";
const mocktests = [
  {
    id: 1,
    title: "Кыргыз тил",
    description:
      "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
    tag: "Кыргыз тил боюнча негизги тестке кош келиңиз",
    imgSrc: "/images/test.png",
    pathName: "/exam-test/kyrgyz",
  },
  {
    id: 2,
    title: "Математика",
    tag: "Математика боюнча даярдалган видео сабакка кош келиңиз",
    description:
      "30 тапшырмадан турат, аны аткарууга 30 мүнөт убакыт берилет. Тапшырманы аткарып жатып, тандаган жообуңарды өзгөртсөңөр болот, бирок жоопту ар бир тапшырмада бир гана жолу өзгөртө аласыз!",
    imgSrc: "/images/test.png",
    pathName: "/exam-test/mathematics",
  },
];
const AllTestListIn = () => {
  return (
    <>
      <TestListIn tests={mocktests} isMainTest />
      <TestListIn tests={mocktests} />
    </>
  );
};

export default AllTestListIn;
