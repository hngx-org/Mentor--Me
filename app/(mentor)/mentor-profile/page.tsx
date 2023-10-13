import React from "react";
import MentorProfileHeader from "@/components/mentorProfile/MentorProfileHeader";
import ProfileDetailsCardContainer, {
  AvailableSessionCard,
  BioCard,
  SessionsProgressCard,
  SkillSCard,
} from "@/components/mentorProfile/ProfileDetailCard";
import MentorProfileMainLayout from "@/components/mentorProfile/mentorProfileMainLayout";

import OverViewCardLayout from "@/components/mentorProfile/MentorProfilelayouts";
import MentorProfileModal from "@/components/mentorProfile/MentorProfileModal";

export default function ProfilePage() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-scroll ">
      <MentorProfileHeader
        userName="shade mayorwa"
        userRole="Product designer"
        userRating={4}
      />
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
        <AvailableSessionCard
          timezone=" Greenwich Mean Time (GMT)"
          availableDays="Mondays - Wednesdays, 
11:00am - 2:00pm"
        />
        <OverViewCardLayout heading="impact at a glance" />
        <SessionsProgressCard progress={10} />
      </MentorProfileMainLayout>
      {/* <MentorProfileModal /> */}
    </div>
  );
}
