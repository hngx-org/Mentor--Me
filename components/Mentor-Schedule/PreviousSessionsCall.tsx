"use client";

import React, { useState } from "react";
import PreviousSessionsCard from "./PreviousSessionsCard";

interface CardApiReturn {
  imageFromServer: string;
  SessionTitle: string;
  id: number;
  startingTime: string;
  endingTime: string;
  menteeName: string;
  linkPage?: string;
}

function PreviousSessionsCall() {
  const [data, setData] = useState<CardApiReturn[]>([
    {
      imageFromServer: "/assets/images/MentorSchedule/photocard.png",
      SessionTitle: "Session Title",
      id: 1,
      startingTime: "10.20",
      endingTime: "12.30",
      menteeName: "Mentee's Field",
    },
    {
      imageFromServer: "/assets/images/MentorSchedule/photocard.png",
      SessionTitle: "Session Title",
      id: 1,
      startingTime: "10.20",
      endingTime: "12.30",
      menteeName: "Mentee's Field",
    },
    {
      imageFromServer: "/assets/images/MentorSchedule/photocard.png",
      SessionTitle: "Session Title",
      id: 1,
      startingTime: "10.20",
      endingTime: "12.30",
      menteeName: "Mentee's Field",
    },
    {
      imageFromServer: "/assets/images/MentorSchedule/photocard.png",
      SessionTitle: "Session Title",
      id: 1,
      startingTime: "10.20",
      endingTime: "12.30",
      menteeName: "Mentee's Field",
    },
  ]);
  const SliceThreeFromData = data.slice(0, 3); // to make sure it is only three cards that render
  const SliceTwoFromData = data.slice(0, 2); // the cards for mobile, its slice only two

  return (
    <div>
      <div className="flex justify-center md:justify-start flex-wrap gap-2 md:gap-4 items-center lg:hidden mt-5">
        {SliceTwoFromData.map((info) => (
          <PreviousSessionsCard key={info.id} {...info} />
        ))}
      </div>

      <div className="hidden lg:flex md:justify-start overflow-hidden lg:gap-4 items-center mt-7 ">
        {SliceThreeFromData.map((info) => (
          <PreviousSessionsCard key={info.id} {...info} />
        ))}
      </div>
    </div>
  );
}
export default PreviousSessionsCall;
