import React, { useState } from "react";
import Image from "next/image";
import { check } from "@/public";

const RadioButton: React.FC = () => {
  const options = ["GMT", "WAT", "GST", "EMT"];
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-8">
      {options.map((option) => (
        <label
          key={option}
          htmlFor={option}
          className="flex gap-4 items-center cursor-pointer border border-black py-2 px-6 rounded-lg"
        >
          <p className="font-normal text-base">{option}</p>
          <input
            type="radio"
            id={option}
            name="radio-group"
            value={option}
            checked={option === selectedOption}
            onChange={handleRadioChange}
            style={{ display: "none" }} // Hide the default radio button
          />

          <button
            type="button" // Add the type attribute with the value "button"
            onClick={() => setSelectedOption(option)}
            className="w-6 h-6 border rounded-full flex items-center justify-center border-gray-400 transition duration-300"
          >
            {option === selectedOption && (
              <Image src={check} alt="Checkmark" className="w-full" />
            )}
          </button>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
