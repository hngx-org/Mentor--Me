import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface ICalendarProps {
  unAvailableDates?: Date[];
  updateDate: (date: Date[] | Date | undefined) => void;
}

const CalendarComponent = ({
  unAvailableDates,
  updateDate,
}: ICalendarProps) => {
  const updateDates = (dates: Date[] | Date | undefined) => {
    updateDate(dates);
  };

  return (
    <div className="max-w-fit border-[0.5px] border-Accent1 rounded-xl">
      <DayPicker
        selected={unAvailableDates}
        onSelect={(date: Date[] | Date | undefined) => updateDates(date)}
        mode="multiple"
        disabled={unAvailableDates}
      />
    </div>
  );
};

export default CalendarComponent;
