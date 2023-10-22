import { Dispatch, SetStateAction } from "react";
import {
  Community,
  Community2,
} from "@/app/(mentee)/(dashboard-route)/mentee-community/data";

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

export const postSingleForum = async (postData: Community) => {
  try {
    console.log("posting", postData);
    const response = await post(
      "https://hngmentorme.onrender.com/api/community",
      postData
    );

    if (response.status === 200) {
      console.log("success in posting", response);
      return response;
    }
    // Handle other status codes or error cases
    return null; // or return an error response if needed
  } catch (error) {
    // Handle network errors or exceptions
    console.error("Error posting forum:", error);
    return null; // or return an error response if needed
  }
};

type loginDataType = { email: string; password: string };

export async function checkUser(data: loginDataType) {
  try {
    const res = await post(
      "https://mentormee-api.onrender.com/auth/register",
      data
    );

    // console.log(res);
  } catch (err) {
    // console.log("error");
  }
}

type MentorDataType = {
  date: string;
  firstname: string;
  timezone: string;
  review: number;
  nextAvailable: string;
  topic: string;
  contentImage: string;
  id: string;
  time: string;
  title: string;
  content: string;
  lastname: string;
};
export const getMentorInfo = async (
  setData: Dispatch<SetStateAction<MentorDataType[]>>
) => {
  const data = await get(
    "https://cardbackendhngx.onrender.com/api/get_data"
  ).catch((err) => console.error(err, "Error fetching Mentor data "));
  setData(data);
  console.log(data);

  return data;
};

export const getForums = async (
  setData: Dispatch<SetStateAction<Community[]>>
) => {
  const data = await get(
    "https://hngmentorme.onrender.com/api/community"
  ).catch((err) => console.error(err, "Error fetching forums "));
  // filter it

  setData(data);
  // console.log(modifiedData);
  return data;
};

export const getSingleForums = async (
  setData: Dispatch<SetStateAction<Community2>>,
  slug: string
) => {
  const data = await get(
    `https://hngmentorme.onrender.com/api/community/${slug}`
  ).catch((err) => console.error(err, "Error fetching forum"));
  // filter it

  setData(data);
  // console.log(modifiedData);
  return data;
};

// functions

export const filterCommunitiyForum: (
  q: string,
  initalData: Community[],
  setData: (value: SetStateAction<Community[]>) => void
) => void = (
  q: string,
  initalData: Community[],

  setData: (value: SetStateAction<Community[]>) => void
) => {
  if (q) {
    console.log("Search is on. Query: ", q);
    const filteredSliderInfo = initalData.filter((item) =>
      item.name.toLowerCase().includes(q.toLowerCase())
    );

    if (filteredSliderInfo.length < 0) {
      setData(filteredSliderInfo);
    }
  } else {
    setData(initalData);
  }
};

export function capitalizeFirstLetter(string: string) {
  if (string && string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string; // Return the input string if it's undefined or empty
}
