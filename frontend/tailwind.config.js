/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"], // Default sans-serif with both fonts
        inter: ["Inter", "sans-serif"], // Inter for body text
      },
    },
  },
  plugins: [],
};
