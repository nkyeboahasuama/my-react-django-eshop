/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#10b981",
        activeGreen: "#04f674",

        mainBrown: "#7c5931",
        deepBrown: "#342a28",
        cardBrown: "#9b7e4b",
        buttonBrown: "#4b380f",
        wheat: "#f5deb3",
      },
    },
  },
  plugins: [],
};
