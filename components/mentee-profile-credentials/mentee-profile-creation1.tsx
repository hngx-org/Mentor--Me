import type { NextPage } from "next";
import { useCallback } from "react";
import "../../app/(profile-creation)/mentee-profile-creation/page.module.css";
import RegistrationFormContainer from "./registration-form-container";
import ContainerCardForm from "./container-card-form";
import SuccessModal from "./success-modal";

const MenteeProfileCreation1: NextPage = () => {
  const onButtonLargeClick = useCallback(() => {
    // Please sync "Mentee Dashboard (Home before booking a session)" to the project
  }, []);

  return (
    <div className="relative bg-neutral-0 w-full h-[800px] overflow-hidden text-left text-23xl text-neutral-base font-landing-page-medium">
      <RegistrationFormContainer />
      <div className="absolute top-[50px] left-[100px] leading-[100%]">
        Mentor Me
      </div>
      <ContainerCardForm
        imageDimensions="/group-783.svg"
        imageDimensionsText="/group-784.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-gray w-[1440px] h-[800px]" />
      <SuccessModal
        resetLinkSent="Success!"
        aResentLinkHasBeenSentToY="You have successfully created your profile, click the button below to proceed"
        button="Continue to Home"
        successModalPosition="absolute"
        successModalTop="calc(50% - 328px)"
        successModalLeft="calc(50% - 409px)"
        buttonLargeCursor="pointer"
        onButtonLarge2Click={onButtonLargeClick}
      />
    </div>
  );
};

export default MenteeProfileCreation1;
