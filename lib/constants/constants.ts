export type QualityProps = {
  id: number;
  title: string;
  rating: string;
};

export type IReview = {
  id: string;
  date: string;
  comment: string;
  quality1: string;
  quality2: string;
  quality3: string;
  avatar?: string;
  name: string;
  track: string;
  role: string;
};

export const reviewsArr: IReview[] = [
  {
    id: "1",
    date: "August 31, 2023",
    comment:
      "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
    quality1: "Technically competent",
    quality2: "Amazing Problem Solver",
    quality3: "Very motivational",
    avatar: "../../public/assets/Image.png",
    name: "Salma Paralluelo",
    track: "Product Designer",
    role: "Mentee",
  },
  {
    id: "2",
    date: "August 31, 2023",
    comment:
      "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
    quality1: "Technically competent",
    quality2: "Amazing Problem Solver",
    quality3: "Very motivational",
    avatar: "../../public/assets/Image.png",
    name: "Salma Paralluelo",
    track: "Product Designer",
    role: "Mentee",
  },
  {
    id: "3",
    date: "August 31, 2023",
    comment:
      "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
    quality1: "Technically competent",
    quality2: "Amazing Problem Solver",
    quality3: "Very motivational",
    avatar: "../../public/assets/Image.png",
    name: "Salma Paralluelo",
    track: "Product Designer",
    role: "Mentee",
  },
  {
    id: "4",
    date: "August 31, 2023",
    comment:
      "Talk to Shade if you want to have an honest and friendly space to help you untangle. She was very constructive answered all my questions super clearly with a lot of details, and gave quite some food for thought on how to improve my processes as well. Highly recommended for everyone who's looking for the expertise Shade has!",
    quality1: "Technically competent",
    quality2: "Amazing Problem Solver",
    quality3: "Very motivational",
    avatar: "../../public/assets/Image.png",
    name: "Salma Paralluelo",
    track: "Product Designer",
    role: "Mentee",
  },
];

export const qualityArr: QualityProps[] = [
  {
    id: 1,
    title: "Motivational",
    rating: "100%",
  },
  {
    id: 2,
    title: "Communication",
    rating: "100%",
  },
  {
    id: 3,
    title: "Subject Knowledge",
    rating: "100%",
  },
  {
    id: 4,
    title: "Problem Solving",
    rating: "100%",
  },
];
