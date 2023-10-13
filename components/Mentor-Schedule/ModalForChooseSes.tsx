import React from "react";
import { CalendarIcon, MymodalComponent } from "@/svgs/Schedule/ScheduleMentor";

function IconWrapper({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return <span className={`  h-fit w-fit  block  ${styles}`}>{children}</span>;
}

function ModalForChooseSes() {
  return (
    <div>
      <div className="w-[380px] h-[438px] mx-auto">
        <div className="w-[348px] h-[401px] bg-red">
          <div className="flex justify-between itemscenter">
            <h2 className="font-Hanken text-2xl">Create a session</h2>
            <MymodalComponent />
          </div>
          <p className="text-base text-neutral-500">
            Create a session that best suits you!
          </p>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="flex justify-start border items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg">
              <div className="bg-Accent6 h-[60px] w-[60px] flex justify-center items-center">
                <CalendarIcon />
              </div>

              <div className="w-[215px]">
                <h5 className="font-inter text-lg font-medium">
                  One-Off Session
                </h5>
                <p className="font-inter text-medium text-neutral-500">
                  Create a one-time session with a mentee
                </p>
              </div>
            </div>
            <div className="flex justify-start border items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg">
              <div className="bg-Accent6 h-[60px] w-[60px] flex justify-center items-center">
                <CalendarIcon />
              </div>

              <div className="w-[215px]">
                <h5 className="font-inter text-lg font-medium">
                  One-Off Session
                </h5>
                <p className="font-inter text-medium text-neutral-500">
                  Create a one-time session with a mentee
                </p>
              </div>
            </div>
            <div className="flex justify-start border items-center gap-4 px-2 border-neutral-300 w-[348px] h-[89px] rounded-lg">
              <div className="bg-Accent6 h-[60px] w-[60px] flex justify-center items-center">
                <CalendarIcon />
              </div>

              <div className="w-[215px]">
                <h5 className="font-inter text-lg font-medium">
                  One-Off Session
                </h5>
                <p className="font-inter text-medium text-neutral-500">
                  Create a one-time session with a mentee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForChooseSes;
