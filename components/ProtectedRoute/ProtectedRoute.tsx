"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthCtx from "@/context/AuthCtx";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  // const ctx = useContext(AuthCtx);
  // const id = ctx?.userAuth.id;

  // useEffect(() => {
  //   if (!id) {
  //     router.replace("/welcome/login");
  //   }
  // }, [id]);

  const [userExists, setUserExists] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user exists in the local storage
    const user = localStorage.getItem("Mentee" || "Mentor");
    setUserExists(!!user);

    if (!user) {
      router.replace("/welcome/login");
    }
  }, []);

  return children;
}
