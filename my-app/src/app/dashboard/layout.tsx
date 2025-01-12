import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div>Dashboard layout</div>;{children}
    </>
  );
};

export default layout;
