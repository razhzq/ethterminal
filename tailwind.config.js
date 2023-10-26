/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        tiltNeon: "tiltNeon"
      },
      colors: {
        berkeley: '#1D3557',
        honeyDew: '#F1FAEE',
        battleGrey: '#90958f',
        blackNight: '#141614',
        cardinGreen: '#0C1A1A',
        cardingGreenLight: '#1E4545',
        containerGreen: '#173939',
        bullGreen: '#8BD74F',
        bearRead: '#D82910',
        downyTeal: '#6ACFC7',
        purpleMenu: '#5A3E93',
        glossyBlack: '#0E1111',
      },
      backgroundImage: {
        'EthereumTerminal': "url('src/assets/background.png')"
      }
    },
    
  },
  plugins: [],
}

