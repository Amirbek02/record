import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
};

export default layout;
