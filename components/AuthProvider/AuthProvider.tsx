// "use client";

// import React, { useMemo, useState } from "react";
// import AuthCtx, { AuthContextType, UserAuth } from "@/context/AuthCtx";

// export default function AuthProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [userAuth, setUserAuth] = useState<UserAuth>({
//     token: "",
//     id: null,
//   });

//   const value: AuthContextType = useMemo(
//     () => ({ userAuth, setUserAuth }),
//     [userAuth.id]
//   );

//   return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
// }
