import React, { useState } from "react";
import RangeSlider from "./RangeSlider";

type PopupProps = {
  onClose: () => void;
};

export default function FilterPopup({ onClose }: PopupProps) {
  const [selected, setSelected] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const closePopup = () => {
    // setIsPopupOpen(false);
    onClose();
  };

  return (
    <div className="absolute top-20 right-5 md:top-16 md:right-0 drop-shadow-2xl bg-white shadow-md rounded-md p-6 w-fit md:w-[430px] space-y-5">
      <div className="relative flex flex-col">
        <button
          onClick={closePopup}
          className="absolute -top-5 right-0 text-4xl"
        >
          &times;
        </button>
        <h1 className="font-Inter font-medium text-lg">Time Zones</h1>
        <div className="grid grid-cols-3 gap-5 p-4">
          <form className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="choiceGmt" className="font-Hanken mr-3">
              GMT
            </label>
            <input
              id="choiceGmt"
              type="radio"
              value="choiceGmt"
              checked={selected === "choiceGmt"}
              onChange={handleChange}
              //   className="appearance-none w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </form>

          {/* EST Time Zone */}
          <form className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="choiceEst" className="font-Hanken mr-3">
              EST
            </label>
            <input
              id="choiceEst"
              type="radio"
              value="choiceEst"
              checked={selected === "choiceEst"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </form>

          {/* GST TimeZone */}
          <form className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="choiceGst" className="font-Hanken mr-3">
              GST
            </label>
            <input
              id="choiceGst"
              type="radio"
              value="choiceGst"
              checked={selected === "choiceGst"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </form>

          {/* WAT TimeZone */}
          <form className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="choiceWat" className="font-Hanken mr-3">
              WAT
            </label>
            <input
              id="choiceWat"
              type="radio"
              value="choiceWat"
              checked={selected === "choiceWat"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </form>

          {/* EST TimeZone */}
          <form className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="choiceEst2" className="font-Hanken mr-3">
              EST
            </label>
            <input
              id="choiceEst2"
              type="radio"
              value="choiceEst2"
              checked={selected === "choiceEst2"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </form>

          {/* GST TimeZone */}
          <form className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <label htmlFor="choiceGst2" className="font-Hanken mr-3">
              GST
            </label>
            <input
              id="choiceGst2"
              type="radio"
              value="choiceGst2"
              checked={selected === "choiceGst2"}
              onChange={handleChange}
              //   className=" relative appearancenone w-[20px] h-[20px] rounded-full border-2 border-black checked:border4 checked:border-black transition-all"
            />
          </form>
        </div>
      </div>
      <RangeSlider />
      <button className="flex flex-col items-center bg-black text-white rounded-lg py-3 px-6 cursor-pointer -mr-0">
        Apply
      </button>
    </div>
  );
}
