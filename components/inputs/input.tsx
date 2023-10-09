"use client";

import React, { useState } from "react";

import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
}) => {
  const isPasswordInput = type === "password";

  const [values, setValues] = useState({
    isPasswordVisible: false,
  });
  const togglePasswordVisibility = () => {
    setValues({
      ...values,
      isPasswordVisible: !values.isPasswordVisible,
    });
  };

  return (
    <div className="w-full">
      <label
        className="text-xs text-[#565656] font-medium font-Inter"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          autoComplete="off"
          id={id}
          disabled={disabled}
          required={required}
          placeholder=""
          type={values.isPasswordVisible && isPasswordInput ? "text" : type}
          className=" sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#CCC] rounded-lg"
        />
        {isPasswordInput && (
          <button
            type="button"
            onClick={togglePasswordVisibility}

            className="absolute sm:top-[18px] top-[12px] right-2 cursor-pointer text-[#808080]"

          >
            {values.isPasswordVisible ? <IoEyeSharp /> : <IoEyeOffSharp />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
