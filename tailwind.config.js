/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0a0a0a',
          text: '#e4e4e4',
          accent: '#a0a0a0',  // Changed from lime green to light gray
          secondary: '#8892b0',
          green: '#e4e4e4',   // Changed from green to white
          darkGray: '#1a1a1a',
          mediumGray: '#2a2a2a',
          lightGray: '#3a3a3a',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        blink: 'blink 1.2s step-start infinite',
        typing: 'typing 3.5s steps(40, end)',
        fadeIn: 'fadeIn 0.8s ease-in-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      transitionTimingFunction: {
        'terminal': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};