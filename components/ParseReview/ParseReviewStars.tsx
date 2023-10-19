import { ReactNode } from "react";
import { FilledStarICon, UnfilledStarIcon } from "@/public/SVGs";

export default function ParseReviewStars({ review }: { review: number }) {
  const stars: ReactNode[] = [];
  for (let i = 0; i <= 5; i += 1) {
    if (i <= review) {
      stars.push(<FilledStarICon />);
    } else {
      stars.push(<UnfilledStarIcon />);
    }
  }
  return <div className="flex w-fit">{stars.map((item) => item)}</div>;
}
