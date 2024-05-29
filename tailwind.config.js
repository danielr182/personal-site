/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#0A192F",
        mainAlt: "#0A2647",
        mainOpacity: "#0A192FBB",
        primary: "#64FFDB",
        secondary: "#CCD6F6",
      },
    },
  },
  plugins: [],
};
