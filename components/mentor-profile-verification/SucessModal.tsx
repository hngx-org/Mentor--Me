import Image from "next/image";
import React from "react";

interface SucessModalProps {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  iconSrc?: string;
  iconAlt?: string;
  title: string;
  message: string;
  buttonText: string;
}

export default function SucessModal({
  handleClose,
  iconSrc,
  iconAlt,
  title,
  message,
  buttonText,
}: SucessModalProps) {
  const messageParagraphs = message.split("\n");
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px]">
        <div className="bg-white px-10 py-16 rounded-md flex flex-col justify-center items-center">
          {iconSrc && iconAlt && <Image src={iconSrc} alt={iconAlt} />}

          <p className="text-center font-Inter font-[500] text-[24px] text-Success50">
            {title}
          </p>
          {messageParagraphs.map((paragraph) => (
            <p
              key={`paragraph-${paragraph.substring(0, 3)}`}
              className="text-center font-Hanken font-[400] text-[18px] text-NeutralBase"
            >
              {paragraph}
            </p>
          ))}

          <button
            type="button"
            className="mt-5 w-full bg-NeutalBase text-white py-3 rounded-md text-center font-Inter font-[500] text-[16px]"
            onClick={handleClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
