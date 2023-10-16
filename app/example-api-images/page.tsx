import React, { Suspense } from "react";
import cloudinary from "cloudinary";
import Image from "next/image";
import Loading from "../(mentee)/(dashboard-route)/mentee-sessions/loading";

export type SearchResult = {
  public_id: string;
  url: string;
  filename: string;
};
cloudinary.v2.config({
  cloud_name: "dp5ysdt4c",
});
export default async function CloudinaryImages() {
  // folder images example
  // .expression("mentor-communities*")
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")

    .execute()) as { resources: SearchResult[] };
  console.log("=======================");
  console.log(results.resources);
  return results.resources ? (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full justify-center items-center mb-6">
        <p className="text-center my-8 font-bold text-3xl">
          Images from Cloudinary
        </p>
        <p>how to fetch cloudinary?</p>
        <p>
          check{" "}
          <span className="text-[#008080] bg-Accent1/10 rounded-full px-1">
            app/example-api-images
          </span>{" "}
          folder
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {results.resources.map((r) => (
          <Suspense fallback={<Loading />}>
            <div>
              <Image
                key={r.public_id}
                src={r.url}
                width={500}
                height={500}
                alt=""
                className=" object-contain rounded-xl"
              />
              <p>{r.filename}</p>
            </div>
          </Suspense>
        ))}
      </div>
    </div>
  ) : (
    <div>Something went wrong</div>
  );
}
