import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Baby pink & white palette
        pearl: '#FAF9F6',
        white: '#FFFFFF',
        'baby-pink-light': '#FFF0F5',
        'baby-pink': '#FCE4EC',
        'baby-pink-medium': '#F8BBD0',
        'rose-pink': '#F48FB1',
        'rose-gold': '#D48C9E',
        'rose-gold-dark': '#B76E79',
        'charcoal-rose': '#2E2428',
        'muted-plum': '#644D56',
        // Legacy silver accents
        champagne: '#F3E8EA',
        silver: '#D1C2C7',
        platinum: '#F5ECF0',
        charcoal: '#2E2428',
        gold: '#D48C9E',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Great Vibes', 'cursive'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'petal-fall': 'petalFall 8s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
