import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default layout;
