/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Dispatch, SetStateAction, useState, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpcomingSessionProp } from "@/lib/constants/constants";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";
import { DataApi } from "@/app/(mentee)/(dashboard-route)/mentee-sessions/page";
import JoinModal from "@/components/modal/mentee-session/JoinModal";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

type SuccessReminderProps = {
  getView: string | null;
  openCancel?: Dispatch<SetStateAction<boolean>>;
  apiData: DataApi;
  handleCancelSession?: (sessionId: string) => void;
  cancelledItems?: any;
  comingItems?: any;
  setComingItems?: any;
  setCancelledItems?: any;
};

export default function UpcomingCard({
  apiData,
  openCancel,
  handleCancelSession,
  cancelledItems,
  getView,
  comingItems,
  setComingItems,
  setCancelledItems,
}: SuccessReminderProps) {
  const [joinModal, setJoinModal] = useState(false);
  const isGrid = getView === "Grid";
  const dateString = apiData?.date;
  let formattedDate = "N/A";
  if (dateString) {
    const tim = new Date(dateString);
    const year = tim.getFullYear();
    const month = String(tim.getMonth() + 1).padStart(2, "0");
    const day = String(tim.getDate()).padStart(2, "0");
    formattedDate = `${year}-${month}-${day}`;
  }
  const openModal = () => {
    setJoinModal(true);
  };
  const collapseModal = () => {
    setJoinModal(false);
  };

  const cancel = (itemId: string) => {
    const itemToCancel = comingItems?.find(
      (item: DataApi) => item._id === itemId
    );
    if (itemToCancel) {
      setComingItems(
        comingItems.filter((item: DataApi) => item._id !== itemId)
      );
      setCancelledItems([...cancelledItems, itemToCancel]);
    }
  };
  const PatchRequest = (itemId: string, dataObject: any) => {
    const itemLast = { ...dataObject, sessionState: "cancelled" };

    fetch(`https://hngmentorme.onrender.com/api/one-off-session/${itemId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(itemLast),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, "recovered");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const vunct = async (itemId: string, dataObject: any) => {
    toast.success("Cancel succefully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(itemId);
    cancel(itemId);
    await PatchRequest(itemId, dataObject);
  };

  //  const handleCancelClick = () => {
  //   const sessionId = apiData._id || "";
  //   handleCancelSession(sessionId);
  //  }

  return (
    <div className="flex w-full sm:max-w-[90%] sm:ml-4 px-4 sm:px-6 xl:px-8 pb-6 pt-8 border border-Neutra10 rounded-xl gap-6 flex-col sm:flex-row hover:shadow-2xl shadow-black/20 transition-all duration-300">
      <div className="flex flex-col w-full gap-[6px]">
        <div
          className={`${!isGrid ? "hidden" : ""} w-full flex justify-between `}
        >
          <span className="w-[40px] h-[40px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-[#e5ffff] rounded-full leading-none flex justify-center items-center">
            {formattedDate}
          </span>
        </div>
        <p className="flex w-full justify-between">
          <span className="text-Neutra50 font-Inter text-[16px] font-medium">
            Mentor/Session:
            <span className="text-Accent1"> {apiData.sessionName}</span> <br />
            Discuss:
            <span className="text-Accent1 pl-1">{apiData.relevantTopics}</span>
          </span>
          <span
            className={`w-[40px] h-[40px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-[#e5ffff] rounded-full leading-none flex justify-center items-center ${
              isGrid ? "hidden" : ""
            }`}
          >
            {formattedDate}
          </span>
        </p>
        <p className="font-Hanken text-[16px] text-Neutra40">
          Time: <span>{apiData.time}</span>
        </p>
        <p className="text-Neutra40 font-Hanken font-medium text-[16px] ">
          Meeting Link:{" "}
          <span className="text-Accent1 font-normal">{apiData.sessionUrl}</span>
        </p>
        <div
          className={`${
            isGrid
              ? " max-[1364px]:gap-2 max-[1250px]:flex-col xl:flex-row max-md:flex-row max-[410px]:flex-col"
              : "sm:flex-row"
          } flex items-center w-full justify-center gap-4 sm:gap-6 flex-col  `}
        >
          {" "}
          <div
            className="w-full"
            role="dialog"
            onClick={() => apiData?._id && vunct(apiData._id, apiData)}
          >
            <Button
              className={`px-4 py-2 border-Neutra50 !bg-transparent ${
                isGrid ? "max-[1364px]:px-1" : ""
              }`}
              title="Cancel"
              variant="secondary"
              fullWidth
            />
          </div>
          <div className="w-full" role="dialog" onClick={openModal}>
            <Button
              className="px-4 py-2 border-Neutra50"
              title="Join Meeting"
              variant="primary"
              fullWidth
            />
          </div>
        </div>
      </div>
      {joinModal && (
        <Suspense fallback={<LoadingSpinner />}>
          <div className=" fixed top-[-50px] left-0 right-0 z-[9999] flex justify-center items-center">
            <JoinModal
              collapseModal={collapseModal}
              sessionUrl={apiData.sessionUrl}
            />
          </div>
        </Suspense>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}
