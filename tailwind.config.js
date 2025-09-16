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
        "giveBg": "url(/src/assets/images/dev/give.jpg)",
        "leadersBg": "url(/src/assets/images/dev/leaders.jpg)",
        "messagesBg": "url(/src/assets/images/dev/messages.jpg)",
        "partnersBg": "url(/src/assets/images/dev/partners.jpg)",
        "ibadan": "linear-gradient(rgba(0,0,0,0.95),rgba(0,0,0,0.95)), url(/src/assets/images/dev/ibadan.jpg)"
      },
      colors: {
        "darkblue": "rgba(0,0,24)",
        "lightblue" : "rgba(200,200,250)"
      }
    },
  },
  plugins: [],
}