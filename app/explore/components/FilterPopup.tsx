import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import Calendarcomponent from "@/app/(mentee)/mentee-booking/components/booking-session/Calender";

type PopupProps = {
  onClose: () => void;
};

export default function FilterPopup({ onClose }: PopupProps) {
  const [selected, setSelected] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setSelected(event.target.value);
  };

  const closePopup = () => {
    // setIsPopupOpen(false);
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
            <div className="font-Hanken mr-3">GMT</div>
            <input
              id="choiceGmt"
              type="radio"
              value="choiceGmt"
              checked={selected === "choiceGmt"}
              onChange={handleChange}
            />
          </div>

          {/* EST Time Zone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <div className="font-Hanken mr-3">EST</div>
            <input
              id="choiceEst"
              type="radio"
              value="choiceEst"
              checked={selected === "choiceEst"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>

          {/* GST TimeZone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <div className="font-Hanken mr-3">GST</div>
            <input
              id="choiceGst"
              type="radio"
              value="choiceGst"
              checked={selected === "choiceGst"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>

          {/* WAT TimeZone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <div className="font-Hanken mr-3">WAT</div>
            <input
              id="choiceWat"
              type="radio"
              value="choiceWat"
              checked={selected === "choiceWat"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>

          {/* EST TimeZone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <div className="font-Hanken mr-3">EST</div>
            <input
              id="choiceEst2"
              type="radio"
              value="choiceEst2"
              checked={selected === "choiceEst2"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>

          {/* GST TimeZone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <div className="font-Hanken mr-3">GST</div>
            <input
              id="choiceGst2"
              type="radio"
              value="choiceGst2"
              checked={selected === "choiceGst2"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </div>
        </div>
      </div>
      <RangeSlider />
      <div className="flex flex-col space-y-5 justify-center ml3">
        <h1 className="font-Inter font-medium text-lg">Availability</h1>
        <div className="flex justify-center">
          <Calendarcomponent />
        </div>
      </div>
      <button
        type="button"
        className=" flex flex-col items-center bg-black text-white rounded-lg py-3 px-6 cursor-pointer ml-60 -mr-0 hover:bg-opacity-80 transition-opacity"
      >
        Apply
      </button>
    </div>
  );
}
