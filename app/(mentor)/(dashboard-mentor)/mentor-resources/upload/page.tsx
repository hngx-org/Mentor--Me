/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

import { CancelIcon, CaretIcon } from "@/public/SVGs";
import DropDown from "@/components/DropDown";
import ResourceCurriculum from "./resourceCurriculum";

const COURSETYPEOPTIONS = [
  "Video Course",
  "Text-Based Course",
  "Interactive Course",
  "Live Webinar",
  "Self-Paced Course",
];
const TRACKOPTIONS = [
  "Frontend Track",
  "Backend Track",
  "Mobile Track",
  "UI / UX",
  "Video Editing",
];

export default function UploadResourcesPage() {
  const courseTitleRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [curriculumList, setCurriculumList] = useState<
    { id: string; title: string; duration: number }[]
  >([{ id: "FIRSTSECTIONFIELD", title: "", duration: 0 }]);

  const courseDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const trackRef = useRef<HTMLInputElement>(null);
  const courseTypeRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [video, setVideo] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [isTrackDropDownExpanded, setIsTrackDropDownExpanded] = useState(false);
  const [isCourseTypeDropDownExpanded, setIsCourseTypeDropDownExpanded] =
    useState(false);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1);
  const [selectedTrackOptionIdx, setSelectedTrackOptionIdx] = useState(-1);

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onloadend = function () {
      setVideo(fileReader.result as string);
    };
  }, [file?.name]);
  useEffect(() => {
    function detectOuterClick(this: Document, ev: MouseEvent) {
      if (!trackRef.current?.parentElement?.contains(ev.target as Node)) {
        setIsTrackDropDownExpanded(false);
      }
      if (!courseTypeRef.current?.parentElement?.contains(ev.target as Node)) {
        setIsCourseTypeDropDownExpanded(false);
      }
    }
    document.addEventListener("click", detectOuterClick, true);

    return () => {
      document.removeEventListener("click", detectOuterClick);
    };
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!file) {
          toast.error("Please upload a preview video");
          return;
        }
        const user = JSON.parse(
          localStorage.getItem("Mentor") ||
            JSON.stringify({ data: { token: null } })
        );
        let videoBase64;
        const {
          data: { token },
        } = user;

        const toastId = toast.loading("Uploading resource, please wait.");

        try {
          const anotherRes = await fetch(
            "https://mentormee-api.onrender.com/mentors/get-current",
            {
              redirect: "follow",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          if (!anotherRes.ok) {
            throw new Error("Error fetching user data.");
          }
          const { data: anotherData } = await anotherRes.json();
          console.log(anotherData);
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file!);

          fileReader.onloadend = async function () {
            videoBase64 = fileReader.result as string;
            const newList = curriculumList
              .map((list, idx) => ({
                [`Id${idx + 1}`]: list.id,
                [`Title${idx + 1}`]: list.title,
                [`Duration${idx + 1}`]: list.duration,
              }))
              .reduce((acc, curr) => ({ ...acc, ...curr }), {});

            const resourceData = {
              category: trackRef.current?.value!,
              description: courseDescriptionRef.current?.value!,
              title: courseTitleRef.current?.value!,
              track: courseTypeRef.current?.value!,
              price: priceRef.current?.value!,
              name: anotherData?.userDetails?.fullName,
              role: anotherData?.userDetails?.role,
              company: anotherData?.company,
              ratings: "0.0",
              reviews: "0",
              currency: "NGN",
              videoUrl: videoBase64 as string,
              imageUrl: "",
              ...newList,
            };

            const res = await fetch("/api/upload-resource", {
              method: "POST",
              body: JSON.stringify(resourceData),
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            });
            const data = await res.json();
            console.log(data);
            toast.dismiss(toastId);
            if (data.error) {
              toast.error(data.error.message);
              return;
            }
            toast.success("Resource uploaded successfully!");
            router.push(`/mentor-resources/${data._id}`);
          };
        } catch (e) {
          console.log(e);
          toast.dismiss(toastId);
          toast.error("There was an error uploading the resource.");
        }
      }}
      className="w-[min(550px,_100%)] mx-auto p-4 top-0 bg-white pt-10 mb-8"
    >
      <h1 className="capitalize font-Inter font-medium text-2xl mb-8 text-NeutalBase">
        upload resources
      </h1>
      <Input title="course title" htmlFor="course-title">
        <input
          type="text"
          name="course-title"
          id="course-title"
          ref={courseTitleRef}
          required
          placeholder="input course title"
          className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal"
        />
      </Input>
      <Input htmlFor="course-description" title="course description">
        <textarea
          name="course-description"
          id="course-description"
          ref={courseDescriptionRef}
          required
          placeholder="Input course description"
          value={courseDescription}
          onChange={(e) => {
            setCourseDescription(e.target.value);
          }}
          onKeyUp={(e) => {
            (e.target as HTMLTextAreaElement).style.height = "auto";
            const scHeight = (e.target as HTMLTextAreaElement).scrollHeight;
            (e.target as HTMLTextAreaElement).style.height = `${scHeight}px`;
          }}
          maxLength={200}
          className="border-none outline-none w-full placeholder:text-Neutra20 resize-none placeholder:font-normal min-h-[80px] text-NeutalBase"
        />
        <p className="absolute inset-[100%_0_auto_auto] text-Neutra40 w-max font-Hanken">
          {courseDescription.length}/200
        </p>
      </Input>
      <Input
        title="Track"
        htmlFor="track"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsTrackDropDownExpanded((prev) => !prev);
        }}
        extraElements={
          <AnimatePresence>
            {isTrackDropDownExpanded && (
              <DropDown
                dropDownOptions={TRACKOPTIONS}
                setSelectedOptionIdx={setSelectedTrackOptionIdx}
                selectedOptionIdx={selectedTrackOptionIdx}
              />
            )}
          </AnimatePresence>
        }
      >
        <input
          type="text"
          id="track"
          name="track"
          ref={trackRef}
          required
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          defaultValue={TRACKOPTIONS[selectedTrackOptionIdx] || ""}
          placeholder="select track"
          className="border-none cursor-pointer outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal disabled:bg-transparent"
        />
        <motion.span animate={{ rotate: isTrackDropDownExpanded ? 0 : -180 }}>
          <CaretIcon className=" cursor-pointer" />
        </motion.span>
      </Input>
      <Input
        title="Course Type"
        htmlFor="course-type"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsCourseTypeDropDownExpanded((prev) => !prev);
        }}
        extraElements={
          <AnimatePresence>
            {isCourseTypeDropDownExpanded && (
              <DropDown
                dropDownOptions={COURSETYPEOPTIONS}
                setSelectedOptionIdx={setSelectedOptionIdx}
                selectedOptionIdx={selectedOptionIdx}
              />
            )}
          </AnimatePresence>
        }
      >
        <input
          type="text"
          id="course-type"
          name="course-type"
          ref={courseTypeRef}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          required
          defaultValue={COURSETYPEOPTIONS[selectedOptionIdx] || ""}
          placeholder="select course type"
          className="border-none cursor-pointer outline-none w-full placeholder:text-Neutra20 placeholder:capitalize placeholder:font-normal disabled:bg-transparent"
        />
        <motion.span
          animate={{ rotate: isCourseTypeDropDownExpanded ? 0 : -180 }}
        >
          <CaretIcon className="cursor-pointer" />
        </motion.span>
      </Input>
      <div className="mb-4">
        <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
          video preview
        </p>
        <DragArea video={video} setFile={setFile} />
        {video.trim().length > 0 && (
          <div className="flex items-center my-4 gap-4 relative">
            <CancelIcon
              className="absolute inset-[0_0_auto_auto] cursor-pointer border-Neutra20 rounded-full border-2"
              onClick={() => {
                setFile(null);
                setVideo("");
              }}
            />
            <video
              autoPlay
              loop
              className="w-40 aspect-video object-cover object-center"
              src={video}
            />
            <p className="font-medium font-Inter">{file?.name}</p>
          </div>
        )}
      </div>
      <Input title="price" htmlFor="price">
        <input
          type="number"
          name="price"
          ref={priceRef}
          id="price"
          onKeyDown={(e) => {
            if (e.key === "e") {
              e.preventDefault();
            }
          }}
          required
          placeholder="Input the price"
          className="border-none outline-none w-full placeholder:text-Neutra20 placeholder:font-normal"
        />
      </Input>
      <ResourceCurriculum
        curriculumList={curriculumList}
        setCurriculumList={setCurriculumList}
      />
      <button
        type="submit"
        className="font-Inter mb-4 font-medium capitalize cursor-pointer bg-NeutalBase py-4 px-5 w-full rounded-[8px] border-none outline-none text-white"
      >
        upload resource
      </button>
    </form>
  );
}

