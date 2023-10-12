import React from "react";
import UserHero from "./userHero";
import UserDetails from "./userDetails";
import UserExperience from "./userExperience";
import MentorProfileHeader from "@/components/mentorProfile/MentorProfileHeader";
import ProfileDetailsCardContainer, {
  BioCard,
  SkillSCard,
} from "@/components/mentorProfile/ProfileDetailCard";
import MentorProfileMainLayout from "@/components/mentorProfile/mentorProfileMainLayout";

export default function ProfilePage() {
  return (
    <div className="h-[100vh] w-[100vw]">
      {/* <UserHero />
      <UserDetails />

      <UserExperience /> */}

      <MentorProfileHeader />
      <MentorProfileMainLayout>
        <BioCard text="" />
        <ProfileDetailsCardContainer
          heading="skill/expertise"
          items={[
            {
              text: "Google UX Certification",
              heading: "Coursera",
              type: "certification",
            },
            {
              text: "Bachelor of Science in Computer Science",
              heading: "ABXYZ University",
              type: "certification",
            },
          ]}
        />
        <SkillSCard
          skills={[
            "Leadership",
            "User Experience",
            "UX Research",
            "Figma",
            "Sketch",
            "Leadership",
            "User Experience",
            "UX Research",
            "Figma",
            "Sketch",
          ]}
        />
        <ProfileDetailsCardContainer
          heading="Experience"
          items={[
            {
              text: "Webmaster Inc.",
              heading: "CEO ",
              type: "certification",
            },
            {
              text: "futurLabs",
              heading: "Ui/Ux design intern",
              type: "certification",
            },
          ]}
        />
      </MentorProfileMainLayout>
    </div>
  );
}
