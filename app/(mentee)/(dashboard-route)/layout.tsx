// "use client";

// import React, { Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

// import MobileSideBar from "@/components/MobileSideBar";
// import LoadingSpinner from "@/components/loaders/LoadingSpinner";
// import { NavbarMentee } from "@/components/menteeTopNav/NavbarMentee";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const pathParams = useSearchParams().get("path");
//   const actionParams = useSearchParams().get("action");
//   const nameParams = useSearchParams().get("action");
//   const bioParams = useSearchParams().get("action");
//   const emailParams = useSearchParams().get("action");

//   return (
//     <>
//       <MenteeSideBar path={pathParams} />

//       <main className="lg:ml-[274px]">
//         <NavbarMentee path={pathParams} action={actionParams} />

//         <MobileSideBar path={pathParams} action={actionParams} />
//         <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
//       </main>
//     </>
//   );
// };

// export default DashboardLayout;

"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

import MobileSideBar from "@/components/MobileSideBar";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { NavbarMentee } from "@/components/menteeTopNav/NavbarMentee";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import { useAuthCtx } from "@/context/AuthContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathParams = useSearchParams().get("path");
  const actionParams = useSearchParams().get("action");
  const { user } = useAuthCtx();
  const email = user?.email;
  const userName = user?.email?.split("@")[0];
  const nameParams = useSearchParams().get("name");
  const bioParams = useSearchParams().get("bio");
  const emailParams = useSearchParams().get("email");
  const mentorshipParams = useSearchParams().get("mentorship");
  const firstLetterOfEmail = email ? email[0] : ""; // Default to empty string if email is undefined
  const profileImg = `https://api.dicebear.com/7.x/initials/png?seed=${
    nameParams || firstLetterOfEmail
  }`;
  return (
    <>
      <SidebarMentor
        path={pathParams}
        name={nameParams}
        imgSrc={profileImg}
        email={emailParams}
      />

      <main className="lg:ml-[274px]">
        <NavbarMentee
          path={pathParams}
          action={actionParams}
          username={userName}
          name={nameParams}
          imgSrc={profileImg}
          email={emailParams}
          bio={bioParams}
          jobTitle={mentorshipParams}
        />

        <MobileSideBar path={pathParams} action={actionParams} />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </main>
    </>
  );
};

export default DashboardLayout;
