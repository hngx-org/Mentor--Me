"use client";

import { useReadLocalStorage } from "usehooks-ts";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Data } from "./AuthContext";

interface Props {
  children: React.ReactNode;
  role?: string;
}

const ProtectedRoute = ({ children, role }: Props) => {
  const Mentordata: Data | null = useReadLocalStorage("Mentor");
  const MenteeData: Data | null = useReadLocalStorage("Mentee");
  const data = MenteeData || Mentordata;

  const pathname = usePathname();
  const containsRole = pathname.includes(data?.data?.user.role || "");

  if (!data?.data?.token) {
    return <Navigate to="/welcome/login" />;
  }

  if (data.data.token && !containsRole) {
    return <Navigate to={`${data.data.user.role}-profile`} />;
  }

  return children;
};

export default ProtectedRoute;

function Navigate({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, []);
  return null;
}
