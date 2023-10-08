import Image from "next/image";
import { MessageBubbleProps } from "./MessageBubble";

type VCMessageBubbleType = {
  isAppended: "Append" | "New";
};
export default function VCMessageBubble({
  isAppended,
  message,
  timeStamp,
  text,
}: VCMessageBubbleType & MessageBubbleProps) {
  return (
    <div
      className={`flex text-sm py-0.5  max-w-[100%]  ${
        message === "sent" ? "justify-start" : "justify-end"
      } ${isAppended === "Append" && "mt-6 "}`}
    >
      <div
        className={` flex ${
          message === "recieved" && "flex-row-reverse"
        }  w-[100%]  space-between`}
      >
        <div className="rounded-full w-[48px] h-[48px] mx-2">
          {isAppended === "New" && (
            <Image
              width={48}
              height={48}
              alt="profile"
              src="/assets/images/mentee-profile-screen/my-profile.png"
              className=".object-center"
            />
          )}
        </div>

        <div className="max-w-[90%] w-fit flex-col">
          <div
            className={`p-3 rounded-[8px]  justify-between ${
              message === "recieved"
                ? "bg-Accent6 rounded-br-none"
                : "bg-[#f5f5f5] rounded-bl-none"
            }  `}
          >
            <p className="text-Neutra50 ">{text}</p>
            {timeStamp && (
              <div>
                <p className="text-Neutra20 mt-4 text-xs"> {timeStamp}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
