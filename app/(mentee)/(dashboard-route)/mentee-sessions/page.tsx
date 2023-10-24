/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import CancelledCard from "@/components/cards/mentee-session-cards/CancelledCard";
import HistoryCard from "@/components/cards/mentee-session-cards/HistoryCard";
import UpcomingCard from "@/components/cards/mentee-session-cards/UpcomingCard";

import {
  cancelledSessions,
  historySessions,
  upcomingSessions,
} from "@/lib/constants/constants";

import { faceMoji1, faceMoji2, faceMoji3 } from "@/public";

import MenteeCalenda from "@/components/cards/mentee-session-cards/MenteeCalenda";
import Button from "./(ui)/VxrcelBtn";
import Loading from "./loading";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import SuccessReminder from "@/components/modal/mentee-session/SuccessReminder";
import { GridViewIcon, ListViewIcon } from "@/public/SVGs";
import ProtectedRoute from "@/context/ProtectedRoute";
import CancelModal from "@/components/modal/mentee-session/CancelSureModal";
import JoinModal from "@/components/modal/mentee-session/JoinModal";

type SessionsTabsProps = {
  id: number;
  title: string;
  tab: string;
};

const sessionsTabs: SessionsTabsProps[] = [
  {
    id: 1,
    title: "upcoming",
    tab: "upcoming",
  },
  {
    id: 2,
    title: "cancelled",
    tab: "cancelled",
  },
  {
    id: 3,
    title: "history",
    tab: "history",
  },
];
export type DataApi = {
  date?: string | Date;
  relevantTopics?: string;
  sessionUrl?: string;
  time?: string;
  sessionName?: string;
  _id?: string;
  createdAt?: string;
  tag?: string;
  updatedAt?: string;
  duration?: string;
  sessionState?: string;
};
interface Itemty {
  date: string;
  _id?: string;
}
interface PastApiDataItem {
  date: string;
  _id?: string;
}

