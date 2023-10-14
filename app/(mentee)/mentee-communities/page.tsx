"use client";

import React, { useEffect, useState } from "react";
import DiscussionSlider from "@/components/mentee-communities/DiscussionSlider";
import MentorGrid from "@/components/mentee-communities/MentorGrid";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";
import { SearchIcon } from "@/public/assets/Icons/mentor-communities";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import { mentorCardAvatar, mentorCardHero } from "@/public";
import { get, getMentorInfo, post } from "@/lib/apiHelper";

const MenteeCommunities: React.FC = () => {
  const isLoggedIn = false;
  const sliderInfo = [
    {
      title: "Tech Titans",
      members: 13,
      desc: "Connect with industry-leading mentors in science and technology. Explore the cutting edge together.",
      id: 12,
      slideComments: [
        {
          mentor: true,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
        {
          mentor: false,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
      ],
    },
    {
      title: "Business Mavericks",
      members: 13,
      desc: "Navigate the world of business with mentors who have walked the path to success.",
      id: 13,
      slideComments: [
        {
          mentor: true,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
        {
          mentor: false,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
      ],
    },
    {
      title: "Math Masters",
      members: 13,
      desc: "Conquer mathematics with mentors who simplify complex equations.",
      id: 15,
      slideComments: [
        {
          mentor: true,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
        {
          mentor: false,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
      ],
    },
    {
      title: "Minding Living",
      members: 13,
      desc: "Embrace mindfulness and mental well-being with mentors who nurture your inner peace.",
      id: 16,
      slideComments: [
        {
          mentor: true,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
        {
          mentor: false,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
      ],
    },
    {
      title: "Lorem Ipsum",
      members: 13,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ab",
      id: 17,
      slideComments: [
        {
          mentor: true,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },

        {
          mentor: false,
          name: "Shant Baddie",
          heroCard:
            "../../../../public/assets/images/mentee-communities/bigDisscussionCardHero.svg",
          image: { mentorCardAvatar },
          title: "My take on Augmented Reality (AR)",
          desc: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
          commentid: 1,
        },
      ],
    },
  ];

  const [mentorInfo2, setMentorInfo2] = useState([]);
  useEffect(() => {
    getMentorInfo(setMentorInfo2);
  }, []);

  // console.log(mentorInfo2);
  // const widthOfSlider = (
  //   widthOfSlides: number,
  //   colGap: number,
  //   noOfSlides: number
  // ) => {
  //   const sliderWidth =
  //     noOfSlides * widthOfSlides + colGap * (noOfSlides - 1) + 2;
  //   return sliderWidth;
  // };

  // fetch start
  // const [albums, setAlbums] = React.useState([] as any[]);

  // React.useEffect(() => {
  //   // declare the data fetching function
  //   // const fetchData = async () => {
  //   //   const data = await get("https://jsonplaceholder.typicode.com/albums");
  //   //   return data;
  //   // };

  //   // call the function
  //   // fetchData()
  //   //   .then((res) => setAlbums(res))
  //   //   // make sure to catch any error
  //   //   .catch(console.error);

  //   // async function getData() {
  //   //   try {
  //   //     const response = await get(
  //   //       "https://jsonplaceholder.typicode.com/albums"
  //   //     );
  //   //     setAlbums(response);
  //   //   } catch (error) {
  //   //     console.error("Error:", error);
  //   //   }
  //   // }
  //   // getData(); '

  //   // post

  //   // const data = {
  //   //   email: "test@tjjj.com",
  //   //   password: "Password",
  //   //   role: "mentor",
  //   // };
  //   // async function checkUser() {
  //   //   try {
  //   //     const res = await post(
  //   //       "https://mentormee-api.onrender.com/auth/register",
  //   //       data
  //   //     );

  //   //     console.log(res);
  //   //   } catch (err) {
  //   //     console.log("error");
  //   //   }
  //   // }
  //   // checkUser();
  // }, []);

  return (
    <div className="w-full">
      {/* {albums.map((album) => (
        <span className="text-red-700">{album.title}</span>
      ))} */}

      <HomeNavBar />
      <div className="flex w-full md:w-fit">
        {" "}
        <div className="menteecommunities flex flex-col justify-center pt-[80px] lg:pt-[85px] w-full">
          <div className="join-discussion lg:mt-[calc(54px)] md:mt-[calc(30px)]  hidden md:flex flex-col justify-center items-center">
            <p className=" text-NeutalBase  xl:text-[60px] xl:leading-[72px] lg:text-[45px] lg:leading-[55px] md:text-[30px] md:leading-[40px] font-bold text-center font-Hanken lg:px-[5vw] md:px-[6vw] lg:mb-[50px] md:mb-[26px] ">
              Join group discussions and connect with mentors in free classrooms
              with Mentor me
            </p>
          </div>
          {/* <div className="search border border-[#CCCCCC]  w-[80vw] md:w-[50vw] lg:w-[57vw] pl-[16px]  rounded-[6px] md:mx-auto mx-[5vw] flex  items-center">
        <span className="flex md:hidden pr-2 aspect-square h-[20px]">
          {" "}
          <SearchIcon />
        </span>{" "}
        <input
          type="text"
          className=" text-[14px] font-normal leading-[20.3px] text-Neutra20 w-full font-Inter outline-0 md:py-0 py-3 "
          placeholder="Search for communi8ty"
        />{" "}
        <button
          type="button"
          className="text-[10px]  whitespace-nowrap px-[40px]   py-[16px]  text-white border  bg-NeutalBase items-center gap-x-1 rounded-[8px] h-full hidden md:flex"
        >
          Search
        </button>
      </div> */}

          {isLoggedIn ? (
            <div className="isloggedInSLider">
              {" "}
              <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
                {" "}
                <DiscussionSlider slideInfo={sliderInfo} />
              </div>
              <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1362px)]  border border-transparent  mx-auto overflow-hidden">
                <MentorGrid mentorInfo={mentorInfo2} />
              </div>
            </div>
          ) : (
            <div className="">
              {" "}
              <div className=" w-[396px] sm:w-[628px]  md:w-[860px] lg:w-[calc(1052px)] xl:w-[calc(1352px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
                {" "}
                <DiscussionSlider slideInfo={sliderInfo} />
              </div>
              <div className=" w-[396px] sm:w-[628px]  md:w-[860px] lg:w-[calc(1052px)] xl:w-[calc(1352px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
                <MentorGrid mentorInfo={mentorInfo2} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenteeCommunities;
