import React from "react";
import MainTestCarousel from "@/components/user/mainTest/Main-test";
import PreparationBanner from "@/components/user/Preparation";

const Homepage = () => {
  return (
    <section>
      <PreparationBanner/>
      <MainTestCarousel />
    </section>
  );
};

export default Homepage;
