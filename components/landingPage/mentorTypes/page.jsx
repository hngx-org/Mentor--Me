import Image from "next/image";
import LeftArrow from "../../../public/assets/Icons/landing-page/arrow-circle-left.png";
import RightArrow from "../../../public/assets/Icons/landing-page/arrow-circle-right.png";
import MentorImageOne from "../../../public/assets/images/landing-page/mentorTypes-1.png";
import MentorImageTwo from "../../../public/assets/images/landing-page/mentorTypes-2.png";
import MentorImageThree from "../../../public/assets/images/landing-page/mentorTypes-3.png";
import MentorImageFour from "../../../public/assets/images/landing-page/mentorTypes-4.png";
import Carousel from "@/components/Carousel";

const imgCarousel = [
  MentorImageOne,
  MentorImageThree,
  MentorImageFour,
  MentorImageThree,
  MentorImageOne,
  MentorImageTwo,
  MentorImageThree,
];
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

      <div className="w-9/10 md:w-5/6 mx-auto">
        <Carousel
          imgCarousel={imgCarousel}
          title="Tech Experienced Mentors"
          text=" Welcome to Mentor.Me, your gateway to a world of tech excellence and
            innovation. We believe that mentorship is the cornerstone of
            personal and professional growth in the fast-paced and ever-evolving
            world of technology."
        />
        <Carousel
          imgCarousel={imgCarousel}
          title="Marketing Experienced Mentors"
          text=" Welcome to Mentor.Me, your gateway to a world of tech excellence
              and innovation. We believe that mentorship is the cornerstone of
              personal and professional growth in the fast-paced and
              ever-evolving world of technology."
        />
      </div>
    </section>
  );
}
