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
  darkMode: 'class',
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
          DEFAULT: "#ffa600",
          active: "#D9CF41",
          "content": "#191000"
        },
        secondary: {
          DEFAULT: "#D946EF",
          active: "#40021F",
          "content": "#FEFEFE"
        },
        accent: "#11EDCC",
        info: "#00DBFF",
        success: "#42EB11",
        error: "#E81616"
      }
    },
  },
  plugins: [],
}
