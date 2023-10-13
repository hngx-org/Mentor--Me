import React, { useState } from "react";
import Image from "next/image";
import { check } from "@/public";

interface RadioButtonProps {
  label: string;
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  selectedValue,
  onSelect,
}) => {
  const isChecked = value === selectedValue;

  return (
    <label
      htmlFor="radio"
      className="flex gap-4 items-center cursor-pointer border border-black py-2 px-6 rounded-lg  "
    >
      <p className="font-normal text-base">{label}</p>
      <input
        id="radio"
        type="radio"
        value={value}
        checked={isChecked}
        onChange={() => onSelect(value)}
        className="hidden"
      />
      <div className="w-6 h-6 border rounded-full flex items-center justify-center border-gray-400 transition duration-300">
        {isChecked && <Image src={check} alt="Checkmark" className="w-full" />}
      </div>
    </label>
  );
};

export default RadioButton;
