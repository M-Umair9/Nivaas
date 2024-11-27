/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#181A1B",
        customDark: "#1D1F24",
      },
    },
  },
  plugins: [],
};
