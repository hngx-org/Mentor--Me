import React from "react";

interface LabelProps {
  message: string;
}

const Label: React.FC<LabelProps> = ({ message }) => (
  <div className="w-full bg-Error30 rounded-lg ">
    <p className="text-base font-medium">{message}</p>
  </div>
);

export default Label;
