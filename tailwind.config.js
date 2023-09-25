/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
    fontFamily: {
      iranyekan: ["iranyekan"],
    },
    colors: {
      black: "#121212",
      base: {
        100: "#FFFFFF",
        200: "#EDEDED",
        300: "#1E1E1E",
        content: "#1F2937"
      },
      primary: {
        DEFAULT: "#EAAD11",
        active: "#B9008B",
        text: "#FFFFFF"
      },
      secondary: {
        DEFAULT: "#0446B0",
        active: "#074CA5",
        text: "#EEEDDE"
      },
      error: "#fa2828",
      accent: "#FF9E00",
      info: "#3018DF",
      success: "#20C820"
    }
  },
  },
  plugins: [],
}

