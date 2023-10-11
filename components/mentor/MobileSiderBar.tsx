import Link from "next/link";
import {
  CommunitiesIcon,
  HomeIcon,
  MobileSession,
  ResourcesIcon,
  EarningIcon,
} from "@/public/SVGs";

export default function MobileSideBar() {
  return (
    <nav className="w-full flex justify-center fixed bottom-0 items-center lg:hidden cursor-pointer shadow-xl bg-black bg-opacity-75">
      <div className="w-[90%] flex mt-4 justify-between  items-center ">
        <Link href="/mentee-profile?path=home">
          <div className="flex flex-col justify-center items-center">
            <HomeIcon />
            <span className="text-[14px] text-[#ABABAB]  font-[500] font-Hanken">
              Home
            </span>
          </div>
        </Link>
        <Link href="/mentee-sessions?path=sessions">
          <div className="flex flex-col  justify-center  items-center ">
            <MobileSession />
            <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
              Sessions
            </span>
          </div>
        </Link>
        <Link href="/mentee-communities?path=communities">
          <div className="flex flex-col  justify-center  items-center">
            <CommunitiesIcon />
            <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
              Communities
            </span>
          </div>
        </Link>
        <Link href="/mentee-resources?path=resources">
          <div className="flex flex-col  justify-center  items-center">
            <ResourcesIcon />
            <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
              Resource center
            </span>
          </div>
        </Link>
        <Link href="/mentee-earnings?path=earnings">
          <div className="flex flex-col  justify-center  items-center">
            <EarningIcon />
            <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
              Earnings
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
