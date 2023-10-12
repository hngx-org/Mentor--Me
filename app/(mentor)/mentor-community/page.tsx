import SearchCommunitySearchbar from "@/components/mentor-community/searchcommunity-searchbar";
import {
  DiscussionForums,
  MentorshipSessions,
} from "@/components/mentor-community";

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
