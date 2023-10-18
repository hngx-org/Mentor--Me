import { StaticImageData } from "next/image";
import { images } from "@/constants";

export type Discussion = {
  topic: string;
  note: string;
  imageUrl?: StaticImageData;
  author: Member;
};

export type MentorSession = {
  imageUrl: StaticImageData;
  time: string;
  title: string;
  desc: string;
  author: Member;
};

export type Member = {
  name: string;
  isMentor: boolean;
  profilePhotoUrl?: StaticImageData;
  about?: string;
};

export type Community = {
  slug: string;
  name: string;
  members: Member[];
  description: string;
  discussions: Discussion[];
};

export type discussionComms = {
  techtitans: Community;
  businessmavericks: Community;
  mathmasters: Community;
  mindfulliving: Community;
  techweebs: Community;
  everythingai: Community;
  roadmanmeetstech: Community;
  somnhuge: Community;
};

// These are mocked data, chose to mock the data as the design contained a fixed dataset it would realistically be coming from an API
// These images used were because they have different dimensions from the ones in the design(those have fixed dimensions and don't vary which would be less realistic)
export const discussionCommunities: Community[] = [
  {
    slug: "techtitans",
    name: "Tech Titans",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Connect with industry-leading mentors in science and technology. Explore the cutting edge together.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  {
    slug: "businessmavericks",
    name: "Business Mavericks",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Navigate the world of business with mentors who have walked the path to success.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  {
    slug: "mathmasters",
    name: "Math Masters",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Conquer mathematics with mentors who simplify complex equations.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  {
    slug: "mindfulliving",
    name: "Mindful Living",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Embrace mindfulness and mental well-being with mentors who nurture your inner peace.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  {
    slug: "techweebs",
    name: "Tech Weebs",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description: "Who loves gojo?",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  {
    slug: "everythingai",
    name: "Everything AI",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Discover new advancements and breakthroughs in the world of artificial intelligence.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  {
    slug: "roadmanmeetstech",
    name: "Roadman meets Tech",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Want to link up with all the top boys and top gyals in the tech space?",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  {
    slug: "somnhuge",
    name: "Something Hooooge",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Ever wondered who the richest and biggest tech lads and lasses are in the space? ",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
];

export const freeMentorSessions: MentorSession[] = [
  {
    imageUrl: images.FreeMentorSesh,
    time: new Date().toString(),
    title: "Introduction to AI",
    desc: "Explore the fascinating world of AI with hands-on demos and discussions. Learn the basics from industry experts.",
    author: {
      isMentor: true,
      name: "Shade Mayowa",
      about: "CEO, Webmasters Inc",
      profilePhotoUrl: images.MemberPfp,
    },
  },
  {
    imageUrl: images.FreeMentorSesh2,
    time: new Date().toString(),
    title: "Quantum Computing: A Leap Beyond Classical Computing",
    desc: "Explore the revolutionary world of quantum computing, its potential to solve complex problems, and its impact on cryptography and scientific simulations.",
    author: {
      isMentor: true,
      name: "Kayode Ode",
      about: "Chakra UI Evangelist",
      profilePhotoUrl: images.MemberPfp2,
    },
  },
  {
    imageUrl: images.FreeMentorSesh3,
    time: new Date().toString(),
    title:
      "The Future of Artificial Intelligence: Ethical Dilemmas and Responsible",
    desc: "Join the discussion on the ethical challenges posed by AI, including bias in algorithms, job displacement, and the importance of implementing ethical guidelines for AI development.",
    author: {
      isMentor: true,
      name: "Switches are Binary",
      about: "CEO, Gojotech",
      profilePhotoUrl: images.MemberPfp3,
    },
  },
  {
    imageUrl: images.FreeMentorSesh4,
    time: new Date().toString(),
    title: 'The "Apple Ecosystem" is all in your head.',
    desc: "Dive into the world of blockchain technology and decentralized finance, exploring how DeFi is reshaping traditional financial systems, lending, and asset management.",
    author: {
      isMentor: true,
      name: "Za Joker",
      about: "CTO, Jokers Incorporated",
      profilePhotoUrl: images.MemberPfp4,
    },
  },
  {
    imageUrl: images.FreeMentorSesh,
    time: new Date().toString(),
    title: "Cybersecurity in the Age of IoT: Protecting Smart Homes and Cities",
    desc: "Discuss the growing importance of cybersecurity as the Internet of Things (IoT) expands. Learn about threats to smart devices and strategies to safeguard connected homes and urban environments.",
    author: {
      isMentor: true,
      name: "Shade Mayowa",
      about: "CEO, Webmasters Inc",
      profilePhotoUrl: images.MemberPfp5,
    },
  },
];

export const discussionCommunitites: discussionComms = {
  techtitans: {
    slug: "techtitans",
    name: "Tech Titans",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Connect with industry-leading mentors in science and technology. Explore the cutting edge together.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Gabriel Martinelli",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp3,
        },
        imageUrl: images.DiscussionPhoto2,
      },
      {
        topic: "COYG(Come On Ye Gunners)",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Jokerized",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp5,
        },
        imageUrl: undefined,
      },
    ],
  },
  businessmavericks: {
    slug: "businessmavericks",
    name: "Business Mavericks",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Navigate the world of business with mentors who have walked the path to success.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  mathmasters: {
    slug: "mathmasters",
    name: "Math Masters",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Conquer mathematics with mentors who simplify complex equations.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  mindfulliving: {
    slug: "mindfulliving",
    name: "Mindful Living",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Embrace mindfulness and mental well-being with mentors who nurture your inner peace.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  techweebs: {
    slug: "techweebs",
    name: "Tech Weebs",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description: "Who loves gojo?",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  everythingai: {
    slug: "everythingai",
    name: "Everything AI",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp5,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Discover new advancements and breakthroughs in the world of artificial intelligence.",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  roadmanmeetstech: {
    slug: "roadmanmeetstech",
    name: "Roadman meets Tech",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp4,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Want to link up with all the top boys and top gyals in the tech space?",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
  somnhuge: {
    slug: "somnhuge",
    name: "Something Hooooge",
    members: [
      {
        name: "Eren Yeager",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp3,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp2,
      },
      {
        name: "Satoru Gojo",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Suguru Geto",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Gege Akutami",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Toji Fushiguro",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
      {
        name: "Riko Amanai",
        isMentor: false,
        profilePhotoUrl: images.MemberPfp,
      },
    ],
    description:
      "Ever wondered who the richest and biggest tech lads and lasses are in the space? ",
    discussions: [
      {
        topic: "My take on Augmented Reality (AR)",
        note: "AR enhances our everyday experiences by overlaying digital elements onto the real world. Through AR, your smartphone becomes a window to a new dimension. Imagine exploring a historic city, and with a simple glance through your device, historical figures come to life, sharing stories and insights. AR is revolutionizing education, gaming, and even shopping, making the ordinary extraordinary.",
        author: {
          name: "Lisa Pastel",
          isMentor: true,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
      {
        topic: "AI Everything",
        note: "AI is revolutionizing industries from healthcare to finance. It's the science of making machines smart, capable of learning, and performing tasks that typically require human intelligence. Expect AI to power everything from virtual assistants to autonomous vehicles in the near future.",
        author: {
          name: "Lisa Pastel",
          isMentor: false,
          profilePhotoUrl: images.MemberPfp,
        },
        imageUrl: images.DiscussionPhoto,
      },
    ],
  },
};
