/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: [" Nunito", "sans-serif"],
        Lato: ["Lato", "sans-serif"]
      }
    },
  },
  
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}

