import React from "react";
import BigMentorShipList from "@/components/mentee-communities/BigMentorShipList";
import SearchCommunitySearchbar from "@/components/mentor-community/searchcommunity-searchbar";
import SearchMenteecommunity from "@/components/mentee-communities/SearchMenteecommunity";

const page = () => (
  <section className="lg:px-[24px]">
    <section className="pt-6 pb-10   w-full flex lg:block justify-center">
      <SearchMenteecommunity />
    </section>

    <BigMentorShipList />
  </section>
);

export default page;
