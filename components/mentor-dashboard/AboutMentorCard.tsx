import Image, { StaticImageData } from "next/image";
import Stars from "./Stars";

type aboutCardType = {
  type: string;
  img: StaticImageData;
  subject: string;
  info: string;
  rating: number;
  review: number;
};

const AboutMentorCard = ({
  type,
  img,
  subject,
  info,
  rating,
  review,
}: aboutCardType) => (
  <div className="flex-1 border border-Neutra10 rounded-[10px] lg:min-w-[250px] min-w-[300px]">
    <Image width={500} height={150} src={img} alt="article image" />
    <div className="p-3 flex flex-col gap-1">
      <h5 className="font-semibold text-sm font-Hanken"> {type}</h5>
      <p className="text-[#008080]">{subject}</p>
      <p className="text-Neutra40 font-normal font-Hanken text-sm">{info}</p>
      <div className="text-sm text-Neutral60 flex items-center gap-2">
        <Stars rating={rating} />
        <div>
          <span>{rating} </span>|<span> {review} reviews</span>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMentorCard;
