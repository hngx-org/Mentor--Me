import React from "react";

interface LabelProps {
  message: string;
  accent: string;
}

const Label: React.FC<LabelProps> = ({ message, accent }) => {
  return <div>{message}</div>;
};

export default Label;
