import { Metadata } from "next";
import MessagesLayout from "@/components/mentee-messages/layout/MessagesLayout";

// either Static metadata
export const metadata: Metadata = {
  title: "Mentee Messages",
};
export default function MenteeMessages() {
  return (
    <div>
      <MessagesLayout />
    </div>
  );
}
