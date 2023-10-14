"use client";

import React, { Suspense, useEffect, useState } from "react";
import DiscussionSlider from "@/components/mentee-communities/DiscussionSlider";
import MentorGrid from "@/components/mentee-communities/MentorGrid";
import HomeNavBar from "@/components/homeNavbar";
import Footer from "@/components/Footer";
import { SearchIcon } from "@/public/assets/Icons/mentor-communities";
import SidebarMentor from "@/components/mentor/SidebarMentor";
import { mentorCardAvatar, mentorCardHero } from "@/public";
import { get, getMentorInfo, post } from "@/lib/apiHelper";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

type MentorDataType = {
  date: string;
  firstname: string;
  timezone: string;
  review: number;
  nextAvailable: string;
  topic: string;
  contentImage: string;
  id: string;
  time: string;
  title: string;
  content: string;
  lastname: string;
};

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

  const [mentorInfo2, setMentorInfo2] = useState([] as MentorDataType[]);

  useEffect(() => {
    getMentorInfo(setMentorInfo2);
  }, []);

  return (
    <div className="w-full">
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

          {isLoggedIn ? (
            <div className="isloggedInSLider">
              {" "}
              <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1362px)]   border border-transparent  mx-auto overflow-hidden">
                {" "}
                <DiscussionSlider slideInfo={sliderInfo} />
              </div>
              <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1362px)]  border border-transparent  mx-auto overflow-hidden">
                <Suspense fallback={<LoadingSpinner />}>
                  <MentorGrid mentorInfo={mentorInfo2} />
                </Suspense>
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
                <Suspense fallback={<LoadingSpinner />}>
                  <MentorGrid mentorInfo={mentorInfo2} />
                </Suspense>
              </div>
            </div>
          )}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default MenteeCommunities;
