/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    screens: {
      'xs': '320px',     // Extra small devices
      'sm': '640px',     // Small devices
      'md': '768px',     // Medium devices
      'lg': '1024px',    // Large devices
      'xl': '1280px',    // Extra large devices
      '2xl': '1536px',   // 2X large devices
    },
    extend: {
      colors:{
        'd_color':'#36454F'
      }
    },
  },
  plugins: [],
});

