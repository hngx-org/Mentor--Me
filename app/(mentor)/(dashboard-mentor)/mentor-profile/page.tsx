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
import useAuth from "@/context/useAuth";
import Skeleton from "@/components/mentorProfile/Skeleton";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>({});
  const [userDetails, setUserDetails] = useState({});
  const [userData, setUserData] = useState({
    username: "",
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
        setLoading(false);
        setError("there was a problem getting user");
      }
    } catch (error) {
      console.error("Error fetching current mentor data:", error);
    }
  };

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
      {loading && <Skeleton />}

      {!loading && error && (
        <div className="w-[100%] h-[80vh]  flex items-center   justify-center ">
          <p> {error}</p>
        </div>
      )}
      {!loading && user && (
        <div className=" w-[100%] pb-10 h-fit">
          <MentorProfileHeader
            userName={userData.username || userData.email}
            userRole={userData.mentorship}
            userRating={4}
            openModal={setModal}
          />
          {modal.isOpen && (
            <MentorProfileModal onClose={setModal} state={modal.state} />
          )}
          <MentorProfileMainLayout>
            <BioCard text={userData.bio} />
            <ProfileDetailsCardContainer
              heading="certifications"
              items={[
                {
                  type: "certification",
                  heading: user.certifications,
                },
              ]}
              openModal={setModal}
            />
            <ProfileDetailsCardContainer
              heading="Education"
              items={[
                {
                  heading: user.institution,
                  type: "education",
                  text: user.degree,
                },
              ]}
              openModal={setModal}
            />
            <ProfileDetailsCardContainer heading="Experience" items={[]} />
            <SkillSCard skills={user.skills.split(" ")} />
            <AvailableSessionCard
              timezone="Greenwich Mean Time (GMT)"
              availableDays={user.preferred_days}
              time={user.preferred_startTime}
            />
            <OverViewCardLayout heading="Impact at a glance" />
            <SessionsProgressCard progress={10} />
          </MentorProfileMainLayout>
        </div>
      )}
    </>
  );
}
