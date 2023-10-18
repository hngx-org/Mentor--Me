/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */

"use client";

import React, { useState, useEffect, Suspense, createContext } from "react";
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
type UserData = {
  fullName: string;
  bio: string;
  email?: string;
  mentorship?: string;
  skills?: string;
  degree?: string;
  institution?: string;
  preferred_startTime?: string;
  preferred_endTime?: string;
  preferred_days?: string;
  mentoring_experience?: string;
};
export default function ProfilePage() {
  const { data } = useAuth();

  // console.log(data?.userDetails.email);
  // const [fullName] = data?.userDetails.email.split("@") || ["", ""];
  const mentorshipType = data?.mentorship_type;

  const [skills, setSkills] = useState<any>();
  const [user, setUser] = useState<any>({});
  const [userData, setUserData] = useState<UserData | undefined>({
    fullName: "",
    bio: "",
    email: "",
    mentorship: "",
    skills: "",
    degree: "",
    institution: "",
    preferred_startTime: "",
    preferred_endTime: "",
    preferred_days: "",
    mentoring_experience: "",
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
        // console.log("Current Mentor", data?.data);
        setUserData({
          fullName: data?.data?.userDetails?.fullName,
          bio: data?.data?.userDetails?.bio,
          email: data?.data?.userDetails?.email,
          mentorship: data?.data?.mentorship_type,
          skills: data?.data?.skills,
          degree: data?.data?.degree,
          institution: data?.data?.institution,
          preferred_startTime: data?.data?.preferred_startTime,
          preferred_endTime: data?.data?.preferred_endTime,
          preferred_days: data?.data?.preferred_days,
          mentoring_experience: data?.data?.mentoring_experience,
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

  // console.log(user);
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
    if (data?.skills?.includes(",")) {
      const skills = data?.skills?.split(",");
      setSkills(Array.from(new Set(skills)));
    } else {
      setSkills([data?.skills]);
    }
  }, [data]);

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
              userName={userData?.fullName}
              mentorship={userData?.mentorship}
              userRole={data?.userDetails?.role!}
              userRating={4}
              openModal={setModal}
            />
          ) : (
            <MentorProfileHeader
              userName="Shade Mayowa"
              mentorship=""
              userRole="Product Designer"
              userRating={4}
              openModal={setModal}
            />
          )}

          {user && user ? (
            <MentorProfileMainLayout>
              <BioCard text={userData?.bio} />

              <ProfileDetailsCardContainer
                heading="education"
                items={[
                  {
                    text: userData?.degree || "",
                    heading: userData?.institution || "",
                    type: "certification",
                  },
                ]}
                openModal={setModal}
              />
              <SkillSCard skills={skills || []} />
              <ProfileDetailsCardContainer
                heading="Experience"
                items={[
                  {
                    type: "experience",
                    text: userData?.mentoring_experience || "",
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
                availableDays={`${userData?.preferred_days} ${userData?.preferred_startTime} ${userData?.preferred_endTime}`}
              />
              <OverViewCardLayout heading="impact at a glance" />
              <SessionsProgressCard progress={10} />
            </MentorProfileMainLayout>
          ) : (
            <div>Something went wrong</div>
          )}

          {modal.isOpen && (
            <MentorProfileModal
              setUserData={setUserData}
              onClose={setModal}
              state={modal.state}
            />
          )}
        </div>
      )}
    </>
  );
}
