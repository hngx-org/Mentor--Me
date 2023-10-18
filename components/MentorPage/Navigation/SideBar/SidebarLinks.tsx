import React, { SVGProps } from "react";
import {
  Communities2,
  CommunitiesIcon,
  HomeIcon,
  HomeIcon2,
  Resources2,
  ResourcesIcon,
  Session2,
  Sessions,
} from "@/public/assets/icons/svgs";

export type SidebarLinksProps = {
  path: string;
  label: string;
  iconLight?: SVGProps<SVGSVGElement> | React.ReactNode;

  iconDark?: SVGProps<SVGSVGElement> | React.ReactNode;
  id: number;
};

export const sidebarMentorLinks: SidebarLinksProps[] = [
  {
    id: 1,
    path: "/mentor-dashboard?path=Home",
    label: "Home",
    iconDark: <HomeIcon />,
    iconLight: <HomeIcon2 />,
  },

  {
    id: 5,
    path: "/mentor-schedule?path=sessions",
    label: "Sessions",
    iconDark: <Sessions />,
    iconLight: <Session2 />,
  },
  {
    id: 6,
    path: "/mentor-resources?path=resources",
    label: "Resources",
    iconDark: <ResourcesIcon />,
    iconLight: <Resources2 />,
  },
  {
    id: 7,
    path: "/mentor-community?path=communities",
    label: "Communities",
    iconDark: <CommunitiesIcon />,
    iconLight: <Communities2 />,
  },
];

export const sidebarMenteeLinks: SidebarLinksProps[] = [
  {
    id: 1,
    path: "/dashboard?path=Home",
    label: "Home",
    iconDark: HomeIcon(),
  },

  {
    id: 4,
    path: "/mentee-sessions?path=Sessions&View=List",
    label: "Sessions",
    iconDark: Sessions(),
  },
  {
    id: 5,
    path: "/mentee-resources?path=Resources",
    label: "Resources",
    iconDark: ResourcesIcon(),
  },
  {
    id: 6,
    path: "/mentee-communities?path=Communities",
    label: "Communities",
    iconDark: CommunitiesIcon(),
  },
];
