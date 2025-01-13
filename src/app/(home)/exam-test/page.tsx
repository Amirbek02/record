import React from "react";
import BlogPage from "@/components/user/BlogPage";
import Footer from "@/components/user/footer/Footer";

const ExamTest = () => {
  return (
    <section>
      <h2 className="hidden md:block text-xl md:text-2xl text-[#4C4C4C] lg:text-[36px] font-medium text-center mt-[60px] mb-[30px]">
        Сынамык тестке кош келиңиз!
      </h2>
      <BlogPage />
      <Footer/>
    </section>
  );
};

export default ExamTest;
