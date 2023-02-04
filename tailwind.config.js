/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8382EB",
          main: "#6766F0",
          dark: "#264373",
        },
        secondary: {
          light: "#FFC0F3",
          main: "#DD69c7",
          dark: "#D697DE",
        },
        // dimWhite: "#",
        // dimBlack: "#262524",
        dimBlack: "#26252480",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sg: ["Sporting Grotesque", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0px 20px 80px rgba(51, 78, 123, 0.3)",
        emo: "0px 4px 14px rgba(0, 0, 0, 0.09)",
        nav: "0px 4px 12px rgba(0, 0, 0, 0.05)",
      },
      letterSpacing: {
        slight: "0.01em",
      },
      // borderRadius: {
      //   "rounded-lg": "10px",
      // },
      screens: {
        xs: "440px",
        sm: "640px",
        md: "900px",
        tablet: "940px",
        lg: "1096px",
      },
      borderRadius: {
        xl: "10px",
      },
    },
  },
  plugins: [],
};
