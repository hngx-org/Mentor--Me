import React from "react";

interface LabelProps {
  message: string;
  accent: string;
}

const Label: React.FC<LabelProps> = ({ message, accent }) => {
  return <div>label</div>;
};

export default Label;
