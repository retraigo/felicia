export default [
  {
    name: `Home`,
    route: `/`,
    key: `home`,
    icon: `home`,
  },
  {
    name: `Submissions`,
    route: [
      {
        name2: `Call For Paper`,
        route2: `call`,
        key2: `call`,
      },
      {
        name2: `Important Dates`,
        route2: `dates`,
        key2: `dates`,
      },
    ],
    key: `submissions`,
    icon: `file`,
  },
  {
    name: `Organization`,
    route: [
      {
        name2: `Program Committee`,
        route2: `committee`,
        key2: `committee`,
      },
      {
        name2: `Organizer`,
        route2: `organizer`,
        key2: `organizer`,
      },
      {
        name2: `Contacts`,
        route2: `contacts`,
        key2: `contacts`,
      },
    ],
    key: `organization`,
    icon: `globe`,
  },
  {
    name: `Program`,
    route: [
      {
        name2: `Conference`,
        route2: `conference`,
        key2: `conference`,
      },
      {
        name2: `Keynote Speakers`,
        route2: `speakers/keynote`,
        key2: `keynote`,
      },
      {
        name2: `Invite Speakers`,
        route2: `speakers/invite`,
        key2: `invite`,
      },
    ],
    key: `program`,
    icon: `tv`,
  },
  {
    name: `News`,
    route: `/news`,
    key: `news`,
    icon: `plussquare`,
  },
  {
    name: `For Participants`,
    route: `/news`,
    key: `participants`,
    icon: `participant`,
  },
];
