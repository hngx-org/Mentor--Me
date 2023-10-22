import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { EmptyStarIcon, FilledStarIcon } from "@/public/SVGs";

interface Card {
  id: number;
  src: StaticImageData;
  title: string;
  price: string;
  author: string;
  ratings: number;
  reviews: number;
}

const ResourceCard = ({
  id,
  src,
  title,
  price,
  author,
  ratings,
  reviews,
}: Card) => (
  <div className="w-full max-w-[397px] flex flex-col justify-between gap-4 items-center rounded-lg shadow-md flex-shrink-0">
    <Image
      src={src}
      alt={title}
      width={398}
      height={167}
      className="w-full h-[167px]"
    />
    <div className="w-full px-3 flex flex-col gap-4">
      <div>
        <h1 className="font-Inter text-lg font-medium text-NeutalBase">
          {title}
        </h1>
        <p className="font-Hanken text-sm text-Neutra40">{author}</p>
      </div>
      <h1 className="font-Inter text-2xl font-medium text-NeutalBase">
        N{price}
      </h1>
      <div className="flex font-Hanken text-xs text-NeutalBase">
        {Array.from({ length: Math.min(ratings, 5) }, (_, index) => (
          <FilledStarIcon key={index} />
        ))}
        {Array.from({ length: Math.max(5 - ratings, 0) }, (_, index) => (
          <EmptyStarIcon key={index} />
        ))}
        <span className="mx-1">{ratings} | </span>
        <span> {reviews} reviews</span>
      </div>
      <div className="flex gap-4 mb-4">
        <Link href="/welcome/login">
          <button
            type="button"
            className="font-Inter w-[112px] text-white rounded-lg bg-NeutalBase h-10 mb-4"
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default ResourceCard;
