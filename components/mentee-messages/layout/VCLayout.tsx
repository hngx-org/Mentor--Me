import {
  RecordIcon,
  AddIconCircle,
  MicrophoneIcon,
  CallIcon,
  VideoIcon,
} from "@/public/SVGs";
import IconWrapper from "../IconWrapper";
import VCInput from "../inputs/VCinput";
import VCMessageBubble from "../VCMessageBubble";

export default function VCLayout() {
  return (
    <div className=" h-[100dvh] flex  w-[100%] overflow-clip ">
      <div className=" w-[100%] sm:w-[65%]  h-[100%]">
        <VCLHS />
      </div>
      <div className=" flex flex-col  h-[100%] w-fit max-w-[500px]  px-6 hidden sm:flex">
        <div className="h-[80%] overflow-scroll hide-message-layout-scroll px-4 ">
          <VCRHS />
        </div>
        <VCInput />
      </div>
    </div>
  );
}

// using bg-color for until image assets available now, -- update html element with right tag when for video streaming
function VCLHS() {
  return (
    <div className="w-[100%]  h-[100%]  relative ">
      <div className="w-[100%] h-[100%] flex flex-col   justify-between text-white py-7 bg-[url('/assets/images/video-chat/vc-large.png')] bg-cover bg-no-repeat">
        <div className="w-[100%] h-[20px] flex justify-between items-center px-5 text-xs">
          <div className="flex items-center space-x-4">
            <IconWrapper styles="border rounded-full p-0.5">
              <RecordIcon />
            </IconWrapper>
            <p>Rec: 12:10:20 </p>
          </div>
          <div className="flex items-center space-x-2 ">
            <IconWrapper styles="border rounded-full p-0.5">
              <AddIconCircle color="#fff" />
            </IconWrapper>
            <p>Add users to the call </p>
          </div>
        </div>
        <div className="w-[100%] h-[20px] flex justify-center space-x-4  items-center p-7">
          <IconWrapper styles="border p-2 rounded-full ">
            <MicrophoneIcon color="white" />
          </IconWrapper>
          <IconWrapper styles="border p-2.5 border-ErrorBase bg-ErrorBase rounded-full">
            <CallIcon color="#fff" />
          </IconWrapper>
          <IconWrapper styles="border rounded-full p-2">
            <VideoIcon color="#fff" />
          </IconWrapper>
          <IconWrapper styles=" border rounded-full p-2">
            <MicrophoneIcon color="white" />
          </IconWrapper>
        </div>
      </div>
      <div className="w-[148px] h-[140px] absolute bottom-[100px] right-[70px] rounded-[5px] bg-[url('/assets/images/video-chat/vc-mini.png')] bg-contain">
        <p className="hidden"> placeholder</p>
      </div>
    </div>
  );
}

function VCRHS() {
  return (
    <div className="py-4  w-[100%] ">
      <div>
        <VCMessageBubble
          message="sent"
          text="Hello Dave!"
          timeStamp="11:00am"
          isAppended="New"
        />

        <VCMessageBubble
          message="sent"
          text="It is a pleasure meeting you."
          timeStamp="11:00am"
          isAppended="Append"
        />
        <VCMessageBubble
          message="recieved"
          text="Thank you very much joines"
          timeStamp="11:12am"
          isAppended="New"
        />
        <VCMessageBubble
          message="recieved"
          text="I am happy to meet you too"
          timeStamp="11:13am"
          isAppended="Append"
        />
        <VCMessageBubble
          message="sent"
          text="Hello Dave!"
          timeStamp="11:00am"
          isAppended="New"
        />

        <VCMessageBubble
          message="recieved"
          text="It is a pleasure meeting you."
          timeStamp="11:00am"
          isAppended="New"
        />
        <VCMessageBubble
          message="recieved"
          text="Thank you very much joines"
          timeStamp="11:12am"
          isAppended="Append"
        />
        <VCMessageBubble
          message="recieved"
          text="I am happy to meet you too"
          timeStamp="11:13am"
          isAppended="Append"
        />
      </div>
    </div>
  );
}
