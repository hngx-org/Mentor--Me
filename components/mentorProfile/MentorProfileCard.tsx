import useAuth from "@/context/useAuth";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useFileUpload } from "./useFileUpdate";
import IconWrapper from "../mentee-messages/IconWrapper";
import { AddIConv2 } from "@/public/SVGs";

export default function ProfileCard({ userName }: { userName: string }) {
  const [error, setError] = useState("file too large, should be less than 2mb");
  const { data } = useAuth();
  const { file, onFileUpload, setFile } = useFileUpload();
  const fileRef = useRef<HTMLInputElement>(null);
  const name = data?.userDetails?.fullName;

  useEffect(() => {
    setError("");
    if (file && file.length / 1024 > 3500) {
      setError("file too large, should be less than 2mb");
      return;
    }
  }, [file]);
  return (
    <div className="w-[100%] flex flex-col h-fit space-x-4 my-5">
      <p>change profile photo</p>
      <div className="w-[100%] flex h-[100px] space-x-2 my-5 ">
        <div className="w-[54px]  h-[54px] sm:w-[54px] sm:h-[54px]  rounded-full relative ">
          <Image
            style={{ objectFit: "cover", borderRadius: "100%" }}
            src={`https://api.dicebear.com/7.x/initials/png?seed=${userName}`}
            fill
            alt="profile"
            onClick={() => {
              fileRef.current?.click();
            }}
          />

          <input type="file" ref={fileRef} className="hidden" />
          <IconWrapper styles="bg-Accent1 absolute rounded-full bottom-0 right-0">
            <AddIConv2 color="#fff" />
          </IconWrapper>
        </div>

        <div className="space-y-2">
          <p className="font-bold text-Accent1  text-sm ">Upload file</p>
          <p className="text-Neutra10 text-sm ">
            Make sure the file is below 2mb
          </p>
        </div>
      </div>
      {error && <p> {error} </p>}
      <p> hello</p>
    </div>
  );
}
