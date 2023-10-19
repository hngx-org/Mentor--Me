"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useReadLocalStorage } from "usehooks-ts";

type AuthCtxType = {
  user: User | null;
  userData: Data | undefined;
  setUserData: React.Dispatch<React.SetStateAction<Data | undefined>>;
};

export type UserData = {
  token: string;
  user: {
    _id: string;
    email: string;
    emailVerified: boolean;
    accountDisabled: boolean;
    role: string;
    lastActive: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    profileLink: string;
    bio: string;
    fullName: string;
  };
};

export type Data = {
  message: string;
  data: UserData | null;
  success: boolean;
  email?: string;
  token?: string;
};

interface User {
  name?: string;
  email?: string;
  token?: string;
}

const AuthContext = createContext<AuthCtxType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<Data | undefined>();
  const [user, setUser] = useState<User | null>({
    email: "",
    token: "",
  });
  const Mentordata: Data | null = useReadLocalStorage("Mentor");
  const MenteeData: Data | null = useReadLocalStorage("Mentee");
  const data = MenteeData || Mentordata;

  // useEffect(() => {
  //   if (data) {
  //     console.log(data, { email: data.data?.user.email });
  //     setUserData(data);
  //     setUser((prev) => ({
  //       ...prev,
  //       email: data?.data?.user.email,
  //       token: data.data?.token,
  //     }));
  //   }
  // }, [userData, data]);

  const value = useMemo(() => ({ user, setUserData, userData }), [user, data]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthCtx = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Using the context must be within the context provider");
  }

  return context;
};
