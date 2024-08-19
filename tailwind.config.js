/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "red-primary": "#D92E15",
      "red-secondary": "#FDF5F3",
      "hover-red": "#C62912",
      "blue-primary": "#0B2B5E",
      darkblue: "#223869",
      red: "#ff4d4f",
      white: "#fff",
      disabled: "#74788d",
      gray5: "#f5f5f5",
      green: "#52c41a",
      stroke: "#DFDEE2",
      "green-hover": "#4ea617",
      "blue":"#109CF1"
    },
    extend: {},
  },
  plugins: [],
}

