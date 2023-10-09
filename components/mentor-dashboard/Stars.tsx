import React from "react";
import { RatingStarFill, RatingStar } from "@/svgs/Mentor-dashboard-icons";

interface StarProps {
  rating: number;
}

const Stars = ({ rating }: StarProps) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating > number ? <RatingStarFill /> : <RatingStar />}
      </span>
    );
  });
  return <div className="flex">{tempStars}</div>;
};

export default Stars;
