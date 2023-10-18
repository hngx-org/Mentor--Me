"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import DeleteModal from "@/components/mentor-resources/DeleteModal";
import {
  ArrowIcon,
  CheckedIcon,
  DeleteIcon,
  EllipsisIcon,
  VideoSquareIcon,
} from "@/public/SVGs";

export default function UploadResources() {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [paginationData, setPaginationData] = useState({
    totalPages: 0,
    currentPage: 0,
  });
  const [data, setData] = useState<
    { name: string; price: number; _id: string; currency: string }[]
  >([]);
  const [deletingResource, setDeletingResource] = useState({
    resourceName: "",
    resourceId: "",
  });

  useEffect(() => {
    const toastId = toast.loading("Fetching your resources");
    (async () => {
      try {
        const res = await fetch(
          "https://hngmentorme.onrender.com/api/resources"
        );
        if (!res.ok) throw new Error("Failed to fetch resources");
        const data = await res.json();
        if (data.length === 0) {
          toast("You have no uploaded resources.", {
            icon: "ℹ️",
          });
        }
        setData(data);
        setPaginationData({
          currentPage: 1,
          totalPages: Math.ceil(data.length / 8),
        });
      } catch (e: any) {
        toast.error(e.message);
      } finally {
        toast.dismiss(toastId);
      }
    })();
  }, []);

  return (
    <div className="bg-[#FBFBFB] p-4">
      {deletingResource.resourceName ? (
        <div className="fixed inset-0 bg-[rgba(0,_0,_0,_0.2)] backdrop-blur-sm z-30 grid grid-cols-[450px] place-content-center">
          <DeleteModal
            resourceId={deletingResource.resourceId}
            closeModal={() =>
              setDeletingResource({
                resourceName: "",
                resourceId: "",
              })
            }
            resourceName={deletingResource.resourceName}
          />
        </div>
      ) : null}
      <Link
        className="capitalize bg-[#121212] px-5 py-3 rounded-[6px] cursor-pointer text-white ml-auto mb-8 block w-max"
        href="/mentor-resources/upload"
      >
        <span>+</span> add resource
      </Link>
      <table className=" w-4/5 border-collapse mx-auto mb-8">
        <thead>
          <tr>
            <th colSpan={3} className="p-0">
              <div className="py-8 px-4 bg-white border-[#EAEBF0] border-[1px] rounded-t-xl">
                <p className="w-max ml-auto text-[#272D37] font-Inter">
                  {(paginationData.currentPage - 1) * 8 + 1} -{" "}
                  {paginationData.currentPage * 8}
                </p>
              </div>
            </th>
          </tr>
          <tr className="border-[#EAEBF0] bg-white border-[1px] border-t-0">
            <th className="text-start font-Inter font-semibold text-[#5F6D7E] capitalize py-3 px-4 flex items-center gap-4 w-1/3">
              <div className="shrink-0 w-5 h-5 border-[#DAE0E6] border-[2px] rounded-[5px] cursor-pointer relative">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setIsAllSelected(e.target.checked);
                  }}
                  className="peer focus:outline-none focus:shadow-none cursor-pointer absolute inset-0 opacity-0 z-20"
                />
                <CheckedIcon className="absolute inset-[auto_50%_50%_auto] opacity-0 peer-checked:opacity-100 translate-y-1/2 translate-x-1/2 z-10" />
              </div>
              <p>title</p>
            </th>
            <th className="w-1/3 text-start font-Inter font-semibold text-[#5F6D7E] capitalize py-3 px-4">
              price
            </th>
            <th className="w-1/3 text-start font-Inter font-semibold text-[#5F6D7E] capitalize py-3 px-4">
              actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data
            .slice(
              (paginationData.currentPage - 1) * 8,
              paginationData.currentPage * 8 + 1
            )
            .map((resource) => (
              <Course
                key={resource._id}
                isAllSelected={isAllSelected}
                id={resource._id}
                title={resource.name}
                price={resource.price}
                setDeletingResource={setDeletingResource}
                currency={resource.currency}
              />
            ))}
        </tbody>
        <tfoot className="bg-white">
          <tr>
            <td colSpan={3} className="p-0">
              <div className="py-6 px-4 border-[#EAEBF0] border-[1px] border-t-0 rounded-b-[8px] flex align-center justify-between font-Inter font-medium">
                <button
                  type="button"
                  onKeyUp={() => {
                    console.log("ally rule");
                  }}
                  onClick={() => {
                    if (paginationData.currentPage - 1 <= 0) return;
                    setPaginationData((prev) => ({
                      ...prev,
                      currentPage: prev.currentPage - 1,
                    }));
                    toast(`Page ${paginationData.currentPage - 1}`, {
                      duration: 1000,
                    });
                  }}
                  className={`flex items-center gap-4 ${
                    paginationData.currentPage - 1 <= 0
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <ArrowIcon />
                  Prev
                </button>
                <button
                  type="button"
                  className="flex items-center gap-4 font-Inter font-medium text-[#5F6D7E]"
                >
                  {paginationData.totalPages < 5 ? (
                    <>
                      {Array(paginationData.totalPages)
                        .fill(null)
                        .map((_page, idx) => {
                          const key = Math.random();
                          return (
                            <button
                              type="button"
                              onKeyUp={() => {
                                console.log("ally rule");
                              }}
                              onClick={() =>
                                setPaginationData((prev) => ({
                                  ...prev,
                                  currentPage: idx + 1,
                                }))
                              }
                              className={`cursor-pointer ${
                                paginationData.currentPage === idx + 1
                                  ? "text-[#437EF7]"
                                  : ""
                              }`}
                              key={key}
                            >
                              {idx + 1}
                            </button>
                          );
                        })}
                    </>
                  ) : (
                    <>
                      {Array(paginationData.totalPages)
                        .fill(null)
                        .map((_page, idx, arr) => {
                          const key = Math.random();
                          if (
                            idx === 0 ||
                            idx === 1 ||
                            idx === arr.length - 2 ||
                            idx === arr.length - 1
                          ) {
                            return (
                              <button
                                type="button"
                                onKeyUp={() => {
                                  console.log("ally rule");
                                }}
                                onClick={() =>
                                  setPaginationData((prev) => ({
                                    ...prev,
                                    currentPage: idx + 1,
                                  }))
                                }
                                className={`cursor-pointer ${
                                  paginationData.currentPage === idx + 1
                                    ? "text-[#437EF7]"
                                    : ""
                                }`}
                                key={key}
                              >
                                {idx + 1}
                              </button>
                            );
                          }
                          return <EllipsisIcon className="cursor-pointer" />;
                        })}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onKeyUp={() => {
                    console.log("ally rule");
                  }}
                  onClick={() => {
                    if (
                      paginationData.currentPage + 1 >
                      paginationData.totalPages
                    )
                      return;
                    setPaginationData((prev) => ({
                      ...prev,
                      currentPage: prev.currentPage + 1,
                    }));
                    toast(`Page ${paginationData.currentPage + 1}`, {
                      duration: 1000,
                    });
                  }}
                  className={`flex flex-row-reverse items-center gap-4 ${
                    paginationData.currentPage + 1 > paginationData.totalPages
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <ArrowIcon className=" rotate-180" />
                  Next
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

const Course = ({
  title,
  id,
  isAllSelected,
  setDeletingResource,
  price,
  currency,
}: {
  title: string;
  id: string;
  isAllSelected: boolean;
  setDeletingResource: Dispatch<
    SetStateAction<{
      resourceName: string;
      resourceId: string;
    }>
  >;
  price: number;
  currency: string;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isAllSelected);
  }, [isAllSelected]);
  return (
    <tr className="border-[#EAEBF0] border-[1px]">
      <td className="flex items-center gap-4 h-full py-5 px-4">
        <div className="w-5 h-5 border-[#DAE0E6] border-[2px] rounded-[5px] cursor-pointer relative">
          <input
            type="checkbox"
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
            checked={isChecked}
            id={id}
            className="peer focus:outline-none focus:shadow-none cursor-pointer absolute inset-0 opacity-0 z-20"
          />
          <CheckedIcon className="absolute inset-[auto_50%_50%_auto] opacity-0 peer-checked:opacity-100  translate-y-1/2 translate-x-1/2 z-10" />
        </div>
        <div className="bg-[#CCCCCC] p-2 rounded-[8px]">
          <VideoSquareIcon />
        </div>
        <label
          htmlFor={id}
          title={title}
          className="font-Inter font-medium text-[#272D37] max-w-[140px] overflow-hidden whitespace-nowrap"
        >
          {title}
        </label>
      </td>
      <td className="py-5 px-4 font-Inter font-medium text-[#2A2A2A]">
        {price === 0 ? "Free" : `${currency}${price}`}
      </td>
      <td
        className="flex items-center gap-3 cursor-pointer py-5 px-4"
        onClick={() => {
          setDeletingResource({
            resourceName: title,
            resourceId: id,
          });
        }}
      >
        <DeleteIcon />
        <span className="capitalize font-Inter font-medium text-[#D42620]">
          delete
        </span>
      </td>
    </tr>
  );
};
