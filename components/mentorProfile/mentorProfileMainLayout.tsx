import React from "react";

export default function MentorProfileMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-[100%] flex flex-col sm:flex-row px-5 sm:px-10 space-x-5">
      <div className="w-[50%]">
        {children && children[0 as keyof typeof children]}
      </div>
      <div className="w-[50%]">
        {children && children[1 as keyof typeof children]}
      </div>
    </main>
  );
}
