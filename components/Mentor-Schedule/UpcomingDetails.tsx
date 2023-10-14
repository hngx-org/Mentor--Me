import React from "react";
import { MymodalComponent } from "@/svgs/Schedule/ScheduleMentor";
import { Button } from "../buttons/button";

function UpcomingDetails() {
  return (
    <div className="">
      <div className="h-[810px] mx-auto w-[80vw] md:w-[786px] md:h-[640px] p-10 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-Inter text-2xl font-medium">Session Details</h3>
          <MymodalComponent />
        </div>
        <div
          className="border border-neutral-400 
        rounded-lg p-4 h-[501px] md:h-0 flex flex-col justify-between md:hidden"
        >
          <div>
            <p className="font-Hanken text-neutral-400 text-sm">
              Name of Mentee
            </p>
            <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
          </div>
          <div>
            <p className="font-Hanken text-neutral-400 text-sm">
              Name of Mentee
            </p>
            <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
          </div>
          <div>
            <p className="font-Hanken text-neutral-400 text-sm">
              Name of Mentee
            </p>
            <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
          </div>
          <div>
            <p className="font-Hanken text-neutral-400 text-sm">
              Name of Mentee
            </p>
            <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
          </div>
          <div>
            <p className="font-Hanken text-neutral-400 text-sm">
              Name of Mentee
            </p>
            <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
          </div>
          <div>
            <p className="font-Hanken text-neutral-400 text-sm">
              Name of Mentee
            </p>
            <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
          </div>
          <div>
            <p className="font-Hanken text-neutral-400 text-sm">
              Name of Mentee
            </p>
            <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
          </div>
        </div>
        <Button
          variant="outline-primary"
          className="text-[10px] block md:hidden w-full mt-4 mb-4"
          title="Return to profile"
          type="button"
        >
          Decline
        </Button>
        <Button
          variant="primary"
          className="text-[10px] md:hidden block w-full"
          title="Return to profile"
          type="button"
        >
          Accept
        </Button>

        {/* for screens higher than 768px */}
        <div className="h-[395px] text-base md:flex justify-between flex-col hidden">
          <div className="flex justify-between text-left h-[49px]">
            <div>
              <p className="font-Hanken text-neutral-400">Name of Mentee</p>
              <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
            </div>
            <div>
              <p className="font-Hanken text-neutral-400 text-sm">
                Name of Mentee
              </p>
              <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
            </div>
          </div>
          <div className="flex justify-between text-left h-[49px]">
            <div>
              <p className="font-Hanken text-neutral-400 text-sm">
                Name of Mentee
              </p>
              <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
            </div>
            <div>
              <p className="font-Hanken text-neutral-400 text-sm">
                Name of Mentee
              </p>
              <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
            </div>
          </div>
          <div className="flex justify-between text-left h-[49px]">
            <div>
              <p className="font-Hanken text-neutral-400 text-sm">
                Name of Mentee
              </p>
              <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
            </div>
            <div>
              <p className="font-Hanken text-neutral-400 text-sm">
                Name of Mentee
              </p>
              <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
            </div>
          </div>
          <div className="flex justify-between text-left h-[49px]">
            <div>
              <p className="font-Hanken text-neutral-400 text-sm">
                Name of Mentee
              </p>
              <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
            </div>
            <div>
              <p className="font-Hanken text-neutral-400 text-sm">
                Name of Mentee
              </p>
              <p className="font-Hanken font-semibold text-sm mt-2">John Doe</p>
            </div>
          </div>
          <div className="h-[49px]">
            <p className="font-Hanken text-neutral-400 text-sm">
              Personal Note
            </p>
            <p className="font-Hanken font-semibold text-sm mt-2">
              bla bla bla bla bla bla
            </p>
          </div>
        </div>
        <div className="flex mt-[40px] justify-center items-center gap-5">
          <Button
            variant="outline-primary"
            className="text-[10px] hidden md:block"
            title="Return to profile"
            type="button"
          >
            Decline
          </Button>
          <Button
            variant="primary"
            className="text-[10px] hidden md:block"
            title="Return to profile"
            type="button"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingDetails;
