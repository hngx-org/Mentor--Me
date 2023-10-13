import React, { SelectHTMLAttributes } from "react";

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelText?: string;
  selectId?: string;
  value?: string | number;
  selectName?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  isRequired?: boolean;
  children?: React.ReactNode;
}

function SelectInputType({
  selectName,
  selectId,
  isRequired = true,
  onChange,
  labelText,
  placeholder,
  value,
  children,
}: SelectInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-between">
        <label htmlFor={labelText} className="font-[500] py-1">
          {labelText}{" "}
          {isRequired && <span className="text-Error50 font-bold">*</span>}
        </label>
        <select
          value={value}
          id={selectId}
          name={selectName}
          placeholder="Give this session a name"
          required={isRequired}
          className="border text-gray-400 rounded-lg sm:rounded-lg p-2 pr-6 md:p-4 dm:py-5 w-full focus:outline-none focus:border-gray-600"
          // onChange={(e: React.ChangeEvent<HTMLSelectElement>) => (e.target.value)}
          onChange={onChange}
        >
          <option value="" className="text-gray-300 w-[80%]">
            {placeholder || "select an option"}
          </option>
          {children}
        </select>
      </div>
    </div>
  );
}
export default SelectInputType;
