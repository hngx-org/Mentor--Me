import type { NextPage } from "next";
import { useCallback } from "react";
import '../../app/(profile-creation)/mentee-profile-creation/page.module.css';
import { useRouter } from "next/router";
import TypedefaultStatedefaultS from "./typedefault-statedefault-s";
import PriorityPrimaryStatedefaul from "./priority-primary-statedefaul";

const ExpertiseFormContainer: NextPage = () => {
  const router = useRouter();

  const onButtonLargeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonLarge1Click = useCallback(() => {
    router.push("/mentee-profile-creation3");
  }, [router]);

  return (
    <>
    <div className="w-[400px] flex flex-row flex-wrap items-end justify-start gap-[20px] text-left text-sm text-neutral-50 font-heading-1-h1-bold">
      <div className="relative w-[400px] h-11">
        <div className="absolute top-[0px] left-[0px] w-[400px] h-2">
          <div className="absolute step1 top-[0px] left-[0px] rounded-2xl bg-accent1 w-[96.39px] h-2" />
          <div className="absolute step2 top-[0px] left-[101.2px] rounded-2xl bg-accent1 w-[96.39px] h-2" />
          <div className="absolute step3 top-[0px] left-[202.41px] rounded-2xl bg-whitesmoke w-[96.39px] h-2" />
          <div className="absolute step4 top-[0px] left-[303.61px] rounded-2xl bg-whitesmoke w-[96.39px] h-2" />
        </div>
        <div className="absolute top-[24px] left-[0px] leading-[145%] inline-block w-[81.93px]">
          Step 2 of 4
        </div>
      </div>
      <TypedefaultStatedefaultS
        label="What is your expertise?"
        iconLeft="/iconleft6.svg"
        placeholder="Select Expertise"
        iconRight="/arrowdown3.svg"
      />
      <TypedefaultStatedefaultS
        label="Company/School"
        iconLeft="/iconleft6.svg"
        placeholder="Enter Company/School"
        iconRight="/iconright2.svg"
        showIconLeft={false}
        showRightContent={false}
        showIconRight={false}
        showHelperText={false}
        typedefaultStatedefaultSWidth="400px"
        labelLineHeight="140%"
        labelColor="#2a2a2a"
      />
      <TypedefaultStatedefaultS
        label="Your title"
        iconLeft="/iconleft7.svg"
        placeholder="E.g Product designer, student etc"
        iconRight="/iconright2.svg"
        showIconLeft={false}
        showRightContent={false}
        showIconRight={false}
        showHelperText={false}
        typedefaultStatedefaultSWidth="400px"
        labelLineHeight="140%"
        labelColor="#2a2a2a"
      />
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
  </>
  );
};

export default ExpertiseFormContainer;
