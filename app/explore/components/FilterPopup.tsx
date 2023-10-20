import React, { Dispatch, useState } from "react";
import RangeSlider from "./RangeSlider";
import Calendarcomponent from "./Calender";

interface PopupProps {
  onClose: () => void;
  onSubmit: () => void;
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
}: PopupProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTimeZone(event.target.value);
    // console.log(selected);
  };

  const closePopup = () => {
    // setIsPopupOpen(false);
    onSubmit();
    onClose();
  };

  // const filtered = cards.filter(
  //   (card) =>
  //     card.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     card.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     card.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

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
              value="GMT"
              checked={selectedTimeZone === "GMT"}
              onChange={handleChange}
            />
          </div>

          {/* EST Time Zone */}
          <div className="flex items-center border-[0.5px] border-[#ABABAB] py-3 px-4 rounded-lg">
            <div className="font-Hanken mr-3">EST</div>
            <input
              id="choiceEst"
              type="radio"
              value="EST"
              checked={selectedTimeZone === "EST"}
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
              value="GST"
              checked={selectedTimeZone === "GST"}
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
              value="WAT"
              checked={selectedTimeZone === "WAT"}
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
              checked={selectedTimeZone === "choiceEst2"}
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
              checked={selectedTimeZone === "choiceGst2"}
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
      <button
        type="button"
        onClick={closePopup}
        className=" flex flex-col items-center bg-black text-white rounded-lg py-3 px-6 cursor-pointer ml-60 -mr-0 hover:bg-opacity-80 transition-opacity"
      >
        Apply
      </button>
    </div>
  );
}
