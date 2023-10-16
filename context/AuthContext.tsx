"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useReadLocalStorage } from "usehooks-ts";
import { useRouter } from "next/navigation";

type AuthCtxType = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
};

// type UserData = {
//   userId: string;
//   token: string;
//   email: string;
// };

type data = {
  token: string;
  user: {
    _id: string;
    accountDisabled: boolean;
    createdAt: string;
    emailVerified: boolean;
    lastActive: string;
    role: string;
    updatedAt: string;
    email: string;
  };
};

type UserData = {
  message: string;
  data: data | null;
  success: boolean;
};

const AuthContext = createContext<AuthCtxType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>({
    message: "",
    data: null,
    success: false,
  });
  const router = useRouter();
  const data = useReadLocalStorage("Mentor" || "Mentee");

  // const setUser = (data, value) => {
  //   setUserData((prev) => ({
  //     ...prev,
  //     [data]: value,
  //   }));
  // };

  useEffect(() => {
    if (data) {
      setUserData(data as UserData);
      // router.replace("/mentor-dashboard/");
    } else {
      setUserData(null);
    }
    // console.log(data);
    console.log(userData);
  }, [userData]);

  const value = useMemo(() => ({ userData, setUserData }), [userData]);

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
