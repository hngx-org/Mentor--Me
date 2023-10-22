/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Dispatch, SetStateAction } from "react";
import { CloseIcon } from "@/public/SVGs";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

type SuccessReminderProps = {
  closeModal: Dispatch<SetStateAction<boolean>>;
};

const CancelModal: React.FC<SuccessReminderProps> = ({ closeModal }) => (
  <div className=" w-full h-[300px]  relative sm:h-[300px] sm:w-[500px] items-start flex bg-white px-8 mx-8">
    <div
      className="w-[24px] h-[24px] absolute top-4 right-4 border border-[#7B7F84] flex justify-center items-center  cursor-pointer"
      onClick={() => closeModal(false)}
    >
      <CloseIcon fillColor="#7B7F84" props={{ className: "scale-90" }} />
    </div>
    <div className="w-full flex flex-col justify-center items-center gap-6 mt-10 sm:mt-16 lg:mt-20">
      <div className="text-center font-bold text-lg">
        This session is going to be cancelled.
        <br /> Do you wish to proceed?
      </div>
      <div className="flex gap-5">
        <Button
          className="px-4 py-2 border-Neutra50 w-full"
          title="Proceed"
          variant="primary"
          fullWidth
        />
      </div>
    </div>
  </div>
);

export default CancelModal;
