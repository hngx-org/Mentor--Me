import { useReadLocalStorage } from "usehooks-ts";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Data, useAuthCtx } from "./AuthContext";
import useAuth from "./useAuth";

interface Props {
  children: React.ReactNode;
  role?: string;
}

const ProtectedRoute = ({ children, role }: Props) => {
  //   const { userData } = useAuthCtx();
  const Mentordata: Data | null = useReadLocalStorage("Mentor");
  const MenteeData: Data | null = useReadLocalStorage("Mentee");
  const data = MenteeData || Mentordata;
  //   const { data } = useAuth();
  //   const role = data?.userDetails.role;
  const pathname = usePathname();
  //   const containsRole = pathname.includes(role!);
  const containsRole = pathname.includes(data?.data?.user.role || "");

  //   console.log(containsRole);
  //   console.log(data);

  if (!data?.data?.token) {
    return <Navigate to="/welcome/login" />;
  }

  if (data.data.token && !containsRole) {
    return <Navigate to={`${data.data.user.role}-profile`} />;
  }

  //   useEffect(() => {
  //     if (data) {
  //       console.log(data, { email: data.data?.user.email });
  //       setUserData(data);
  //       setUser((prev) => ({
  //         ...prev,
  //         email: data?.data.user.email,
  //         token: data.data?.token,
  //       }));
  //     }
  //   }, [userData, data]);
  //   if (!userData?.token) {
  //     return <Navigate to="/welcome/login" />;
  //   }

  //   if (user?.token && !containsRole) {
  //     return <Navigate to={`/${role}-profile`} />;
  //   }

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
