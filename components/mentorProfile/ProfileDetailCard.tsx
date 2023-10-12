import { EditIcon } from "@/public";
import { EditIconMentorProfile } from "@/public/SVGs";
import React from "react";

export default function ProfileDetailsCardHeader({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {
  return (
    <div className="w-[100%] flex flex-col">
      <div className="w-[100%] flex justify-between">
        <p className="text-Neutal60 font-medium">{heading} Skill/expertise</p>
        <p> icon</p>
      </div>

      <div>{children}</div>
    </div>
  );
}

export function InfoCard() {
  return (
    <div className="w-[100%] flex space-x-5">
      <EditIconMentorProfile />
      <div></div>
    </div>
  );
}
