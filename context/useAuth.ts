// // context/useAuth.ts

// import React, { useEffect, useState } from "react";
// import { useAuthCtx } from "./AuthContext";

// interface User {
//   message: string;
//   data: any;
//   success: boolean;
// }

// export const useAuth = () => {
//   const { userData } = useAuthCtx();
//   const [data, setData] = useState<User>({
//     message: "",
//     data: null,
//     success: false,
//   });

//   useEffect(() => {
//     const requestAuth = async () => {
//       // Make an authenticated request to the server
//       const url = process.env.NEXT_PUBLIC_API_GET_CURRENT_USER;
//       if (userData.token) {
//         const response = await fetch(url!, {
//           headers: {
//             Authorization: `Bearer ${userData.token}`,
//           },
//         });
//         const data: User = await response.json();
//         setData(data);
//       }
//     };
//     requestAuth();
//   }, [userData.token]);

//   return data;
// };

// export default useAuth;
