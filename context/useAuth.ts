// context/useAuth.ts

import React, { useEffect, useState } from "react";
import { UserData, useAuthCtx } from "./AuthContext";
import { CurrentMentor } from "./types";

interface User {
  message: string;
  data: CurrentMentor | null;
  success: boolean;
}

export const useAuth = () => {
  const { user } = useAuthCtx();
  const [data, setData] = useState<User>({
    message: "",
    data: null,
    success: false,
  });

  useEffect(() => {
    const requestAuth = async () => {
      // Make an authenticated request to the server
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}mentors/get-current`;
      if (user?.token) {
        const response = await fetch(url!, {
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
