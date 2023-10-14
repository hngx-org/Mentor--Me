/* eslint-disable react/jsx-no-constructed-context-values */

"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import useFetch from "./useFetch";

type AuthCtxType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  // login: (loginData: LoginType) => void;
};

// type LoginType = {
//   email: string;
//   password: string;
// };

export type ApiRes = {
  message: string;
  data: {
    id: string;
    email: string;
    emailVerified: boolean;
    role: string;
  };
  success: boolean;
};

const AuthContext = createContext<AuthCtxType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("hello there");

  // const login = (loginData: LoginType) => {

  //     // const res = await fetch(url!, {
  //     //     method: "POST",
  //     //     body: JSON.stringify(loginData),
  //     // })
  //     // const resData = await res.json()
  //     // return resData;
  //     const url = process.env.NEXT_PUBLIC_API_LOGIN_URL;
  // const { data } = useFetch<ApiRes>({
  //   url,
  //   method: "POST",
  //   body: loginData,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // };

  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const value = {
    user,
    setUser,
    // login
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "You can only make use of the auth context within the provider"
    );
  }

  return context;
};
