"use client";

import React, { useState, useEffect } from "react";
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

export type ModalState = {
  state: "basic info" | "Experience/ Certification" | "Social links";
  isOpen: boolean;
};

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [modal, setModal] = useState<ModalState>({
    state: "basic info",
    isOpen: false,
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const getUser = localStorage.getItem("user");
      if (getUser) {
        try {
          const newUser = JSON.parse(getUser);
          const [username, domain] = newUser.email.split("@");
          setUser({
            name: username,
            email: newUser.email,
          });
        } catch (error) {
          // console.error("Error parsing JSON:", error);
        }
      }
    }
  }, []);

  return (
    <div className="h-[100%] w-[100%] pb-10 relative ">
      <MentorProfileHeader
        userName={user.name || "Shade Mayowa"}
        email={user.email || ""}
        userRole="Product Designer"
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
          openModal={setModal}
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
          openModal={setModal}
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
          openModal={setModal}
        />
        <AvailableSessionCard
          timezone=" Greenwich Mean Time (GMT)"
          availableDays="Mondays - Wednesdays, 
11:00am - 2:00pm"
        />
        <OverViewCardLayout heading="impact at a glance" />
        <SessionsProgressCard progress={10} />
      </MentorProfileMainLayout>
      {modal.isOpen && (
        <MentorProfileModal onClose={setModal} state={modal.state} />
      )}
    </div>
  );
}