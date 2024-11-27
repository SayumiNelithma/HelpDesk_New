/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'braves-navy': '#13274F', // Custom color for Braves-Navy
      },
    },
  },
  plugins: [],
};
