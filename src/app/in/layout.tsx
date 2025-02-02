import React from "react";
import Footer from "@/components/user/footer/Footer";
import HeaderSign from "@/components/user/header/HeaderSign";
import HeaderSearch from "@/components/user/header/HeaderSearch";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <main className="lg:flex md:flex gap-5"> */}
      <main className="lg:flex  gap-5">
        <HeaderSign />
        <div className="flex flex-col">
          <HeaderSearch />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default layout;
