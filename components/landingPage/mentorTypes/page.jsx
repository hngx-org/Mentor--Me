import Image from "next/image";
import LeftArrow from "../../../public/assets/Icons/landing-page/arrow-circle-left.png";
import RightArrow from "../../../public/assets/Icons/landing-page/arrow-circle-right.png";
import MentorImageOne from "../../../public/assets/images/landing-page/mentorTypes-1.png";
import MentorImageTwo from "../../../public/assets/images/landing-page/mentorTypes-2.png";
import MentorImageThree from "../../../public/assets/images/landing-page/mentorTypes-3.png";
import MentorImageFour from "../../../public/assets/images/landing-page/mentorTypes-4.png";

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
        <div className="md:flex mb-[8rem] md:mb-0 justify-between items-center">
          <div className="w-full md:w-1/3 mx-auto max-w-[426px] mb-[5rem] md:mb-[8rem]">
            <h3 className="text-[1.2rem] text-center md:text-left md:text-[1.6rem] font-semibold">
              Tech Experienced Mentors
            </h3>
            <p className="text-[0.85rem] text-center md:text-left md:text-[0.9rem] py-[1rem]">
              Welcome to Mentor.Me, your gateway to a world of tech excellence
              and innovation. We believe that mentorship is the cornerstone of
              personal and professional growth in the fast-paced and
              ever-evolving world of technology.
            </p>

            <div className="w-[144px] mx-auto md:mx-0 xl:mx-0 flex justify-between mt-[1rem] md:mt-[2rem]">
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

          <div className="block w-3/4 mx-auto xl:mx-0 max-w-[800px] mb-[2rem] xl:mb-0 xl:ml-[4rem] xl:ml-0 xl:flex items-center xl:justify-between">
            <Image
              src={MentorImageOne}
              alt=""
              width={372}
              height={200}
              className="block mb-[2rem] mx-auto"
            />

            {/* <Image
              src={MentorImageTwo}
              alt=""
              width={372}
              height={200}
              className="block mb-[2rem] mx-auto"
            /> */}
          </div>
        </div>

        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/3 mx-auto max-w-[426px] mb-[5rem] md:mb-[8rem]">
            <h3 className="text-[1.2rem] text-center md:text-left md:text-[1.6rem] font-semibold">
              Marketing Experienced Mentors
            </h3>
            <p className="text-[0.85rem] text-center md:text-left md:text-[0.9rem] py-[1rem]">
              Welcome to Mentor.Me, your gateway to a world of tech excellence
              and innovation. We believe that mentorship is the cornerstone of
              personal and professional growth in the fast-paced and
              ever-evolving world of technology.
            </p>

            <div className="w-[144px] mx-auto md:mx-0 xl:mx-0 flex justify-between mt-[1rem] md:mt-[2rem]">
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

          <div className="block w-3/4 mx-auto xl:mx-0 max-w-[800px] mb-[2rem] xl:mb-0 xl:ml-[4rem] xl:ml-0 xl:flex items-center xl:justify-between">
            <Image
              src={MentorImageThree}
              alt=""
              width={372}
              height={200}
              className="block mb-[2rem] mx-auto"
            />

            {/* <Image
              src={MentorImageFour}
              alt=""
              width={372}
              height={200}
              className="block mb-[2rem] mx-auto"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
