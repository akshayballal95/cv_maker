/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  // blocklist:['a4-1', 'education-header-child', 'contact-header', 'contact'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
}

