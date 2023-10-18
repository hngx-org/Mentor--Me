import React from "react";
import ForumsPage from "@/components/mentee-communities/ForumPage";
import SearchCommunitySearchbar from "@/components/mentor-community/searchcommunity-searchbar";
import SearchMenteecommunity from "@/components/mentee-communities/SearchMenteecommunity";

const page = () => (
  <section className="mb-10">
    <section className=" ml-6 py-8 lg:block hidden ">
      {" "}
      <SearchCommunitySearchbar />
    </section>
    <section className=" ml-6 py-8 lg:hidden flex justify-center">
      {" "}
      <SearchMenteecommunity />
    </section>

    <ForumsPage />
  </section>
);

export default page;
