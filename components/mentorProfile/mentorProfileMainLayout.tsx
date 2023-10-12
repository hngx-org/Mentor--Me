import React from "react";

export default function MentorProfileMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-[100%] flex flex-col sm:flex-row px-5 sm:px-10 sm:space-x-10">
      <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
        {children}
      </div>
    </main>
  );
}
