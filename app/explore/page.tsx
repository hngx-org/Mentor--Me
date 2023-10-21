import React, { useState } from "react";
import HomeNavBar from "@/components/homeNavbar";
import FilterContainer from "./components/FilterContainer";
import Pagination from "./components/Pagination";
import Footer from "@/components/Footer";
import DateConverter from "./components/DateConverter";

export default function page() {
  // const [info, setInfo] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  // const originalDate =
  //   "Mon Oct 16 2023 00:00:00 GMT+0100 (West Africa Standard Time)";

  return (
    <main className="bg[white] text[black] containr mxauto p2 hscreen">
      <HomeNavBar />
      <FilterContainer />
      {/* <DateConverter date={originalDate} /> */}
      <Footer />
    </main>
  );
}
