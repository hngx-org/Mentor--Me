import React from "react";
import MobileSideBar from "@/components/MobileSideBar";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";
import MenteeNavBar from "@/components/menteeTopNav";
import Container from "./Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <MenteeSideBar />
      <MobileSideBar />

      <main className="lg:ml-[276px]">
        <MenteeNavBar />
        {children}
      </main>
    </Container>
  );
}
