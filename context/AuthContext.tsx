/* eslint-disable react/jsx-no-constructed-context-values */

"use client";

import React, { createContext, useContext, useState } from "react";

type AuthCtxType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

type UserData = {
  userId: string;
  token: string;
  email: string;
};

const AuthContext = createContext<AuthCtxType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    token: "",
    userId: "",
  });

  const value = {
    userData,
    setUserData,
  };

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
