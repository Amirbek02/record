import React from "react";
import Header from "@/components/user/header/Header";
import Footer from "@/components/user/footer/Footer";
const layout = async({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) => {
  const slugDepth = (await params).slug?.length;
  
  return (
    <>
      <Header />
      <main>{children}</main>
      {slugDepth < 2 && <Footer/>}
    </>
  );
};

export default layout;
