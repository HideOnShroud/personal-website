/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayNav: '#1B2024',
        testBg: "#001220"
      },
      fontFamily: {
        pixel: "'VT323',monospace"
      },
      keyframes: {
        'wave': {
          '0%': { transform: 'translateX(0%)', transform: 'translateY(0%)' },
          '50%': { transform: 'translate(-25%,10%)' },
          '100%': {
            transform: 'translate(-50%,0%)'
          },
          'typing': {
            '0%': { transform: 'translateX(0ch)' },
            '5%, 10%': { transform: 'translateX(1ch)' },
            '15%, 20%': { transform: 'translateX(2ch)' },
            '25%, 30%': { transform: 'translateX(3ch)' },
            '35%, 40%': { transform: 'translateX(4ch)' },
            '45%, 50%': { transform: 'translateX(5ch)' },
            '55%, 60%': { transform: 'translateX(6ch)' },
            '65%, 70%': { transform: 'translateX(7ch)' },
            '75%, 80%': { transform: 'translateX(8ch)' },
            '85%, 90%': { transform: 'translateX(9ch)' },
            '95%, 100%': { transform: 'translateX(11ch)' },


          }
        }
      },
      animation: {
        'wave': 'wave 8s linear infinite',
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
    },

  },
  plugins: [],
}

