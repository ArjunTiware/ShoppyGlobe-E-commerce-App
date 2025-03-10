/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      low: "300px",
      high: "518px",
      sm: "640px",
      smII: "700px",
      md: "768px",
      mdII:"900px",
      lg: "1024px",
      lgII: "1100",
      xl: "1280px",
      xlII: "1536px"
    },
  },
  plugins: [],
}

