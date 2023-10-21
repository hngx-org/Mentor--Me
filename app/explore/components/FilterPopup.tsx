import React, { Dispatch, useState } from "react";
import RangeSlider from "./RangeSlider";
import Calendarcomponent from "./Calender";

interface PopupProps {
  onClose: () => void;
  onSubmit: () => void;
  onReset: () => void;
  setSelectedTimeZone: Dispatch<React.SetStateAction<string>>;
  selectedTimeZone: string;
  value: number;
  setValue: Dispatch<React.SetStateAction<number>>;
  selectedDate: Date;
  setSelectedDate: Dispatch<React.SetStateAction<Date>>;
}

export default function FilterPopup({
  onClose,
  setSelectedTimeZone,
  selectedTimeZone,
  value,
  setValue,
  selectedDate,
  setSelectedDate,
  onSubmit,
  onReset,
}: PopupProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTimeZone(event.target.value);
    // console.log(selected);
  };

  const closePopup = () => {
    // setIsPopupOpen(false);
    // onSubmit();
    onClose();
  };
  const submitFilter = () => {
    onSubmit();
    onClose();
  };

  const resetFilter = () => {
    onReset();
    onClose();
  };

  return (
    <div className=" z-10 container mx-auto absolute top20 top-16 right-0 right5 md:top-16 md:right-0 drop-shadow-2xl bg-white shadow-md rounded-md p-6 w-fit md:w-[400px] space-y-8">
      <div className="relative flex flex-col">
        <button
          type="button"
          onClick={closePopup}
          className="absolute -top-5 right-0 text-4xl"
        >
          &times;
        </button>
        <h1 className="font-Inter font-medium text-lg">Time Zones</h1>
        <div className="grid grid-cols-3 gap-5 p-4">
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="GMT" className="font-Hanken mr-3 cursor-pointer">
              GMT
            </label>
            <input
              id="GMT"
              type="radio"
              value="GMT"
              checked={selectedTimeZone === "GMT"}
              onChange={handleChange}
            />
          </div>

          {/* EST Time Zone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="EST" className="font-Hanken mr-3 cursor-pointer">
              EST
            </label>
            <input
              id="EST"
              type="radio"
              value="EST"
              checked={selectedTimeZone === "EST"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>

          {/* GST TimeZone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="GST" className="font-Hanken mr-3 cursor-pointer">
              GST
            </label>
            <input
              id="GST"
              type="radio"
              value="GST"
              checked={selectedTimeZone === "GST"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>

          {/* IST TimeZone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="IST" className="font-Hanken mr-3 cursor-pointer">
              IST
            </label>
            <input
              id="IST"
              type="radio"
              value="IST"
              checked={selectedTimeZone === "IST"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>

          {/* PST TimeZone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="PST" className="font-Hanken mr-3 cursor-pointer">
              PST
            </label>
            <input
              id="PST"
              type="radio"
              value="PST"
              checked={selectedTimeZone === "PST"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>

          {/* CET TimeZone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="CET" className="font-Hanken mr-3 cursor-pointer">
              CET
            </label>

            <input
              id="CET"
              type="radio"
              value="CET"
              checked={selectedTimeZone === "CET"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>
        </div>
      </div>
      <RangeSlider value={value} setValue={setValue} />
      <div className="flex flex-col space-y-5 justify-center ml3">
        <h1 className="font-Inter font-medium text-lg">Availability</h1>
        <div className="flex justify-center">
          <Calendarcomponent setSelectedDate={setSelectedDate} />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          // onClick={onReset}
          onClick={resetFilter}
          className="border border-[#121212] rounded-lg py-3 px-6 hover:bg-gray-100 transition-colors"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={submitFilter}
          className=" flex flex-col items-center bg-black text-white rounded-lg py-3 px-6 cursor-pointer ml-60-mr-0 hover:bg-opacity-80 transition-opacity"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
