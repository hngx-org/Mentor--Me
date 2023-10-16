import Image from "next/image";
import React, { Fragment } from "react";
import {
  CertificationIcon,
  EditIconMentorProfile,
  EducationIcon,
} from "@/public/SVGs";
import ProgressBar from "../progressBar/ProgressBar";
import { ModalState } from "@/app/(mentor)/(dashboard-mentor)/mentor-profile/page";

export default function ProfileDetailsCardContainer({
  heading,
  items,
  openModal,
}: {
  heading: string;
  items: InfoCardProps[];
  openModal?: React.Dispatch<React.SetStateAction<ModalState>>;
}) {
  return (
    <div className="w-[100%] flex flex-col h-fit ">
      <div className="w-[100%] flex justify-between">
        <p className="text-lg font-bold text-Neutral60 capitalize">{heading}</p>
        <span
          onClick={() => {
            if (openModal) {
              openModal({
                state: "Experience/ Certification",
                isOpen: true,
              });
            }
          }}
          role="presentation"
        >
          <EditIconMentorProfile />
        </span>
      </div>

      {items.length >= 1 &&
        items.map((item) => (
          <Fragment key={item.text}>
            <InfoCard {...item} />
          </Fragment>
        ))}
      {items.length === 0 && <p> click to add {heading}</p>}
    </div>
  );
}

type InfoCardProps = {
  type: "skill" | "experience" | "certification" | "education";
  text?: string;
  heading?: string;
};

function getIcons(
  type: "skill" | "experience" | "certification" | "education"
) {
  if (type === "certification") {
    return <CertificationIcon />;
  }
  if (type === "education") {
    return <EducationIcon />;
  }
  if (type === "experience") {
    return (
      <Image
        src="/assets/images/placeholder.png"
        width={15}
        height={15}
        alt="logo"
        className="object-contain"
      />
    );
  }
  return <p> add icon</p>;
}

export function InfoCard({ type, heading, text }: InfoCardProps) {
  return (
    <div className="w-[100%]  flex space-x-5 h-fit items-center my-2">
      {getIcons(type)}
      <div>
        <p className="text-lg  font-[500] text-Neutra50">{heading}</p>
        <p className="text-Neutra40"> {text} </p>
      </div>
    </div>
  );
}

export function BioCard({ text }: { text: string }) {
  return (
    <div className="w-[100%]  flex space-x-5 h-fit items-center my-2">
      <div>
        <p className="text-lg font-bold font-[#000]"> Bio</p>
        <p className="text-Neutra40">{text || "Click to add Bio"}</p>
      </div>
    </div>
  );
}
export function SkillSCard({ skills }: { skills: string[] }) {
  return (
    <div className="w-[100%] flex flex-col  h-fit ">
      <p className="text-lg font-bold font-[#000]"> Skills/Expertise</p>
      <div className="flex w-[100%] flex-wrap">
        {skills.length === 0 && <p> click to add skills</p>}
        {skills.length > 1 &&
          skills.slice(0, 5).map((item) => (
            <Fragment key={item}>
              <div className="border border-Neutral10 py-[8px] px-[10px] w-fit rounded-[8px] m-[5px]">
                <p>{item}</p>
              </div>
            </Fragment>
          ))}
        {skills.length > 5 && (
          <div className="border border-Neutral10 py-[8px] px-[10px] w-fit rounded-[8px] m-[5px]">
            <p> + {skills.length - 5}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export function OverViewCard({
  text,
  subText,
  label,
}: {
  text: string;
  subText: string;
  label: string;
}) {
  return (
    <div className="w-[104px] h-fit sm:w-[144px] border border-Neutral20 p-3 rounded-[6px] text-center space-y-4 m-2">
      <p className="text-xs">{subText}</p>
      <p className="font-bold text-2xl text-Neutral50 flex items-center justify-center">
        {text} <span className="text-xs font-normal mx-1"> {label}</span>
      </p>
    </div>
  );
}

type AvailableSessionCardProps = {
  timezone: string;
  availableDays: string;
  time: string;
};
export function AvailableSessionCard({
  timezone,
  availableDays,
  time,
}: AvailableSessionCardProps) {
  return (
    <div className="border borderNeutral10 p-6 w-[100%] h-fit rounded-[8px]">
      <div className="flex w-[100%] justify-between  px-2">
        <p> Availability</p> <EditIconMentorProfile />
      </div>
      <div className="flex w-[100%] justify-between text-xs border borderNeutral10 rounded-[6px] px-4 py-3  m-2 items-center">
        <p>Preferred Meeting Times</p>
        <p className="w-[50%]">
          {availableDays} {time}
        </p>
      </div>
      <div className="flex w-[100%] justify-between text-xs border borderNeutral10 rounded-[6px] px-4 py-3  m-2 items-center">
        <p className="w-fit">Time zone</p>
        <p className="w-[50%]"> {timezone} </p>
      </div>
    </div>
  );
}
type SessionsProgressCardProps = {
  progress: number;
};
export function SessionsProgressCard({ progress }: SessionsProgressCardProps) {
  return (
    <div className="border borderNeutral10 p-6 w-[100%] h-fit rounded-[8px]">
      <p className="text-xs font-bold my-2"> Complete your Sessions</p>
      <ProgressBar progress={progress} rounded />
      <p> {progress}%</p>
    </div>
  );
}
