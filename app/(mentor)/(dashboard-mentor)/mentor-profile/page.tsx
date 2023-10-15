/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */

"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import UpdateProfile from "@/components/cards/mentee-profile-cards/UpdateProfile";

export type ModalState = {
  state: "basic info" | "Experience/ Certification" | "Social links";
  isOpen: boolean;
};

const baseUrl = "https://mentormee-api.onrender.com";

export default function ProfilePage() {
  const [currMentor, setCurrMentor] = useState<any>();
  const [user, setUser] = useState<any>({});
  const [userData, setUserData] = useState({
    username: "",
    role: "",
  });
  const [modal, setModal] = useState<ModalState>({
    state: "basic info",
    isOpen: false,
  });
  let token = ""; // declare token variable

  if (typeof window !== "undefined") {
    const getUser = localStorage.getItem("Mentor");
    if (getUser) {
      try {
        const newUser = JSON.parse(getUser);
        token = newUser.data.token; // assign token value here
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }

  const getCurrentMentor = async () => {
    try {
      const response = await fetch(`${baseUrl}/mentors/get-current`, {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data?.data); // Assuming you want to set the entire data object
        console.log("Current Mentor", data?.data);
      } else {
        console.error("Failed to fetch current mentor data");
      }
    } catch (error) {
      console.error("Error fetching current mentor data:", error);
    }
  };
  const getCurrent = async () => {
    try {
      const currMent = await fetch(`${baseUrl}/users/get-current`, {
        method: "GET",
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCurrMentor(data?.data);
          console.log("Current", data?.data); // Log the data directly from the response
        });
    } catch (error) {
      console.log(error);
    } finally {
      // Any code that needs to be executed regardless of success or failure can go here
    }
  };

  useEffect(() => {
    getCurrentMentor();
    getCurrent();
  }, []);
  let [username, domain] = currMentor?.email?.split("@") || ["", ""];
  if (currMentor !== undefined) {
    [username, domain] = currMentor.email.split("@");
  }
  const paramsAction = useSearchParams().get("action");
  // console.log(user);
  // console.log(currMentor);
  console.log(userData);
  return (
    <>
      {paramsAction === "edit-mentor" ? (
        <Suspense fallback={<LoadingSpinner />}>
          <div className="w-full justify-center flex relative ">
            <UpdateProfile />
          </div>
        </Suspense>
      ) : (
        <div className=" w-full overflow-x-hidden ">
          {user && user ? (
            <MentorProfileHeader
              userName={username}
              email=""
              userRole={user?.mentorship_type}
              userRating={4}
            />
          ) : (
            <MentorProfileHeader
              userName="Shade Mayowa"
              email=""
              userRole="Product Designer"
              userRating={4}
            />
          )}

          {user && user ? (
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
          ) : (
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
          )}

          {modal.isOpen && (
            <MentorProfileModal onClose={setModal} state={modal.state} />
          )}
        </div>
      )}
    </>
  );
}
