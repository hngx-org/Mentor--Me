import Image from "next/image";
import SearchIcon from "../../../public/assets/Icons/landing-page/search-icon.png";
import HeroImage from "../../../public/assets/images/landing-page/hero-section-images.png";

export default function Hero() {
  return (
    <section className="py-[5rem]">
      <div className="md:w-5/6 md:m-auto md:flex justify-between items-center">
        <div className="mb-[5rem] md:mb-0 max-w-[520px] mx-auto md:mx-0 md:max-w-[636px] md:pr-[1rem]">
          <div className="w-9/10 mx-auto md:w-full ">
            <h2 className="text-[1.5rem] leading-7 md:text-5xl md:leading-tight font-semibold pb-[1rem] md:pb-[1.5rem]">
              Unleash Your Potential with Expert Guidance
            </h2>
            <p className="text-[0.8rem] md:text-base">
              Learn a new skill, launch a project, land your dream career.
              Elevate your potential with MentorMe
            </p>

            <div className="py-[3rem] relative">
              <Image
                src={SearchIcon}
                alt="search icon"
                width={25}
                height={25}
                className="absolute top-[3.8rem] md:top-[4.3rem] left-[0.5rem] md:left-[1.2rem] cursor-pointer"
              />
              <input
                className="bg-[white] py-[0.9rem] md:py-[1.2rem] pl-[2.2rem] md:pl-[3.5rem] border-[1px] w-full text-[0.7rem] md:text-[0.8rem] rounded-[6px] outline-none"
                type="text"
                placeholder="Search by skills or role"
              />
              <button
                type="button"
                className="border-[1px] bg-[black] text-[white] text-[0.7rem] md:text-[0.8rem] w-1/4 md:w-1/5 max-w-[134px] rounded-[8px] absolute py-[0.5rem] md:py-[0.75rem] bottom-[3.4rem] right-[0.5rem] "
              >
                Search
              </button>
            </div>

            <div className="leading-6">
              <p className="text-[0.8rem]">
                Tech Experts | Marketing & Finance | Mental Health Experts
              </p>
            </div>
          </div>
        </div>

        <figure className="md:w-3/5 max-w-[520px] mx-auto md:mx-0 md:max-w-[680px] md:pl-[1rem]">
          <Image
            src={HeroImage}
            alt="hero image"
            width={576}
            height={495}
            className="w-full"
          />
        </figure>
      </div>
    </section>
  );
}
