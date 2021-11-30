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
        name2: `Committee`,
        route2: `committee`,
        key2: `committee`,
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
        name2: `Placeholder`,
        route2: `committee`,
        key2: `committee`,
      },
      {
        name2: `Placeholder`,
        route2: `contacts`,
        key2: `contacts`,
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
