import { StaticImageData } from "next/image";
import {
  sessionHope,
  sessionKaplan,
  sessionMaurice,
  sessionPatricia,
  sessionShaolin,
} from "@/public";

export type QualityProps = {
  id: number;
  title: string;
  rating: string;
};

export type IReview = {
  id: string;
  date: string;
  comment: string;
  quality1: string;
  quality2: string;
  quality3: string;
  avatar?: string;
  name: string;
  track: string;
  role: string;
};
export type UpcomingSessionProp = {
  id?: number;
  underline?: boolean;
  name: string;
  time: string;
  date: string;
  meetingLink: string;
  rescheduleBtn: string;
  reminderBtn: string;
  imgSrc: string | StaticImageData;
};
export type historySessionProp = {
  id?: number;
  session: string;
  mentor: string;
  date: string;
  duration: string;
};

// Vxrcel constants
export const historySessions: historySessionProp[] = [
  {
    id: 1,
    session: "Individual Session",
    mentor: "Eve Jenny",
    date: "Sept 06, 2023",
    duration: "2 hours",
  },
  {
    id: 2,
    session: "Group Session",
    mentor: "Tammy Abraham",
    date: "Sept 20, 2023",
    duration: "4 hours",
  },
  {
    id: 3,
    session: "Individual Session",
    mentor: "Ole Lutjens",
    date: "Sept 24, 2023",
    duration: "1 hour",
  },
  {
    id: 4,
    session: "Individual Session",
    mentor: "Ole Lutjens",
    date: "Sept 24, 2023",
    duration: "1 hour",
  },
  {
    id: 5,
    session: "Individual Session",
    mentor: "Ole Lutjens",
    date: "Sept 24, 2023",
    duration: "1 hour",
  },
  {
    id: 6,
    session: "Individual Session",
    mentor: "Ole Lutjens",
    date: "Sept 24, 2023",
    duration: "1 hour",
  },
  {
    id: 7,
    session: "Individual Session",
    mentor: "Ole Lutjens",
    date: "Sept 24, 2023",
    duration: "1 hour",
  },
  {
    id: 8,
    session: "Individual Session",
    mentor: "Ole Lutjens",
    date: "Sept 24, 2023",
    duration: "1 hour",
  },
];

export const upcomingSessions: UpcomingSessionProp[] = [
  {
    id: 1,
    name: "Patricia Flow",
    time: "4pm (WAT)",
    date: "06 Sept",
    meetingLink: "https://meet.mentorme.com/azv-bspc-fyb",
    rescheduleBtn: "Reschedule Session",
    reminderBtn: "Set reminder",
    imgSrc: sessionPatricia,
  },
  {
    id: 2,
    name: "Shao Lin",
    time: "4pm (WAT)",
    date: "06 Sept",
    meetingLink: "https://meet.mentorme.com/azv-bspc-fyb",
    rescheduleBtn: "Reschedule Session",
    reminderBtn: "Set reminder",
    imgSrc: sessionShaolin,
  },
  {
    id: 3,
    name: "Hope Chidi",
    time: "4pm (WAT)",
    date: "06 Sept",
    meetingLink: "https://meet.mentorme.com/azv-bspc-fyb",
    rescheduleBtn: "Reschedule Session",
    reminderBtn: "Set reminder",
    imgSrc: sessionHope,
  },
];
export const cancelledSessions: UpcomingSessionProp[] = [
  {
    id: 1,
    name: "Patricia Flow",
    time: "4pm (WAT)",
    date: "02 Aug",
    meetingLink: "https://meet.mentorme.com/azv-bspc-fyb",
    rescheduleBtn: "Reschedule Session",
    reminderBtn: "Contact Mentor",
    imgSrc: sessionPatricia,
    underline: false,
  },
  {
    id: 2,
    name: "Maurice Monye",
    time: "4pm (WAT)",
    date: "02 Aug",
    meetingLink: "https://meet.mentorme.com/azv-bspc-fyb",
    rescheduleBtn: "Reschedule Session",
    reminderBtn: "Contact Mentor",
    imgSrc: sessionMaurice,
    underline: true,
  },
  {
    id: 3,
    name: "Kaplan Kai",
    time: "4pm (WAT)",
    date: "02 Aug",
    meetingLink: "https://meet.mentorme.com/azv-bspc-fyb",
    rescheduleBtn: "Reschedule Session",
    reminderBtn: "Contact Mentor",
    imgSrc: sessionKaplan,
    underline: true,
  },
];

export const reviewsArr: IReview[] = [
  {
    id: "1",
    date: "August 31, 2023",
    comment:
      "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
    quality1: "Technically competent",
    quality2: "Amazing Problem Solver",
    quality3: "Very motivational",
    avatar: "../../public/assets/Image.png",
    name: "Salma Paralluelo",
    track: "Product Designer",
    role: "Mentee",
  },
  {
    id: "2",
    date: "August 31, 2023",
    comment:
      "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
    quality1: "Technically competent",
    quality2: "Amazing Problem Solver",
    quality3: "Very motivational",
    avatar: "../../public/assets/Image.png",
    name: "Salma Paralluelo",
    track: "Product Designer",
    role: "Mentee",
  },
  {
    id: "3",
    date: "August 31, 2023",
    comment:
      "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
    quality1: "Technically competent",
    quality2: "Amazing Problem Solver",
    quality3: "Very motivational",
    avatar: "../../public/assets/Image.png",
    name: "Salma Paralluelo",
    track: "Product Designer",
    role: "Mentee",
  },
  {
    id: "4",
    date: "August 31, 2023",
    comment:
      "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
    quality1: "Technically competent",
    quality2: "Amazing Problem Solver",
    quality3: "Very motivational",
    avatar: "../../public/assets/Image.png",
    name: "Salma Paralluelo",
    track: "Product Designer",
    role: "Mentee",
  },
];

export const qualityArr: QualityProps[] = [
  {
    id: 1,
    title: "Motivational",
    rating: "100%",
  },
  {
    id: 2,
    title: "Communication",
    rating: "100%",
  },
  {
    id: 3,
    title: "Subject Knowledge",
    rating: "100%",
  },
  {
    id: 4,
    title: "Problem Solving",
    rating: "100%",
  },
];
