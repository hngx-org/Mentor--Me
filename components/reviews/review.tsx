import Image from "next/image";
import Image1 from "../../public/assets/images/mentee-review-screen/Image (1).png";
import { IReview } from "@/lib/constants/constants";

const ItemComponent = ({
  date,
  comment,
  qualities,
  avatar,
  name,
  track,
  role,
}: IReview) => (
  <div className="flex p-[15px] xl:p-[17px] md:p-6 flex-col justify-center w-full md:max-w-[545px] items-start    gap-8  rounded-[8px] border border-Neutra20 ">
    <div className="flex flex-col  sm:max-w-[620px] w-full   text-left gap-4">
      <p className="text-Neutra40 font-Inter text-[14px] font-medium ">
        {date}
      </p>
      <p className="text-Neutra40 font-Hanken text-sm sm:text-[16px]  font-normal ">
        {comment}
      </p>
    </div>
    <div className="flex w-full flex-wrap items-start gap-4">
      {qualities?.map((quality) => (
        <div
          key={quality}
          className="flex w-full py-2 sm:max-w-[210px]  font-semibold p-[3.625px] justify-center items-center  rounded-[8px] border border-Neutra20"
        >
          {quality}
        </div>
      ))}
    </div>
    <div className="flex justify-between w-full">
      <div className="flex flex-row justify-center w-[171px] h-[42px] items-center gap-x-[8px]">
        <Image src={Image1} width={300} height={200} alt="avatar" />
        <div className="flex flex-col items-center">
          <p className="text-Neutral60 w-[123px] h-[20px] font-Inter text-[14px] font-semibold leading-[145%]">
            {name}
          </p>
          <p className="text-Accent1 w-[123px] h-[20px] font-Hanken text-[14px] font-normal leading-[145%]">
            {track}
          </p>
        </div>
      </div>
      <p className="w-[54px] h-[20px] text-Neutral60 justify-center font-Inter text-[14px] font-semibold ">
        {role}
      </p>
    </div>
  </div>
);

export default ItemComponent;
