"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CarouselSlider from "@/components/Carousel";
import imgCarousel from "@/lib/constants/carouselData";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const AliceCarouselComponent = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});
const images = imgCarousel.map((image: any) => (
  <Image
    key={image.id}
    src={image.img}
    alt="slide"
    draggable="false"
    className="w-[420px] h-[320px] lg:mr-2"
    role="presentation"
    placeholder="blur"
  />
));
const images2 = imgCarousel.map((image: any) => (
  <Image
    key={image.id}
    src={image.img}
    alt="slide"
    draggable="false"
    className="w-[420px] h-[320px] lg:mr-2"
    role="presentation"
    placeholder="blur"
  />
));
export default function MentorTypes() {
  return (
    <section className="pt-[3rem] pb-[5rem] my-[2rem] md:my-[5rem]">
      <div className="w-9/10 max-w-[900px] mb-[3rem] md:mb-[8rem] mx-auto text-center">
        <h2 className="text-[1.7rem] md:text-[2.2rem] leading-8 md:leading-tight font-medium pb-[1rem]">
          Learn & Grow Across Expertise
        </h2>
        <p className="text-[0.85rem] md:text-[1.2rem] ">
          Work smart with an online mentor by your side to offer expert advice
          and guidance to match your zeal.
        </p>
      </div>

      <div className="w-9/10 mx-auto flex flex-col  gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="w-9/10 mx-auto flex flex-col  gap-10"
        >
          <CarouselSlider
            title="Tech Experienced Mentors"
            text=" Welcome to Mentor.Me, your gateway to a world of tech excellence and
            innovation. We believe that mentorship is the cornerstone of
            personal and professional growth in the fast-paced and ever-evolving
            world of technology."
          />
          <div className="w-ful">
            <AliceCarouselComponent
              items={images}
              responsive={responsive}
              controlsStrategy="alternate"
              disableButtonsControls
              infinite
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="w-9/10 mx-auto flex flex-col  gap-10"
        >
          <CarouselSlider
            title="Marketing Experienced Mentors"
            text=" Welcome to Mentor.Me, your gateway to a world of tech excellence
              and innovation. We believe that mentorship is the cornerstone of
              personal and professional growth in the fast-paced and
              ever-evolving world of technology."
          />
          <div className="w-full ">
            <AliceCarouselComponent
              items={images2}
              responsive={responsive}
              controlsStrategy="alternate"
              disableButtonsControls
              infinite
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
