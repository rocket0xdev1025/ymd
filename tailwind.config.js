/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#070e1c",
        navy: { 950: "#08101f", 900: "#0c1830", 800: "#163058", 700: "#1e4070" },
        gold: {
          50: "#fff8e4",
          100: "#fff1c4",
          200: "#f6e2a2",
          300: "#efd07a",
          400: "#e0b44a",
          500: "#c9962e",
          600: "#a6791d",
          700: "#7a5614",
          800: "#3d2b0c"
        },
        cream: "#f4ead2",
        flag: "#c8102e"
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
};
