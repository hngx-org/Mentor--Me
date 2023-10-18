"use client";

import React, { useState } from "react";
import FilterContainer from "./components/FilterContainer";
// import CardContainer from "./components/CardContainer";
// import Pagination from "./components/Pagination";
import PaginatedItem from "./components/PaginatedItem";
import { Footer } from "@/components";

export default function page() {
  // const [info, setInfo] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  return (
    <main className="bg[white] text[black] containr mxauto p2 hscreen">
      <FilterContainer />
      {/* <CardContainer /> */}
      <PaginatedItem />
      <Footer />
    </main>
  );
}
