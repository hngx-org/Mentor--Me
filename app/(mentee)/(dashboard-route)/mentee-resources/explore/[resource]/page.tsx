"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  courseContents,
  courseTitles,
  staticDescription,
  staticTitle,
} from "../constants";
import Profile from "@/public/assets/dylan.png";
import {
  DownArrowIcon,
  EmptyStarIcon,
  FilledStarIcon,
  NotifyIcon,
} from "@/public/SVGs";
import formatDate from "@/lib/formDate";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

const Resource = ({ params }: { params: { resource: string } }) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const { resource: id } = params;
  const [error, setError] = useState<string | null>(null);
  const [save, setSave] = useState<boolean>(false);

  const getResource = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetch(
        `https://hngmentorme.onrender.com/api/resources/${id}`
      );
      const res = await result.json();
      // console.log(res);

      setData(res);
    } catch (error) {
      const { message } = error as { message: string };
      setError(`An error occurred. Please try again. ${message}`);
    } finally {
      setLoading(false);
    }

    const savedItems = localStorage.getItem("save");

    if (savedItems?.length !== undefined && savedItems.length > 3) {
      const stored: any[] = JSON.parse(savedItems);
      const modifiedData = stored.filter((data) => data?._id === id);
      if (modifiedData.length > 0) {
        setSave(true);
      }
    } else {
      setSave(false);
    }
  }, []);

  useEffect(() => {
    getResource();
  }, []);
  const profileImg = `https://api.dicebear.com/7.x/initials/png?seed=${data?.name}`;
  const handleSave = () => {
    if (!save) {
      const savedItems = localStorage.getItem("save");
      if (savedItems) {
        const stored: string[] = JSON.parse(savedItems);
        stored.push(data);
        localStorage.setItem("save", JSON.stringify(stored));
        toast("Saved successfully");
      } else {
        localStorage.setItem("save", JSON.stringify([data]));
        toast("Saved successfully");
      }

      setSave(true);
    } else {
      const savedItems = localStorage.getItem("save");
      if (savedItems) {
        const stored: any[] = JSON.parse(savedItems);
        const modifiedData = stored.filter((data) => data?._id !== id);
        localStorage.setItem("save", JSON.stringify(modifiedData));
        toast("Deleted successfully");
      }

      setSave(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: data?.title,
        url: data?.videoUrl,
      });
    }
  };

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="w-full pb-16">
      <div className="w-full  flex flex-col justify-center items-center gap-[17px] p-3 py-[62px]  bg-Neutra50">
        <h1 className="font-Inter text-[26px] sm:text-[32px] font-medium text-center text-white bg-Neutra50">
          {data?.title || staticTitle}
        </h1>
        <p className="w-full max-w-[445px] font-Hanken text-white text-center">
          {data?.description || staticDescription}
        </p>
        <div className="flex font-Hanken text-xs text-white items-center">
          {Array.from({ length: Math.min(data?.ratings, 5) }, (_, index) => (
            <FilledStarIcon key={index} />
          ))}
          {Array.from({ length: Math.max(5 - data.ratings, 0) }, (_, index) => (
            <EmptyStarIcon key={index} />
          ))}
          <span className="mx-1">{data?.ratings} | </span>
          <span>{data?.reviews} reviews</span>
        </div>
        <p className="font-Hanken text-xs text-white">
          Created by <span className="text-Accent2">{data?.name}</span>{" "}
        </p>
        <div className="flex gap-2">
          <NotifyIcon />
          <p className="font-Hanken text-xs text-white ">
            {" "}
            Last updated on {formatDate(data?.updatedAt)}
          </p>
        </div>
      </div>
      <div className="flex flex-col px-3 sm:p-[30px] gap-1 md:gap-10">
        <div className="w-full">
          <div className="flex flex-col gap-[18px] mt-8 mb-0 p-3">
            <h1 className="text-NeutalBase font-Inter text-2xl font-medium">
              {data?.title}
            </h1>
            <div className="flex gap-2 items-center">
              <Image
                src={profileImg || Profile}
                alt="profile"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <h1 className="text-NeutalBase font-Hanken text-sm">
                  {data?.name}
                </h1>
                <p className="text-Neutra40 font-Hanken text-xs">
                  {data?.role} at {data?.company}
                </p>
              </div>
            </div>
            <p className="text-Neutra40 font-Hanken leading-[120%] ">
              {data?.name} is a renowned researcher with over 20 years
              experience in designing customer centric products that align with
              business objectives. She is an award-winning visual designer with
              extensive experience in brand, digital and UX design. She enjoys
              breaking down complex ideas through visual storytelling. As a
              senior designer at Microsoft, Deb collaborates with product
              leaders to create engaging narratives that communicate value and
              business impact.{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col px-3">
          {data.videoUrl !== undefined && !data.videoUrl.includes("example") ? (
            <video autoPlay controls className="w-full h-[250px] md:h-[450px]">
              <source src={data.videoUrl} type="video/mp4" />
              <track
                kind="captions"
                src={data.videoUrl}
                label="English captions"
              />
            </video>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/lFUXtURI-Dk?si=_RNgHAhBoVmB_Ws1"
              title="YouTube video player"
              allowFullScreen
              className="w-full h-[400px]"
            />
          )}

          <div className="w-full p-3 sm:p-6">
            <div className="w-full flex justify-between items-center mb-[34px]">
              <p className="font-Hanken text-[32px] text-NeutalBase font-semibold">
                N{data?.price}
              </p>
              <button
                type="button"
                className="font-Inter text-sm font-medium text-[#A12CCF]"
                onClick={handleShare}
              >
                Share Course
              </button>
            </div>
            <button
              onClick={handleSave}
              type="button"
              className="font-Hanken w-full max-w-[450px] text-white rounded-lg bg-NeutalBase h-12 mb-4"
            >
              {save ? "Remove Item" : "Save Item"}
            </button>
            <h1 className="font-Inter text-lg font-medium">
              This course includes:
            </h1>
            <ul className="ml-6">
              {courseContents.map((content) => (
                <li
                  className="font-Hanken text-Neutra50 list-disc"
                  key={content.id}
                >
                  {content.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Resource;
