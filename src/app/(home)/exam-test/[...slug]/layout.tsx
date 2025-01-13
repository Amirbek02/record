import React from "react";
import WelcomeText from "@/components/UI/welcomeText";
import Footer from "@/components/user/footer/Footer";

const layout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) => {
  const slugDepth = (await params).slug?.length;
  return (
    <>
      {slugDepth < 6 && (
        <h2 className="hidden md:block text-xl md:text-2xl text-[#4C4C4C] lg:text-[36px] font-medium text-center mt-[60px] mb-[30px]">
          Сынамык тестке кош келиңиз!
        </h2>
      )}
      {slugDepth < 6 && <WelcomeText subjectTitle="Математика" />}
      {children}
      {slugDepth===1 && <Footer/>}
    </>
  );
};

export default layout;
