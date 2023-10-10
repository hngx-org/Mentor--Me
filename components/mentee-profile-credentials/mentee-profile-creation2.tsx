/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import "../../app/(mentee)/mentee-profile-creation/page.module.css";
import RegistrationFormContainer from "./registration-form-container";
import ContainerCardForm from "./container-card-form";

const MenteeProfileCreation2: NextPage = () => {
  const router = useRouter();

  const onButtonLargeClick = useCallback(() => {
    router.push("/mentee-profile-creation3");
  }, [router]);

  const onButtonLarge1Click = useCallback(() => {
    router.push("/mentee-profile-creation1");
  }, [router]);

  const onMentorMeTextClick = useCallback(() => {
    // Please sync "Landing page" to the project
  }, []);

  

  return (
    <div className="relative bg-neutral-0 w-full h-[900px] overflow-hidden text-left text-23xl text-neutral-50 font-landing-page-medium">
      <RegistrationFormContainer
        buttonCursor="pointer"
        onButtonLargeClick={onButtonLargeClick}
        onButtonLarge1Click={onButtonLarge1Click}
      />
      <div
        className="absolute mentorme top-[51px] left-[100px] cursor-pointer"
        onClick={onMentorMeTextClick}
      >
        Mentor Me
      </div>
      <ContainerCardForm
        imageDimensions="/group-783.svg"
        imageDimensionsText="/group-784.svg"
      />
    </div>
  );
};

export default MenteeProfileCreation2;
