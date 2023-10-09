import React, { ReactNode } from "react";
import { CloseIcon, ProfileImage } from "@/public";
import Image from "next/image";
import { EditIcon } from "@/public/SVGs";

type Props = {
    children?: ReactNode;
    onClose?: () => void;
};

const EditProfile: React.FC<Props> = ({ children, onClose }) => (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-end items-center  ">
        <div className="absolute w-[400px] lg:w-[600px] md:w-[500px] lg:h-full md:h-full h-full bg-white rounded-10 justify-center items-center overflow-y-scroll ">
            <button
                type="button"
                className=" flex mt-10 mb-10 md:ml-[380px] lg:ml-[500px] ml-[270px] border border-1 border-gray-400"
                onClick={() => onClose && onClose()}
            >
                <Image src={CloseIcon} width={30} height={30} alt="closeicon" />
            </button>
            <h1 className=" flex justify-center items-center font-Hanken text-24 font-semibold leading-6 text-Neutra50 mt-5 mb-12">
                Update your profile details
            </h1>
            <div className=" flex gap-6 justify-center items-center mb-10">
                <p className="text-18 font-Hanken font-normal leading-6 text-Neutra50 border-b-4 border-Accent1">
                    Basic info
                </p>
                <p className="text-18 font-Hanken font-normal leading-6 text-Neutra30">
                    Experience/ Certifications
                </p>
                <p className="text-18 font-Hanken font-normal leading-6 text-Neutra30">
                    Social Link
                </p>
            </div>
            <p className=" font-Inter text-18 font-medium leading-6 text-Neutra50 ml-20 mb-8">
                change profile hoto
            </p>

            <div className=" flex gap-3 items-center mb-10 ">
                <div className=" flex">
                    <Image
                        className=" border rounded-full ml-12 -bottom-28"
                        src={ProfileImage}
                        width={60}

                        alt="ths profileImage"
                    />
                    <EditIcon className=" rounded-lg bg-white -ml-4 mt-8 -bottom-20" />
                </div>
                <div>
                    <h4 className="font-Inter text-base font-medium text-Accent2">
                        uplode file
                    </h4>
                    <p className=" text-Neutra30 font-Inter text-sm">Make sure the file is below 2mb</p>
                </div>
            </div>
            <div className=" ml-10 lg:ml-20">

                <label className="">Your full name <span className=" text-red-600">*</span></label>
                <div className="w-72">
                    <div className="relative h-10 w-full min-w-[200px]">
                        <input
                            className="peer h-10 w-[320px] rounded-[7px] border border-Neutra10  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-Accent1 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-Neutra10 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-Accent1 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-Accent1 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-Accent1 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Shada Mayowa
                        </label>
                    </div>
                </div>

            </div>
            <div className=" ml-10 lg:ml-20 mt-6">

                <label className="">Gender<span className=" text-red-600">*</span></label>
                <div className="w-72">
                    <div className="relative h-10 w-full min-w-[200px]">
                        <input
                            className="peer h-10 w-[320px] rounded-[7px] border border-Neutra10  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-Accent1 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-Neutra10 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-Accent1 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-Accent1 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-Accent1 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Male
                        </label>
                    </div>
                </div>

            </div>
            <div className=" ml-10 lg:ml-20 mt-6">

                <label className="">Bio <span className=" text-red-600">*</span></label>
                <div className="w-72">
                    <div className="relative h-10 w-full min-w-[200px]">
                        <input
                            className="peer h-64 w-[320px] rounded-[7px] border border-Neutra10  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-Accent1 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-Neutra10 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-Accent1 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-Accent1 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-Accent1 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Write something
                        </label>
                    </div>
                </div>

            </div>
            {children}
        </div>
    </div>
);

export default EditProfile;
