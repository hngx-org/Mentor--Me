import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto">
      {children}
    </section>
  );
}
