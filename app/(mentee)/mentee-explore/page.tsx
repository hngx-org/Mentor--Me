"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { resourceLinks } from "./constants";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { BackwardIcon, ForwardIcon } from "@/public/SVGs";
import ResourceOne from "@/public/assets/resource_one.png";
import ResourceTwo from "@/public/assets/resource_two.png";
import ResourceCard from "./ResourceCard";
import Container from "../(dashboard-route)/mentee-resources/Container";
import HomeNavBar from "@/components/homeNavbar";

const Explore = () => {
  const resourceContainerRef = useRef<HTMLDivElement | null>(null);
  const resourceContainerRef2 = useRef<HTMLDivElement | null>(null);
  const [activeLink, setActiveLink] = useState<number | null>(1);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getResources = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetch(
        "https://hngmentorme.onrender.com/api/resources"
      );
      const resultData = await result.json();
      console.log(resultData);
      setData(resultData);
    } catch (error) {
      const { message } = error as { message: string };
      setError(`An error occurred. Please try again. ${message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getResources();
  }, []);

  const handleLinkClick = (id: number) => {
    setActiveLink(id);
  };

  const scrollLeft = () => {
    if (resourceContainerRef.current) {
      resourceContainerRef.current.scrollLeft -= 50;
    }
  };

  const scrollRight = () => {
    if (resourceContainerRef.current) {
      resourceContainerRef.current.scrollLeft += 50;
    }
  };
  const scrollLeft2 = () => {
    if (resourceContainerRef2.current) {
      resourceContainerRef2.current.scrollLeft -= 50;
    }
  };

  const scrollRight2 = () => {
    if (resourceContainerRef2.current) {
      resourceContainerRef2.current.scrollLeft += 50;
    }
  };
  return (
    <>
      <HomeNavBar />
      <Container>
        <div className="w-full p-6 pb-20 overflow-hidden max-w-[1280px] mx-auto mt-[100px]">
          <div className="flex gap-3 md:gap-[60px] mb-6">
            {resourceLinks.map((link) => (
              <Link
                key={link.id}
                href={link.to}
                onClick={() => handleLinkClick(link.id)}
                className={`font-Hanken text-[1rem] lg:text-lg ${
                  link.id === activeLink
                    ? "text-NeutalBase border-b-[4px] border-Accent1"
                    : "text-Neutra30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <div className="w-full flex justify-between items-center mb-6">
              <h1 className="font-Inter text-2xl text-[#1C0028]">
                New Resources
              </h1>
              <div className="flex gap-4">
                <button title="btn" type="button" onClick={scrollLeft}>
                  <BackwardIcon />
                </button>
                <button title="btn" type="button" onClick={scrollRight}>
                  <ForwardIcon />
                </button>
              </div>
            </div>
            <div
              ref={resourceContainerRef}
              className="flex gap-6 w-full 
          overflow-scroll scroll-smooth"
            >
              {loading ? (
                <div className="w-full flex justify-center items-center">
                  <LoadingSpinner />
                </div>
              ) : (
                data?.map((res: any, i: number) => (
                  <ResourceCard
                    key={res._id}
                    id={res._id}
                    src={i % 2 ? ResourceTwo : ResourceOne}
                    title={res.title}
                    author={`${res.name} | ${res.role}, ${res.company}`}
                    price={res.price}
                    reviews={res.reviews}
                    ratings={res.ratings}
                  />
                ))
              )}
            </div>
          </div>
          <div className="mt-[56px] mb-10">
            <div className="w-full flex justify-between items-center mb-6">
              <h1 className="font-Inter text-2xl text-[#1C0028]">
                Top Rated Resources
              </h1>
              <div className="flex gap-4">
                <button title="btn" type="button" onClick={scrollLeft2}>
                  <BackwardIcon />
                </button>
                <button title="btn" type="button" onClick={scrollRight2}>
                  <ForwardIcon />
                </button>
              </div>
            </div>
            <div
              ref={resourceContainerRef2}
              className="flex gap-6 w-full 
          overflow-scroll scroll-smooth"
            >
              {loading ? (
                <div className="w-full flex justify-center items-center">
                  <LoadingSpinner />
                </div>
              ) : (
                [...data]
                  ?.reverse()
                  .map((res: any, i: number) => (
                    <ResourceCard
                      key={res._id}
                      id={res._id}
                      src={i % 2 ? ResourceTwo : ResourceOne}
                      title={res.title}
                      author={`${res.name} | ${res.role}, ${res.company}`}
                      ratings={res.ratings}
                      price={res.price}
                      reviews={res.reviews}
                    />
                  ))
              )}
            </div>
          </div>
          {error && <p>{error}</p>}
        </div>
      </Container>
    </>
  );
};

export default Explore;
