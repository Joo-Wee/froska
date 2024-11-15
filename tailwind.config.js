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
        'body-color': '#9e96eb'
    },

      backgroundImage: {
        'hero-pattern': "url('./media/purple_dark_blue_turquoise_blue_square_shapes_art_pattern_4k_hd_abstract.png')",
        'games-pattern': "url('./media/OBSKLD0.jpg')"
      }
  },
  plugins: [],
}
}
