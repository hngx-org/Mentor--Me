import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  IsVerifiedIcon,
  ClockIcon,
  CalendarIcon,
} from "@/public/assets/icons/communities";

interface Props {
  sessionImg: StaticImageData;
  pfp: StaticImageData;
  name: string;
  about: string;
  // datePublished?: string;
  title: string;
  description: string;
}

const MentorshipSessionCard = ({
  pfp,
  name,
  about,
  title,
  description,
  sessionImg,
}: Props) => (
  <div className="h-full max-w-[20.625rem] border-[1px] border-solid border-Neutra20 overflow-hidden rounded-lg md:max-w-[18.625rem] flex flex-col">
    {/* Image */}
    <div className="h-[11.4375rem] w-full">
      <Image
        src={sessionImg}
        alt="Session"
        className="object-cover h-full w-full"
        placeholder="blur"
      />
    </div>
    {/* Description */}
    <div className="flex flex-col justify-between gap-3 p-4 grow">
      {/* Details */}
      <div className="flex flex-col gap-2">
        {/* Info */}
        <div className="flex gap-1">
          {/* Profile Photo */}
          <div className="max-w-[1.75rem] self-start overflow-hidden border-[3px] border-solid border-NeutalBase rounded-full ">
            <Image
              src={pfp}
              alt="Mentor"
              className="object-cover aspect-square"
            />
          </div>
          {/* Info */}
          <div className="flex flex-col justify-between">
            {/* name */}
            <div className="flex gap-2">
              <h3 className="text-[.75rem] md:text-[1.125rem] leading-[1] font-semibold font-Hanken">
                {name}
              </h3>
              <div className=" w-[0.75rem] h-[0.75rem] md:w-[1.5rem] md:h-[1.5rem] self-start">
                <IsVerifiedIcon />
              </div>
            </div>
            {/* about */}
            <span className="text-[.625rem] md:text-[0.75rem] leading-[1] text-Neutra30 inline-block font-Hanken">
              {about}
            </span>
          </div>
        </div>
        {/* Date published */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[.75rem] font-Hanken">
            {/* <Image
                  src="/assets/Icons/verified.svg"
                  alt="Verified"
                  width={} */}
            <CalendarIcon />
            <span>28th Sept</span>
          </span>
          <span className="flex items-center gap-1 text-[.75rem] font-Hanken">
            <ClockIcon />
            <span>12:30pm</span>
          </span>
        </div>
        {/* Title and description */}
        <div className="font-Hanken flex flex-col gap-2">
          <h2 className="font-semibold text-NeutalBase text-[1.125rem] leading-[1.5] line-clamp-2">
            {title}
          </h2>
          <p className="text-[.75rem] text-Neutra40 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
      <hr className="border-solid border-Neutra10" />
      <Link
        href="#"
        className="justify-self-end border-solid border-[1px] px-4 py-2 border-NeutalBase rounded-lg font-medium font-Inter text-center text-xs md:text-base"
      >
        Join Classroom
      </Link>
    </div>
  </div>
);
export default MentorshipSessionCard;
