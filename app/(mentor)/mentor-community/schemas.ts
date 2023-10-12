// these are the endpoints required for the communities flow
const endpoints = [
  {
    endpoint: "<domain.com>/forums",
    description:
      "This endpoint should return an array of all available discussion forums",
    requestType: "GET",
    responseType: [
      {
        id: "",
        slug: "<forum-name in lowercase (e.g techtitans)>",
        name: "<forum-name (e.g Tech Titans)>",
        description: "<forum-description>",
        members: [
          {
            id: "",
            membername: "",
            profilephoto: "<imageurl>",
            isMentor: true || false,
            about: "",
          }, // ...
        ],
        discussions: [
          {
            id: "",
            topic: "",
            note: "",
            dicussionposter: "<imageurl>" || undefined,
            author: {
              name: "",
              profilephoto: "<imageurl>",
              isMentor: true || false,
            },
          }, // ...
        ],
      }, // ...
    ],
  },
  {
    endpoint: "<domain.com>/forums/[slug]",
    description:
      "This endpoint should return an object containing all the info pertaining to a forum",
    requestType: "GET",
    responseType: {
      id: "",
      slug: "<forum-name in lowercase (e.g techtitans)>",
      name: "<forum-name (e.g Tech Titans)>",
      description: "<forum-description>",
      members: [
        {
          id: "",
          membername: "",
          profilephoto: "<imageurl>",
          isMentor: true || false,
          about: "",
        }, // ...
      ],
      discussions: [
        {
          id: "",
          topic: "",
          note: "",
          dicussionposter: "<imageurl>" || undefined,
          author: {
            name: "",
            profilephoto: "<imageurl>",
            isMentor: true || false,
          },
        }, // ...
      ],
    },
  },
  {
    endpoint: "<domain.com>/forums/[slug]",
    description:
      "This endpoint should accept the form submission data and return a response accordingly(e.g 201)",
    requestType: {
      method: "POST",
      body: "",
    },
  },
];
