module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-gray-500': '#303544',
        'text-gray-200': '#d8dae3',
        'black-rgba': 'rgba(0, 0, 0, 0.2)',
        'white-rgba': 'rgba(255, 255, 255, 0.1)',
        'fixed': 'scale(0.8)',
        'template': '35% 50¨%',
        'gradient': 'linear-gradient(141.51deg, #9C27B0 -18.34%, #651FFF 66.03%);'
      },
      fontFamily: {
        'play-fair': ['"Playfair Display"', 'cursive']
      }
    },
  },
  plugins: [],
}