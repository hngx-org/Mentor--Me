/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */

"use client";

import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
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

import useAuth from "@/context/useAuth";
import MentorProfileSkeleton from "@/components/skeleton/ProfileloaderSkeleton";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
        });
        setLoading(false);
      } else {
        console.error("Failed to fetch current mentor data");
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

  return (
    <Fragment>
      {loading && <MentorProfileSkeleton />}

      {!loading && !error && user && (
        <div>
          <MentorProfileHeader
            userName={""}
            email=""
            userRole={user?.mentorship_type}
            userRating={4}
            modal={setModal}
          />
          <MentorProfileMainLayout>
            <BioCard text={userData?.bio || "Add bio"} />

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
            <SkillSCard skills={userData?.skills?.split(" ")!} />
            <ProfileDetailsCardContainer
              heading="Experience"
              items={[]}
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
          {modal.isOpen && (
            <MentorProfileModal
              setUserData={setUserData}
              onClose={setModal}
              state={modal.state}
            />
          )}
        </div>
      )}
    </Fragment>
  );
}
