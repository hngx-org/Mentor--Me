import React from "react";
import Image from "next/image";
import { Button } from "../buttons/button";

interface CardApiReturn {
  imageFromServer: string;
  SessionTitle: string;
  startingTime: string;
  endingTime: string;
  menteeName: string;
}

function PreviousSessionsCard({
  imageFromServer,
  SessionTitle,
  menteeName,
  startingTime,
  endingTime,
}: CardApiReturn) {
  return (
    <div>
      <div className="w-[182px] h-[270px] md:w-[295px] rounded-xl md:h-[361px] border-2 border-neutral-300 mb-10">
        <div className="w-[182px] h-[109.8px] md:w-[295px] md:h-[183px] overflow-hidden">
          <Image
            alt="th"
            src={imageFromServer}
            width={295}
            height={300}
            className="object-contain"
          />
        </div>
        <div className=" h-[90.6px] text-neutral-600 text-xs md:h-[66px] text-left p-2 md:p-4">
          <h5 className="font-Hanken font-bold text-base md:text-lg text-black">
            {SessionTitle}
          </h5>
          <p className="mb-1">
            <span className="font-bold">Mentee name: </span>
            {menteeName}
          </p>
          <div className="flex justify-center flex-col md:items-center md:flex-row md:justify-start md:gap-4">
            <p>Started: {startingTime}</p>
            <p>Ended:{endingTime}</p>
          </div>
        </div>
        <div>
          <hr className="w-[150px] md:w-[263.32px] mx-auto md:mt-7" />
          <Button
            variant="outline-primary"
            className="bg-[#FFFF] ml-[12px] min-w-[152px] md:min-w-[200px] md:ml-[35px] hover:bg-black hover:text-white mt-3 md:mt-3 text-[#000] text-[16px] font-[500]  border-[1.5px]  border-[#121212]  rounded-[6px] sm:rounded-[8px]  font-Hanken w-[152px] h-[40px] md:w-[200px]"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PreviousSessionsCard;
