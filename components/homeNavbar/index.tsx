/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import React, { FC, useEffect, useState } from "react";

import Link from "next/link";

import dynamic from "next/dynamic";
import {
  NotificationIcon,
  NotifyIcon,
  ProfileIcon,
  ShoppingIcon,
} from "@/public/SVGs";
import Hambuger from "../hambuger";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const AnimatePresenceDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);
type LinkProps = {
  id: number;
  label: string;
  href: string;
};

interface HomeNavProps {
  isUserLogin?: boolean;
}
const links: LinkProps[] = [
  {
    id: 1,
    label: "Find a Mentor",
    href: "/explore",
  },
  {
    id: 2,
    label: "Become a Mentor",
    href: "/mentor-auth/sign-up",
  },
  {
    id: 3,
    label: "Community",
    href: "/communities",
  },
  {
    id: 4,
    label: "Resources",
    href: "/mentee-explore",
  },
];
// const HomeNavBar: FC = ({ isUserLogin = true }: HomeNavProps) =>
const HomeNavBar: FC<HomeNavProps> = ({ isUserLogin = false }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <header
        className={`${
          scrollY > 350
            ? "fixed opacity-0 -translate-y-60 top-0 left-0 bg-white/30 z-50 backdrop-blur-xl animate-slideDown"
            : ""
        }   w-full shadow-sm `}
      >
        <nav className=" flex justify-between items-center sm:py-[1.5rem] py-4 w-9/10  mx-auto z-[10]">
          <Link href="/">
            <p className="font-Gladiora font-[700] text-2xl lg:text-4xl">
              Mentor Me
            </p>
          </Link>

          {isUserLogin ? (
            <div className=" items-center gap-10  font-Hanken hidden lg:flex text-NeutalBase ">
              <Link href="" className="font-[700] border-b-[3px] border-black">
                Home
              </Link>
              <Link href="">Dashboard</Link>
              <Link href="/mentee-communities" className="text-[#565656] ">
                Community
              </Link>

              <Link
                href="/mentee-resources/explore?path=Explores"
                className="text-[#565656] "
              >
                Resources
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex items-center 2xl:gap-10 gap-4  font-Hanken">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-[#565656] text-[16px] xl:text-lg 2xl:text-xl duration-300 transition-all hover:text-NeutalBase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {isUserLogin ? (
            <div className=" md:flex hidden items-center gap-5 text-NeutalBase">
              <span className="flex">
                <ShoppingIcon />
              </span>
              <NotificationIcon />

              <div className="flex items-center gap-2">
                <ProfileIcon />
                <div className=" flex flex-col  font-Inter  ">
                  <span className=" text-[11px]">Funmi Oladapo</span>

                  <span className=" text-[10px]">C++ Developer</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:flex gap-2 hidden">
              <button
                type="button"
                className="text-black  bg-white rounded-[7px] border-[1px] text-[13px] w-[90px]  border-black p-2 duration-300 transition-all hover:opacity-80"
              >
                <Link href="/welcome/login"> Log in</Link>
              </button>
              <button
                type="button"
                className="bg-[#121212] text-white rounded-[8px] w-[90px] p-2 text-[13px] duration-300 transition-all hover:opacity-80"
              >
                <Link href="/welcome/signup"> Sign up</Link>
              </button>
            </div>
          )}
          <button
            type="button"
            className="lg:hidden relative z-[999] pr-2 cursor-pointer"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <Hambuger isOpen={toggleMenu} />
          </button>
          {/* mobile */}
        </nav>
      </header>
      {toggleMenu && (
        <div
          className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99]  bg-black/25  cursor-default"
          role="dialog"
          onClick={() => setToggleMenu(false)}
        />
      )}
      <AnimatePresenceDiv>
        {toggleMenu && (
          <MotionDiv
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ translateX: -100, opacity: 0 }}
            className={`  flex-col items-start h[100vh]  pl-6 w-full max-w-[250px] sm:max-w-[300px] left-0 bg-white shadow-xl  fixed h-[100vh] z-[999] top-0 pt-10
        `}
          >
            <Link href="/" onClick={() => setToggleMenu(false)}>
              <p className="font-Gladiora font-[700] text-3xl ">Mentor Me</p>
            </Link>
            <div className="flex flex-col mt-[2rem] gap-7 justify-between  font-[400] text-[18px] leading-[28px] w-9/10  cursor-pointer">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-[#565656] text-[16px] xl:text-lg 2xl:text-xl duration-300 transition-all hover:text-NeutalBase"
                  onClick={() => setToggleMenu(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex gap-y-4 flex-col mt-[1rem]">
                <Link href="welcome/login">
                  <button
                    type="button"
                    className="text-black  bg-white  rounded-[7px] border-[1px] text-[0.9rem] w-[120px]  border-black p-2.5 "
                  >
                    Log in
                  </button>
                </Link>

                <Link href="welcome/signup">
                  <button
                    type="button"
                    className="bg-[#121212] text-white rounded-[8px] w-[120px] p-2.5 text-[0.9rem] "
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresenceDiv>
    </>
  );
};

export default HomeNavBar;
