import React from "react";
import HomeNavBar from "@/components/HomeNavbar copy";
import FilterContainer from "./components/FilterContainer";
import CardContainer from "./components/CardContainer";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <main className="bg[white] text[black] container mx-auto p-2 hscreen">
      <HomeNavBar />
      <FilterContainer />
      <div className="md:hidden ml-10">
        <Filter />
      </div>
      <CardContainer />
      <Pagination />
      <Footer />
    </main>
  );
}