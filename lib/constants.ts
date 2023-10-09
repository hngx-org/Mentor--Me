import React, { SVGProps } from "react";
import {
  BookingIcon,
  CommunitiesIcon,
  EarningIcon,
  HomeIcon,
  MessageIcon,
  MyMentorsIcons,
  PlansIcon,
  ReviewsIcon,
  ResourcesIcon,
  Sessions,
} from "@/public/SVGs";

export type SidebarLinksProps = {
  path: string;
  label: string;

  iconDark?: SVGProps<SVGSVGElement> | React.ReactNode;
  id: number;
};

export const sidebarMentorLinks: SidebarLinksProps[] = [
  {
    id: 1,
    path: "/mentor-profile?path=home",
    label: "Home",
    iconDark: HomeIcon(),
  },

  {
    id: 2,
    path: "/mentor-messages?path=messages",
    label: "Messages",
    iconDark: MessageIcon(),
  },
  {
    id: 3,
    path: "/mentor-my-mentors?path=MyMentors",
    label: "My Mentors",
    iconDark: MyMentorsIcons(),
  },
  {
    id: 4,
    path: "/mentor-booking?path=bookings",
    label: "Bookings",
    iconDark: BookingIcon(),
  },
  {
    id: 5,
    path: "/mentor-sessions?path=sessions",
    label: "Sessions",
    iconDark: Sessions(),
  },
  {
    id: 6,
    path: "/mentor-resources?path=resources",
    label: "Resources",
    iconDark: ResourcesIcon(),
  },
  {
    id: 7,
    path: "/mentor-communities?path=communities",
    label: "Communities",
    iconDark: CommunitiesIcon(),
  },
  {
    id: 8,
    path: "/mentor-earnings?path=earnings",
    label: "Earnings",
    iconDark: EarningIcon(),
  },
  {
    id: 9,
    path: "/mentor-plans?path=plans",
    label: "Plans",
    iconDark: PlansIcon(),
  },
  {
    id: 10,
    path: "/mentor-reviews?path=reviews",
    label: "Reviews",
    iconDark: ReviewsIcon(),
  },
];
