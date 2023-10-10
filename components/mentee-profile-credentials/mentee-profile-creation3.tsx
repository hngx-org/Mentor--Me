/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import "../../app/(mentee)/mentee-profile-creation/page.module.css";
import BioForm from "./bio-form";
import ContainerCardForm from "./container-card-form";

const MenteeProfileCreation3: NextPage = () => {
  const router = useRouter();

  const onButtonLargeClick = useCallback(() => {
    router.push("/mentee-profile-creation4");
  }, [router]);

  const onButtonLarge1Click = useCallback(() => {
    router.push("/mentee-profile-creation2");
  }, [router]);

  const onMentorMeTextClick = useCallback(() => {
    // Please sync "Landing page" to the project
  }, []);

  return (
    <div className="relative bg-neutral-0 w-full h-[800px] overflow-hidden text-left text-13xl text-neutral-50 font-heading-1-h1-bold">
      <div className="absolute setup top-[153px] left-[60px] flex flex-col items-start justify-start gap-[32px]">
        <b className="relative b leading-[120%] inline-block w-[600px]">
          Good work! Now its time for you to tell us about yourself
        </b>
        <BioForm />
      </div>
      <div
        className="absolute mentorme top-[51px] left-[100px] text-23xl leading-[100%] font-landing-page-medium cursor-pointer"
        onClick={onMentorMeTextClick}
      >
        Mentor Me
      </div>
      <ContainerCardForm
        imageDimensions="/group-7832.svg"
        imageDimensionsText="/group-7842.svg"
      />
    </div>
  );
};

export default MenteeProfileCreation3;
