/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto","sans-serif"],
        Amsterdam: ["Amsterdam","sans-serif"]
      },
    },
  },
  plugins: [],
}
