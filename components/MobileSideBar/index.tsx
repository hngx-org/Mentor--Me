import Link from "next/link";
import {
  CommunitIconMobile,
  MobileHomeIcon,
  MobileSession,
  ResourcesMobile,
} from "@/public/SVGs";

const MobileSideBar = ({ action }: { action?: string | null }) => (
  <nav
    className={`w-full  justify-center fixed bottom-0     z-10   items-center lg:hidden cursor-pointer shadow-xl bg-[#ffff] ${
      action === "edit-profile" ? "hidden" : "flex"
    }`}
  >
    <div className="w-[90%] flex   justify-between  items-center ">
      <Link href="/" className="flex flex-col  justify-center  items-center">
        <MobileHomeIcon />
        <span className="text-[14px] text-[#121212]  font-[500] font-Hanken">
          Home
        </span>
      </Link>
      <Link
        href="/mentee-sessions"
        className="flex flex-col  justify-center  items-center "
      >
        <MobileSession />
        <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
          Sessions
        </span>
      </Link>
      <Link
        href="/mentee-communities"
        className="flex flex-col  justify-center  items-center"
      >
        <CommunitIconMobile />
        <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
          Communities
        </span>
      </Link>
      <Link
        href="/mentee-resources"
        className="flex flex-col  justify-center  items-center"
      >
        <ResourcesMobile />
        <span className="text-[12px] text-[#ABABAB]  font-[400] font-Hanken">
          Resource center
        </span>
      </Link>
    </div>
  </nav>
);

export default MobileSideBar;
