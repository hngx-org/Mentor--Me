/* eslint-disable react/button-has-type */

import Image, { StaticImageData } from "next/image";

import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  className?: ButtonHTMLAttributes<HTMLButtonElement>["className"];
  variant: "primary" | "secondary";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  icon?: string | StaticImageData;
  title?: string;
  iconHeight?: number;
  iconWidth?: number;
  alt?: string;
  titleClassName?: ButtonHTMLAttributes<HTMLSpanElement>["className"];
  onclick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
};

const getVariant = (variant = "primary"): string => {
  switch (variant) {
    case "primary":
      return "bg-[#121212]  text-white  text-[16px] font-[500]     rounded-[6px] sm:rounded-[8px] hover:bg-[#2A2A2A]  font-Inter";

    case "secondary":
      return "bg-[#FFF]  text-black text-[16px] font-[500]  border-[1.5px]  border-[#121212]  rounded-[6px] sm:rounded-[8px]    font-Inter hover:opacity-80";

    default:
      return "bg-[#121212]-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
  }
};

export default function Button({
  className,
  variant,
  type,
  icon,
  iconHeight,
  iconWidth,
  alt,
  title,
  titleClassName,
  onclick,
  fullWidth,
  disabled,
  loading = false,
}: ButtonProps) {
  return (
    <button
      type={type || "button"}
      className={`${getVariant(variant)}
					
				 ${className} flex items-center justify-center gap-2 ${
           fullWidth ? "!w-full" : "xl:max-w-[140px]"
         }  ${(disabled || loading) && "opacity-60  cursor-not-allowed"}`}
      onClick={onclick}
    >
      {icon && (
        <Image
          src={icon}
          alt={alt || "icon"}
          width={iconWidth || 25}
          height={iconHeight || 25}
        />
      )}
      <span className={`${titleClassName}`}>{title}</span>
    </button>
  );
}
