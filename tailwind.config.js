/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        togglePrimary: "#777777",
        toggleSecondary: "#4731D3",
        navPrimary: "#6B7280",
        navHire: "#3730A3",
        navH: "#7B61FF",
        navBgH: "#EEEBFF",
        homeName: "#4338CA",
        homeText: "#1F2937",
        hrColor: "#BAB2E7",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
