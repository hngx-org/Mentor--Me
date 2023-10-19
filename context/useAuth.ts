// context/useAuth.ts

import React, { useEffect, useState } from "react";
import { UserData, useAuthCtx } from "./AuthContext";
import { CurrentMentee, CurrentMentor } from "./types";

interface User {
  message: string;
  data: CurrentMentor | null;
  success: boolean;
}

const baseUrl = "https://mentormee-api.onrender.com";
type urlType = "users" | "mentors" | "mentee";

export const useAuth = (type: urlType = "mentors") => {
  const { user } = useAuthCtx();
  const [data, setData] = useState<User>({
    message: "",
    data: null,
    success: false,
  });

  useEffect(() => {
    const requestAuth = async () => {
      // Make an authenticated request to the server
      const url = `${baseUrl}/${type}/get-current`;
      if (user?.token) {
        const response = await fetch(url!, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "application/json",
          },
        });
        const data: User = await response.json();
        setData(data);
      }
    };
    requestAuth();
  }, [user]);

  return data;
};

export default useAuth;
