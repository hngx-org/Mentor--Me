"use client";

import { DiscussionForums, MentorshipSessions } from "@/components/Community";
import SearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar";

export default function MenteeCommunitiesPage() {
  return (
    // Communities page main content
    <section className="w-full h-full">
      {/* Search Bar */}
      <section className="p-6 md:p-10">
        <SearchCommunitySearchbar />
      </section>
      {/* Discussion Forums */}
      <DiscussionForums />
      {/* Free mentorship sessions */}
      <MentorshipSessions />
    </section>
  );
}
