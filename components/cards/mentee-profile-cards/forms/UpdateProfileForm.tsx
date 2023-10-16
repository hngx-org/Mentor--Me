/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useRef, useState } from "react";
import { MenteeDashboardProfileImg } from "@/public";
import { EditIcon, EditIconDark } from "@/public/SVGs";

import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

type formProps = {
  name: string;
  bio: string;
  gender: string;
  image: File | undefined;
};

const MAX_SIZE = 2 * 1024 * 1024; // 2MB in bytes
export default function UpdateProfileForm({ isDark }: { isDark: boolean }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File>();
  const [formData, setFormData] = useState<formProps>({
    name: "",
    gender: "select",
    bio: "",
    image: file,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // const handleEditClick = () => {
  //   // @ts-ignore
  //   fileInputRef.current.click();
  // };
  const isDisabled =
    !formData.name || formData.gender === "select" || formData.bio.length < 30;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (!file) return;

    if (file.size > MAX_SIZE) {
      console.error("Image size exceeds 2MB. Please upload a smaller image.");
      setIsLoading(false); // Make sure to set loading state to false in this case
      return;
    }

    try {
      const data = new FormData();
      data.append("image", file); // Use append instead of set
      data.append("name", formData.name);
      data.append("gender", formData.gender);
      data.append("bio", formData.bio);

      const res = await fetch("/api/form-upload", {
        method: "POST",
        body: data,
        headers: {
          // Set the Content-Type header to allow the server to properly parse the FormData
          // 'multipart/form-data' is the content type used for file uploads
          "Content-Type": "multipart/form-data",
        },
      });

      // handle the error
      if (!res.ok) {
        throw new Error(await res.text());
      } else {
        console.log("Upload successful:", res);
      }
    } catch (error) {
      // Handle other errors here
      console.error(error);
    } finally {
      setIsLoading(false);
      setFormData({
        name: "",
        gender: "select",
        bio: "",
        image: undefined,
      });
    }
  };

  const url = "https://mentormee-api.onrender.com/mentee/update-profile";
  const authToken = localStorage.getItem("authToken");

  const handleUpdate = () => {
    // Sending a PUT request to update the user's profile
    fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("PATCH request was successful");
        } else {
          console.error(
            `PATCH request failed with status code ${response.status}`
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex w-full justify-center sm:justify-start">
      <div className="flex gap-4 flex-col">
        <p
          className={`${
            isDark ? "text-white" : "text-Neutra50"
          } font-medium text-[16px]`}
        >
          Change profile photo
        </p>

        <form
          onSubmit={handleSubmit}
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
                  src={
                    formData.image
                      ? URL.createObjectURL(formData.image)
                      : MenteeDashboardProfileImg
                  }
                  alt="cover"
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
                    onChange={(e) => {
                      if (
                        e.currentTarget.files &&
                        e.currentTarget.files[0].size > MAX_SIZE
                      ) {
                        alert(
                          "Image size exceeds 2MB. Please upload a smaller image."
                        );

                        return;
                      }

                      if (e.currentTarget.files && e.currentTarget.files[0]) {
                        setFormData({
                          ...formData,
                          image: e.currentTarget.files[0],
                        });
                      }
                    }}
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
            className={`flex  flex-col w-full gap-4 sm:gap-10 ${
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
                value={formData.name}
                id="name"
                required
                className={`w-full p-2 outline-none rounded-xl bg-transparent border  py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300 ${
                  isDark
                    ? "border-gray-700 shadow-[-5px_-5px_15px_#bbbbbb38,5px_5px_15px_#00000059]"
                    : "border-Neutra10"
                } `}
                min={2}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>

            {/* Select gender */}
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                value={formData.gender}
              >
                <option value="select" disabled>
                  Select gender
                </option>
                <option value="1">Male</option>
                <option value="2">Female</option>
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
          </div>

          <div className="  flex relative justify-end">
            {isLoading && (
              <div className="absolute top-1/2 right-8 transform -translate-x-[50%] -translate-y-1/2 z-30">
                <LoadingSpinner />
              </div>
            )}
            <Button
              title={isLoading ? "Updating..." : "Update"}
              onclick={handleUpdate}
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
