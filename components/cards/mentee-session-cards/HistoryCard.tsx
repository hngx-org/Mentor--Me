import { historySessionProp } from "@/lib/constants/constants";

export default function HistoryCard({
  session,
  mentor,
  date,
  duration,
}: historySessionProp) {
  return (
    <div
      className="  grid grid-cols-4 w-full sm:gap-10 gap-4 border-b border-Neutra10 py-4 sm:py-6 pl-2 sm:pl-8 font-Inter lg:font-medium text-[12px] sm:text-[16px] text-Neutra40 hover:text-gray-200 
    hover:bg-gray-800   even:bg-gray-200/80 transition-all duration-300"
    >
      <p>{session}</p>
      <p>{mentor}</p>
      <p>{date}</p>
      <p>{duration}</p>
    </div>
  );
}
