/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        64: '16rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
