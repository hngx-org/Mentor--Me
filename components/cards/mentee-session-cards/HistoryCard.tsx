import { historySessionProp } from "@/lib/constants/constants";
import { DataApi } from "@/app/(mentee)/(dashboard-route)/mentee-sessions/page";

type ReminderpassedItems = {
  passedItems: DataApi;
};

export default function HistoryCard({ passedItems }: ReminderpassedItems) {
  const dateString = passedItems?.date;
  let formattedDate = "N/A";
  if (dateString) {
    const tim = new Date(dateString);
    const year = tim.getFullYear();
    const month = String(tim.getMonth() + 1).padStart(2, "0");
    const day = String(tim.getDate()).padStart(2, "0");
    formattedDate = `${year}-${month}-${day}`;
  }
  return (
    <div
      className="  grid grid-cols-4 w-full sm:gap-10 gap-4 border-b border-Neutra10 py-4 sm:py-6 pl-2 sm:pl-8 font-Inter lg:font-medium text-[12px] sm:text-[16px] text-Neutra40 hover:text-gray-200 
    hover:bg-gray-800   even:bg-gray-200/80 transition-all duration-300"
    >
      <p>{passedItems.sessionName}</p>
      <p>{passedItems.relevantTopics}</p>
      <p>{formattedDate}</p>
      <p>{passedItems.duration} minutes</p>
    </div>
  );
}