const DragArea = ({
  setFile,
  video,
}: {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  video: string;
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (video === "") {
      fileRef.current!.value = "";
    }
  }, [video]);

  return (
    <div
      className={`${
        isDraggingOver
          ? "border-Accent1 border-[3px]"
          : "border-[#9C9CA7] border-[1px]"
      } bg-[#F9F9F9] border-dashed rounded-[6px] px-4 py-7 text-center`}
      onDragEnter={(e) => {
        e.preventDefault();
        setIsDraggingOver(true);
      }}
      onDragLeaveCapture={(e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) return;
        setIsDraggingOver(false);
      }}
      onDropCapture={(e) => {
        e.preventDefault();
        setIsDraggingOver(false);

        const file = e.dataTransfer.files[0];
        console.log(file);
        const acceptedFileTypes = ["mp4", "webm", "avi", "mkv", "ogg"];
        const fileType = file.name.split(".").at(-1);

        if (!acceptedFileTypes.includes(fileType!.toLowerCase())) {
          toast.error(`Unsupported file format: ${fileType}`);
          return;
        }
        if (file.size > 15728640) {
          toast.error("The uploaded file is larger than 15MB");
          return;
        }
        setFile(file);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <Image
        width={30}
        height={30}
        className=" w-11 mx-auto"
        src="/assets/images/mentor-upload-resource/folders.png"
        alt="folders-icon"
      />
      <div className="text-[#2F3033] font-semibold max-w-[163px] mx-auto mt-3 mb-2">
        Drop your files here or{" "}
        <label htmlFor="upload-file" className="text-Accent1 cursor-pointer">
          click here
          <input
            type="file"
            id="upload-file"
            name="upload-file"
            accept=".mp4, .webm, .avi, .mkv, .ogg"
            size={15728640}
            ref={fileRef}
            onChange={(e) => {
              if (e.target.files![0].size > 15728640) {
                toast.error("The uploaded file is larger than 15MB");
                return;
              }
              setFile(e.target.files![0]);
            }}
            className="hidden"
          />
        </label>{" "}
        to upload
      </div>
      <p className="text-[#9C9CA7]">
        Accepted formats (mp4, WebM, avi, mkv, ogg). Maximum of 15MB
      </p>
    </div>
  );
};
const Input = ({
  title,
  htmlFor,
  children,
  extraElements = null,
  onClick,
}: {
  title: string;
  htmlFor: string;
  children: ReactNode;
  extraElements?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLLabelElement> | undefined;
}) => (
  <div className="mb-6 last:mb-0 relative">
    <p className="capitalize text-Neutral60 font-Inter font-medium mb-2 text-lg">
      {title}
    </p>
    <label
      className="flex cursor-pointer items-center gap-4 border-Neutra10 border-[1px] rounded-md px-4 py-4"
      htmlFor={htmlFor}
      onClick={onClick}
      onKeyUp={() => {
        console.log("ally rule");
      }}
    >
      {children}
    </label>
    {extraElements}
  </div>
);
