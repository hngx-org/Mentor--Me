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
  setUserInfo: React.Dispatch<React.SetStateAction<Data | undefined>>;
};

export type UserData = {
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
  token?: string;
}

const AuthContext = createContext<AuthCtxType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<Data | undefined>();
  const [user, setUser] = useState<User | null>({
    name: "",
    email: "",
    token: "",
  });
  const info: Data | null = useReadLocalStorage("Mentor" || "Mentee");

  useEffect(() => {
    if (info) {
      setUserInfo(info);
      setUser((prev) => ({
        ...prev,
        email: info.data?.user.email,
        token: info.data?.token,
      }));
    }
  }, [userInfo]);

  const value = useMemo(() => ({ user, setUserInfo }), [userInfo]);

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
