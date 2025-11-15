/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryGold: "#c8a04f",
        lightGray: "#f5f5f5",
        darkGray: "#1f2933",
      },
    },
  },
  plugins: [],
};
