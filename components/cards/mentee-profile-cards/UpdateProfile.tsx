/* eslint-disable react/button-has-type */
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MenteeDashboardProfileImg } from "@/public";
import { EditIcon } from "@/public/SVGs";
import Button from "@/app/(mentee)/mentee-sessions/(ui)/VxrcelBtn";

type UpdateProfileTabsProp = {
  id: number;
  title: string;
  tab: string;
};
const updateProfileTabs: UpdateProfileTabsProp[] = [
  {
    id: 1,
    title: "Basic info",
    tab: "basic-info",
  },
  {
    id: 2,
    title: "Experience",
    tab: "experience",
  },
  {
    id: 3,
    title: "Social links",
    tab: "social links",
  },
];
export default function UpdateProfile() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const isDisabled =
    !formData.name || !formData.email || !formData.message || !formData.phone;
  const [activeTab, setActiveTab] = useState<string | null | undefined>("");

  const router = useRouter();
  const params = useSearchParams().get("tab");

  useEffect(() => {
    setActiveTab(params || "basic-info");
  }, [params]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full justify-center  flex flex-col items-start gap-8 mt-8">
      <div>
        <p>Update your profile details</p>
      </div>
      <div className="flex gap-4 w-full justify-between max-w-[400px]">
        {updateProfileTabs.map((session) => (
          <button
            className={` cursor-pointer capitalize text-[14px] sm:text-[18px] font-Hanken pb-2 border-b-[2px] border-[#f9fafc]  text-Neutra40 ${
              activeTab === session.tab
                ? "!border-Accent1 text-black font-medium"
                : ""
            }`}
            key={session.id}
            onClick={() => {
              router.push(`?tab=${session.tab}`, {
                scroll: false,
              });
              setActiveTab(session.tab);
            }}
          >
            {session.title}
          </button>
        ))}
      </div>
      {activeTab === "basic-info" && (
        <div className="flex gap-4 flex-col">
          <p>Change profile photo</p>
          <div className="flex items-center gap-4">
            <div className="relative  ">
              <Image
                src={MenteeDashboardProfileImg}
                alt="cover"
                width={130}
                height={130}
              />
              <div className="absolute bottom-2 right-0 h-8 w-8 rounded-lg bg-white flex items-center justify-center">
                <EditIcon />
              </div>
            </div>
            <div className="flex flex-col">
              <p>Select a file</p>
              <p>Make sure the file is below 2mb</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-10 items-center text-white "
          >
            <input
              type="text"
              placeholder="First Name"
              name="name"
              id="name"
              value={formData.name}
              required
              className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
              min={2}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              id="phone"
              type="number"
              value={formData.phone}
              placeholder="Phone Number"
              name="phone"
              required
              pattern="^[+]?[0-9]{10,15}$"
              className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
              min={10}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value.trim(),
                })
              }
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              value={formData.email}
              required
              className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400 transition-all duration-300"
              min={2}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <textarea
              placeholder="Bio......"
              name="message"
              required
              id="mesage"
              value={formData.message}
              className="w-full h-[160px] md:h-[120px] p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 resize-none focus:border-primary focus:valid:border-green-400 transition-all duration-300"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
            />

            <div className="w-full flex justify-end">
              <Button
                title="Update"
                type="submit"
                variant="primary"
                className="py-2 sm:px-10 sm:py-4"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
