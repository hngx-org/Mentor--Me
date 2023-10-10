/* eslint-disable jsx-a11y/label-has-associated-control */
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import TypedefaultStatedefaultS from "./typedefault-statedefault-s";
import GenderSelectContainer from "./gender-select-container";
import PriorityPrimaryStatedefaul from "./priority-primary-statedefaul";
import "../../app/(mentee)/mentee-profile-creation/page.module.css";

const ProfileSetupContainer: NextPage = () => {
  const router = useRouter();

  const onButtonLargeClick = useCallback(() => {
    // Please sync "Select " to the project
  }, []);

  const onButtonLarge1Click = useCallback(() => {
    router.push("/mentee-profile-creation4");
  }, [router]);

  return (
    <div className="absolute setup top-[120px] left-[50px] flex flex-col items-start justify-start gap-[32px] text-left text-13xl text-neutral-50 font-heading-1-h1-bold">
      <div className="flex flex-col items-start justify-start">
        <b className="relative b leading-[120%] inline-block w-[600px]">
          Set up your profile in a few steps and Let’s get started!
        </b> 
      </div>
      <div className="flex flex-col items-end justify-start text-sm font-heading-3-h3-medium">
        <div className="w-[400px] flex flex-row flex-wrap items-end justify-start gap-[20px]">
          <div className="relative w-[400px] h-11 text-black font-heading-1-h1-bold">
            <div className="absolute top-[0px] left-[0px] w-[500px] h-2">
              <div className="absolute step1 top-[0px] left-[0px] rounded-2xl bg-accent1 w-[96.39px] h-2" />
              <div className="absolute step2 top-[0px] left-[111.2px] rounded-2xl bg-whitesmoke w-[96.39px] h-2" />
              <div className="absolute step3 top-[0px] left-[222.41px] rounded-2xl bg-whitesmoke w-[96.39px] h-2" />
              <div className="absolute step4 top-[0px] left-[333.61px] rounded-2xl bg-whitesmoke w-[96.39px] h-2" />
            </div>
            <div className="absolute top-[24px] left-[0px] leading-[145%] inline-block w-[81.93px]">
              Step 1 of 4
            </div>
          </div>
          <div className="w-[332px] flex flex-col items-start justify-start gap-[16px] text-lg">
            <label className="self-stretch relative leading-[120%] font-medium">
              Upload profile photo
            </label>
            <div className="self-stretch flex flex-row items-center justify-center gap-[16px] text-base text-neutral-base">
              <img
                className="relative rounded-9981xl w-14 h-14 overflow-hidden shrink-0"
                alt=""
                src="/frame-4.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <input type="file" placeholder="Select a file" className="self-stretch relative font-medium" />
                
                <div className="self-stretch relative text-sm leading-[145%] font-heading-1-h1-bold text-neutral-50">
                  Make sure the file is below 2mb
                </div>
              </div>
            </div>
          </div>
          <TypedefaultStatedefaultS
            label="Enter your full name"
            iconLeft="/iconleft3.svg"
            placeholder="Full Name"
            iconRight="/iconright1.svg"
            showIconLeft={false}
            showRightContent={false}
            showIconRight={false}
            showHelperText={false}
            typedefaultStatedefaultSWidth="400px"
            labelLineHeight="140%"
            labelColor="#2a2a2a"
          />
          <GenderSelectContainer
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-end gap-[24px]">
        <PriorityPrimaryStatedefaul
          button="Back"
          priorityPrimaryStatedefauBackgroundColor="unset"
          priorityPrimaryStatedefauBorder="1px solid #121212"
          priorityPrimaryStatedefauCursor="pointer"
          buttonColor="#121212"
          onButtonLargeClick={onButtonLargeClick}
        />
        <PriorityPrimaryStatedefaul
          button="Continue"
          priorityPrimaryStatedefauBorder="unset"
          priorityPrimaryStatedefauCursor="pointer"
          buttonColor="#fff"
          onButtonLargeClick={onButtonLarge1Click}
        />
      </div>
    </div>
  );
};

export default ProfileSetupContainer;
