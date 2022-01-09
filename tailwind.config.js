module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      45: 45,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
    extend: {
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.100") },
              strong: { color: theme("colors.gray.100") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.100"),
                borderLeftColor: theme("colors.gray.800"),
              },
              h1: { color: theme("colors.gray.100") },
              h2: { color: theme("colors.gray.100") },
              h3: { color: theme("colors.gray.100") },
              h4: { color: theme("colors.gray.100") },
              code: { color: theme("colors.gray.100") },
              "a code": { color: theme("colors.gray.100") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
            },
          },
          css: {
            maxWidth: "60rem",
          },
        };
      },

      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      padding: {
        "30x": "30%",
      },
      minHeight: {
        100: "100px",
        200: "200px",
        400: "400px",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "110rem",
      },
      colors: {
        maid: {
          border: "#4ef0fc",
          bg: "#030005",
        },
        nett: {
          kuro: "#944dff",
          maid: "#ff00c3",
        },
      },
      translate: {
        110: "30rem",
        120: "40rem",
        "-110": "-30rem",
        "-120": "-40rem",
      },
      margin: {
        110: "30rem",
        120: "40rem",
        130: "50rem",
        140: "60rem",
        "-110": "-30rem",
        "-120": "-40rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      backgroundColor: ["checked"],
      translate: ["active", "group-hover", "group-focus", "hover"],
      visibility: ["hover", "focus", "group-hover", "group-focus"],
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
