import { historySessionProp } from "@/lib/constants/constants";

export default function HistoryCard({
  session,
  mentor,
  date,
  duration,
}: historySessionProp) {
  return (
    <div className=" items-center grid grid-cols-4 w-full sm:gap-10 gap-4 border-b border-Neutra10 pb-2 sm:pb-6 pl-2 sm:pl-8 sm:-mt-2 -mt-4 place-content-center font-Inter lg:font-medium text-[12px] sm:text-[16px] text-Neutra40">
      <p>{session}</p>
      <p>{mentor}</p>
      <p>{date}</p>
      <p>{duration}</p>
    </div>
  );
}
