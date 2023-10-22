"use client";

import { useEffect, useState } from "react";
import { DiscussionForums, MentorshipSessions } from "@/components/Community";
import SearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar";
import { Community, discussionCommunities } from "./data";
import SecondSearchCommunitySearchbar from "@/components/Community/searchcommunity-searchbar2";
import ProtectedRoute from "@/context/ProtectedRoute";
import { getForums } from "@/lib/apiHelper";

export default function MenteeCommunitiesPage() {
  const [initialForums, setInitialForums] = useState([
    {
      slug: "",
      name: "",
      members: [],
      description: "",
      discussions: [],
    },
  ] as Community[]);

  const [discussionData, setDiscussionData] = useState([
    {
      slug: "",
      name: "",
      members: [],
      description: "",
      discussions: [],
    },
  ] as Community[]);

  useEffect(() => {
    getForums(setInitialForums);

    getForums(setDiscussionData);
  }, []);
  console.log(initialForums);

  // set discussion data to a state

  // filter part
  const [q, setQ] = useState("");

  const filterDiscussions = () => {
    if (q) {
      // console.log("Search is on. Query: ", q);
      const filteredSliderInfo = initialForums.filter((item) =>
        item.name.toLowerCase().includes(q.toLowerCase())
      );

      // Update the sliderInfo state with the filtered array
      setDiscussionData(filteredSliderInfo);
    } else {
      setDiscussionData(discussionCommunities);
    }
    // console.log(discussionData);
  };

  return (
    // Communities page main content
    <ProtectedRoute>
      <section className="w-full h-full">
        {/* Search Bar */}
        <section className="p-6 md:p-10">
          <SecondSearchCommunitySearchbar
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
    </ProtectedRoute>
  );
}
