/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bedana: {
          red: '#8B0000',
          gold: '#D4AF37',
          black: '#1A1A1A',
        }
      },
      backgroundImage: {
        'ornament': "url('/ornament2.png')"
      }
    },
  },
  plugins: [],
}
