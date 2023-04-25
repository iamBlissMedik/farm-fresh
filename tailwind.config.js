/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      farmFresh: "#2B9348",
      white: "#FFFFFF",
      black: "#000000",
      first: "#2B9438",
      grey: "#626262",
      second: "#80B918",
      transparent: "rgba(0, 0, 0, 0)",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      backgroundImage: {
        dairy_lgBg: "url('./src/assets/dairy-lgBg.svg')",
        dairy_smBg: "url('./src/assets/dairy-smBg.svg')",
        meat_lgBg: "url('./src/assets/meat-lgBg.svg')",
        meat_smBg: "url('./src/assets/meat-smBg.svg')",
        vegetable_lgBg: "url('./src/assets/vegetable-lgBg.svg')",
        vegetable_smBg: "url('./src/assets/vegetable-smBg.svg')",
      },
    },
  },
  plugins: [],
};
