/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hanged-pattern": "url('/src/Assets/Images/backgroundHanged.png')",
      },
    },
  },
  plugins: [],
};
