/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  image: string | null;
};

const MAX_SIZE = 2 * 1024 * 1024; // 2MB in bytes
export default function UpdateProfileForm({ isDark }: { isDark: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [fileURL, setFileURL] = useState<any>("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<formProps>({
    fullName: "",
    bio: "",
    image: null,
  });
  const [token, setToken] = useState("");
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [imageSource, setImageSource] = useState("");
  const baseUrl = "https://mentormee-api.onrender.com";
  const router = useRouter(); // router

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // File is larger than 2MB (2 * 1024 * 1024 bytes)
        setErrorMessage("File size should be less than 2MB");
      } else {
        // File is within the size limit
        setErrorMessage("");
        setFileURL(file);
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        setFileURL(e.target?.result);

        const imageData = new FormData();
        imageData.append("file", e.target?.result as string);
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
        setFormData({ ...formData, image: data.url });
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

  useEffect(() => {
    if (formData.image) {
      setImageSource(formData.image);
    } else if (fileURL) {
      setImageSource(fileURL);
    } else {
      setImageSource(
        `https://api.dicebear.com/7.x/initials/png?seed=${formData.fullName}`
      );
    }
  }, [formData, fileURL]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
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
        setFormData({
          fullName: data?.data?.user?.fullName,
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

    if (formData.image && token) {
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

          setTimeout(() => {
            setIsProfileUpdated(false);
          }, 3000);
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
        window.location.reload();
      }
    } else {
      // Handle the case where authToken is missing
      console.log("Auth token is missing.");
      setIsLoading(false);
    }
  };

  // console.log(formData);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isDisabled = !formData.fullName || formData.bio.length < 30;

  return pageLoading ? (
    <div className="absolute top-1/2 right-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-30">
      <div className="w-16 h-16 border-t-4 border-b-4 border-green-700/90 rounded-full animate-spin" />
    </div>
  ) : (
    <div className="flex  w-full xl:max-w-full xl:mb-[100px]  justify-center xl:justify-start sm:justify-start">
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
            <div className="relative">
              <div className="h-[130px] w-[130px] bg-gradient-to-b rounded-full p-1 overflow-hidden relative">
                {/* Circular container for the image */}
                <Image
                  src={imageSource}
                  alt="user image"
                  width={130}
                  height={130}
                  layout="fixed"
                  className="rounded-full object-cover"
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
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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

            <label htmlFor="bio">
              <p className="flex items-start mb-2">
                <span>Bio</span>
                <span className="text-red-500 font-medium text-sm">*</span>
              </p>
              <textarea
                placeholder="Tell us about your professional background and experience..."
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
                <LoadingSpinner
                  color="border-white"
                  innerColor="border-green-700/90"
                />
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
