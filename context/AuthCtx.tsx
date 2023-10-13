/* eslint-disable react/jsx-no-constructed-context-values */

"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";

type AuthType = {
  isAuthenticated: boolean;
  login: (data: LoginType) => void;
  logout: () => void;
  register: () => void;
};

type LoginType = {
  email: string;
  password: string;
};

const AuthContext = createContext<AuthType | null>(null);

export const AuthCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("UserID");
    if (userId) {
      console.log(userId);
    } else {
      console.log("not logged in");
    }
  }, []);

  const login = () => {
    // const url = process.env.NEXT_PUBLIC_API_LOGIN_URL;
    //   const { data, error, loading } = useFetch<DataType>({ I haven't typed the respones yet hence the generic "Data Type"
    //     method: "POST",
    //     url,
    //   });
    //   return {
    //     data,
    //     error,
    //     loading,
    //   };
    // };
  };
  const logout = () => {};
  const register = () => {
    // todo set UserID in localstorage
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthCtxProvider;

export const useAuthCtx = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Put your component within the provider");
  }

  return context;
};
