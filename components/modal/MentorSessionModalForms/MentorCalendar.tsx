"use Client";

import React, { useState } from "react";
import CalendarComponent from "./Calendar";
import { Button } from "@/components/buttons/button";
// import { Dialog, Transition } from "@headlessui/react";

interface SessionTime {
  minutes: number;
}

interface CalendarProps {
  onClose?: () => void;
  onShowSuccessModal?: () => void;
}

const MentorCalendar = ({ onClose, onShowSuccessModal }: CalendarProps) => {
  const [minutes, setMinutes] = useState<SessionTime>({ minutes: 30 });
  function handleIncrease() {
    setMinutes((prevState) => ({
      ...prevState,
      minutes: prevState.minutes + 10,
    }));
  }
  function handleDecrease() {
    setMinutes((prevState) => ({
      ...prevState,
      minutes: prevState.minutes - 10,
    }));
  }

  const handleUpdateDate = (dates: Date[] | Date | undefined) => {};
  return (
    <div className="fixed min-h-full inset-0 bg-gray-800 bg-opacity-20 gap-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-lg px-10 py-14 bg-[#fafafa] w-[25rem]">
        <CalendarComponent
          updateDate={handleUpdateDate}
          unAvailableDates={[new Date()]}
        />
        <div className="flex flex-col gap-2 border bg-white my-4 p-4 rounded-md">
          <p className="font-bold">Set Duration</p>
          <p>set the duration of this session in minutes</p>
          <div className="flex flex-row justify-between border rounded-md p-3">
            <p
              // onKeyDown={handleDecrease}
              className="rounded-full py-1 px-2 font-bold bg-teal-100 border border-teal-500"
            >
              <span>-</span>
            </p>
            <span>{minutes.minutes}</span>
            <p
              // onKeyDown={handleIncrease}
              className="rounded-full py-1 px-2 font-bold bg-teal-100 border border-teal-500"
            >
              <span>+</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center w-full md:pt-8 py-2">
          <Button
            className="p-4 w-full md:w-[20%]"
            variant="outline-primary"
            type="button"
          >
            Cancel
          </Button>
          <Button
            onClick={onClose}
            className="p-4 w-full md:w-[20%]"
            variant="primary"
            type="button"
          >
            Create Session
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MentorCalendar;
