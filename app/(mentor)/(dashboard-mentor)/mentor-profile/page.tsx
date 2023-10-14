/* eslint-disable no-console */

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

const baseUrl = "https://mentormee-api.onrender.com";

export default function ProfilePage() {
  const [currMentor, setCurrMentor] = useState<any>();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [modal, setModal] = useState<ModalState>({
    state: "basic info",
    isOpen: false,
  });
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5NTFhNDI2OTQzZGIyZjliNjA1MzQiLCJyb2xlIjoibWVudG9yIiwiZW1haWwiOiJheW9ib2x1Zm9yZXZlckBnbWFpbC5jb20iLCJpYXQiOjE2OTcyMDcyODAsImV4cCI6MTY5OTcyNzI4MH0.mCu-QOvo_K8ykakiVv8hwOqrZohh9H02khquIdXRycI";
  const getCurrentMentor = async () => {
    const currMent = await fetch(`${baseUrl}/mentors/get-current`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((data) => setCurrMentor(JSON.parse(data)));
  };

  useEffect(() => {
    getCurrentMentor();
  }, []);
  console.log(currMentor);
  return (
    <div className="h-[100vh] w-[100vw] overflow-scroll ">
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
