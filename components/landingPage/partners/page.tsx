import Image from "next/image";
import AdobeIcon from "../../../public/assets/Icons/landing-page/adobe-icon.png";
import NetflixIcon from "../../../public/assets/Icons/landing-page/netflix-icon.png";
import CourseraIcon from "../../../public/assets/Icons/landing-page/coursera-icon.png";
import GoogleIcon from "../../../public/assets/Icons/landing-page/google-icon.png";
import AirbnbIcon from "../../../public/assets/Icons/landing-page/airbnb-icon.png";

export default function Partners() {
  return (
    <section className="py-[3rem]">
      <div className="w-9/10 md:w-5/6 mx-auto">
        <h3 className="text-[1.2rem] font-semibold mb-[1.2rem]">
          Trusted By top Companies
        </h3>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-evenly md:justify-between items-center">
          <Image
            src={AdobeIcon}
            alt=""
            width={176}
            height={46.93}
            className="w-[90px] md:w-[176px] px-[0.5rem] mb-[1rem] md:mb-0"
          />

          <Image
            src={NetflixIcon}
            alt=""
            width={168}
            height={40}
            className="w-[90px] md:w-[168px] px-[0.5rem] mb-[1rem] md:mb-0"
          />

          <Image
            src={CourseraIcon}
            alt=""
            width={176}
            height={33.88}
            className="w-[90px] md:w-[176px] px-[0.5rem] mb-[1rem] md:mb-0"
          />

          <Image
            src={GoogleIcon}
            alt=""
            width={168}
            height={56}
            className="w-[90px] md:w-[168px] px-[0.5rem] mb-[1rem] md:mb-0"
          />

          <Image
            src={AirbnbIcon}
            alt=""
            width={200}
            height={44}
            className="w-[90px] md:w-[200px] px-[0.5rem] mb-[1rem] md:mb-0"
          />
        </div>
      </div>
    </section>
  );
}
