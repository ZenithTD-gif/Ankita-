/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#fce7f0',
          'pink-hover': '#fbcfe8',
          blush: '#ffe4e6',
          peach: '#fff1ec',
          rose: '#f4a5ae',
        },
        cream: {
          50: '#fffdfa',
          100: '#fefcf8',
          200: '#fdf8f0',
          300: '#faf2e6',
          400: '#f3e8d8',
        },
        dusty: {
          light: '#e2a9b0',
          rose: '#c08081',
          deep: '#9c5963',
          dark: '#7e424c',
        },
        champagne: {
          light: '#fbf4dc',
          gold: '#e6ca65',
          metallic: '#c5a059',
          dark: '#9a7632',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        handwritten: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(192, 128, 129, 0.12)',
        'glass-hover': '0 16px 48px 0 rgba(192, 128, 129, 0.22)',
        'polaroid': '0 12px 30px -10px rgba(156, 89, 99, 0.18), 0 4px 10px -2px rgba(156, 89, 99, 0.08)',
        'polaroid-hover': '0 25px 45px -10px rgba(156, 89, 99, 0.28), 0 10px 20px -3px rgba(156, 89, 99, 0.12)',
        'gold-glow': '0 0 25px rgba(230, 202, 101, 0.45)',
        'rose-glow': '0 0 25px rgba(244, 165, 174, 0.45)',
        'envelope': '0 20px 50px rgba(156, 89, 99, 0.2), 0 5px 15px rgba(0,0,0,0.05)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
