/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        base: {
          "100": "#262626",
          "200": "#282828",
          "300": "#121212",
          "content": "#FEFEFE"
        },
        primary: {
          DEFAULT: "#F2E744",
          active: "#D9CF41",
          "content": "#FEFEFE"
        },
        secondary: {
          DEFAULT: "#F2A413",
          active: "#40021F",
          "content": "#FEFEFE"
        },
        accent: "#CCFF00",
        info: "#00DBFF",
        success: "#42EB11",
        error: "#E81616"
      }
    },
  },
  plugins: [],
}
