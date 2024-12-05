/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"], // Default sans-serif with both fonts
        heading: ["Poppins", "sans-serif"], // Poppins for headings
        body: ["Inter", "sans-serif"], // Inter for body text
      },
    },
  },
  plugins: [],
};
