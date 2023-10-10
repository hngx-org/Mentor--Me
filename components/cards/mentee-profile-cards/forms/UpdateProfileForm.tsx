/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useRef, useState } from "react";
import { MenteeDashboardProfileImg } from "@/public";
import { EditIcon, EditIconDark } from "@/public/SVGs";
import Button from "@/app/(mentee)/mentee-sessions/(ui)/VxrcelBtn";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

const MAX_SIZE = 2 * 1024 * 1024; // 2MB in bytes
export default function UpdateProfileForm({ isDark }: { isDark: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File>();
  const [formData, setFormData] = useState({
    name: "",
    gender: "select",
    bio: "",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleEditClick = () => {
    // @ts-ignore
    fileInputRef.current.click();
  };
  const isDisabled =
    !formData.name || formData.gender === "select" || formData.bio.length < 30;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    if (file.size > MAX_SIZE) {
      console.error("Image size exceeds 2MB. Please upload a smaller image.");
      return;
    }

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload_image", {
        method: "POST",
        body: data,
      });

      // handle the error
      if (!res.ok) throw new Error(await res.text());
      if (res.ok) {
        console.log(res);
      }
    } catch (e: any) {
      // Handle other errors here
      console.error(e);
    } finally {
      setFile(undefined);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <div className="flex items-center gap-4">
          <div className="relative  ">
            <div className="h-[130px] w-[130px] bg-gradient-to-b from-[#ff0d82] via-[#da0303] to-[#ff960d] rounded-full p-1 overflow-hidden">
              <Image
                src={
                  file ? URL.createObjectURL(file) : MenteeDashboardProfileImg
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
              <form onSubmit={onSubmit}>
                <label
                  htmlFor="file"
                  onClick={handleEditClick}
                  className="cursor-pointer"
                >
                  {isDark ? <EditIconDark /> : <EditIcon />}

                  <input
                    type="file"
                    name="file"
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
                        setFile(e.currentTarget.files[0]);
                      }
                    }}
                  />
                </label>
              </form>
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
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 sm:gap-6  mt-6 sm:mt-10 "
        >
          <div
            className={`flex  flex-col w-full gap-4 sm:gap-10 ${
              isDark && "text-white "
            }`}
          >
            <label htmlFor="name">
              <p className="flex items-start">
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
                className="w-full p-2 outline-none rounded-md bg-transparent border border-Neutra10 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
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
              <p className="flex items-start">
                <span>Select gender</span>
                <span className="text-red-500 font-medium text-sm">*</span>
              </p>
              <select
                id="gender"
                required
                name="gender"
                className={`w-full p-2 outline-none rounded-md ${
                  isDark && "bg-black"
                } border border-Neutra10 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300`}
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
              <p className="flex items-start">
                <span>Bio</span>
                <span className="text-red-500 font-medium text-sm">*</span>
              </p>
              <textarea
                placeholder="Bio......"
                name="bio"
                required
                id="bio"
                value={formData.bio}
                className="w-full h-[180px]  p-2 outline-none rounded-md bg-transparent border border-Neutra10 py-3 resize-none focus:border-primary focus:valid:border-green-400 transition-all duration-300"
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
              type="submit"
              disabled={isDisabled}
              loading={isLoading}
              variant={isDark ? "secondary" : "primary"}
              className="py-4 px-8"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
