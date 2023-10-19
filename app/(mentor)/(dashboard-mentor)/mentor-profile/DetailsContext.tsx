import React, { createContext, useMemo } from "react";
import { InfoCardProps } from "@/components/mentorProfile/ProfileDetailCard";

export type UserDetails = {
  bio: string;
  fullName: string;
  gender: string | number;
  email: string;
  certification: string;
  experience: string;
  linkedIn?: string;
  otherlinks?: string;
};
type MentorProfileCtx = {
  details: UserDetails;

  updateUserDetailsCtx: React.Dispatch<React.SetStateAction<UserDetails>>;
};

const defaultUserDetailsContext: MentorProfileCtx = {
  updateUserDetailsCtx: (setAction) => setAction,

  details: {
    bio: "",
    fullName: "",
    gender: "",
    email: "",
    certification: "",
    experience: "",
  },
};

export const MentorDetailsContext = createContext(defaultUserDetailsContext);

export default function MentorDetailsContextProvider({
  children,
  updateUserDetailsCtx,
  details,
}: { children: React.ReactNode } & MentorProfileCtx) {
  return (
    <MentorDetailsContext.Provider
      value={useMemo(
        () => ({
          details,
          updateUserDetailsCtx,
        }),
        [details]
      )}
    >
      {children}
    </MentorDetailsContext.Provider>
  );
}
