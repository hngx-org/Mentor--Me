// context/useAuth.ts

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import { Data, UserData, useAuthCtx } from "./AuthContext";
import { CurrentMentee, CurrentMentor } from "./types";

interface User {
  message: string;
  data: CurrentMentor | null;
  success: boolean;
}

const baseUrl = "https://mentormee-api.onrender.com";
// type urlType = "users" | "mentors" | "mentee";
type UserType = "Mentee" | "Mentor";

// type: urlType = "mentors"
export const useAuth = (type: UserType = "Mentor") => {
  const { user } = useAuthCtx();
  const [data, setData] = useState<User>({
    message: "",
    data: null,
    success: false,
  });
  const userData: Data | null = useReadLocalStorage(type);

  useEffect(() => {
    let token: string | undefined;
    if (userData) {
      token = userData?.data?.token;
    }
    const requestAuth = async () => {
      // Make an authenticated request to the server
      const url = `${baseUrl}/mentors/get-current`;
      if (token) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data: User = await response.json();
        // console.log(data);
        setData(data);
      }
    };
    requestAuth();
  }, []);

  return data;
};

export default useAuth;
