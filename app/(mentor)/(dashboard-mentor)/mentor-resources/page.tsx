import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@/public/SVGs";

const resources = Array(8).fill({
  title: "Collaboration in the workspace",
  description:
    "Working with a group of product team can be challenging. It is this essential that each team member works together to facilitate the production of functional and usable ...",
  resourceId: "my-resource",
  price: 14000,
  reviewCount: 429,
  stars: 4.5,
});

export default async function MentorResources() {
  const res = await fetch("https://hngmentorme.onrender.com/api/resources");
  const data = await res.json();

  return (
    <div className="bg-white p-4">
      <Link
        className="bg-[#121212] px-5 py-3 rounded-[6px] cursor-pointer text-white ml-auto mb-8 block w-max"
        href="/mentor-resources/upload"
      >
        Upload resource
      </Link>
      <div>
        <h2 className="capitalize text-[#1C0028] font-Inter font-medium text-2xl mb-4">
          new resources
        </h2>
        <div className="mentor-resources-scroll flex overflow-y-auto gap-4 pb-4">
          {resources.map((resource) => {
            const key = Math.random();
            return (
              <ResourceCard
                {...resource}
                key={key}
                previewImage="/assets/images/mentor-upload-resource/resource-card.jpg"
              />
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="capitalize text-[#1C0028] font-Inter font-medium text-2xl mb-4">
          top rated resources
        </h2>
        <div className="mentor-resources-scroll flex overflow-y-auto gap-4 pb-4">
          {resources.map((resource) => {
            const key = Math.random();
            return (
              <ResourceCard
                {...resource}
                key={key}
                previewImage="/assets/images/mentor-upload-resource/resource-card.jpg"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ResourceCard = ({
  title,
  description,
  resourceId,
  price,
  reviewCount = 0,
  stars = 0.0,
  previewImage,
}: {
  title: string;
  description: string;
  resourceId: string;
  price: number;
  reviewCount: number;
  stars: number;
  previewImage: string;
}) => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  const formattedPrice = new Intl.NumberFormat("en-US", options).format(price);
  return (
    <div className="w-[min(100%,_390px)] min-w-[327px] border-Neutra10 border-[1px] rounded-[8px] overflow-hidden shrink-0">
      <Image
        className="w-full aspect-[398/167] object-cover"
        width={398}
        height={167}
        src={previewImage}
        alt={title}
      />
      <div className="p-4">
        <h3 className=" text-NeutalBase font-Inter font-medium text-xl mb-2">
          {title}
        </h3>
        <p className="font-Hanken text-Neutra40 font-normal">{description}</p>
        <Link
          className="text-Accent1 font-Hanken capitalize cursor-pointer"
          href={`/mentor-resources/${resourceId}`}
        >
          view more
        </Link>
        <div className="font-Hanken font-normal text-NeutalBase flex items-center gap-4 my-2">
          <p className="flex items-center gap-3">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            {stars}
          </p>
          <div className="w-[1px] h-4 bg-NeutalBase" />
          <p>{reviewCount} reviews</p>
        </div>
        <p className="font-Hanken font-semibold text-NeutalBase text-xl">
          {formattedPrice}
        </p>
      </div>
    </div>
  );
};
