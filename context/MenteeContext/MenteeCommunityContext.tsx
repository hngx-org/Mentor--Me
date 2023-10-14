/* eslint-disable import/prefer-default-export */
// MenteeCommunityContext.tsx

import React, { createContext, useContext, ReactNode, useState } from "react";
import { mentorCardAvatar } from "@/public";

// Define the shape of the data you want to store in the context
interface Community {
  title: string;
  members: number;
  desc: string;
  id: number;
  slideComments: {
    mentor: boolean;
    name: string;
    heroCard: string;
    image: {
      mentorCardAvatar: any;
    };
    title: string;
    desc: string;
    commentid: number;
  }[];
}

interface MenteeCommunityContextData {
  sliderInfo: Community[];
  updateSliderInfo: (data: Community[]) => void;
}

const initialSliderInfo: Community[] = [
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
// Initialize sliderInfo with your data
// const [sliderInfo, setSliderInfo] = useState<Community[]>(initialSliderInfo);

// Create the context
export const MenteeCommunityContext = createContext<MenteeCommunityContextData>(
  {
    sliderInfo: [...initialSliderInfo],
    updateSliderInfo(updatedSliderInfo) {},
  }
);

// Create a custom hook to access the context
export function useMenteeCommunity() {
  const context = useContext(MenteeCommunityContext);

  return context;
}
