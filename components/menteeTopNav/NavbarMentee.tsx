import Image from "next/image";
import { DashboardMenteeNavImg } from "@/public";
import { NotificationBingIcon } from "@/public/SVGs";

export type NavbarMenteeProps = {
  path?: string | null;
  action?: string | null;
  username?: string;
  imgSrc?: string;
  jobTitle?: string;
};
export const NavbarMentee = ({
  path,
  action,
  username,
  imgSrc,
  jobTitle,
}: NavbarMenteeProps) => (
  <nav
    className={`flex w-full justify-between px-3 items-center  py-4 border-b-2 border-gray-200 row-start-1 row-end-2 col-start-2 col-end-3 ${
      action === "edit-profile" ? "hidden" : ""
    }`}
  >
    <h3 className="uppercase  font-Hanken font-[700] text-[24px]">
      {path || "[PathName Here]"}
    </h3>
    <div className="flex items-center gap-3">
      <NotificationBingIcon />

      <div className="   text-[12px] text-Neutra40  font-Hanken">
        <p className="font-[500] text-black text-[14px]">
          {username || "Funmi Oladapo"}
        </p>
        <p>{jobTitle || "C++ Developer"}</p>
      </div>
      <Image
        src={imgSrc || DashboardMenteeNavImg}
        alt="mentor"
        width={40}
        height={40}
      />
    </div>
  </nav>
);
