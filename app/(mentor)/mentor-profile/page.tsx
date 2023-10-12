import React from "react";
import UserHero from "./userHero";
import UserDetails from "./userDetails";
import UserExperience from "./userExperience";
import MentorProfileHeader from "@/components/mentorProfile/MentorProfileHeader";
import ProfileDetailsCardHeader from "@/components/mentorProfile/ProfileDetailCard";
import MentorProfileMainLayout from "@/components/mentorProfile/mentorProfileMainLayout";

export default function ProfilePage() {
  return (
    <div className="h-[100vh] w-[100vw]">
      {/* <UserHero />
      <UserDetails />

      <UserExperience /> */}

      <MentorProfileHeader />
      <MentorProfileMainLayout>
        <ProfileDetailsCardHeader heading="">
          <p></p>
        </ProfileDetailsCardHeader>
        <ProfileDetailsCardHeader heading="">
          <p></p>
        </ProfileDetailsCardHeader>
      </MentorProfileMainLayout>
    </div>
  );
}
