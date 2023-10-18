import React from "react";
import DiscussionSlider from "@/components/mentee-communities/DiscussionSlider";
import MentorGrid from "@/components/mentee-communities/MentorGrid";
import SearchCommunitySearchbar from "@/components/mentor-community/searchcommunity-searchbar";
import { mentorCardAvatar } from "@/public";
import SearchMenteecommunity from "@/components/mentee-communities/SearchMenteecommunity";

const page: React.FC = () => {
  const isLoggedIn = true;
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
  return (
    <section className="flex w-full">
      <div className="menteecommunities flex flex-col justify-center  w-full">
        <section className="pt-[24px] pb-[10px] pl-8">
          <SearchMenteecommunity />
        </section>

        <section className="w-full ">
          <div className="isloggedInSLider">
            {" "}
            <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1007px)]   border border-transparent  mx-auto overflow-hidden">
              {" "}
              <DiscussionSlider slideInfo={sliderInfo} isLoggedIn />
            </div>
            <div className=" w-[396px] sm:w-[406px]  md:w-[628px] lg:w-[calc(777px)] xl:w-[calc(977px)] 2xl:w-[calc(1007px)]  border border-transparent  mx-auto overflow-hidden">
              <MentorGrid />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;
