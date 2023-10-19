import Link from "next/link";

import { mobileSidebarLinks } from "@/lib/constants/constants";

const MobileSideBar = ({
  action,
  path,
}: {
  action?: string | null;
  path?: string | null;
}) => (
  <nav
    className={`w-full   justify-center fixed bottom-0     z-10   items-center lg:hidden cursor-pointer shadow-xl bg-white/30 py-2 backdrop-blur-xl ${
      action === "edit-profile" ? "hidden" : "flex"
    }`}
  >
    <div className="w-full px-4 flex   justify-between  items-center ">
      {mobileSidebarLinks.map((link) => (
        <Link
          key={link.id}
          href={link.link}
          scroll
          className="flex flex-col  justify-center  items-center"
        >
          <span className={`${path === link.label ? "" : " opacity-50"} `}>
            {link.icon}
          </span>
          <span
            className={`${
              path === link.label ? "text-black" : "text-Neutra30 opacity-50"
            } text-[14px]   font-[500] font-Hanken`}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  </nav>
);

export default MobileSideBar;
