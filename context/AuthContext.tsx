"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useReadLocalStorage } from "usehooks-ts";
// import { useRouter } from "next/navigation";

type AuthCtxType = {
  // userData?: Data;
  // setUserData: React.Dispatch<React.SetStateAction<Data | undefined>>;
  user: User | null;
  setUserData: React.Dispatch<React.SetStateAction<Data | undefined>>;
};

// type UserData = {
//   userId: string;
//   token: string;
//   email: string;
// };

type UserData = {
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

type Data = {
  message: string;
  data: UserData | null;
  success: boolean;
};

interface User {
  name?: string;
  email?: string;
  profession?: string;
}

const AuthContext = createContext<AuthCtxType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<Data | undefined>();
  const [user, setUser] = useState<User | null>({
    email: "",
    name: "",
    profession: "",
  });
  const data: Data | null = useReadLocalStorage("Mentor" || "Mentee");
  // const router = useRouter();

  // const setUser = (data, value) => {
  //   setUserData((prev) => ({
  //     ...prev,
  //     [data]: value,
  //   }));
  // };

  useEffect(() => {
    if (data) {
      setUserData(data);
      setUser((prev) => ({
        ...prev,
        email: data.data?.user.email,
      }));
      return;
      // router.replace("/mentor-dashboard/");
    }
    // console.log(data);
    console.log(userData);
  }, [userData]);

  const value = useMemo(() => ({ user, setUserData }), [userData]);

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
