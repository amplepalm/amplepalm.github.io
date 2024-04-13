/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html", "./*.js"],
  darkMode: "selector",
  safelist: ["isToggled"],
  theme: {
    primary: "#0ec8fe",
    fontFamily: {
      sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
      mono: ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
    },
    keyframes: {
      loop: {
        to: {
          "offset-distance": "100%",
        },
      },
    },

  },
  plugins: [
    themer({
      palette: {
        extend: "nature"
      },
      radius: "smoothest",
      background: "light",
      border: "light",
      padding: "large",
      components: {
        button: {
          rounded: "2xl"
        }
      }
    })
  ],
};
