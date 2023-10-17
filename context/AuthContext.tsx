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
  setUserData: React.Dispatch<React.SetStateAction<Data | undefined>>;
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
  email?: string;
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
  const data: Data | null = useReadLocalStorage("Mentor" || "Mentee");

  useEffect(() => {
    if (data) {
      setUserData(data);
      setUser((prev) => ({
        ...prev,
        email: data?.email,
        token: data.data?.token,
      }));
    }
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
