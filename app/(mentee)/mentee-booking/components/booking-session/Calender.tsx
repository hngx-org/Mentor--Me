import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendarcomponent = () => {
  const [selectedDay, setSelectedDay] = useState<Date[]>();

  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #ABABAB;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #ABABAB;
    color: black;
  }
  .my-today { 
    font-weight: bold;
    font-size: 100%; 
    color: white;
    background-color: #ABABAB;
  }
`;

  return (
    <div>
      <style>{css}</style>
      <DayPicker
        mode="multiple"
        selected={selectedDay}
        max={20}
        onSelect={setSelectedDay}
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
            border: "1px solid #ABABAB",
            borderRadius: "10px",
            padding: ".5em",
            margin: "0",
          },
        }}
      />
    </div>
  );
};

export default Calendarcomponent;
