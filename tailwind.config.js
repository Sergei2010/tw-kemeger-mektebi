/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      "dark": "#000000",
      "white": "#FFFFFF",
      "grey": "#C2C2C2",
      "blue": "#F6FAFF",
      "blue-light": "#018FA3",
      "yellow-light": "#FAE01A",
      "yellow-dark": "#FFA724",
      "violet": "#955EEA",
      "greenish": "#4ECA30",
      "red-light": "#FF4D94"
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

