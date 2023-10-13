import React, { SVGProps } from "react";

import {
  BookingIcon,
  CommunitiesIcon,
  EarningIcon,
  HomeIcon,
  MessageIcon,
  MyMentorsIcons,
  Communities2,
  PlansIcon,
  ResourcesIcon,
  ReviewsIcon,
  Messaging2,
  HomeIcon2,
  Sessions,
  Resources2,
  MyMentor2,
  Booking2,
  Session2,
  Earning2,
} from "@/public/SVGs";

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

  // {
  //   id: 2,
  //   path: "/mentor-messages",
  //   label: "Messages",
  //   iconDark: <MessageIcon />,
  //   iconLight: <Messaging2 />,
  // },
  // {
  //   id: 3,
  //   path: "/mentor-my-mentors?path=MyMentors",
  //   label: "My Mentors",
  //   iconDark: <MyMentorsIcons />,
  //   iconLight: <MyMentor2 />,
  // },
  // {
  //   id: 4,
  //   path: "/mentor-booking?path=bookings",
  //   label: "Bookings",
  //   iconDark: <BookingIcon />,
  //   iconLight: <Booking2 />,
  // },
  {
    id: 5,
    path: "/mentor-schedule",
    label: "Sessions",
    iconDark: <Sessions />,
    iconLight: <Session2 />,
  },
  {
    id: 6,
    path: "/mentor-resources",
    label: "Resources",
    iconDark: <ResourcesIcon />,
    iconLight: <Resources2 />,
  },
  {
    id: 7,
    path: "/mentor-community",
    label: "Communities",
    iconDark: <CommunitiesIcon />,
    iconLight: <Communities2 />,
  },
  // {
  //   id: 8,
  //   path: "/mentor-earnings?path=earnings",
  //   label: "Earnings",
  //   iconDark: <EarningIcon />,
  //   iconLight: <Earning2 />,
  // },
  // {
  //   id: 9,
  //   path: "/mentor-plans?path=plans",
  //   label: "Plans",
  //   iconDark: <PlansIcon />,
  //   iconLight: "",
  // },
  // {
  //   id: 10,
  //   path: "/mentor-reviews",
  //   label: "Reviews",
  //   iconDark: <ReviewsIcon />,
  //   iconLight: "",
  // },
];

export const sidebarMenteeLinks: SidebarLinksProps[] = [
  {
    id: 1,
    path: "/dashboard?path=Home",
    label: "Home",
    iconDark: HomeIcon(),
  },

  // {
  //   id: 2,
  //   path: "/mentee-messages?path=Messages",
  //   label: "Messages",
  //   iconDark: MessageIcon(),
  // },
  // {
  //   id: 3,
  //   path: "/mentee-booking?path=Bookings",
  //   label: "Bookings",
  //   iconDark: BookingIcon(),
  // },
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
