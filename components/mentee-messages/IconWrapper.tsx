import React from "react";

export default function IconWrapper({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return <span className={`  h-fit w-fit  block  ${styles}`}>{children}</span>;
}
