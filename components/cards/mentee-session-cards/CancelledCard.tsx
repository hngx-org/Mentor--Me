import { useState } from "react";
import { UpcomingSessionProp } from "@/lib/constants/constants";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";
import { DataApi } from "@/app/(mentee)/(dashboard-route)/mentee-sessions/page";

type SuccessReminderProps = {
  getView: string | null;
  cancelledItem: DataApi;
  setCancelled: any;
  cancelledItems: any;
  setCancelledItems: any;
  comingItems: any;
  setComingItems: any;
  setRelod: any;
};
export default function CancelledCard({
  cancelledItem,
  setCancelled,
  setCancelledItems,
  comingItems,
  setComingItems,
  getView,
  cancelledItems,
  setRelod,
}: SuccessReminderProps) {
  const isGrid = getView === "Grid";
  const [visibility, setVisibility] = useState(false);
  const [cancelledSession, setCancelledSession] = useState([]);

  const dateString = cancelledItem?.date;
  let formattedDate = "N/A";
  if (dateString) {
    const tim = new Date(dateString);
    const year = tim.getFullYear();
    const month = String(tim.getMonth() + 1).padStart(2, "0");
    const day = String(tim.getDate()).padStart(2, "0");
    formattedDate = `${year}-${month}-${day}`;
  }

  const restoring = (itemId: string) => {
    const itemToRestore = cancelledItems.find(
      (item: DataApi) => item._id === itemId
    );
    if (itemToRestore) {
      setCancelledItems(
        cancelledItems.filter((item: DataApi) => item._id !== itemId)
      );
      setComingItems([...comingItems, itemToRestore]);
    }
  };

  // useEffect (() => {
  //   const getApiData = async () => {
  //     const result = await fetch("https://hngmentorme.onrender.com/api/one-off-session")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCancelledSession(result); // Store the API data in state
  //     })
  //     .catch((error) => {
  //       console.error("API call error:", error);
  //     });
  //     getApiData()
  // }, [])

  const PatchRequest = (itemId: string, dataObject: any) => {
    const itemLast = { ...dataObject, sessionState: "pending" };
    // console.log(itemLast)
    const any = () => {
      fetch(`https://hngmentorme.onrender.com/api/one-off-session/${itemId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(itemLast),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    any();
  };
  const vunct = (itemId: string, dataObject: any) => {
    // Log the itemId

    setRelod((prev: boolean) => !prev);
    restoring(itemId);

    // Modify the dataObject to set sessionState to "pending"
    const updatedDataObject = { ...dataObject, sessionState: "pending" };

    // Call PatchRequest with the modified dataObject
    PatchRequest(itemId, updatedDataObject);
  };

  return (
    <div
      className={`${
        visibility ? "hidden" : ""
      } flex max-w-[700px] w-full px-4 sm:px-6 xl:px-8 pb-6 pt-8 border border-Neutra10 rounded-xl gap-6 flex-col sm:flex-row hover:shadow-2xl shadow-black/20 transition-all duration-300`}
    >
      <div className="flex flex-col w-full gap-[6px]">
        <div
          className={`${!isGrid ? "hidden" : ""} w-full flex justify-between`}
        >
          <span className="px-2 h-[35px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-Neutra40/10 rounded-full leading-none flex justify-center items-center">
            {formattedDate}
          </span>
        </div>
        <p className="flex w-full justify-between">
          <span className="text-Neutra50 font-Inter text-[16px] font-medium">
            Mentor session with
            <span className="border-b border-Neutra50 pb-[1px]">
              {" "}
              {cancelledItem.sessionName || "N/A"}
            </span>
          </span>
          <span
            className={`px-2 h-[35px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-Neutra40/10 rounded-full leading-none flex justify-center items-center ${
              isGrid ? "hidden" : ""
            }`}
          >
            {formattedDate}
          </span>
        </p>
        <p className="font-Hanken text-[16px] text-Neutra40">
          Time: <span>{cancelledItem.time}</span>
        </p>
        <p className="text-Neutra40 font-Hanken font-medium text-[16px] ">
          Meeting Link:{" "}
          <span className="text-Accent1 font-normal">
            {cancelledItem.sessionUrl}
          </span>
        </p>
        <div className="w-full">
          <button
            type="button"
            className="text-right text-Accent1 relative left-[90%] cursor-pointer"
            onClick={() => {
              if (cancelledItem && cancelledItem._id) {
                vunct(cancelledItem._id, cancelledItem);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && cancelledItem && cancelledItem._id) {
                vunct(cancelledItem._id, cancelledItem);
              }
            }}
            tabIndex={0}
          >
            Restore
          </button>
        </div>
        <div
          className={`${
            isGrid
              ? " max-[1364px]:gap-2 max-[1250px]:flex-col xl:flex-row max-md:flex-row max-[410px]:flex-col"
              : "sm:flex-row"
          } flex items-center w-full justify-center gap-4 sm:gap-6 flex-col  `}
        >
          <div className="w-full" role="dialog" />
        </div>
      </div>
    </div>
  );
}
