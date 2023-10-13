import { ModalCloseIcon } from "@/public/SVGs";
import MentorProfileTabLayout from "./MentorProfileTab";

type MentorProfileModalProps = {
  onClose: () => void;
};
export default function MentorProfileModal() {
  return (
    <div className="w-[100svw] h-[100svh]  absolute top-[0px] overflow-clip ">
      <div className="bg-[#2A2A2A] opacity-80 w-[100%] h-[100%] flex p-10" />
      <div className="  w-[80%] h-[80%] sm:w-[50%]  sm: p-10 sm:px-20 sm:h-[100%] bg-white absolute flex flex-col top-10 right-10 sm:top-0 sm:right-0  overflow-scroll p-4 items-center">
        <div className="flex w-[100%] justify-end my-2 sm:my-10">
          <ModalCloseIcon />
        </div>
        <p className="font-bold text-Neutra50">Update your profile Details</p>
        <MentorProfileTabLayout />
      </div>
    </div>
  );
}
