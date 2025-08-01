/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF",
        secondary: "#0000ff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "1rem",
        },
      },
    },
  },
  plugins: [],
};
