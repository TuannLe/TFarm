/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#059669',
        'backgroundColor':'#F5F5F5',
        'borderColor': '#D1D5DB',
        'hoverBColor': '#059669db',
        'textGray': '#6B7280',
        'secondColor': '#E6FBD6',
        'priceColor': '#FF424E',

        'thirdColor': '#7FE5E3',
        'accentColor': '#f8992b',
      },
    },
  },
  plugins: [],
}

