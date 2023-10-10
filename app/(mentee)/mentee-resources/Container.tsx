import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <section className="relative w-full mx-auto">{children}</section>;
}
