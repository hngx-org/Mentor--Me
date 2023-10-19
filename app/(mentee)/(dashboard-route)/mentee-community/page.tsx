"use client";

import { useState } from "react";
import { DiscussionForums, MentorshipSessions } from "@/components/Community";
import SearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar";
import { discussionCommunities } from "./data";

export default function MenteeCommunitiesPage() {
  // set discussion data to a state
  const [discussionData, setDiscussionData] = useState(discussionCommunities);

  // filter part
  const [q, setQ] = useState("");

  const filterDiscussions = () => {
    if (q) {
      console.log("Search is on. Query: ", q);
      const filteredSliderInfo = discussionCommunities.filter((item) =>
        item.name.toLowerCase().includes(q.toLowerCase())
      );
      console.log("Filtered results: ", filteredSliderInfo);

      // Update the sliderInfo state with the filtered array
      setDiscussionData(filteredSliderInfo);
    } else {
      setDiscussionData(discussionCommunities);
    }
  };

  return (
    // Communities page main content
    <section className="w-full h-full">
      {/* Search Bar */}
      <section className="p-6 md:p-10">
        <SearchCommunitySearchbar
          q={q}
          setQ={setQ}
          filterDiscussions={filterDiscussions}
        />
      </section>
      {/* Discussion Forums */}
      <DiscussionForums
        discussionData={discussionData}
        setDiscussionData={setDiscussionData}
      />
      {/* Free mentorship sessions */}
      <MentorshipSessions />
    </section>
  );
}
