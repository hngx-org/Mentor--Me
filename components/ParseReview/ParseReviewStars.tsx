import { FilledStarICon, UnfilledStarIcon } from "@/public/SVGs";
import { ReactNode } from "react";

export default function ParseReviewStars({ review }: { review: number }) {
  const stars: ReactNode[] = [];
  for (let i = 0; i <= 5; i++) {
    if (i <= review) {
      stars.push(<FilledStarICon />);
    } else {
      stars.push(<UnfilledStarIcon />);
    }
  }
  console.log(stars);
  return <div className="flex w-fit">{stars.map((item) => item)}</div>;
}
