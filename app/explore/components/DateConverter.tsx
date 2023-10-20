import React from "react";

type Props = {
  date: string;
};

export default function DateConverter({ date }: Props) {
  const parsedDate = new Date(date);

  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div>
      <p>Original Date: {date}</p>
      <p>FormattedDate: {formattedDate}</p>
    </div>
  );
}
