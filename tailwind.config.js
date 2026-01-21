/** @type {import('tailwindcss').Config} */
module.exports = {
  // Hanya memindai file di app dan components untuk performa maksimal
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}