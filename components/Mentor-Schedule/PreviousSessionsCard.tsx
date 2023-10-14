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
      <div className=" h-[270px] rounded-xl lg:h-[328px] border-2 max-w-[295px] border-neutral-300 mb-5 grid grid-rows-6 grid-cols-3">
        <div className="max-h-[170px] min-h-[125px] lg:h-[150px] overflow-hidden col-span-full row-start-1">
          <Image
            alt="th"
            src={imageFromServer}
            width={800}
            height={300}
            className="object-contain"
          />
        </div>
        <div className=" text-neutral-600 text-xs md:h-[66px] text-left p-2 md:p-4 col-span-full self-center row-start-4">
          <h5 className="font-Hanken font-bold text-base md:text-lg text-black mt-[4px]">
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
        <div className="col-span-full self-start row-start-6 w-full">
          <Button
            variant="outline-primary"
            className="bg-[#FFFF] mx-auto whitespace-nowrap hover:bg-black mt-[-10px] hover:text-white  text-[16px] font-[500] border-[1.5px] rounded-[6px] sm:rounded-[8px] lg:hidden  font-Hanken w-[80%] h-[40px] md:w-[200px] "
          >
            View Details
          </Button>

          <Button
            variant="outline-primary"
            className="bg-[#FFFF] hidden lg:block mx-auto py-2 whitespace-nowrap hover:bg-black hover:text-white text-[16px] font-[500] font-Hanken w-[80%] h-[40px]"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PreviousSessionsCard;
