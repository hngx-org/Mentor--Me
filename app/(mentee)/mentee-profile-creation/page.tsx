import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import ContainerCardForm from "@/components/mentee-profile-credentials/container-card-form";
import "./page.module.css";
import ProfileSetupContainer from "@/components/mentee-profile-credentials/profile-setup-container";

const MenteeProfileCreation: NextPage = () => {
  const router = useRouter();

  const onButtonLargeClick = useCallback(() => {
    // Please sync "Select " to the project
  }, []);

  const onButtonLarge1Click = useCallback(() => {
    router.push("@/components/mentee-profile-credentials/mentee-profile-creation4");
  }, [router]);

  const onMentorMeTextClick = useCallback(() => {
    // Please sync "Landing page" to the project
  }, []);

   // Define the onMentorMeTextKeyPress function to handle keyboard events
   const onMentorMeTextKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Check if the Enter key was pressed (key code 13)
    if (event.key === "Enter") {
      // Handle the keyboard event here
      // You can call the same function as the click handler if needed
      onMentorMeTextClick();
    }
  };


  return (
    <div className="relative mt-0 bg-neutral-0 w-full index h-[800px] overflow-hidden text-left text-23xl text-neutral-50 font-landing-page-medium">
      <div
        className="absolute mentorme top-[43px] left-[100px] text-[40px] font-paragraph-large-medium cursor-pointer"
        role="button"
        onClick={onMentorMeTextClick}
        // Attach the onMentorMeTextKeyPress function as the onKeyDown event handler
        onKeyDown={onMentorMeTextKeyPress}
        // Add a tabIndex to make the element focusable
        tabIndex={0}
      >
        Mentor Me
      </div>
      <ContainerCardForm
        imageDimensions="/group-7831.svg"
        imageDimensionsText="/group-7841.svg"
      />
      <ProfileSetupContainer />
    </div>
  );
};

export default MenteeProfileCreation;
