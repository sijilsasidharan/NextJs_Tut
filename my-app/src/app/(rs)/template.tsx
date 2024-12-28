import React, { PropsWithChildren } from "react";

const template: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="animate-fade-in">{children}</div>;
};

export default template;
