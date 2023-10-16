/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */

"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
import useAuth from "@/context/useAuth";

export type ModalState = {
  state: "basic info" | "Experience/ Certification" | "Social links";
  isOpen: boolean;
};

const baseUrl = "https://mentormee-api.onrender.com";

export default function ProfilePage() {
  const { data } = useAuth();
  // console.log(data?.userDetails.email);
  // const [username] = data?.userDetails.email.split("@") || ["", ""];
  const mentorshipType = data?.mentorship_type;

  const [currMentor, setCurrMentor] = useState<any>();
  const [user, setUser] = useState<any>({});
  const [userData, setUserData] = useState({
    username: "",
    bio: "",
    email: "",
    mentorship: "",
  });
  const router = useRouter();
  const [modal, setModal] = useState<ModalState>({
    state: "basic info",
    isOpen: false,
  });
  let token = ""; // declare token variable

  if (typeof window !== "undefined") {
    const getUser = localStorage.getItem("Mentor");
    if (getUser) {
      console.log(getUser);
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
        setUserData({
          username: data?.data?.userDetails?.fullName,
          bio: data?.data?.userDetails?.bio,
          email: data?.data?.userDetails?.email,
          mentorship: data?.data?.mentorship_type,
        });
      } else {
        console.error("Failed to fetch current mentor data");
      }
    } catch (error) {
      console.error("Error fetching current mentor data:", error);
    } finally {
      console.log(user);
    }
  };

  console.log(user);
  // const getCurrent = async () => {
  //   try {
  //     const currMent = await fetch(`${baseUrl}/users/get-current`, {
  //       method: "GET",
  //       redirect: "follow",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCurrMentor(data?.data);
  //         console.log("Current User", data?.data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     // Any code that needs to be executed regardless of success or failure can go here
  //   }
  // };

  useEffect(() => {
    getCurrentMentor();
  }, []);

  useEffect(() => {
    router.push(
      `/mentor-profile?path=profile&name=${userData.username}&email=${userData.email}&bio=${userData.bio}&mentorship=${userData.mentorship}`
    );
  }, [userData]);

  const paramsAction = useSearchParams().get("action");
  // console.log(user);
  // console.log(currMentor);
  // console.log(userData);
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
              userName={userData.username}
              email=""
              userRole={mentorshipType!}
              userRating={4}
              openModal={setModal}
            />
          ) : (
            <MentorProfileHeader
              userName="Shade Mayowa"
              email=""
              userRole="Product Designer"
              userRating={4}
              openModal={setModal}
            />
          )}

          {user && user ? (
            <MentorProfileMainLayout>
              <BioCard text={userData.bio} />

              <ProfileDetailsCardContainer
                heading="education"
                items={[
                  {
                    text: data?.degree || "",
                    heading: data?.institution || "",
                    type: "certification",
                  },
                ]}
                openModal={setModal}
              />
              <SkillSCard skills={[]} />
              <ProfileDetailsCardContainer
                heading="Experience"
                items={[
                  {
                    type: "experience",
                    text: data?.mentoring_experience || "",
                  },
                ]}
                openModal={setModal}
              />
              {/* 
              <ProfileDetailsCardContainer
                heading="Education"
                items={[]}
                openModal={setModal}
              /> */}
              <AvailableSessionCard
                timezone=" Greenwich Mean Time (GMT)"
                availableDays={`${data?.preferred_days} ${user?.preferred_time}`}
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
                    // heading: "Coursera",
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
