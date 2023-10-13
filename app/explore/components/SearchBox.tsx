import React from "react";
import Filter from "./Filter";

export default function SearchBox() {
  return (
    <div className="bg-white rounded-lg py-2 px-4 md:py-5 md:px-4 md:min-w-[375px] lg:min-w-[455px]">
      <div className="flex justify-between items-center">
        <span className=" mr-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.16797 0.666504C4.02583 0.666504 0.667969 4.02437 0.667969 8.1665C0.667969 12.3086 4.02583 15.6665 8.16797 15.6665C9.93881 15.6665 11.5663 15.0528 12.8494 14.0264L15.912 17.0891C16.2375 17.4145 16.7651 17.4145 17.0906 17.0891C17.416 16.7637 17.416 16.236 17.0906 15.9106L14.0279 12.8479C15.0542 11.5649 15.668 9.93735 15.668 8.1665C15.668 4.02437 12.3101 0.666504 8.16797 0.666504ZM2.33464 8.1665C2.33464 4.94484 4.94631 2.33317 8.16797 2.33317C11.3896 2.33317 14.0013 4.94484 14.0013 8.1665C14.0013 11.3882 11.3896 13.9998 8.16797 13.9998C4.94631 13.9998 2.33464 11.3882 2.33464 8.1665Z"
              fill="#818181"
            />
          </svg>
        </span>
        <input
          type="text"
          className="w[80%] w-full bg-transparent outline-none font-Inter font-normal text-sm text-[#101928]"
        />
        <div className="-mr5 ml-2 lg:hidden">
          <Filter />
        </div>
      </div>
    </div>
  );
}
