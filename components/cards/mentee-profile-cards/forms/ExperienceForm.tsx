/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import {
  MenteeDashboardProfileImg,
  MenteeUpdateProfileCheckmark,
} from "@/public";
import { EditIcon, EditIconDark } from "@/public/SVGs";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

type formProps = {
  title: string;
  company: string;
};

export default function ExperienceForm({ isDark }: { isDark: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // router
  const [addInput, setAddInput] = useState([1]);
  const [formData, setFormData] = useState<formProps>({
    title: "",
    company: "",
  });
  const [token, setToken] = useState("");
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const baseUrl = "https://mentormee-api.onrender.com";

  // Create an event handler function to update the experience state
  const handleExperienceChange = (e: any) => {
    const newTitle = e.target.value;
    setFormData({
      ...formData,
      title: newTitle,
    });
  };

  // Create an event handler function to update the workplace state
  const handleWorklaceChange = (e: any) => {
    const newWorkplace = e.target.value;
    setFormData({
      ...formData,
      company: newWorkplace,
    });
  };

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
          title: data?.data?.title,
          company: data?.data?.company,
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
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if authToken exists
    if (token) {
      const apiUrl = "https://mentormee-api.onrender.com/mentee/update-profile";

      const patchData = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      };
      console.log(formData);

      try {
        const response = await fetch(apiUrl, patchData);

        if (response.ok) {
          // Handle a successful update here
          setIsProfileUpdated(true);

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
      } finally {
        setIsLoading(false);
        fetchMenteeData();
        // router.push("/mentee-profile?path=profile");
      }
    } else {
      // Handle the case where authToken is missing
      console.log("Auth token is missing.");
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
  };

  return (
    <div className="flex w-full xl:max-w-full justify-center sm:justify-start">
      <div className="flex gap-4 flex-col">
        <p
          className={`${
            isDark ? "text-white" : "text-Neutra50"
          } font-medium text-[16px] uppercase`}
        >
          Tell us about your{" "}
          <span
            className={`w-fit ${
              isDark
                ? " bg-gradient-to-r from-[#0d62ff] via-[#00ffb7] to-[#ff00fb] bg-clip-text text-transparent font-bold text-[17px]"
                : "text-Neutra50"
            }`}
          >
            experience
          </span>
        </p>

        <form
          onSubmit={handleUpdate}
          className="w-full flex flex-col gap-4 sm:gap-6  "
        >
          <div
            className={`flex  flex-col w-full gap-4 sm:gap-10 ${
              isDark && "text-white "
            }`}
          >
            {addInput.map((num, idx) => (
              <div className="flex items-center gap-4 relative" key={num}>
                <label
                  htmlFor={`experience-${num}`}
                  className="w-full xl:w-[300px]"
                >
                  <p className="flex items-start mb-2">
                    <span>Experience</span>
                    <span className="text-red-500 font-medium text-sm">*</span>
                  </p>

                  <input
                    type="text"
                    placeholder="Your Experience"
                    required
                    value={formData.title}
                    name={`experience-${num}`}
                    id={`experience-${num}`}
                    className={`w-full p-2 outline-none rounded-xl bg-transparent border py-3 focus:border-primary focus:valid:border-green-400 transition-all duration-300 ${
                      isDark
                        ? "border-gray-700 shadow-[-5px_-5px_15px_#bbbbbb38,5px_5px_15px_#00000059]"
                        : "border-Neutra10"
                    }`}
                    min={2}
                    onChange={handleExperienceChange}
                  />
                </label>
                <span
                  className={`w-fit items-center justify-center pt-8 ${
                    isDark
                      ? " bg-gradient-to-r from-[#0d62ff] via-[#00ffb7] to-[#ff00fb] bg-clip-text text-transparent font-bold text-[17px]"
                      : "text-Neutra50"
                  }`}
                >
                  at
                </span>{" "}
                <label
                  htmlFor={`experience-${num}`}
                  className="w-full xl:w-[300px]"
                >
                  <p className="flex items-start mb-2">
                    <span>Workplace</span>
                    <span className="text-red-500 font-medium text-sm">*</span>
                  </p>

                  <input
                    type="text"
                    placeholder="Workplace"
                    value={formData.company}
                    name={`experience-${num}`}
                    id={`experience-${num}`}
                    className={`w-full p-2 outline-none rounded-xl bg-transparent border py-3 focus:border-primary focus:valid:border-green-400 transition-all duration-300 ${
                      isDark
                        ? "border-gray-700 shadow-[-5px_-5px_15px_#bbbbbb38,5px_5px_15px_#00000059]"
                        : "border-Neutra10"
                    }`}
                    min={2}
                    onChange={handleWorklaceChange}
                  />
                </label>
                {addInput.length > 1 && idx > 0 && (
                  <button
                    type="button"
                    className="w-6 h-1  bg-black absolute top-1/2 right-[-50px] transform -translate-y-1/2"
                    onClick={() => {
                      const updatedInputs = addInput.slice(
                        0,
                        addInput.length - 1
                      );
                      setAddInput(updatedInputs);
                    }}
                  />
                )}
              </div>
            ))}
            <div
              className={`text-4xl h-full flex items-center justify-center w-fit px-6 p-2 font-bold  rounded-xl bg-transparent border active:scale-90 select-none  transition-all duration-300 ${
                addInput.length === 10 ? "opacity-40 cursor-not-allowed" : ""
              }  ${
                isDark
                  ? "border-gray-700 shadow-[-5px_-5px_15px_#bbbbbb38,5px_5px_15px_#00000059]"
                  : "border-Neutra10"
              } `}
            >
              <button
                type="button"
                className={
                  addInput.length === 10 ? "opacity-40 cursor-not-allowed" : ""
                }
                disabled={addInput.length === 10}
                onClick={() =>
                  setAddInput((prev) => [...prev, prev.length + 1])
                }
              >
                +
              </button>
            </div>

            {isProfileUpdated && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white border rounded-lg p-8 max-w-sm w-full mx-4">
                  <p className="text-xl text-green-600">
                    Exoerience updated successfully!
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
