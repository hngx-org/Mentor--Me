/* eslint-disable jsx-a11y/media-has-caption */

import Link from "next/link";
import Image from "next/image";

import { StarIcon, UpdateIcon } from "@/public/SVGs";
import CourseContents from "./CourseContentDropDown";

export default async function Resource({
  params,
}: {
  params: { resourceId: string };
}) {
  const res = await fetch(
    `https://hngmentorme.onrender.com/api/resources/${params.resourceId}`
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  console.log(data);
  const resources = (
    data.courseContents as {
      _id: string;
      titlee: string;
      duration: number;
    }[]
  ).filter((content) => !!content.titlee);
  const resourcesShown = resources.slice(0, 3);
  const resourcesHidden = resources.slice(3);
  const totalTime = resources.reduce((prev, curr) => prev + curr.duration, 0);

  return (
    <div>
      <section className="bg-Neutral60 px-4 py-11 text-white font-Inter text-center">
        <h1 className="text-3xl font-medium capitalize">{data?.title}</h1>
        <p className="mt-5 mb-3 w-[min(600px,_100%)] mx-auto break-words">
          {data?.description}
        </p>
        <div className="flex items-center justify-center gap-3">
          <p className="flex items-center gap-1">
            {Array(5)
              .fill("")
              .map((_el, idx) => {
                const filled = idx + 1 <= +(data?.ratings || 0);
                const key = Math.random();
                return <StarIcon filled={filled} key={key} />;
              })}
            {+(data?.ratings || 0).toFixed(1)}
          </p>{" "}
          <div className="w-[1px] h-4 bg-white" />
          <p>{data?.reviews} reviews</p>
        </div>
        <p className="my-3">
          Created by{" "}
          <Link href="/mentor-profile" className="text-Accent2">
            {data?.name}
          </Link>{" "}
        </p>
        <p className="flex items-center gap-2 justify-center">
          <UpdateIcon />
          Last updated on {convertDateFormat(data?.createdAt)}
        </p>
      </section>
      <section className="p-4 md:gap-4 md:items-start md:justify-between md:grid md:grid-rows-[repeat(2,_auto)] md:grid-cols-[1fr_350px] lg:gap-6">
        <div className="grid grid-cols-[auto,_1fr,_,auto] grid-rows-[auto,_1fr] items-center gap-4 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2">
          <h2 className="text-NeutalBase font-medium text-2xl capitalize row-start-1 row-end-2 col-start-1 col-end-2">
            course content
          </h2>
          <p className="text-Neutra40 font-normal row-start-1 row-end-2 col-start-3 col-end-4">
            {resources.length} Lessons (
            {secondsToHoursMinutes(totalTime).trim()})
          </p>

          <CourseContents
            contentShown={resourcesShown}
            contentHidden={resourcesHidden}
          />
        </div>
        <div className="font-Hanken mt-4 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2">
          <h2 className="font-Inter text-NeutalBase font-medium text-2xl capitalize">
            instructor
          </h2>
          <div className="grid grid-rows-[repeat(2,_1fr)] grid-cols-[repeat(2,_max-content)] gap-x-2 mt-4 mb-3">
            <Image
              width={50}
              height={50}
              src="/assets/images/mentor-upload-resource/instructor.png"
              alt="Instructor"
              className="w-12 h-12 rounded-full row-span-full col-start-1 col-end-2"
            />
            <Link
              href="/mentor-profile"
              className="text-Accent1 row-start-1 row-end-2 col-start-2 col-end-3 w-max"
            >
              {data?.name}
            </Link>
            <p className="text-Neutra40 row-start-2 row-end-3 col-start-2 col-end-3 w-max">
              {data?.role} at {data?.company}
            </p>
          </div>
          <p className=" text-Neutra40">
            Dylan is a renowned researcher with over 20 years experience in
            designing customer centric products that align with business
            objectives. She is an award-winning visual designer with extensive
            experience in brand, digital and UX design. She enjoys breaking down
            complex ideas through visual storytelling. As a senior designer at
            Microsoft, Deb collaborates with product leaders to create engaging
            narratives that communicate value and business impact.{" "}
          </p>
        </div>
        <div className="w-[min(353px,_100%)] border-Neutra10 border-[1px] rounded-[6px] overflow-hidden mt-4 mx-auto md:row-span-full md:col-start-2 md:col-end-3 md:mt-2 md:mx-0">
          <div className="relative w-full border-b-[1px] border-Neutra10">
            <video
              controls
              className="w-full aspect-video object-cover object-center"
              src={data.videoUrl}
            />
          </div>
          <div className="p-4 pt-0">
            <p className="w-max font-Hanken text-NeutalBase font-semibold text-3xl my-4">
              {data.currency}
              {data.price}
            </p>
            <p className="w-max font-Inter text-NeutalBase font-medium text-lg">
              This course includes:
            </p>
            <ul className="w-max list-disc pl-6">
              <li className="w-max font-Henken font-normal list-disc">
                Accessible on mobile
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Closed Captions
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Private Slack Community
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Real time chat with instructor
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Flexible Learning
              </li>
              <li className="w-max font-Henken font-normal list-disc">
                Real time chat with instructor
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function convertDateFormat(dateString: string) {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because getMonth is 0-based
  const year = date.getFullYear().toString();
  return `${month}/${year}`;
}

function secondsToHoursMinutes(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  const formattedHours = hours > 0 ? `${hours}h ` : "";
  const formattedMinutes = minutes > 0 ? `${minutes}m` : "";

  return `${formattedHours}${formattedMinutes}`;
}
