export type MessageBubbleProps = {
  text: string;
  message: "sent" | "recieved";
  timeStamp?: string;
};

export default function MessageBubble({
  text,
  message,
  timeStamp,
}: MessageBubbleProps) {
  return (
    <div
      className={`flex text-sm py-0.5  max-w-[100%] ${
        message === "sent" ? "justify-start" : "justify-end"
      }`}
    >
      <div className="max-w-[50%] w-fit flex-col">
        <div
          className={`border-[0.5px] border-Neutra10 p-3 rounded-[8px] ${
            message === "recieved" && "bg-Accent6"
          }  `}
        >
          <p className="text-Neutra50 ">{text}</p>
        </div>
        {timeStamp && (
          <div
            className={`${message === "recieved" && "flex flex-row-reverse"}`}
          >
            <p className="text-Neutra20 pt-1 mb-2 "> {timeStamp}</p>
          </div>
        )}
      </div>
    </div>
  );
}
