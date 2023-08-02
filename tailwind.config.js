/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", ".build/js/*.js"],
  theme: {
    extend: {
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
