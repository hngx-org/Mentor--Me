import React, { useState } from "react";
import HomeNavBar from "@/components/homeNavbar";
import FilterContainer from "./components/FilterContainer";
import CardContainer from "./components/CardContainer";
import Pagination from "./components/Pagination";
import Footer from "@/components/Footer";

export default function page() {
  // const [info, setInfo] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  return (
    <main className="bg[white] text[black] containr mxauto p2 hscreen">
      <HomeNavBar />
      <FilterContainer />
      {/* <CardContainer /> */}
      <Footer />
    </main>
  );
}
