import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const MenteeCalenda = ({
  onDaySelect,
}: {
  onDaySelect: (date: Date) => void;
}) => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  const handleCalenderChange = (a: Date | undefined) => {
    if (a) {
      setSelectedDay(a);
      onDaySelect(a);
    }
  };
  const handleDateChange = (date: Date) => {
    setSelectedDay(date);
  };

  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #008080;
    border-color: #008080;
    color: black;
  }
  .my-today { 
    font-weight: bold;
    font-size: 100%; 
    color: white;
    background-color: #008080;
  }
`;

  return (
    <div>
      <style>{css}</style>
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={handleCalenderChange}
        onDayClick={handleDateChange}
        modifiersClassNames={{
          selected: "my-selected",
          today: "my-today",
        }}
        modifiersStyles={{
          disabled: { fontSize: "75%" },
        }}
        styles={{
          root: {
            minWidth: "fit-content",
            maxWidth: "fit-content",
            border: "1px solid #008080",
            borderRadius: "10px",
            padding: ".5em",
            margin: "0",
          },
        }}
      />
    </div>
  );
};

export default MenteeCalenda;
