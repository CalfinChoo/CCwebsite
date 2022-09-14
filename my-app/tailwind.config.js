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
      },
    },
  },
  plugins: [],
};
