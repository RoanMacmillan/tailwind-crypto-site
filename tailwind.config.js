/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#23A469',
        'custom-teal': '#2CB791',
        'custom-light': '#E6F9F4',
      },
      fontFamily: {
        custom: ['Poppins', 'system-ui', 'sans-serif'],
        // You can also specify other font families here
      },
    },
  },
  plugins: [],
};


