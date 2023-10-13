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
import ProgressBar from "@/components/progressBar/ProgressBar";
import OverViewCardLayout from "@/components/mentorProfile/MentorProfilelayouts";

export default function ProfilePage() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-scroll ">
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
              type: "experience",
            },
            {
              text: "futurLabs",
              heading: "Ui/Ux design intern",
              type: "experience",
            },
          ]}
        />

        <ProfileDetailsCardContainer
          heading="Education"
          items={[
            {
              text: "University of Lagos. 2013 - 2017",
              heading: "B.Sc Computer Science ",
              type: "education",
            },
          ]}
        />
        <OverViewCardLayout heading="impact at a glance" />
        <OverViewCardLayout heading="availabity" />
      </MentorProfileMainLayout>
    </div>
  );
}
