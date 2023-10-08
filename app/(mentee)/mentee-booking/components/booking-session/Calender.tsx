import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "./calender.css";

interface ICalendarProps {
  unAvailableDates?: Date[];
  updateDate: (date: Date[] | Date | undefined) => void;
}

const Calendarcomponent = ({
  unAvailableDates,
  updateDate,
}: ICalendarProps) => {
  const updateDates = (dates: Date[] | Date | undefined) => {
    updateDate(dates);
  };

  return (
    <div className="max-w-[374px] border-[0.5px] border-Accent1 rounded-xl">
      <DayPicker
        selected={unAvailableDates}
        onSelect={(date) => updateDates(date)}
        mode="multiple"
        disabled={unAvailableDates}
      />
    </div>
  );
};

export default Calendarcomponent;
