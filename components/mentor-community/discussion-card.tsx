import Image, { StaticImageData } from "next/image";
import {
  CommentsIcon,
  ShareIcon,
} from "@/public/assets/Icons/mentor-communities";
import { Member } from "@/app/(mentor)/(dashboard-mentor)/mentor-community/data";

interface Props {
  image?: StaticImageData;
  author: Member;
  title: string;
  description: string;
  // comments?: number;
}

const DiscussionCard = ({ image, author, title, description }: Props) => (
  <div className="p-2 rounded-lg border-solid border-[1px] border-Neutra10 flex flex-col gap-3 md:flex-row md:gap-6 md:p-4">
    {/* Discussion image */}
    {image ? (
      <div className="rounded-lg overflow-hidden md:max-w-[18.4375rem]">
        <Image
          src={image!}
          alt={title}
          className="md:w-full md:h-full object-cover"
          placeholder="blur"
        />
      </div>
    ) : (
      ""
    )}
    {/* discussion details */}
    <div className="flex flex-col gap-2 md:justify-between">
      {/* author info */}
      <div className="flex gap-2">
        {/* Image */}
        <div className="self-start border-[3px] border-solid border-NeutalBase rounded-full overflow-hidden max-w-[2.3125rem]">
          {author.profilePhotoUrl ? (
            <Image
              src={author.profilePhotoUrl!}
              alt={author.name}
              className="w-full h-full object-cover aspect-square"
            />
          ) : (
            ""
          )}
        </div>
        {/* name */}
        <div className="flex flex-col gap-1">
          <span className="text-NeutalBase font-semibold font-Hanken">
            {author.name}
          </span>
          <span className="font-Hanken text-Neutra40 text-[.75rem]">
            {author.isMentor ? "Mentor" : "Student"}
          </span>
        </div>
      </div>
      {/* Discusion info */}
      <div className="flex flex-col gap-2">
        <h2 className="font-Hanken font-semibold md:text-[1.5rem]">{title}</h2>
        <p className="font-Hanken text-Neutra40 text-[.875rem] md:text[1.125rem]">
          {description}
        </p>
      </div>
      {/* Discussion actions */}
      <div className="flex gap-2 text-Accent1 font-Hanken text-[.875rem]">
        <button
          type="button"
          className="rounded-lg flex items-center gap-1 bg-Accent6 p-2"
        >
          <span>
            <CommentsIcon />
          </span>
          <span className="">14 Comments</span>
        </button>
        <button
          type="button"
          className="rounded-lg flex items-center gap-1 bg-Accent6 p-2"
        >
          <span>
            <ShareIcon />
          </span>
          <span>Share</span>
        </button>
      </div>
    </div>
  </div>
);

export default DiscussionCard;
