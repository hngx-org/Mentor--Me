"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Button } from "../buttons/button";
import Selector from "../selector";

export type ModalType = {
  state: "basic info" | "Experience/ Certification" | "Social links";
  // onClose?: () => void
};

export default function MentorProfileTabLayout({
  modalState,
}: {
  modalState: string;
}) {
  const [active, setActive] = useState(modalState);

  return (
    <div className="w-[100%] my-5 h-[100%]">
      <div className="flex justify-between w-[100%] text-Neutra10 text-xs sm:text-base cursor-pointer">
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
          <p> Experience/ Certifications</p>
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
      {active === "basic info" && <BasicInfoTab />}
      {active === "Experience/ Certification" && (
        <p className="h-[100%] flex justify-center ">in progress</p>
      )}
      {active === "Social links" && (
        <p className="h-[100%] flex justify-center "> in progress</p>
      )}
    </div>
  );
}

function ProfileCard({ userName }: { userName: string }) {
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

function BasicInfoTab() {
  const [details, setDetail] = useState({
    bio: "",
    gender: "",
    fullName: "",
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
  return (
    <div className="w-[100%] px-2">
      <ProfileCard userName="shade mayowa" />
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
      <div className="flex w-[100%] h-fit justify-end py-5">
        <Button variant="primary">update profile</Button>
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
// export function DropDown({ label }: { label: string }) {
//   return (
//     <div className="w-[100%] h-fit flex flex-col">
//       <label htmlFor="gender" className="text-sm ">
//         {label} <span className="text-ErrorBase">*</span>
//       </label>
//       <select
//         id="gender"
//         name=""
//         className="flex grow active:border-0 p-4 focus:outline-none border  rounded-[6px] styled-select"
//       >
//         <option>male</option>
//         <option>female</option>
//         <option>other</option>
//       </select>
//     </div>
//   );
// }
