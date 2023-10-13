"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthCtx from "@/context/AuthCtx";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const ctx = useContext(AuthCtx);
  const id = ctx?.userAuth.id;

  useEffect(() => {
    if (!id) {
      router.replace("/welcome/login");
    }
  }, [id]);

  return children;
}
