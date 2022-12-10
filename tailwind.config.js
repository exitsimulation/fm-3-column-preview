/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(31 77% 52%)",
        "dark-cyan": "hsl(184 100% 22%)",
        "very-dark-cyan": "hsl(179 100% 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "very-light-gray": "hsl(0 0% 95%)",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        "big-shoulders-display": ["Big Shoulders Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
