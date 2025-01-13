import React from "react";
import Header from "@/components/user/header/Header";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default layout;
