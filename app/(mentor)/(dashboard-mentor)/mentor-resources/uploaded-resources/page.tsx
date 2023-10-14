"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
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
  const [deletingResource, setDeletingResource] = useState({
    resourceName: "",
    resourceId: "",
  });

  return (
    <div className="bg-[#FBFBFB] p-4">
      {deletingResource.resourceName ? (
        <div className="fixed inset-0 bg-[rgba(0,_0,_0,_0.2)] backdrop-blur-sm z-30 grid grid-cols-[450px] place-content-center">
          <DeleteModal
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
                <EllipsisIcon className="ml-auto cursor-pointer" />
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
          <Course
            isAllSelected={isAllSelected}
            id="1"
            title="C== for Beginners"
            setDeletingResource={setDeletingResource}
          />
          <Course
            isAllSelected={isAllSelected}
            id="2"
            title="C== for Beginners"
            setDeletingResource={setDeletingResource}
          />
          <Course
            isAllSelected={isAllSelected}
            id="3"
            title="C== for Beginners"
            setDeletingResource={setDeletingResource}
          />
          <Course
            isAllSelected={isAllSelected}
            id="4"
            title="C== for Beginners"
            setDeletingResource={setDeletingResource}
          />
          <Course
            isAllSelected={isAllSelected}
            id="5"
            title="C== for Beginners"
            setDeletingResource={setDeletingResource}
          />
          <Course
            isAllSelected={isAllSelected}
            id="6"
            title="C== for Beginners"
            setDeletingResource={setDeletingResource}
          />
        </tbody>
        <tfoot className="bg-white">
          <tr>
            <td colSpan={3} className="p-0">
              <div className="py-6 px-4 border-[#EAEBF0] border-[1px] border-t-0 rounded-b-[8px] flex align-center justify-between font-Inter font-medium">
                <p className="flex items-center gap-4 cursor-pointer">
                  <ArrowIcon />
                  Prev
                </p>
                <p className="flex items-center gap-4 font-Inter font-medium text-[#5F6D7E]">
                  <span className="cursor-pointer">1</span>
                  <span className="cursor-pointer">2</span>
                  <EllipsisIcon className="cursor-pointer" />
                  <span className="cursor-pointer text-[#437EF7]">5</span>
                  <span className="cursor-pointer">6</span>
                </p>
                <p className="flex flex-row-reverse items-center gap-4 cursor-pointer">
                  <ArrowIcon className=" rotate-180" />
                  Next
                </p>
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
      <td className="py-5 px-4 font-Inter font-medium text-[#2A2A2A]">Free</td>
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
