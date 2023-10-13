import ProgressBar from "../progressBar/ProgressBar";
import { OverViewCard } from "./ProfileDetailCard";

export default function OverViewCardLayout({
  heading,
  items,
}: {
  heading: string;
  items?: [{ text: string; subText: string }];
}) {
  return (
    <div className="border border-Neutral10 w-[100%] p-7 h-[100%] rounded-[8px] flex flex-col space-y-5 ">
      <p className="capitalize font-bold"> {heading}</p>
      <ProgressBar progress={50} rounded progressBgColor="bg-Accent2" />
      <div className="flex flex-wrap w-[100%] h-[100%] ">
        <OverViewCard text="25%" subText="Average Attendence" />
        <OverViewCard text="25%" subText="Total learning hours" />
        <OverViewCard text="25%" subText="Sessions completed " />
      </div>
    </div>
  );
}
