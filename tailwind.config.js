/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#E91E63',
        'pink-deep': '#B0124D',
        'gold': '#FFD700',
        'gold-deep': '#A8820E',
        'champagne': '#D4AF37',
        'plum': '#4A0E2E',
        'plum-deep': '#2A0519',
        'plum-deeper': '#2A0519',
        'pump-black': '#0A0A0A',
        'cream': '#FFF9F0',
        'paper': '#F5E8D0',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        bonheur: ['"Bonheur Royale"', 'cursive'],
        courier: ['"Courier Prime"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
};
