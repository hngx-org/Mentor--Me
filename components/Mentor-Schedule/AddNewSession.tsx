import React from "react";
import { PlusIcon } from "@/svgs/Schedule/ScheduleMentor";

function AddNewSession() {
  return (
    <div>
      <div className="w-[182px] h-[223px] rounded-lg border-neutral-400 border flex justify-center items-center md:w-[295px] lg:w-[295px] lg:h-[235px]">
        <div className="h-[98px] w-[138px] text-center flex flex-col items-center justify-between">
          <h4 className="font-Hanken text-base text-neutral-950 font-bold leading-4">
            Add a new session
          </h4>
          <p className="font-Hanken font-normal text-neutral-950 text-sm">
            Create a personalized session
          </p>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}

export default AddNewSession;
