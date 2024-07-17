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
      backgroundColor: {
        "custom-rgba": "rgba(0, 0, 0, 0.575)",
      },
      backgroundBlendMode: {
        darken: "darken",
      },
    },
  },
  plugins: [],
};
