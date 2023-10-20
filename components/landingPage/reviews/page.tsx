import Image from "next/image";
import Link from "next/link";
import AyraStar from "../../../public/assets/images/landing-page/ayra-star.png";
import Chioma from "../../../public/assets/images/landing-page/chioma.png";
import David from "../../../public/assets/images/landing-page/david.png";
import Oreoluwa from "../../../public/assets/images/landing-page/oreoluwa.png";
import Babafemi from "../../../public/assets/images/landing-page/babafemi.png";

export default function Reviews() {
  return (
    <section className="py-[3rem] my-[6rem] md:my-[9rem]">
      <h3 className="text-[1.7rem] md:text-[2.2rem] font-medium pb-[5rem] text-center">
        What People Say...
      </h3>
      <div className="w-9/10 md:w-9/10 mx-auto pb-[3rem]">
        <div className="top-card-container">
          <div className="w-full lg:w-2/5 max-w-[502px] mx-auto lg:flex justify-between items-center">
            <figure className="">
              <Image
                src={AyraStar}
                alt=""
                width={100}
                height={100}
                className="w-[80px] mx-auto lg:w-[100px]"
              />
            </figure>

            <div className="w-full text-center lg:text-left lg:w-4/5 max-w-[384px] mx-auto py-[1rem] mt-[1rem] lg:mt-0 mb-[5rem] lg:mb-0 rounded-[15px] shadow-lg">
              <div className="w-9/10 lg:w-5/6 lg:max-w-[320px] mx-auto">
                <h3 className="text[#121212] text-[1.2rem] font-medium pb-[0.8rem]">
                  Ayra Star
                </h3>
                <p className="text-[#565656] text-[0.85rem] md:text-[0.7rem]">
                  ``Over the years, Innosons Group has been known for its
                  recruitment of industry professionals and gained so much
                  credibility. Here are Our major areas in the tech and
                  production industry``
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between w-full mx-auto lg:py-[6rem]">
          <div className="w-full lg:w-2/5 max-w-[502px] mx-auto lg:flex justify-between items-center">
            <figure className="">
              <Image
                src={Chioma}
                alt=""
                width={100}
                height={100}
                className="w-[80px] mx-auto lg:w-[100px]"
              />
            </figure>

            <div className="w-full text-center lg:text-left lg:w-4/5 max-w-[384px] mx-auto py-[1rem] mt-[1rem] lg:mt-0 mb-[5rem] lg:mb-0 rounded-[15px] shadow-lg">
              <div className="w-9/10 lg:w-5/6 lg:max-w-[320px] mx-auto">
                <h3 className="text[#121212] text-[1.2rem] font-medium pb-[0.8rem]">
                  Chioma Ada-eze
                </h3>
                <p className="text-[#565656] text-[0.85rem] lg:text-[0.7rem]">
                  ``Over the years, Innosons Group has been known for its
                  recruitment of industry professionals and gained so much
                  credibility. Here are Our major areas in the tech and
                  production industry``
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 max-w-[502px] mx-auto lg:flex justify-between items-center">
            <figure className="">
              <Image
                src={David}
                alt=""
                width={100}
                height={100}
                className="w-[80px] mx-auto lg:w-[100px]"
              />
            </figure>

            <div className="w-full text-center lg:text-left lg:w-4/5 max-w-[384px] mx-auto py-[1rem] mt-[1rem] lg:mt-0 mb-[5rem] lg:mb-0 rounded-[15px] shadow-lg">
              <div className="w-9/10 lg:w-5/6 lg:max-w-[320px] mx-auto">
                <h3 className="text[#121212] text-[1.2rem] font-medium pb-[0.8rem]">
                  David Makinza
                </h3>
                <p className="text-[#565656] text-[0.85rem] md:text-[0.7rem]">
                  ``Over the years, Innosons Group has been known for its
                  recruitment of industry professionals and gained so much
                  credibility. Here are Our major areas in the tech and
                  production industry``
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between w-full lg:w-5/6 mx-auto lg:pt-[2rem]">
          <div className="w-full lg:w-2/5 max-w-[502px] mx-auto lg:flex justify-between items-center">
            <figure className="">
              <Image
                src={Oreoluwa}
                alt=""
                width={100}
                height={100}
                className="w-[80px] mx-auto lg:w-[100px]"
              />
            </figure>

            <div className="w-full text-center lg:text-left lg:w-4/5 max-w-[384px] mx-auto py-[1rem] mt-[1rem] lg:mt-0 mb-[5rem] lg:mb-0 rounded-[15px] shadow-lg">
              <div className="w-9/10 lg:w-5/6 lg:max-w-[320px] mx-auto">
                <h3 className="text[#121212] text-[1.2rem] font-medium pb-[0.8rem]">
                  Oreoluwa Adedayo
                </h3>
                <p className="text-[#565656] text-[0.85rem] md:text-[0.7rem]">
                  ``Over the years, Innosons Group has been known for its
                  recruitment of industry professionals and gained so much
                  credibility. Here are Our major areas in the tech and
                  production industry``
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 max-w-[502px] mx-auto lg:flex justify-between items-center">
            <figure className="">
              <Image
                src={Babafemi}
                alt=""
                width={100}
                height={100}
                className="w-[80px] mx-auto lg:w-[100px]"
              />
            </figure>

            <div className="w-full text-center lg:text-left lg:w-4/5 max-w-[384px] mx-auto py-[1rem] mt-[1rem] md:mt-0 mb-[5rem] md:mb-0 rounded-[15px] shadow-lg">
              <div className="w-9/10 lg:w-5/6 lg:max-w-[320px] mx-auto">
                <h3 className="text[#121212] text-[1.2rem] font-medium pb-[0.8rem]">
                  Babafemi Adedayo
                </h3>
                <p className="text-[#565656] text-[0.85rem] md:text-[0.7rem]">
                  `Over the years, Innosons Group has been known for its
                  recruitment of industry professionals and gained so much
                  credibility. Here are Our major areas in the tech and
                  production industry`
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-9/10 md:w-auto mx-auto mt-[4rem] text-center">
        <Link
          href="/welcome/signup"
          className="bg-[black] text-[white] text-[0.7rem] font-medium rounded-[8px] outline-none sm:text-xl px-4 p-2 xl:text-2xl xl:px-6 hover:opacity-80 transition-all duration-500"
        >
          {" "}
          Get Started
        </Link>
      </div>
    </section>
  );
}
