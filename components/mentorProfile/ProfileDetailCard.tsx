import React, { Fragment } from "react";
import { CertificationIcon, EditIconMentorProfile } from "@/public/SVGs";

export default function ProfileDetailsCardContainer({
  heading,
  items,
}: {
  heading: string;
  items: InfoCardProps[];
}) {
  return (
    <div className="w-[100%] flex flex-col">
      <div className="w-[100%] flex justify-between">
        <p className="text-lg font-bold text-Neutral60 capitalize">{heading}</p>
        <EditIconMentorProfile />
      </div>

      {items.map((item) => (
        <Fragment key={item.text}>
          <InfoCard {...item} />
        </Fragment>
      ))}
    </div>
  );
}

type InfoCardProps = {
  type?: "skill" | "experience" | "certification" | "education";
  text?: string;
  heading?: string;
};

function getIcons(
  type: "skill" | "experience" | "certification" | "education"
) {
  return <div />;
}

export function InfoCard({ type, heading, text }: InfoCardProps) {
  return (
    <div className="w-[100%]  flex space-x-5 h-fit items-center my-2">
      {/* {type && getIcons(type)} */}
      <CertificationIcon />
      <div>
        <p className="text-lg  font-[500] text-Neutra50">{heading} ceo</p>
        <p className="text-Neutra40"> {text} </p>
      </div>
    </div>
  );
}

export function BioCard({ text }: { text: string }) {
  return (
    <div className="w-[100%]  flex space-x-5 h-fit items-center my-4">
      <div>
        <p className="text-lg font-bold font-[#000]"> Bio</p>
        <p className="text-Neutra40">
          {text} Experienced product designer with over 5 years of experience in
          developing and implementing successful digital assets for leading
          companies. Passionate about mentoring and helping others achieve their
          career goals.
        </p>
      </div>
    </div>
  );
}
export function SkillSCard({ skills }: { skills: string[] }) {
  return (
    <div className="w-[100%] flex flex-col  h-fit ">
      <p className="text-lg font-bold font-[#000]"> Skills/Expertise</p>
      <div className="flex w-[100%] flex-wrap">
        {skills.slice(0, 5).map((item) => (
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
