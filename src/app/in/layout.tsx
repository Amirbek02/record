import React from "react";
import Footer from "@/components/user/footer/Footer";
import HeaderSign from "@/components/user/header/HeaderSign";
import HeaderSearch from "@/components/user/header/HeaderSearch";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex gap-0 md:gap-10 bg-[#FAFAFC] w-full h-full min-h-screen justify-center md:justify-start">
        <HeaderSign />
        <div className="flex flex-col">
        <HeaderSearch/>
        {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default layout;
