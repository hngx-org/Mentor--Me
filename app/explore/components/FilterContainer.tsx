"use client";

import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import SearchBox from "./SearchBox";
import ShowAvailMentor from "./ShowAvailMentor";
import Filter from "./Filter";
import Card from "./Card";

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
    contentImage?: string;
    timezone?: string;
    nextAvailable: string;
  }

  const [searchResults, setSearchResults] = useState<CardProps[]>([]);

  const [filteredResults, setFilteredResults] = useState<CardProps[]>([]);

  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cardbackendhngx.onrender.com/api/get_data")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(searchResults);

  return (
    <>
      <div className="container mx-auto mt-24 px-4 py-8">
        <div className="bg bg-Neutral60 rounded-[5px] px-6 py-4 space-y-5 lg:py-8">
          {/* All */}
          <div className="w[350px] flex items-center space-x-10 gap10 text-white overflow-x-auto lg:justify-center lg:space-x-16">
            <span className=" font-Inter font-medium text-base lg:text-lg">
              All
            </span>
            <span className="border-b[2px] border-white pb-[1px] font-Inter font-medium text-base lg:text-lg">
              Academic
            </span>
            <span className=" font-Inter font-medium text-base lg:text-lg">
              Finance
            </span>
            <span className=" font-Inter font-medium text-base lg:text-lg">
              Coaches
            </span>
            <div className=" font-Inter font-medium text-base lg:text-lg">
              Health Professionals
            </div>
            <span className=" font-Inter font-medium text-base lg:text-lg">
              Tech
            </span>
            <span className=" font-Inter font-medium text-base lg:text-lg">
              Other
            </span>
            <span className=" font-Inter font-medium text-base lg:text-lg">
              Marketing
            </span>
          </div>

          {/* Search for mobile */}
          {/* <Filter /> */}
          <div className=" space-y-5 lg:space-y-0 lg:space-x-5 lg:flex md:justify-center md:items-center">
            <SearchBox
              cards={cards}
              setSearchResults={setSearchResults}
              setFilteredResults={setFilteredResults}
            />
            {/* <SearchBox /> */}
            <div>
              <ShowAvailMentor />
            </div>
            <div className="hidden lg:flex">
              <Filter />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-5">
        {/* searchResult={searchResults} */}
        <Card filteredResults={filteredResults} loading={loading} />
      </div>
      {/* <Card searchResult={searchResults} loading={loading} /> */}
    </>
  );
}
