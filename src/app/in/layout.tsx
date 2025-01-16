import React from "react";
import Footer from "@/components/user/footer/Footer";
import HeaderSign from "@/components/user/header/HeaderSign";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex gap-10 bg-[#FAFAFC] w-full">
        <HeaderSign />

        {children}
      </main>
      <Footer />
    </>
  );
};

export default layout;
