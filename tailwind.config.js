/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom: "0.5rem 1em 1em rgb(64, 64, 70)",
      },
      borderRadius: {
        custom: "20px",
      },
    },
  },
  plugins: [],
};
