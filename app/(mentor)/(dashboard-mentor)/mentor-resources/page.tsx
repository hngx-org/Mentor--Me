import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@/public/SVGs";
import ProtectedRoute from "@/context/ProtectedRoute";

export default async function MentorResources() {
  const res = await fetch("https://hngmentorme.onrender.com/api/resources");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data: { createdAt: string; ratings: number }[] = await res.json();

  const recentResources = data
    ?.filter((resource) => {
      const timeDifference =
        new Date().getTime() - new Date(resource.createdAt).getTime();
      return timeDifference <= 604800000;
    })
    ?.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  const mostRatedResources = data
    ?.sort((a, b) => +b.ratings - +a.ratings)
    .slice(0, 20);

  return (
    <ProtectedRoute>
      <div className="bg-white p-4 pt-10">
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
            {recentResources.map((resource: any) => (
              <ResourceCard
                key={resource?._id}
                title={resource?.title}
                description={resource?.description}
                resourceId={resource?._id}
                price={resource?.price}
                reviewCount={resource?.reviews}
                stars={resource?.ratings}
                previewImage={
                  resource?.imageUrl?.includes("images.unsplash.com")
                    ? resource.imageUrl
                    : "/assets/images/mentor-upload-resource/resource-card.jpg"
                }
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="capitalize text-[#1C0028] font-Inter font-medium text-2xl mb-4">
            top rated resources
          </h2>
          <div className="mentor-resources-scroll flex overflow-y-auto gap-4 pb-4">
            {mostRatedResources.map((resource: any) => (
              <ResourceCard
                key={resource?._id}
                title={resource?.title}
                description={resource?.description}
                resourceId={resource?._id}
                price={resource?.price}
                reviewCount={resource?.reviews}
                stars={resource?.ratings}
                previewImage={
                  resource?.imageUrl?.includes("images.unsplash.com")
                    ? resource.imageUrl
                    : "/assets/images/mentor-upload-resource/resource-card.jpg"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
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
    <div className="w-[min(100%,_390px)] grid grid-rows-[auto,_1fr] min-w-[327px] border-Neutra10 border-[1px] rounded-[8px] overflow-hidden shrink-0">
      <Image
        className="w-full aspect-[398/167] object-cover"
        width={398}
        height={167}
        src={previewImage}
        alt={title}
      />

      <div className="p-4 grid grid-rows-[max-content,_1fr,_repeat(3,_max-content)]">
        <h3 className=" text-NeutalBase font-Inter capitalize font-medium text-xl mb-2">
          {title}
        </h3>
        <p className="font-Hanken text-Neutra40 font-normal resource-card-description">
          {description}
        </p>
        <Link
          className="text-Accent1 font-Hanken capitalize cursor-pointer mt-auto"
          href={`/mentor-resources/${resourceId}`}
        >
          view more
        </Link>
        <div className="font-Hanken font-normal text-NeutalBase flex items-center gap-4 my-2">
          <p className="flex items-center gap-3">
            {Array(5)
              .fill("")
              .map((_el, idx) => {
                const filled = idx + 1 <= +stars;
                const key = Math.random();
                return <StarIcon filled={filled} key={key} />;
              })}
            {(+stars).toFixed(1)}
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
