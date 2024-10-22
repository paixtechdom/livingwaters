/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footerBg": "url(/src/assets/images/dev/footer.jpg)",
        "aboutBg": "url(/src/assets/images/dev/about.jpg)",
        "messagesBg": "url(/src/assets/images/dev/messages.jpg)",
      },
      colors: {
        "base": "rgba(0,20,234)"
      }
    },
  },
  plugins: [],
}