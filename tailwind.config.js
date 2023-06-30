/** @type {import('tailwindcss').Config} */

import { domMax } from 'framer-motion';

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
        },

      },
      animation: {
        'wave': 'wave 8s linear infinite',

      },

    },

  },
  plugins: [],
}

