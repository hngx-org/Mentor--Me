"use client";

import Image from "next/image";
import React, {
  ChangeEvent,
  Dispatch,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "../buttons/button";
import Selector from "../selector";
import useAuth from "@/context/useAuth";
import AuthContextProvider, { useAuthCtx } from "@/context/AuthContext";
import { InfoCard, InfoCardProps, ModalState } from "./ProfileDetailCard";
import {
  MentorDetailsContext,
  UserDetails,
} from "@/app/(mentor)/(dashboard-mentor)/mentor-profile/DetailsContext";

export type ModalType = {
  state: "basic info" | "Experience/ Certification" | "Social links";
};

export default function MentorProfileTabLayout({
  modalState,
  onClose,
}: {
  modalState: string;
  onClose: Dispatch<SetStateAction<ModalState>>;
}) {
  const [active, setActive] = useState(modalState);
  const ProfileBio = useContext(MentorDetailsContext);

  return (
    <div className="w-[100%] my-5 h-[100%]">
      <div className="flex justify-between w-[100%] text-Neutra10 text-xs sm:text-base cursor-pointer px-4  border-b-2">
        <div
          onClick={() => {
            setActive("basic info");
          }}
          className={`${
            active === "basic info" ? "border-b-2  border-Accent1" : ""
          }`}
          role="presentation"
        >
          <p> basic info</p>
        </div>
        <div
          onClick={() => {
            setActive("Experience/ Certification");
          }}
          className={`${
            active === "Experience/ Certification"
              ? "border-b-2  border-Accent1"
              : "border-0"
          }`}
          role="presentation"
        >
          <p className="truncate w-[100px] sm:w-fit ">
            Experience/ Certifications
          </p>
        </div>
        <div
          onClick={() => {
            setActive("Social links");
          }}
          className={`${
            active === "Social links" ? "border-b-2  border-Accent1" : ""
          }`}
          role="presentation"
        >
          <p>Social links</p>
        </div>
      </div>
      {active === "basic info" && (
        <BasicInfoTab
          onClose={onClose}
          bio={ProfileBio.details.bio}
          fullName={ProfileBio.details.fullName}
          updateUserInfo={ProfileBio.updateUserDetailsCtx}
        />
      )}
      {active === "Experience/ Certification" && (
        <>
          <ExpeCerts
            title="certifications"
            items={
              ProfileBio.details.certification.split("  ").map((item) => ({
                type: "certification",
                heading: item,
                text: "present",
              })) || []
            }
          />
          <ExpeCerts
            title="Experience"
            items={
              ProfileBio.details.experience.split("  ").map((item) => ({
                type: "experience",
                heading: item,
                text: "present",
              })) || []
            }
          />
        </>
      )}
      {active === "Social links" && (
        <Socials
          linkedIn={ProfileBio.details.linkedIn!}
          others={ProfileBio.details.otherlinks!}
        />
      )}
    </div>
  );
}

function ProfileCard({ userName }: { userName: string }) {
  const { data } = useAuth();
  const name = data?.userDetails?.fullName;
  return (
    <div className="w-[100%] flex flex-col h-[100px] space-x-4 my-5">
      <p>change profile photo</p>
      <div className="w-[100%] flex h-[100px] space-x-2 my-5 ">
        <div className="w-[54px]  h-[54px] sm:w-[54px] sm:h-[54px]  rounded-full relative ">
          <Image
            style={{ objectFit: "cover", borderRadius: "100%" }}
            src={`https://api.dicebear.com/7.x/initials/png?seed=${userName}`}
            fill
            alt="profile"
          />
        </div>

        <div className="space-y-2">
          <p className="font-bold text-Accent1  text-sm ">Upload file</p>
          <p className="text-Neutra10 text-sm ">
            Make sure the file is below 2mb
          </p>
        </div>
      </div>
    </div>
  );
}

type Data = {
  bio: string;
  fullName: string;
};

function BasicInfoTab({
  onClose,
  updateUserInfo,
  bio,
  fullName,
}: {
  onClose: Dispatch<SetStateAction<ModalState>>;
  updateUserInfo: React.Dispatch<React.SetStateAction<UserDetails>>;
} & Data) {
  const [details, setDetail] = useState({
    bio,
    fullName,
  });
  const [selected, setSelected] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const isDisabled = details.bio?.length < 10;
  const handleSubmit = () => {
    updateUserInfo((prev) => ({
      ...prev,
      ...details,
    }));
    onClose({
      state: "basic info",
      isOpen: false,
    });
  };

  return (
    <div className="w-[100%] px-4">
      <ProfileCard userName={fullName} />
      <div className="w-[100%] h-[100%] space-y-5 text-Neutra50">
        <MentorProfileInput
          label="Your full name"
          value={details.fullName}
          name="fullName"
          onChange={handleChange}
        />
        <Selector
          placeHolder="pick your gender"
          selected={selected}
          onSelect={setSelected}
          options={["male", "female", "other"]}
        />
        <TextArea
          label="Bio"
          value={details.bio}
          name="bio"
          onChange={handleChange}
        />
      </div>
      <div
        className={`flex w-[100%] h-fit justify-end py-5 ${
          isDisabled && "opacity-50"
        }`}
      >
        <Button variant="primary" onClick={handleSubmit} disabled={isDisabled}>
          update profile
        </Button>
      </div>
    </div>
  );
}

type InputProps = {
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>
  ) => void;
  label: string;
  name: string;
};

