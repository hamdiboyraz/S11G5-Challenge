/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        togglePrimary: "#777777",
        toggleSecondary: "#4731D3",
        navPrimary: "#6B7280",
        navHire: "#3730A3",
        navH: "#7B61FF",
        navBgH: "#EEEBFF",
        homeName: "#4338CA",
        homeText: "#1F2937",
        hrColor: "#BAB2E7",
        contactPrimary: "#F9F9F9F9",
        contactPrimaryDark: "#141414",
        contactRed: "#AF0C48",
        contactT1: "#0A0A14",
        contactT2: "#00AB6B",
        contactT3: "#0077B5",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
