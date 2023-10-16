import { Dispatch, SetStateAction } from "react";

import { ModalCloseIcon } from "@/public/SVGs";
import MentorProfileTabLayout from "./MentorProfileTab";
import { ModalState } from "@/app/(mentor)/(dashboard-mentor)/mentor-profile/page";

type MentorProfileModalProps = {
  onClose: Dispatch<SetStateAction<ModalState>>;
  state: string;
};

export default function MentorProfileModal({
  onClose,
  state,
}: MentorProfileModalProps) {
  return (
    <div className=" h-[100vh] w-[100vw] fixed z-[200] top-0 bottom-0 right-0 left-0 ">
      <div
        className="bg-[#2A2A2A] opacity-80 w-[100%] h-[100%] "
        onClick={(e) => {
          onClose({
            state: "basic info",
            isOpen: false,
          });
        }}
        role="presentation"
      />
      <div className="  rounded-[6px] w-[90%] h-[80%] md:right-10 lg:w-[50%]  lg:p-2 lg:px-10 lg:h-[100%] bg-white absolute flex flex-col top-10 right-5 lg:top-0 lg:right-0  overflow-scroll p-2 items-center hide-message-layout-scroll ">
        <div
          className="flex h-fit w-[100%] justify-end  my-5"
          onClick={(e) => {
            onClose({
              state: "basic info",
              isOpen: false,
            });
          }}
          role="presentation"
        >
          <ModalCloseIcon />
        </div>
        <p className="font-bold text-Neutra50 ">Update your profile Details</p>
        <MentorProfileTabLayout modalState={state} />
      </div>
    </div>
  );
}