export default function AllSession({
  searchParams: { path },
}: {
  searchParams: { path?: string };
}) {
  const [activeView, setActiveView] = useState("");
  const [activeTab, setActiveTab] = useState<string | null | undefined>("");
  const [apiData, setApiData] = useState([]);
  const [pastApiData, setPastApiData] = useState<DataApi[]>([]);
  const [passedItems, setPassedItems] = useState<DataApi[]>([]);
  const [comingItems, setComingItems] = useState<DataApi[]>([]);
  const [cancelledItems, setCancelledItems] = useState([]);
  const [relod, setRelod] = useState<boolean>(false);

  const paramsView = useSearchParams().get("View");
  const paramsTabs = useSearchParams().get("tabs");
  const router = useRouter();

  const [cancel, setCancel] = useState(false);
  const [isReminder, setIsReminder] = useState(false);
  const [isView, setIsView] = useState(false);

  const [isViewAll, setIsViewAll] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  const filteredItems = isViewAll
    ? comingItems
    : comingItems.filter((item) => {
        if (!selectedDay || !item.date) {
          return true;
        }
        const itemDate =
          typeof item.date === "string" ? new Date(item.date) : item.date;
        return (
          itemDate.toLocaleDateString() === selectedDay.toLocaleDateString()
        );
      });

  useEffect(() => {
    setCancelledItems(
      apiData.filter(
        (session: DataApi) => session?.sessionState === "cancelled"
      )
    );
  }, [apiData]);

  // Call PatchRequest when cancelledItems changes

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const getView = localStorage.getItem("view");

      if (getView) {
        router.push(`?path=Sessions&View=${getView}`);
        setActiveView(getView);
      }
    }
  }, []);

  const getApiData = async () => {
    const result = await fetch(
      "https://hngmentorme.onrender.com/api/one-off-session"
    )
      .then((response) => response.json())
      .then((result) => {
        setApiData(result); // Store the API data in state
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };

  const getPastDate = async () => {
    const answer = await fetch(
      "https://hngmentorme.onrender.com/api/one-off-session"
    )
      .then((response) => response.json())
      .then((answer) => {
        setPastApiData(answer); // Store the API data in state
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };

  useEffect(() => {
    const currentDate = new Date();

    // Log apiData to check its value
    console.log("apiData:", apiData);

    // Filter the items based on whether their date is in the future
    const filteredItems = pastApiData.filter((item: any) => {
      const itemDate = new Date(item.date);
      return itemDate >= currentDate;
    });

    // Log filteredItems to check its value
    console.log("filteredItems:", filteredItems);

    // Determine the value to set for comingItems based on the sessionState condition
    const sessionStateToFilter = "pending";
    const newComingItems = filteredItems.filter(
      (item) => item.sessionState === sessionStateToFilter
    );

    // Log newComingItems to check its value
    console.log("newComingItems:", newComingItems);

    // Sort the newComingItems array in descending order based on the date
    newComingItems.sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Log sorted newComingItems to check its value
    console.log("sorted newComingItems:", newComingItems);

    // Update the state with the newComingItems
    setComingItems(newComingItems);
    console.log(comingItems);
  }, [apiData]);

  useEffect(() => {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const passedItems = pastApiData.filter((item) => {
      const itemDate = new Date(item.date as string).setHours(0, 0, 0, 0); // Explicitly specify the type as string
      return itemDate < currentDate;
    });

    setPassedItems(passedItems);
  }, [pastApiData]);

  // save to local storage
  useEffect(() => {
    getApiData();
    getPastDate();
  }, []);

  useEffect(() => {
    //   console.log(passedItems)
    // console.log(apiData)
    console.log(comingItems);
  }, [apiData]);

  useEffect(() => {
    localStorage.setItem("view", paramsView || "List");
    setActiveView(paramsView || "List");
    setActiveTab(paramsTabs || "upcoming");
  }, [paramsView, paramsTabs]);

  return (
    <ProtectedRoute>
      <section className="bg-[#f9fafc] h-full lg:max-h-[100vh] w-full flex-col flex pt-10 lg:pt-12 sm:min-h-screen pb-12 ">
        {/* {isReminder && (
          <Suspense fallback={<LoadingSpinner />}>
          <div className="min-h-screen h-screen top-0 left-0 w-full fixed z-[9999] flex justify-center items-center bg-black/80">
            <JoinModal closeModal={setIsReminder} />
          </div>
        </Suspense>
      )} */}
        {cancel && (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="min-h-screen h-screen top-0 left-0 w-full fixed z-[9999] flex justify-center items-center bg-black/80">
              <CancelModal closeModal={setCancel} />
            </div>
          </Suspense>
        )}
        <div className="flex items-center gap-10 !max-lg:w-full border-b-[1px] border-Neutra10 px-4 sm:px-6 lg:px-8  select-none">
          {sessionsTabs.map((session) => (
            <p
              className={`hover:text-Accent1 cursor-pointer capitalize text-[14px] sm:text-[18px] font-Hanken pb-2 border-b-[2px] border-[#f9fafc]  text-Neutra40 ${
                activeTab === session.tab
                  ? "!border-Accent1 text-black font-medium"
                  : ""
              }`}
              key={session.id}
              onClick={() => {
                router.push(
                  `?path=Sessions&View=${activeView}&tabs=${session.tab}`,
                  {
                    scroll: false,
                  }
                );
              }}
            >
              {session.title}
            </p>
          ))}
        </div>
        <div
          className={`flex flex-col ${
            activeView === "List" ? "xl:flex-row" : ""
          }  w-full justify-between mt-8 px-4 sm:px-6 lg:px-8  gap-8 xl:gap-2 overflow-x-hidden `}
        >
          <div className="flex flex-col w-full">
            <div className="mb-6 w-full flex items-center justify-between ">
              <p className="capitalize font-medium">
                {activeTab === "cancelled"
                  ? "All Cancelled"
                  : activeTab === "history"
                  ? "All "
                  : activeTab}{" "}
                Sessions
              </p>

              <div
                className="flex gap-1 text-Neutra50 items-center  select-none  flex-col relative"
                role="button"
              >
                <button
                  type="button"
                  title={
                    activeView === "List"
                      ? "change to Grid?"
                      : "change to List?"
                  }
                  disabled={activeTab === "history"}
                  onClick={() => setIsView((prev) => !prev)}
                  className={`border border-Neutra20 px-2 p-1 text-lg font-medium font-Hanken flex items-center gap-1  transition-all duration-300 relative 
                ${
                  activeTab === "history"
                    ? "opacity-50 !cursor-not-allowed"
                    : "cursor-pointer hover:bg-black hover:text-Neutra10"
                }
                ${isView ? "!bg-black text-Neutra10 z-[9999]" : ""}`}
                >
                  <span>Views</span>
                  {activeView === "List" ? (
                    <ListViewIcon
                      props={{ className: "cursor-pointer w-6 h-6" }}
                    />
                  ) : (
                    <GridViewIcon
                      props={{ className: "cursor-pointer w-6 h-6" }}
                    />
                  )}
                </button>
                {isView && (
                  <>
                    <div
                      className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99] flex justify-center items-center opacity-0"
                      role="dialog"
                      onClick={() => setIsView(!isView)}
                    />
                    <div className="flex flex-col  h-[80px] w-[100px] absolute top-10 right-0 justify-center items-center z-[9999] border border-Neutra20  text-lg font-medium font-Hanken   rounded-xl mt-4 bg-black text-Neutra10 shadow-[0_0_20px_rgba(0,0,0,0.3)] before:absolute before:content-[] before:h-[20px] before:w-[20px] before:bg-black before:-top-2 before:rotate-45 before:right-6 before:z-[-1] px-1">
                      <button
                        type="button"
                        disabled={activeView === "List"}
                        className={`${
                          activeView === "List"
                            ? "opacity-50 !cursor-not-allowed"
                            : ""
                        } flex items-center w-full justify-start gap-4 border-b border-Neutra50 pb-1 hover:bg-gray-800/60 px-2 p-1`}
                        onClick={() => {
                          setActiveView("List");
                          router.push(
                            `?path=${path}&View=List&tabs=${activeTab}`,
                            {
                              scroll: false,
                            }
                          );
                          setIsView(false);
                        }}
                      >
                        <ListViewIcon
                          props={{ className: "cursor-pointer w-6 h-6" }}
                        />
                        <span>List</span>
                      </button>
                      <button
                        disabled={activeView === "Grid"}
                        type="button"
                        className={`${
                          activeView === "Grid"
                            ? "opacity-50 !cursor-not-allowed"
                            : ""
                        } flex items-center w-full justify-start gap-4 pt-1 hover:bg-gray-800/60 px-2 p-1`}
                        onClick={() => {
                          setActiveView("Grid");
                          router.push(
                            `?path=${path}&View=Grid&tabs=${activeTab}`,
                            {
                              scroll: false,
                            }
                          );
                          setIsView(false);
                        }}
                      >
                        <GridViewIcon
                          props={{ className: "cursor-pointer w-6 h-6" }}
                        />{" "}
                        <span>Grid</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            {activeTab === "upcoming" && (
              <Suspense fallback={<Loading />}>
                <div
                  className={`flex w-full h-full ${
                    activeView === "Grid"
                      ? "flex-col"
                      : "max-xl:flex-col max-xl:gap-10"
                  }   translate-x-[100px] lg:translate-x-[500px] opacity-0 animate-slideLeft`}
                >
                  <div
                    className={`${
                      activeView === "Grid"
                        ? "grid grid-cols-1 md:grid-cols-2"
                        : "flex-col flex"
                    }  w-full h-full  gap-6 sm:gap-y-8 overflow-y-auto pb-10 sm:pb-20  ${
                      apiData.length > 5 ? "max-h-[760px] pb-4 " : ""
                    }`}
                  >
                    {filteredItems.length === 0 ? (
                      <p className="font-bold text-center text-3xl lg:mt-[200px]">
                        No Session on this day
                      </p> // Display message when no items are found
                    ) : isViewAll ? (
                      comingItems.map((session: DataApi) => (
                        <UpcomingCard
                          getView={activeView}
                          setCancelledItems={setCancelledItems}
                          cancelledItems={cancelledItems}
                          comingItems={comingItems}
                          setComingItems={setComingItems}
                          openCancel={setCancel}
                          key={session._id}
                          apiData={session}
                        />
                      ))
                    ) : (
                      filteredItems.map((session: DataApi) => (
                        <UpcomingCard
                          getView={activeView}
                          setCancelledItems={setCancelledItems}
                          cancelledItems={cancelledItems}
                          comingItems={comingItems}
                          setComingItems={setComingItems}
                          openCancel={setCancel}
                          key={session._id}
                          apiData={session}
                        />
                      ))
                    )}
                  </div>
                  <div
                    className={`flex ${
                      activeView === "Grid"
                        ? "2xl:px-16"
                        : "2xl:w-full xl:flex-col xl:justify-start"
                    }      items-start lg:items-center justify-between max-lg:w-full gap-10 lg:gap-6 lg:mt-10 max-sm:flex-col lg:ml-10 pb-10 mt-4`}
                  >
                    {" "}
                    <p
                      className="text-Accent1 font-bold cursor-pointer hover:text-black"
                      onClick={() => {
                        setIsViewAll(!isViewAll);
                      }}
                    >
                      View All Upcoming Sessions
                    </p>
                    <div
                      className={`${
                        activeView === "Grid" ? "w-fit" : ""
                      } w-fit   lg:max-w-[430px] xl:max-w-[500px] lg:justify-start flex max-sm:justify-center cursor-pointer sm:hover:shadow-[0px_0px_40px_rgba(0,0,0,0.2)] transition-all duration-300`}
                    >
                      <MenteeCalenda
                        onDaySelect={(date: Date | null) => {
                          setSelectedDay(date);
                          setIsViewAll(false);
                        }}
                      />
                    </div>
                    <div className="hidden flex-col w-full lg:max-w-[330px] xl:max-w-[500px] ">
                      <p className="text-NeutalBase font-Inter font-medium text-[18px]">
                        Ongoing Group Sessions
                      </p>
                      <div className="flex flex-col mt-4 gap-6 border border-Neutra10 rounded-xl w-full p-6 lg:p-8 sm:hover:shadow-[0px_0px_40px_rgba(0,0,0,0.2)] transition-all duration-300">
                        <p className="font-Inter text-[16px] text-Neutra50 font-medium">
                          Group session with Shola Mayowa
                        </p>
                        <div className="flex items-center gap-2 ">
                          <div className="flex relative">
                            <Image
                              src={faceMoji1}
                              alt="face"
                              height={40}
                              width={40}
                            />
                            <div className="flex relative -ml-5">
                              <Image
                                src={faceMoji2}
                                alt="face"
                                height={40}
                                width={40}
                              />
                              <Image
                                src={faceMoji3}
                                alt="face"
                                height={40}
                                width={40}
                                className="ml-[-18px] "
                              />
                            </div>
                          </div>
                          <p className="font-Inter text-[13px] text-Neutra40 font-medium">
                            10 attendees
                          </p>
                        </div>
                        <p className="font-Inter text-[14px] text-Neutra50 font-medium">
                          Date:{" "}
                          <span className="text-Accent1">Sept 2,2023</span>
                        </p>
                        <div>
                          <Button
                            fullWidth
                            title="Join Session"
                            variant="secondary"
                            className="py-4 !bg-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Suspense>
            )}
            {activeTab === "cancelled" && (
              <Suspense fallback={<Loading />}>
                <div
                  className={`${
                    activeView === "Grid"
                      ? "grid grid-cols-1 md:grid-cols-2"
                      : "flex-col flex"
                  } pb-10 sm:pb-16 flex w-full flex-col gap-10 overflow-y-auto translate-x-[100px] lg:translate-x-[500px] opacity-0 animate-slideLeft ${
                    cancelledSessions.length > 3 ? "max-h-[760px] " : ""
                  }`}
                >
                  {cancelledItems.length === 0 ? (
                    <p className="text-center text-[20px] lg:text-[30px] mt-10  font-Hanken">
                      NO CANCELLED SESSION. EDUCTION IS KEY <br /> &#128526;
                    </p>
                  ) : (
                    cancelledItems.map((session: DataApi) => (
                      <CancelledCard
                        getView={activeView}
                        key={session._id}
                        cancelledItem={session}
                        setCancelledItems={setCancelledItems}
                        cancelledItems={cancelledItems}
                        comingItems={comingItems}
                        setComingItems={setComingItems}
                        setCancelled={undefined}
                        setRelod={setRelod}
                      />
                    ))
                  )}
                </div>
              </Suspense>
            )}

            {activeTab === "history" && (
              <Suspense fallback={<LoadingSpinner />}>
                <div className="w-full flex flex-col  border  border-Neutra10 rounded-xl  translate-x-[100px] lg:translate-x-[500px] opacity-0 animate-slideLeft">
                  <div className="grid grid-cols-4 w-full sm:gap-10 gap-4 border-b border-Neutra10 h-full sm:pl-8 pl-2 py-2 sm:py-6 font-Inter font-medium text-[12px] sm:text-[18px] text-NeutalBase ">
                    <p>Session/Mentor</p>
                    <p>Discuss</p>
                    <p>Date</p>
                    <p>Duration</p>
                  </div>

                  {passedItems &&
                    passedItems.map((session: DataApi) => (
                      <HistoryCard key={session._id} passedItems={session} />
                    ))}
                </div>
              </Suspense>
            )}
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
