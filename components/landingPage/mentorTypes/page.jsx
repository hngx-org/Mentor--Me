import Image from "next/image";
import LeftArrow from "../../../public/assets/Icons/landing-page/arrow-circle-left.png";
import RightArrow from "../../../public/assets/Icons/landing-page/arrow-circle-right.png";

export default function MentorTypes() {
  return (
    <section className="pt-[3rem] pb-[5rem] my-[2rem] md:my-[5rem]">
      <div className="w-9/10 text-left max-w-[900px] mb-[3rem] md:mb-[8rem] mx-auto md:text-center">
        <h2 className="text-[1.5rem] md:text-[2.2rem] leading-8 md:leading-tight font-medium pb-[1rem]">
          Learn & Grow Across Expertise
        </h2>
        <p className="text-[0.8rem] md:text-[1.2rem] ">
          Work smart with an online mentor by your side to offer expert advice
          and guidance to match your zeal.
        </p>
      </div>

      <div className="w-9/10 md:w-5/6 mx-auto">
        <div className="mentor-types-card-container">
          <div className="w-full md:w-1/3 max-w-[426px] mb-[5rem] md:mb-[8rem]">
            <h3 className="text-[1.1rem] md:text-[1.6rem] font-semibold">
              Tech Experienced Mentors
            </h3>
            <p className="text-[0.8rem] md:text-[0.9rem] py-[1rem]">
              Welcome to Mentor.Me, your gateway to a world of tech excellence
              and innovation. We believe that mentorship is the cornerstone of
              personal and professional growth in the fast-paced and
              ever-evolving world of technology.
            </p>

            <div className="w-[144px] flex justify-between mt-[1rem] md:mt-[2rem]">
              <Image
                src={LeftArrow}
                alt=""
                width={48}
                height={48}
                className="cursor-pointer w-[40px] md:w-[48px]"
              />

              <Image
                src={RightArrow}
                alt=""
                width={48}
                height={48}
                className="cursor-pointer w-[40px] md:w-[48px]"
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 max-w-[426px] mb-[5rem] md:mb-[8rem]">
            <h3 className="text-[1.1rem] md:text-[1.6rem] font-semibold">
              Marketing Experienced Mentors
            </h3>
            <p className="text-[0.8rem] md:text-[0.9rem] py-[1rem]">
              Welcome to Mentor.Me, your gateway to a world of tech excellence
              and innovation. We believe that mentorship is the cornerstone of
              personal and professional growth in the fast-paced and
              ever-evolving world of technology.
            </p>

            <div className="w-[144px] flex justify-between mt-[2rem]">
              <Image
                src={LeftArrow}
                alt=""
                width={48}
                height={48}
                className="cursor-pointer w-[40px] md:w-[48px]"
              />

              <Image
                src={RightArrow}
                alt=""
                width={48}
                height={48}
                className="cursor-pointer w-[40px] md:w-[48px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
