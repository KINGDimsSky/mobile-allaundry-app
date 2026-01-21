/** @type {import('tailwindcss').Config} */
module.exports = {
  // Hanya memindai file di app dan components untuk performa maksimal
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "poppins-light": ["Poppins_300Light"],
        "poppins": ["Poppins_400Regular"],
        "poppins-medium": ["Poppins_500Medium"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],
      }
    },
  },
  plugins: [],
}