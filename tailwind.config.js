/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'cart-one': 'rgba(96, 71, 236, 0.1);',
    },
  },
  plugins: [require("daisyui")],
}

