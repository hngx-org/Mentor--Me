"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { newResources, resourceLinks } from "./constants";

import { BackwardIcon, ForwardIcon } from "@/public/SVGs";
import ResourceCard from "./ResourceCard";
import Container from "../Container";

const Explore = () => {
  const resourceContainerRef = useRef<HTMLDivElement | null>(null);
  const resourceContainerRef2 = useRef<HTMLDivElement | null>(null);

  const [activeLink, setActiveLink] = useState<number | null>(1);

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
    <Container>
      <div className="w-full p-6 overflow-hidden max-w-[1280px] mx-auto">
        <div className="flex gap-3 md:gap-[60px] mb-6">
          {resourceLinks.map((link) => (
            <Link
              key={link.id}
              href={link.to}
              onClick={() => handleLinkClick(link.id)}
              className={`font-Hanken text-lg ${
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
            <div className="hidden md:flex gap-4">
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
            className="flex flex-col sm:flex-row gap-6 w-full 
          overflow-hidden scroll-smooth"
          >
            {newResources.map((res) => (
              <ResourceCard
                key={res.id}
                id={res.id}
                src={res.poster}
                title={res.title}
                author={res.author}
                rate={res.rate}
                price={res.price}
                reviews={res.reviews}
              />
            ))}
          </div>
        </div>
        <div className="mt-[56px]">
          <div className="w-full flex justify-between items-center mb-6">
            <h1 className="font-Inter text-2xl text-[#1C0028]">
              Top Rated Resources
            </h1>
            <div className="hidden md:flex gap-4">
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
            className="flex flex-col sm:flex-row gap-6 w-full 
          overflow-hidden scroll-smooth"
          >
            {newResources.map((res) => (
              <ResourceCard
                key={res.id}
                id={res.id}
                src={res.poster}
                title={res.title}
                author={res.author}
                rate={res.rate}
                price={res.price}
                reviews={res.reviews}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Explore;
