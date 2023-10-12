/* eslint-disable camelcase */
interface SessionSchemaProps {
  title: string;
  type: string;
  sessions: {
    id: number;
    mentee_name: string;
    imageUrl: string;
    date: string;
    time: string;
    meeting_link: string;
  }[];
}

const mentee_sessions_schema: SessionSchemaProps = {
  title: "Upcoming Sessions",
  type: "object",

  sessions: [
    {
      id: 1,
      mentee_name: "Hope",
      imageUrl: "/images/mentee.png",
      date: "28th, Sept",
      time: "12:30pm",
      meeting_link: "https://meet.mentorme.com/azv-bspc-fyb",
    },
  ],
};
