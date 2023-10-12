import React from "react";
import Link from "next/link";
import { Button } from "../buttons/button";
import { ArrowRightIcon } from "@/svgs/Schedule/ScheduleMentor";
import PortfolioReview from "./PortfolioReview";
import PortfolioCard from "./PortfolioCard";
import AddNewSession from "./AddNewSession";
import RecentBooking from "./RecentBooking";
import SeeYourUpComingSession from "./SeeYourUpComingSession";
import PreviousSessionsCall from "./PreviousSessionsCall";
import MobileSideBar from "../mentor/MobileSiderBar";
import SidebarMentor from "../mentor/SidebarMentor";
import MenteeNavBar from "../menteeTopNav";
import Footer from "../Footer";

function Schedule() {
  return (
    <div>
      {/* Mobile sidebar */}
      <MobileSideBar />
      <div className=" hidden fixed ml-[-6px] mt-[-3px]  lg:block">
        <SidebarMentor />
      </div>
      <MenteeNavBar />

      <div className="lg:ml-[274px]">
        <div className=" w-full mx-auto bg-NeutalBase flex justify-center items-center pb-4 lg:hidden">
          <div className="flex justify-between flex-col items-center gap-4 px-8 min-h-[96px]">
            <p className="text-[#fff] text-base text-center px-4 font-Inter">
              Get started with MentorMe Long term mentorship program
            </p>
            <form>
              <input
                placeholder="Placeholder"
                className="max-w-[374px] py-1.5 px-3 placeholder-gray-500 rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                name="search"
                type="text"
              />
            </form>
          </div>
        </div>
        {/* Mobile header ends */}

        {/* Body of the page */}
        <section className="contianer md:p-10 w-full p-6 sm:py-8 sm:px-10 mx-auto">
          {/* My schedule segment */}
          <div className="flex justify-between items-center">
            <h1 className="text-[32px] font-Hanken font-bold sm:text-[38px] md:text-[46px]">
              My Schedule
            </h1>
            <div className="hidden lg:block">
              <Link href="/mentor-profile?path=home">
                {/* Link to mentor profile */}
                <Button
                  variant="outline-primary"
                  className="text-[10px] shadow-md px-4 py-3 min-w-[140px]"
                  title="Return to profile"
                  type="button"
                >
                  Return to profile
                </Button>
              </Link>
            </div>
          </div>
          {/* Intro talk */}
          <div className="max-w-[322px] md:max-w-[450px] lg:max-w-[606px]">
            <p className="font-inter font-medium text-sm leading-5 text-neutral-500 md:text-lg">
              Create a seamless flow of events with mentees by crafting series
              of personalized sessions with your calendar.
            </p>
          </div>
          {/* For the options */}
          <div className="max-w-[380px] relative text-gray-500 flex gap-5 font-Hanken text-base md:text-lg pt-6 lg:pt-10">
            <div className="h-[29px] hover:bg-Accent1 cursor-pointer lg:hover:bg-white">
              <div className="hover:undeline h-[26px] underline-offset-8 Accent1-500 bg-white">
                <p className="hover:text-Accent1 cursor-pionter hover:font-bold">
                  Sessions
                </p>
              </div>
            </div>
            <div className="h-[29px] hover:bg-Accent1 cursor-pionter lg:hover:bg-white">
              <div className="hover:border-b h-[26px] border-1 border-Accent1-500 bg-white">
                <p className="hover:text-Accent1 cursor-pointer hover:font-bold">
                  Calendar
                </p>
              </div>
            </div>
          </div>
          <hr className="max-w-[380px] h-1 lg:max-w-[606px]" />
          {/* My sessions */}
          <h3 className="text-lg font-Hanken text-neutral-950 font-semibold mt-3 md:mt-6 lg:mt-7 md:font-inter md:font-medium md:text-[32px]">
            My Sessions
          </h3>
          <div className="flex justify-between items-center lg:hidden">
            <p className="text-xs font-Hanken font-normal mb-5">
              View, share, and create new sessions
            </p>
            <div className="hidden">
              <ArrowRightIcon />
            </div>
          </div>

          <div className="container mt-4 flex gap-6 justify-center md:justify-start flex-wrap items-center max-w-[950px]">
            <PortfolioCard />

            <AddNewSession />
          </div>
          {/* Upcoming session */}
          <h3 className="text-lg lg:mt-20 font-Hanken text-neutral-950 font-semibold mt-3 md:mt-6 lg:mb-[30px] md:font-inter md:font-medium md:text-[32px]">
            Upcoming Sessions{" "}
            <span className="hidden lg:inline-block">with Mentees</span>
          </h3>
          <div className="flex justify-between items-center lg:hidden">
            <p className="text-xs font-Hanken font-normal">
              View your upcoming sessions
            </p>
            <div className="hidden">
              <ArrowRightIcon />
            </div>
          </div>
          <div className="flex md:gap-8 g-7 justify-start items-center mt-4">
            <div className="hidden lg:inline-block">
              {/* RecentBooking component */}
              <RecentBooking />
            </div>
            <div>
              <div className="hidden md-8 mt-3 space-x-4">
                <h4 className="text-base font-bold font-Hanken">
                  Recent Session
                </h4>
                <h4 className="text-base font-bold font-Hanken text-Accent1">
                  See All
                </h4>
              </div>

              <div className="lg:ml-[-25px]">
                <SeeYourUpComingSession />
              </div>
            </div>
          </div>

          {/* Previous Sessions */}
          <h3 className="text-lg font-Hanken lg:mt-20 text-neutral-950 font-semibold mt-3 md:mt-6  md:font-inter md:font-medium md:text-[32px]">
            Previous Sessions
          </h3>
          <div className="flex justify-between items-center lg:hidden">
            <p className="text-xs font-Hanken font-normal">
              Explore your previous sessions with mentees
            </p>
            <div className="hidden">
              <ArrowRightIcon />
            </div>
          </div>

          <div className="mb-3">
            <PreviousSessionsCall />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Schedule;
