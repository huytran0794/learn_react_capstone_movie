/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        movies1: "url('../src/core/assets/images/bgMovies1.jpg')",
        bannerOverlay:
          "linear-gradient(to right, rgb(110 53 108) 150px, rgb(31 43 86 / 84%) 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
