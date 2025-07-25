/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#D4AF37',
          dark: '#1a1a1a',
          light: '#f8f8f8',
        },
        accent: {
          cream: '#F5F5DC',
        },
        text: {
          dark: '#2c2c2c',
          light: '#666',
        }
      },
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        secondary: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'section': '100px',
      }
    },
  },
  plugins: [],
}
