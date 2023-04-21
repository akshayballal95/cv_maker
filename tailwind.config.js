/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  // blocklist:['a4-1', 'education-header-child', 'contact-header', 'contact'],
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

