import * as React from "react";
import { SVGProps } from "react";

export const RatingStarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M6 0L8.03951 3.68183L12 4.58359L9.3 7.76085L9.7082 12L6 10.2818L2.2918 12L2.7 7.76085L0 4.58359L3.96049 3.68183L6 0Z"
      fill="#FFCB45"
    />
  </svg>
);

export const RatingStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M6 0L8.03951 3.68183L12 4.58359L9.3 7.76085L9.7082 12L6 10.2818L2.2918 12L2.7 7.76085L0 4.58359L3.96049 3.68183L6 0Z"
      fill="#CCCCCC"
    />
  </svg>
);

export const ShortArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25ZM12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25Z"
      fill="#ABABAB"
    />
    <path
      d="M13.2603 7.71984C13.4503 7.71984 13.6403 7.78984 13.7903 7.93984C14.0803 8.22984 14.0803 8.70984 13.7903 8.99984L10.7903 11.9998L13.7903 14.9998C14.0803 15.2898 14.0803 15.7698 13.7903 16.0598C13.5003 16.3498 13.0203 16.3498 12.7303 16.0598L9.20031 12.5298C8.91031 12.2398 8.91031 11.7598 9.20031 11.4698L12.7303 7.93984C12.8803 7.78984 13.0703 7.71984 13.2603 7.71984Z"
      fill="#ABABAB"
    />
  </svg>
);

export const ShortArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
      fill="#2A2A2A"
    />
    <path
      d="M10.7397 16.2802C10.5497 16.2802 10.3597 16.2102 10.2097 16.0602C9.91969 15.7702 9.91969 15.2902 10.2097 15.0002L13.2097 12.0002L10.2097 9.00016C9.91969 8.71016 9.91969 8.23016 10.2097 7.94016C10.4997 7.65016 10.9797 7.65016 11.2697 7.94016L14.7997 11.4702C15.0897 11.7602 15.0897 12.2402 14.7997 12.5302L11.2697 16.0602C11.1197 16.2102 10.9297 16.2802 10.7397 16.2802Z"
      fill="#292D32"
    />
  </svg>
);

export const closeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.16992 15.3299L14.8299 9.66992"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8299 15.3299L9.16992 9.66992"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.16602 0.666992C4.02388 0.666992 0.666016 4.02486 0.666016 8.16699C0.666016 12.3091 4.02388 15.667 8.16602 15.667C9.93686 15.667 11.5644 15.0533 12.8474 14.0269L15.9101 17.0896C16.2355 17.415 16.7632 17.415 17.0886 17.0896C17.414 16.7641 17.414 16.2365 17.0886 15.9111L14.0259 12.8484C15.0523 11.5653 15.666 9.93784 15.666 8.16699C15.666 4.02486 12.3082 0.666992 8.16602 0.666992ZM2.33268 8.16699C2.33268 4.94533 4.94436 2.33366 8.16602 2.33366C11.3877 2.33366 13.9993 4.94533 13.9993 8.16699C13.9993 11.3887 11.3877 14.0003 8.16602 14.0003C4.94436 14.0003 2.33268 11.3887 2.33268 8.16699Z"
      fill="#CCCCCC"
    />
  </svg>
);

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.50065 1.75H15.5007C16.4173 1.75 17.1673 2.5 17.1673 3.41667V5.25C17.1673 5.91667 16.7507 6.75 16.334 7.16667L12.7507 10.3333C12.2507 10.75 11.9173 11.5833 11.9173 12.25V15.8333C11.9173 16.3333 11.584 17 11.1673 17.25L10.0007 18C8.91732 18.6667 7.41732 17.9167 7.41732 16.5833V12.1667C7.41732 11.5833 7.08398 10.8333 6.75065 10.4167L3.58398 7.08333C3.16732 6.66667 2.83398 5.91667 2.83398 5.41667V3.5C2.83398 2.5 3.58398 1.75 4.50065 1.75Z"
      stroke="#CCCCCC"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.10833 1.75L5 8.33333"
      stroke="#CCCCCC"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
