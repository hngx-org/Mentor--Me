import Image from "next/image";
import Link from "next/link";
import { Discussion, Member } from "@/app/(mentor)/mentor-community/data";

interface Props {
  slug: string;
  name: string;
  members: Member[];
  description: string;
  //   discussions: Discussion[];
}

export type CommunityDiscussions = {
  name: string;
  members: Member[];
  description: string;
  discussions: Discussion[];
};

const CommunityCard = ({ name, members, description, slug }: Props) => {
  const noOfMembers = members.length.toString();
  const membersPhoto = members.slice(0, 3);

  return (
    <div className="flex flex-col gap-4 justify-between max-w-[18.4375rem] border-[1px] border-solid border-Neutra10 rounded-lg p-6 shrink-0">
      <h3 className="text-sm font-medium md:text-2xl md:font-semibold font-Inter md:font-Hanken text-NeutalBase">
        {name}
      </h3>
      <div className="flex gap-2">
        {/* Member pictures */}
        <div className="flex items-center">
          {/* iamge */}
          {membersPhoto.map((member, idx) => (
            <div
              className={`w-[1.5rem] border-solid rounded-full overflow-hidden border-2 border-NeutalBase relative ${
                idx === 1 ? "right-3" : idx === 2 ? "right-6" : ""
              } ${idx === 1 ? "-z-10" : idx === 2 ? "-z-20" : ""}`}
              key={member.name}
            >
              <Image
                src={
                  member.profilePhotoUrl !== undefined // could simply use non-null assertion operator but this is safer
                    ? member.profilePhotoUrl
                    : ""
                }
                className="object-cover aspect-square"
                alt="Member"
              />
            </div>
          ))}
        </div>
        {/* Member count */}
        <span className="text-[0.625rem] md:text-base relative font-medium underline text-Accent1 font-Hanken right-7">
          {noOfMembers} members
        </span>
      </div>
      <p className="text-xs md:text-[1.125rem] font-Hanken text-Neutral60 leading-[1.3]">
        {description}
      </p>
      <Link
        href={`/mentor-community/${slug}`}
        className="text-xs text-center md:text-base border-solid border-[1px] p-4 md:py-5 md:px-10 w-full md:w-fit mx-auto border-NeutalBase rounded-lg font-medium font-Inter"
      >
        Join Discussion
      </Link>
    </div>
  );
};

export default CommunityCard;
