/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'header-color': '#2E1A47',
        'header-color_btn': '#6e57e0',
        'deep-purple': '#2E1A47',
        'turqoise': '#40E0D0',
        'body-color': '#504d71'
    },

      backgroundImage: {
        'hero-pattern': "url('./media/Landing page.JPG'), linear-gradient(to bottom, rgba(168, 85, 247, 0.3), rgba(49, 46, 129, 0.3))",
        'games-pattern': "url('./media/OBSKLD0.jpg')"
      },

      keyframes: {
        imgFloat: {
          '50%': {transform: 'translateY(10px)'}
        }
      },

      animation: {
        'moving': 'imgFloat 7s ease-in-out infinite'
      }
  },
  plugins: [],
}
}
