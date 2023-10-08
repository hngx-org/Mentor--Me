import {
  AttachIcon,
  CameraIcon,
  EmojiIcon,
  MicrophoneIcon,
} from "@/public/SVGs";
import IconWrapper from "../../components/IconWrapper";

export default function VCInput() {
  return (
    <div className="flex items-center space-x-2 w-[100%]  h-fit px-4">
      <div className="flex  py-2 px-2 space-between items-center border-[0.5px] border-Neutra20 rounded-[20px] w-[100%]">
        <div className="h-[38px] bg-white grow rounded-full p-4 flex items-center">
          <EmojiIcon />
          <input
            className=" mx-4 flex grow active:border-0 p-1 focus:outline-none"
            placeholder="Type here..."
          />
        </div>
        <div className="flex items-center border:none h-[38px] space-x-4 px-4">
          <IconWrapper styles="p-2  rounded-full ">
            <AttachIcon />
          </IconWrapper>

          <IconWrapper styles="p-2  rounded-full ">
            <CameraIcon />
          </IconWrapper>
        </div>
      </div>
      <IconWrapper styles="p-2 bg-[#121212] rounded-full h-fit">
        <MicrophoneIcon color="#fff" />
      </IconWrapper>
    </div>
  );
}
