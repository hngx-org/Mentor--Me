/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MentorProfileHeader from "@/components/mentorProfile/MentorProfileHeader";
import ProfileDetailsCardContainer, {
  AvailableSessionCard,
  BioCard,
  ModalState,
  SessionsProgressCard,
  SkillSCard,
} from "@/components/mentorProfile/ProfileDetailCard";
import MentorProfileMainLayout from "@/components/mentorProfile/mentorProfileMainLayout";
import OverViewCardLayout from "@/components/mentorProfile/MentorProfilelayouts";
import MentorProfileModal from "@/components/mentorProfile/MentorProfileModal";
import useAuth from "@/context/useAuth";
import MentorProfileSkeleton from "@/components/skeleton/ProfileloaderSkeleton";
import MentorDetailsContextProvider, { UserDetails } from "./DetailsContext";
import ProtectedRoute from "@/context/ProtectedRoute";

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
  certification?: string;
  experience?: string;
};
export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userDetailsContext, setUserDetailsContext] = useState<UserDetails>({
    bio: "",
    fullName: "",
    gender: "",
    email: "",
    certification: "",
    experience: "",
  });
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
    certification: "",
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
        setError("Error fetching current mentor data");
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
          certification: data?.data?.certifications,
        });
        setUserDetailsContext((prev) => ({
          bio: data?.data?.userDetails?.bio,
          email: data?.data?.userDetails?.email,
          gender: "",
          fullName: data?.data?.userDetails?.fullName,
          certification: data?.data?.certifications,
          experience: data?.data?.mentoring_experience,
          linkedIn: data?.data.linkedin,
          otherlinks: data?.data.other_links,
        }));

        setLoading(false);
      } else {
        console.error("Failed to fetch current mentor data");
        setLoading(false);
        setError("Error fetching current mentor data");
      }
    } catch (error) {
      setLoading(false);
      setError("Error fetching current mentor data:");
      console.error("Error fetching current mentor data:", error);
    } finally {
      console.log(user);
    }
  };

  useEffect(() => {
    router.refresh();
    getCurrentMentor();
  }, []);

  return (
    <MentorDetailsContextProvider
      updateUserDetailsCtx={setUserDetailsContext}
      details={userDetailsContext}
    >
      {loading && <MentorProfileSkeleton />}

      {!loading && !error && user && (
        <div className="w-[100%] h-fit pb-10">
          <MentorProfileHeader
            userName={userDetailsContext.fullName}
            email=""
            userRole={user?.mentorship_type}
            userRating={1}
            modal={setModal}
          />
          <MentorProfileMainLayout>
            <BioCard text={userDetailsContext?.bio || "Add bio"} />
            <SkillSCard
              skills={userData?.skills?.split(",")! || "add skills"}
            />
            <ProfileDetailsCardContainer
              heading="education"
              items={[
                {
                  text: userData?.degree || "",
                  heading: userData?.institution || "",
                  type: "education",
                  id: "5",
                },
              ]}
              openModal={setModal}
            />

            <ProfileDetailsCardContainer
              heading="Experience"
              items={
                userDetailsContext?.experience?.split("   ").map((item) => ({
                  type: "experience",
                  heading: item,
                  text: "present",
                  id: "1",
                })) || []
              }
              openModal={setModal}
            />
            <ProfileDetailsCardContainer
              heading="certification"
              items={
                userDetailsContext.certification.split("   ").map((item) => ({
                  type: "certification",
                  heading: item,
                  text: "certificate",
                  id: "q",
                })) || []
              }
              openModal={setModal}
            />

            <AvailableSessionCard
              timezone=" Greenwich Mean Time (GMT)"
              availableDays={`${userData?.preferred_days} ${userData?.preferred_startTime} ${userData?.preferred_endTime}`}
            />
            <OverViewCardLayout heading="impact at a glance" />
            <SessionsProgressCard progress={80} />
          </MentorProfileMainLayout>
          {modal.isOpen && (
            <MentorProfileModal onClose={setModal} state={modal.state} />
          )}
        </div>
      )}
    </MentorDetailsContextProvider>
  );
}
