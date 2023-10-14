import React from "react";

export const get = (url: string) =>
  fetch(url).then((response) => response.json());

export const getString = (url: string) =>
  fetch(url).then((response) => response);

export const getText = (url: string) => fetch(url).then((res) => res.text());

export const post = (url: string, data: any, config: any = {}) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return fetch(url, {
    ...config,
    method: "POST",
    body: JSON.stringify(data),
    headers,
  }).then((res) => res.json());
};

type loginDataType = { email: string; password: string };

// export async function checkUser(data: loginDataType) {
//   try {
//     const res = await post(
//       "https://mentormee-api.onrender.com/auth/register",
//       data
//     );

//     console.log(res);
//   } catch (err) {
//     console.log("error");
//   }
// }

// export async function authenticateUser(credentials: loginDataType) {
//   try {
//     // Send a POST request to your authentication endpoint
//     const response = await post("/auth/login", credentials); // Replace with your actual endpoint and credentials
//     if (response.status === 200) {
//       // Authentication successful
//       return true;
//     }
//     // Authentication failed
//     return false;
//   } catch (error) {
//     console.error("Error authenticating user:", error);
//     return false;
//   }
// }

function transformMentorData(originalData) {
  return {
    id: originalData.id,
    mentorName: `${originalData.firstname} ${originalData.lastname}`,
    verify: true, // Assuming verify is always true
    mentorPostion: originalData.position,
    mentorAvatar: originalData.profilePicture,
    cardHero: originalData.profilePicture, // You can adjust this field as needed
    date: originalData.timeAvailable,
    time: originalData.timeZone,
    title: originalData.company,
    desc: `Location: ${originalData.location}, Rating: ${originalData.rating}`,
  };
}

// Example usage:
const originalData = {
  company: "W&B",
  firstname: "Prime",
  id: "6db3f517-adde-426e-b5cc-16c0ff21578e",
  lastname: "Rose",
  location: "Liverpool",
  position: "COO",
  profilePicture:
    "https://res.cloudinary.com/dfxu5hvrw/image/upload/v1697258331/profilePictures/bd035730-7923-4ae4-9e0f-682dffb8c3f6.jpg",
  rating: "7",
  timeAvailable: "4th june",
  timeZone: "gmt -1",
};

export const fetchMentorData = async () => {
  try {
    const response = await fetch(
      "https://cardbackendhngx.onrender.com/api/get_data"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      let mentorData = [];

      return data; // Update the mentorInfo state with the received data
    }
    console.error("Failed to fetch mentor data");
  } catch (error) {
    console.error("Error:", error);
  }
};
