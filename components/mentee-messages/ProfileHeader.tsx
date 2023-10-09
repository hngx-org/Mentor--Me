import Image from "next/image";
import { CallIcon, VideoIcon } from "@/public/SVGs";

type MessageUserProfileProps = {
  // userImage: string;
  // userId: string;
  userName: string;
};
export default function MessageUserProfile({
  userName,
}: MessageUserProfileProps) {
  return (
    <div className="p-4 border-b-[0.5px] border-Neutra10 h-[91px] mb-12">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <div className="rounded-full w-[50px] h-[50px]">
            <Image
              src="/assets/dylan.png"
              alt={userName || ""}
              height={55}
              width={55}
              className=".object-center"
            />
          </div>
          <p className="capitalize text-lg  font-medium text-NeutalBase">
            {userName}
          </p>
        </div>

        <div className="flex justify-between space-x-4 items-center">
          <VideoIcon />
          <CallIcon />
        </div>
      </div>
    </div>
  );
}
