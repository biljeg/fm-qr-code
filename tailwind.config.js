/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      base: ["0.9375rem", "1.4"],
      lg: ["1.375rem", "1.2"],
    },
    letterSpacing: {
      wide: "0.0125em",
    },
    boxShadow: {
      xl: "0px 25px 25px 0px rgba(0, 0, 0, 0.05)",
    },
    extend: {
      colors: {
        "pure-white": "#ffffff",
        "light-slate": "#68778d",
        "dark-slate": "#1f314f",
        "pattens-blue": "#D5E1EF",
      },
    },
  },
  plugins: [],
};
