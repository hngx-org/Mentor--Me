import React, { CSSProperties } from "react";

type HProps = {
  isOpen?: boolean;
};

export default function Hambuger({ isOpen }: HProps) {
  const styleHambuger: CSSProperties = {
    width: "2rem",
    height: "2rem",
    flexFlow: "column nowrap",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-around",
  };

  const buger1: CSSProperties = {
    transform: `${isOpen ? "rotate(45deg)" : "rotate(0)"}`,
    width: "2rem",
    height: "0.25rem",
    transition: "all 0.3s linear",
    borderRadius: "10px",
    transformOrigin: "1px",
    backgroundColor: "black",
  };
  const buger2: CSSProperties = {
    transform: `${isOpen ? "rotate(45deg)" : "rotate(0)"}`,
    opacity: `${isOpen ? 0 : 1}`,
    width: "2rem",
    height: "0.25rem",
    transition: "all 0.1s linear",
    borderRadius: "10px",
    transformOrigin: "1px",
    backgroundColor: "black",
  };
  const buger3: CSSProperties = {
    transform: `${isOpen ? "rotate(-45deg)" : "rotate(0)"}`,
    width: "2rem",
    height: "0.25rem",
    transition: "all 0.3s linear",
    borderRadius: "10px",
    transformOrigin: "1px",
    backgroundColor: "black",
  };
  return (
    <div className="hambguer-con" style={styleHambuger}>
      <div className="hambuger burger1" style={buger1} />
      <div className="hambuger burger2" style={buger2} />
      <div className="hambuger burger3" style={buger3} />
    </div>
  );
}
