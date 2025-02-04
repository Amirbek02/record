'use client'
import React from "react";
import userInTests from "@/store/userInTests";
import { useParams } from "next/navigation";
import TakeTest from "../TakeTest";

const WelcomeToTest = () => {
  const { testt, getSubById } = userInTests();
  const params = useParams();
  const slug = params?.slug;
  const idParams = Array.isArray(slug) ? Number(slug[1]) : Number(slug);
  React.useEffect(() => {
    getSubById(idParams);
  }, [getSubById, idParams]);
  return (
    <>
      {" "}
      <TakeTest takeTestData={testt} userIn />
    </>
  );
};

export default WelcomeToTest;
