"use client";

import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import SearchBox from "./SearchBox";
import ShowAvailMentor from "./ShowAvailMentor";
import Filter from "./Filter";
import Card from "./Card";
import Pagination from "./Pagination";
import formatDate from "@/lib/formDate";

export default function FilterContainer() {
  interface CardProps {
    id?: string;
    title: string;
    content?: string;
    time?: string;
    firstname: string;
    lastname: string;
    date?: string;
    topic?: string;
    review?: string;
    contentImage: string;
    timezone: string;
    nextAvailable: string;
    pricing: string;
  }

  // For search Filter
  const [searchResults, setSearchResults] = useState<CardProps[]>([]);

  const [filteredResults, setFilteredResults] = useState<CardProps[]>([]);

  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);

  // For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  // Get current page
  const indexOfLastCard = currentPage * postsPerPage;
  const indexOfFirstCard = indexOfLastCard - postsPerPage;
  const currentCard = filteredResults.slice(indexOfFirstCard, indexOfLastCard); // After paginated
  const totalPages = filteredResults.length;

  // For toogle switch
  const [enabled, setEnabled] = useState(true);
  const handleToggle = (isEnabled: boolean) => {
    setEnabled(isEnabled);
  };

  // For filter
  const [selectedDate, setSelectedDate] = useState<Date | any>("2023-10-21");
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  // For range slider
  const [value, setValue] = useState<number>(10);

  useEffect(() => {
    fetch("https://cardbackendhngx.onrender.com/api/get_data")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Remove later
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= Math.ceil(totalPages / postsPerPage)) {
      setCurrentPage(page);
    }
    console.log(currentPage);
    // You can add logic here to fetch data for the new page if needed.
  };

  // SelectedDate
  const dateString = selectedDate;
  // console.log(dateString);

  // Date from api
  const originalDate = new Date(selectedDate);

  // Format the Date object into "YYYY-MM-DD" format COMMENTED THIS OUT COS OF ERROR
  const formattedDate = format(originalDate, "yyyy-MM-dd");
  // const formattedDate = originalDate.toISOString().split("T")[0];
  // console.log(formattedDate);

  // handle filter

  const handleFilter = () => {
    const filtered = cards.filter(
      (card) =>
        card.timezone.toLowerCase().includes(selectedTimeZone.toLowerCase()) &&
        card.pricing.includes(value.toString()) &&
        card.nextAvailable === formattedDate
      // && card.nextAvailable === formattedDate
    );
    setFilteredResults(filtered);
    // console.log(filtered);
    // console.log(formattedDate);
    // console.log({
    //   date: dateString,
    //   price: value,
    //   timezone: selectedTimeZone,
    // });
  };

  const handleReset = () => {
    setFilteredResults(cards);
  };
  // console.log(filteredResults);

  return (
    <>
      <div className="container mx-auto mt-5 mt24 px-4 py-8">
        <div className="bg bg-Neutral60 rounded-[5px] px-6 py-4 space-y-5 lg:py-8">
          {/* All */}
          {/* Search for mobile */}
          <div className=" space-y-5 lg:space-y-0 lg:space-x-5 lg:flex md:justify-center md:items-center">
            <SearchBox
              cards={cards}
              setSearchResults={setSearchResults}
              filteredResults={filteredResults}
              setFilteredResults={setFilteredResults}
              value={value}
              setValue={setValue}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              onSubmit={handleFilter}
              onReset={handleReset}
            />
            {/* <SearchBox /> */}
            <div>
              <ShowAvailMentor enabled={enabled} onChange={handleToggle} />
            </div>
            <div className="hidden lg:flex">
              <Filter
                selectedTimeZone={selectedTimeZone}
                setSelectedTimeZone={setSelectedTimeZone}
                value={value}
                setValue={setValue}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onSubmit={handleFilter}
                onReset={handleReset}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-5">
        {/* searchResult={searchResults} */}
        {/* <Card filteredResults={filteredResults} loading={loading} /> */}
        <Card filteredResults={currentCard} loading={loading} />
      </div>
      {/* <Card searchResult={searchResults} loading={loading} /> */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        postsPerPage={postsPerPage}
        onPageChange={handlePageChange}
        loading={loading}
      />
    </>
  );
}
