/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'plints-bc': '#DAD7CD','plints-ft':'#588157','plints-hovr':'#3A5A40' ,'plints-hovre':'#344E41'
      },
    },
  },
  plugins: [],
}