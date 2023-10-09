import React from "react";

const FormWrap = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">
    <div className="">{children}</div>
  </div>
);
export default FormWrap;
