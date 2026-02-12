/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Brand Colors for Shri Ayu Chikitsalay
        saffron: {
          DEFAULT: '#F97316', // Main Saffron (Tailwind Orange-500)
          light: '#FDBA74',   // Lighter shade for hovers
          dark: '#EA580C',    // Darker shade for active states
        },
        'ayur-green': {
          DEFAULT: '#166534', // Deep Herbal Green (Tailwind Green-800)
          light: '#86EFAC',   // Sage/Mint Green for backgrounds
          dark: '#14532D',    // Very dark green for text/footer
        },
        'ayur-white': '#FAFAFA', // Soft off-white for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean modern font for body text
        serif: ['Merriweather', 'serif'], // Elegant font for headings
      },
    },
  },
  plugins: [],
}