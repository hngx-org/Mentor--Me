import React from "react";

interface LabelProps {
  message: string;
  accent: string;
}

const Label: React.FC<LabelProps> = ({ message, accent }) => (
  <div className="w-full bg-Error30 rounded-lg ">
    <p className="text-base font-medium">{message}</p>
  </div>
);

export default Label;
