import React from "react";
import Footer from "@/components/user/footer/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex justify-end gap-10 relative">
        <div className="w-[275px] h-[100%]"></div>

        {children}
      </main>
      <Footer />
    </>
  );
};

export default layout;