export function MentorProfileInput({
  value,
  name,
  label,
  onChange,
}: InputProps) {
  return (
    <div className="w-[100%] h-fit flex flex-col">
      <label htmlFor={name} className="text-sm flex items-center">
        {label}
        <span className="text-ErrorBase">*</span>
      </label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className="flex grow active:border-0 p-4 focus:outline-none border border-Neutra10 h-[46px] rounded-[6px]"
      />
    </div>
  );
}
export function TextArea({ value, label, name, onChange }: InputProps) {
  return (
    <div className="w-[100%] h-fit flex flex-col">
      <label htmlFor={name} className="text-sm ">
        {label} <span className="text-ErrorBase">*</span>
      </label>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        className="flex grow active:border-0 p-4 focus:outline-none border border-Neutra10 h-[216px] rounded-[6px]"
      />
    </div>
  );
}

interface ExpeCertsProps {
  items: InfoCardProps[];
  title: string;
}
export function ExpeCerts({ items, title }: ExpeCertsProps) {
  return (
    <div className="w-[100%] h-fit flex flex-col border border-3 rounded-[6px] my-5">
      <div className="w-[100%] h-[20px] py-6 flex justify-between px-4  items-center">
        <p>{title}</p>
      </div>
      <div className="px-4">
        {items.length >= 1 &&
          items.map((item) => (
            <Fragment key={item.text}>
              <InfoCard {...item} />
            </Fragment>
          ))}
        {items.length === 0 && <p> click to add {title}</p>}
      </div>
    </div>
  );
}

type Socialsprops = {
  linkedIn: string;
  others: string;
};

function Socials({ linkedIn, others }: Socialsprops) {
  return (
    <div className="my-5">
      <SocialsField color="bg-blue-500" text={linkedIn} type="linkedin" />
      <SocialsField color="bg-gray-500" text={others} type="other" />
    </div>
  );
}

export function SocialsField({
  type,
  text,
  color,
}: {
  type: string;
  text: string;
  color?: string;
}) {
  return (
    <div
      className={`w-[100%] h-[60px] flex px-4  space-y-2 py-2 flex-col ${color}   text-white rounded-[6px] my-4`}
    >
      <div className="text-xs"> 🔗 {type} </div>
      <div className="text-xs">{text}</div>
    </div>
  );
}
