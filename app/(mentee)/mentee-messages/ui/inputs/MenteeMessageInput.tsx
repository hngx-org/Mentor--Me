import {
  AddIconCircle,
  DocumentIcon,
  EmojiIcon,
  MicrophoneIcon,
} from "@/public/SVGs";
import IconWrapper from "../../components/IconWrapper";

export default function MenteeMessageInput() {
  return (
    <div className="flex w-[100%] h-fit bg-[#efeff0] py-4 px-2 space-between items-center ">
      <div className="h-[38px] bg-white grow rounded-full p-4 flex items-center">
        <EmojiIcon />
        <input
          className=" mx-4 flex grow active:border-0 p-1 focus:outline-none"
          placeholder="Type here..."
        />
        <MicrophoneIcon />
      </div>
      <div className="flex items-center border:none h-[38px] space-x-4 px-4">
        <IconWrapper styles="p-2 bg-Neutra10 rounded-full">
          <DocumentIcon />
        </IconWrapper>
        <IconWrapper styles="p-2 bg-Neutra10 rounded-full">
          <AddIconCircle />
        </IconWrapper>
      </div>
    </div>
  );
}
