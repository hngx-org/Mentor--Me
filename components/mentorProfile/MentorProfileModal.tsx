import { Dispatch, SetStateAction } from "react";
import { ModalCloseIcon } from "@/public/SVGs";
import MentorProfileTabLayout from "./MentorProfileTab";
import { ModalState } from "@/app/(mentor)/mentor-profile/page";

type MentorProfileModalProps = {
  onClose: Dispatch<SetStateAction<ModalState>>;
  state: string;
};

export default function MentorProfileModal({
  onClose,
  state,
}: MentorProfileModalProps) {
  return (
    <div className="w-[100svw] h-[100svh]  absolute top-[0px] overflow-clip ">
      <div
        className="bg-[#2A2A2A] opacity-80 w-[100%] h-[100%] flex p-10"
        onClick={(e) => {
          onClose({
            state: "basic info",
            isOpen: false,
          });
        }}
        role="presentation"
      />
      <div className="  w-[80%] h-[80%] sm:w-[50%]  sm: p-10 sm:px-20 sm:h-[100%] bg-white absolute flex flex-col top-10 right-10 sm:top-0 sm:right-0  overflow-scroll p-4 items-center ">
        <div
          className="flex w-[100%] justify-end my-2 sm:my-10 "
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
        <p className="font-bold text-Neutra50">Update your profile Details</p>
        <MentorProfileTabLayout modalState={state} />
      </div>
    </div>
  );
}
