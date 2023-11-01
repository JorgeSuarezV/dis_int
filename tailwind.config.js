/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': [
          '0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
          '0px 4px 8px 3px rgba(0, 0, 0, 0.15)'
        ]
      }
    }
  },
  plugins: [],
}

