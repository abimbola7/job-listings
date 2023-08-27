/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors :{
        desatDarkCyan : "hsl(180, 29%, 50%)",
        lightCyanFilter : "hsl(180, 31%, 95%)",
        darkCyan : "hsl(180, 8%, 52%)",
        veryDarkCyan : "hsl(180, 14%, 20%)",
        grayishCyan : "hsl(180, 52%, 96%)"
      }
    },
    screens: {      
      'xs': '500px',
      // => @media (min-width: 475px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

