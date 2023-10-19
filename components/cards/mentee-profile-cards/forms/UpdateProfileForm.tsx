/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import {
  MenteeDashboardProfileImg,
  MenteeUpdateProfileCheckmark,
} from "@/public";
import { EditIcon, EditIconDark } from "@/public/SVGs";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

type formProps = {
  fullName: string;
  bio: string;
  gender: string;
  image: string;
};

const MAX_SIZE = 2 * 1024 * 1024; // 2MB in bytes
export default function UpdateProfileForm({ isDark }: { isDark: boolean }) {
  const [isLoading, setIsLoading] = useState(false);

  const [fileURL, setFileURL] = useState<any>("");
  const [formData, setFormData] = useState<formProps>({
    fullName: "",
    gender: "",
    bio: "",
    image: "",
  });
  const [token, setToken] = useState("");
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const baseUrl = "https://mentormee-api.onrender.com";
  const router = useRouter(); // router

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileURL(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Create an event handler function to update the name state

  const handleFullNameChange = (e: any) => {
    const newFullName = e.target.value;
    setFormData({
      ...formData,
      fullName: newFullName,
    });
  };

  // Create an event handler function to update the gender state
  const handleGenderChange = (e: any) => {
    const newGender = e.target.value;
    setFormData({
      ...formData,
      gender: newGender,
    });
  };

  let imageSource;

  if (fileURL) {
    imageSource = fileURL;
  } else if (formData.image) {
    imageSource = formData.image;
  } else {
    imageSource = `https://api.dicebear.com/7.x/initials/png?seed=${formData.fullName}`;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getUser = localStorage.getItem("Mentee");
      if (getUser) {
        try {
          const newUser = JSON.parse(getUser);
          const getToken = newUser.data.token;
          setToken(getToken);
          // assign token value here
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    const getUser = localStorage.getItem("Mentee");
    if (getUser) {
      try {
        const newUser = JSON.parse(getUser);
        const extractedToken = newUser.data.token;
        setToken(extractedToken);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  const fetchMenteeData = async () => {
    try {
      const response = await fetch(`${baseUrl}/mentee/get-current`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setFormData({
          fullName: data?.data?.user?.fullName,
          gender: data?.data?.gender,
          bio: data?.data?.user?.bio,
          image: data?.data?.user?.image,
        });
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };
  useEffect(() => {
    if (token) {
      fetchMenteeData();
    }
  }, [token]);

  const handleUpdate = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    // Check if authToken exists
    const imageData = new FormData();
    imageData.append("file", fileURL);
    imageData.append("upload_preset", "nd2sr4np");
    imageData.append("cloud_name", "dp5ysdt4c");
    imageData.append("api_key", "484974749171579");
    imageData.append("folder", "mentee-profile");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dp5ysdt4c/image/upload",
      {
        method: "POST",
        body: imageData,
      }
    );
    const data = await res.json();

    setFormData({
      ...formData,
      image: data.url,
    });
    console.log(data.url);

    if (res.ok && token) {
      const apiUrl = "https://mentormee-api.onrender.com/mentee/update-profile";

      const patchData = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      };

      try {
        const response = await fetch(apiUrl, patchData);

        if (response.ok) {
          // Handle a successful update here
          setIsProfileUpdated(true);

          // router.replace("/mentee-profile?path=profile");
          setTimeout(() => {
            setIsProfileUpdated(false);
          }, 3000);
          console.log("PATCH request was successful");
        } else {
          console.error(
            `PATCH request failed with status code ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
        fetchMenteeData();
        router.push("/mentee-profile?path=profile");
      }
    } else {
      // Handle the case where authToken is missing
      console.log("Auth token is missing.");
      setIsLoading(false);
    }
  };

  // console.log(formData);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isDisabled =
    !formData.fullName ||
    formData.gender === "select" ||
    formData.bio.length < 30;

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   setIsLoading(true);
  //   e.preventDefault();
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("file", file); // Use append instead of set
  //   formData.append("upload_preset", "nd2sr4np");

  //   try {
  //     const response = await axios.post(
  //       "https://api.cloudinary.com/v1_1/dp5ysdt4c/image/upload",
  //       formData
  //     );

  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //     setFormData({
  //       fullName: "",
  //       gender: "select",
  //       bio: "",
  //       image: "",
  //     });
  //   }
  // };

  return (
    <div className="flex  w-full xl:max-w-full xl:mb-[100px] justify-center xl:justify-start sm:justify-start">
      <div className="flex gap-4 flex-col ">
        <p
          className={`${
            isDark ? "text-white" : "text-Neutra50"
          } font-medium text-[16px]`}
        >
          Change profile photo
        </p>

        <form
          onSubmit={handleUpdate}
          className="w-full flex flex-col gap-4 sm:gap-6  "
        >
          <div className="flex items-center gap-4">
            <div className="relative  ">
              <div
                className={`h-[130px] w-[130px] bg-gradient-to-b ${
                  isDark
                    ? "from-[#0d62ff] via-[#00ffb7] to-[#ffcc00] "
                    : "from-[#ff0d82] via-[#da0303] to-[#ff960d]"
                }  rounded-full p-1 overflow-hidden`}
              >
                <Image
                  src={imageSource}
                  alt="user image"
                  width={130}
                  height={130}
                  className="rounded-full object-contain"
                />
              </div>
              <div
                className={`absolute bottom-2 right-0 h-8 w-8 rounded-lg  flex items-center justify-center cursor-pointer ${
                  isDark ? "bg-black border-[1px] border-gray-300" : "bg-white"
                }`}
              >
                <label htmlFor="image" className="cursor-pointer">
                  {isDark ? <EditIconDark /> : <EditIcon />}

                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <p
                className={`${
                  isDark ? "text-white" : "text-Neutra50"
                } font-medium text-[16px]`}
              >
                Select a file
              </p>
              <p
                className={`${
                  isDark ? "text-gray-300" : "text-Neutra50"
                } font-Hanken text-[14px]`}
              >
                Make sure the file is below 2mb
              </p>
            </div>
          </div>
          <div
            className={`flex  flex-col w-full xl:w-[500px] gap-4 sm:gap-10 ${
              isDark && "text-white "
            }`}
          >
            <label htmlFor="name">
              <p className="flex items-start mb-2">
                <span>Your full name</span>
                <span className="text-red-500 font-medium text-sm">*</span>
              </p>

              <input
                type="text"
                placeholder="Your full name"
                name="name"
                value={formData.fullName}
                id="name"
                required
                className={`w-full p-2 outline-none rounded-xl bg-transparent border  py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300 ${
                  isDark
                    ? "border-gray-700 shadow-[-5px_-5px_15px_#bbbbbb38,5px_5px_15px_#00000059]"
                    : "border-Neutra10"
                } `}
                min={2}
                onChange={handleFullNameChange}
              />
            </label>

            <label htmlFor="gender">
              <p className="flex items-start mb-2">
                <span>Select gender</span>
                <span className="text-red-500 font-medium text-sm">*</span>
              </p>
              <select
                id="gender"
                required
                name="gender"
                className={`w-full p-2 outline-none rounded-xl  border  py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300 ${
                  isDark
                    ? "border-gray-700 shadow-[-5px_-5px_15px_#bbbbbb38,5px_5px_15px_#00000059] bg-black"
                    : "border-Neutra10 bg-transparent"
                } `}
                onChange={handleGenderChange}
                value={formData.gender}
              >
                <option value="select" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label htmlFor="bio">
              <p className="flex items-start mb-2">
                <span>Bio</span>
                <span className="text-red-500 font-medium text-sm">*</span>
              </p>
              <textarea
                placeholder="Bio......"
                name="bio"
                required
                id="bio"
                value={formData.bio}
                className={`w-full h-[180px] p-2 outline-none rounded-xl bg-transparent border  py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300 resize-none ${
                  isDark
                    ? "border-gray-700 shadow-[-5px_-5px_15px_#bbbbbb38,5px_5px_15px_#00000059]"
                    : "border-Neutra10"
                } `}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            {isProfileUpdated && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white border rounded-lg p-8 max-w-sm w-full mx-4">
                  <p className="text-xl text-green-600">
                    Profile updated successfully!
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="  flex relative justify-end">
            {isLoading && (
              <div className="absolute top-1/2 right-8 transform -translate-x-[50%] -translate-y-1/2 z-30">
                <LoadingSpinner />
              </div>
            )}

            <Button
              title={isLoading ? "Updating..." : "Update"}
              type="submit"
              disabled={isDisabled}
              loading={isLoading}
              variant={isDark ? "secondary" : "primary"}
              className={`${
                isDark
                  ? "!bg-transparent border-gray-700 shadow-[-5px_-5px_15px_#bbbbbb38,5px_5px_15px_#00000059] brightness-125"
                  : "py-4 px-8 "
              }`}
              titleClassName={`${
                isDark
                  ? "my-3 mx-6 bg-gradient-to-r from-[#0d62ff] via-[#00ffb7] to-[#ff00fb]  w-fit  bg-clip-text text-transparent text-xl tracking-wide "
                  : ""
              }`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
