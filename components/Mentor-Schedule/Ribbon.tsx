import React from "react";
import { CancelIcon } from "@/public/SVGs";
import { CorretIcon } from "@/svgs/Schedule/ScheduleMentor";

function Ribbon() {
  return (
    <div>
      {/* Ribbon responsiveness not done yet */}
      <div className=" md:w-[60%] h-[48px] w-[calc(100% -40px)] md:bg-green-900 md:h-[70px] md:mt-[64px] mx-auto flex flex-col  justify-end">
        <div className="w-full bg-Success10 flex relative justify-between">
          <div className="md:h-[65px] p-2 h-[42px] flex pl-[25px] items-center">
            <div className="mr-5">
              <CorretIcon />
            </div>
            <div>
              <h3 className="md:hidden font-semibold text-sm">
                Session Created Successfully!
              </h3>
              <h3 className="hidden md:block font-semibold font-Sans leading-5 text-base">
                Session Created Sucessfully!
              </h3>
              <p className="hidden md:block text-sm font-normal">
                Your session with Afolabi was successfully created
              </p>
            </div>
          </div>
          <div>
            <CancelIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ribbon;
