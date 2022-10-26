/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'creditViolet':'#DA55F8',
      'incrementCreditViolet':'#605FE7',
      'tableHeaderBg':'#EBF2FE',
      'nameColor':'#616473'
    },
    extend: {},
  },
  plugins: [],
}
