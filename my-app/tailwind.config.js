/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-purple": "#170A1C",
        "c-blue": "#256EFF",
        "c-ruby": "#E0115F",
        "c-green": "#06A77D",
        "c-sky": "#46A2FF",
        "c-violet": "#57068C",
        "c-black-transparent-75": "rgba(0, 0, 0, 0.75)",
        "c-white-transparent-10": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        arima: ["Arima", "system-ui"],
        arimo: ["Arimo", "sans-serif"],
        chango: ["Chango", "sans-serif"],
        playwrite: ["Playwrite DE SAS", "cursive"],
      },
      screens: {
        sm: "640px",
        lg: "1024px",
      },
      spacing: {
        105: "105px",
      },
    },
  },
  plugins: [],
};
