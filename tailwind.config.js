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
        'body-color': '#504d71',
        'black-900_02': '#020100',
		'black_900': '#1b1000',
        'black_900_00': '#00000000',
        'black_900_01': '#050300',
        'red_a700_99': '#ff0a0a99',
        'red_a700_01': '#FF0404',
		'red_900': '#a30000',
        'red_a700': '#ff3030',
        'blue-gray_100_19': '#d9d9d919',
		'blue-gray_100': '#d9d9d9'
    },

      backgroundImage: {
        'hero-pattern': "url('./media/Landing page.JPG'), linear-gradient(to bottom, rgba(2, 1, 0, 0.8), rgba(5, 3, 0, 0.3))",
        'games-pattern': "url('./media/OBSKLD0.jpg')",
        'blaq-grad': "linear-gradient(84.32deg, #060400 60.01%, #363636 99.29%)",
        'button-grad': "linear-gradient(90deg, #FF0404 0%, #FEFCF7 100%)"
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
