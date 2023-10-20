import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import useAuth from "@/context/useAuth";

import useFileUpload from "./useFileUpdate";
import IconWrapper from "../mentee-messages/IconWrapper";
import { AddIConv2 } from "@/public/SVGs";
import { Button } from "../buttons/button";
import { MentorDetailsContext } from "@/app/(mentor)/(dashboard-mentor)/mentor-profile/DetailsContext";

export default function ProfileCard({ userName }: { userName: string }) {
  const {
    details: { imageSrc },
    updateUserDetailsCtx,
  } = useContext(MentorDetailsContext);
  const [error, setError] = useState("");
  const { data } = useAuth();
  const { file, onFileUpload, setFile, fileError } = useFileUpload();
  const fileRef = useRef<HTMLInputElement>(null);
  const name = data?.userDetails?.fullName;
  const imgSrc =
    file ||
    imageSrc ||
    `https://api.dicebear.com/7.x/initials/png?seed=${userName}`;

  const handleUpdateImage = () => {
    updateUserDetailsCtx((prev) => ({
      ...prev,
      imageSrc: file,
    }));
    setFile("");
  };

  return (
    <div className="w-[100%] flex flex-col h-fit space-x-2 my-4">
      <div className="w-[100%] flex h-[70px] space-x-2 my-2 ">
        <div className="w-[54px]  h-[54px] sm:w-[54px] sm:h-[54px]  rounded-full relative ">
          <Image
            style={{ objectFit: "cover", borderRadius: "100%" }}
            src={imgSrc}
            fill
            alt="profile"
            onClick={() => {
              fileRef.current?.click();
            }}
          />

          <input
            type="file"
            ref={fileRef}
            className="hidden"
            onChange={onFileUpload}
          />
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
      {fileError && (
        <p className="font-bold text-xs text-Error70">{fileError} </p>
      )}
      {!error && file && (
        <div className="w-fit flex space-x-4 py-2">
          <Button variant="primary" onClick={handleUpdateImage}>
            use
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              setFile("");
            }}
          >
            cancel
          </Button>
        </div>
      )}
    </div>
  );
}
