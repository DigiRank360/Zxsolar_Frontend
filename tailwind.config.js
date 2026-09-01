/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecoGreen: "#74ba00",
        ecoGreenDark: "#5ca000",
        ecoDark: "#1a1c1e",
        ecoGold: "#f5a623",
        ecoGrayBg: "#f8f9fa",
      },
    },
  },
  plugins: [],
}
