import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AwardIcon, EditIcon } from "@/public/SVGs";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

type Props = {
  desc: string;
  expertise: string;
  experience: string;
  workPlace: string;
  discipline: string;
};
export default function OverviewCard({
  desc,
  expertise,
  experience,
  workPlace,
  discipline,
}: Props) {
  const [showMore, setshowMore] = useState(true);
  const router = useRouter();
  const truncatedDesc =
    desc && desc.length >= 180 && showMore ? `${desc.slice(0, 180)}....` : desc;
  return (
    <div className="mt-6 flex flex-col gap-8">
      <div className="w-full">
        <h2 className="text-Neutral50 font-bold font-Hanken text-[18px]">
          Bio:
        </h2>
        <p className="text-Neutra50 font-Hanken text-[16px] w-full max-w-[500px] tracking-wide">
          {truncatedDesc}
        </p>
        {desc && desc.length >= 180 && (
          <div>
            {showMore ? (
              <button
                type="button"
                className="text-Accent2 font-Hanken text-[16px] font-medium"
                onClick={() => setshowMore(false)}
              >
                Show More
              </button>
            ) : (
              <button
                type="button"
                className="text-Accent1 font-Hanken text-[16px] font-medium"
                onClick={() => setshowMore(true)}
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
      <div>
        <p className="text-Neutra50 font-bold text-[18px] font-Hanken">
          Expertise
        </p>
        <Button
          className="px-4 py-2 mt-5 border-gray-400"
          title={expertise}
          variant="secondary"
        />
      </div>
      <div className="flex flex-col w-full xl:max-w-[500px] xl:gap-y-5 gap-y-5 ">
        <div className="border border-gray-200 rounded-[8px] p-2 xl:h-[100px] xl:px-3">
          <div className=" w-full flex justify-between ">
            <p className="text-Neutra50 font-bold text-[18px] font-Hanken">
              Experience
            </p>

            <EditIcon
              className="cursor-pointer"
              onClick={() => router.push("?action=edit-profile&tab=experience")}
              onKeyDown={() =>
                router.push("?action=edit-profile&tab=experience")
              }
            />
          </div>
          <div className="flex justify-center items-center xl:pl-6 gap-4 lg:gap-8">
            <div>
              <AwardIcon />
            </div>
            <div className="flex flex-col w-full ">
              <div className="flex justify-between ">
                <p className="text-black font-medium text-[16px] font-Inter">
                  {experience}
                </p>
                <Button
                  className="px-3 py-1 border-gray-400"
                  title="Present"
                  variant="secondary"
                />
              </div>
              <p className="text-black font-normal text-[16px] font-Hanken">
                {workPlace}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[500px] xl:gap-y-5">
          <div className="border border-gray-200 p-2 xl:h-[100px] rounded-[8px] xl:px-3">
            <div className="w-full flex justify-between ">
              <p className="text-Neutra50 font-bold text-[18px] font-Hanken">
                Education
              </p>
              <EditIcon className="cursor-pointer" />
            </div>
            <div className="flex justify-start items-center xl:pl-4 xl:py-2 gap-4 lg:gap-8">
              {" "}
              <p className="text-black font-normal text-[16px] ml-3 font-Hanken">
                {discipline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
