import React from "react";
import Header from "@/components/user/header/Header";
import WhatsAppButton from "@/components/UI/WhatsAppButton";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <WhatsAppButton />
    </>
  );
};

export default layout;
