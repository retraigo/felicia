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
        name2: `Important Dates`,
        route2: `/program/dates`,
        key2: `dates`,
      },
      {
        name2: `Call For Paper`,
        route2: `/call`,
        key2: `call`,
      },
      {
        name2: `Paper Submission`,
        route2: `/submission`,
        key2: `submission`,
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
        route2: `/program/committee`,
        key2: `committee`,
      },
      {
        name2: `Organizer`,
        route2: `/program/organizer`,
        key2: `organizer`,
      },
      {
        name2: `Patrons`,
        route2: `/program/patrons`,
        key2: `patrons`,
      },
      {
        name2: `Contacts`,
        route2: `/program/contacts`,
        key2: `contacts`,
      },
    ],
    key: `organization`,
    icon: `globe`,
  },
  {
    name: `Program`,
    route: [
/*      {
        name2: `Conference`,
        route2: `/conference`,
        key2: `conference`,
      },*/
      {
        name2: `Keynote Speakers`,
        route2: `/speakers/keynote`,
        key2: `keynote`,
      },
/*      {
        name2: `Invite Speakers`,
        route2: `/speakers/invite`,
        key2: `invite`,
      },
      */
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
/*  {
    name: `Venue`,
    route: `/venue`,
    key: `venue`,
    icon: `nav`,
  },*/
  {
    name: `For Participants`,
    route: `/participants`,
    key: `participants`,
    icon: `participant`,
  },
];
