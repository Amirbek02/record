import React from "react";
import NavTabs from "@/components/user/UserIn/profile/NavTabs";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <NavTabs/>
      <section>{children}</section>
    </main>
  );
};

export default layout;
