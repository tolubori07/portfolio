/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "350px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1536px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        main: "#7fbc8c",
        mainAccent: "#4c7766", // not needed for shadcn components
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#ebe6e0",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#0b2823",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#1b1b1b", // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: "4px",
      },
      boxShadow: {
        light: "5px 6px 0px 0px #000",
        dark: "5px 6px 0px 0px #000",
      },
      translate: {
        boxShadowX: "5px",
        boxShadowY: "6px",
        reverseBoxShadowX: "-5px",
        reverseBoxShadowY: "-6px",
      },
      fontWeight: {
        base: "500",
        heading: "800",
      },
      fontFamily: {
        display: ["'04b'"],
        body: ["'false'"],
      },
    },
  },

  plugins: [],
};
