import React from "react";
import HomeNavBar from "@/components/homeNavbar";
import FilterContainer from "./components/FilterContainer";
import CardContainer from "./components/CardContainer";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Footer from "@/components/Footer";
import PaginatedItem from "./components/PaginatedItem";

export default function page() {
  return (
    <main className="bg[white] text[black] containr mxauto p2 hscreen">
      <HomeNavBar />
      <FilterContainer />
      <div className="md:hidden ml-10">
        <Filter />
      </div>
      <CardContainer />
      <PaginatedItem />
      <Footer />
    </main>
  );
}
