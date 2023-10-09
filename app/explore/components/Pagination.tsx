import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center mb-20 mt-10 ">
      <div className="flex items-center gap-4 lg:gap-8 rounded-[40px] border-[0.2px] border-Neutra40 px-2 py-2">
        <button type="button">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 55C16.225 55 5 43.775 5 30C5 16.225 16.225 5 30 5C43.775 5 55 16.225 55 30C55 43.775 43.775 55 30 55ZM34.475 22.5C35.2 21.775 35.2 20.575 34.475 19.85C34.1 19.475 33.625 19.3 33.15 19.3C32.675 19.3 32.2 19.475 31.825 19.85L23 28.675C22.275 29.4 22.275 30.6 23 31.325L31.825 40.15C32.55 40.875 33.75 40.875 34.475 40.15C35.2 39.425 35.2 38.225 34.475 37.5L26.975 30L34.475 22.5Z"
              fill="#818181"
            />
          </svg>
        </button>
        <button
          type="button"
          className=" font-Inter text-base lg:text-lg font-medium"
        >
          Prev
        </button>
        <div className="flex items-center gap-3 lg:gap-8">
          <span className=" cursor-pointer">1</span>
          <span className=" font-bold cursor-pointer md:bg-Accent1 px-2 py-2 md:px-4 md:py-2 md:text-white rounded-[9999999px]">
            2
          </span>
          <span className="hidden lg:flex cursor-pointer">3</span>
          <span className="hidden lg:flex cursor-pointer">4</span>
          <span className=" cursor-pointer">...</span>
          <span className=" cursor-pointer">10</span>
        </div>
        <button type="button" className=" font-Inter lg:text-lg font-medium">
          Next
        </button>
        <button type="button">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 55C43.775 55 55 43.775 55 30C55 16.225 43.775 5 30 5C16.225 5 5 16.225 5 30C5 43.775 16.225 55 30 55ZM25.525 22.5C24.8 21.775 24.8 20.575 25.525 19.85C25.9 19.475 26.375 19.3 26.85 19.3C27.325 19.3 27.8 19.475 28.175 19.85L37 28.675C37.725 29.4 37.725 30.6 37 31.325L28.175 40.15C27.45 40.875 26.25 40.875 25.525 40.15C24.8 39.425 24.8 38.225 25.525 37.5L33.025 30L25.525 22.5Z"
              fill="#2A2A2A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
