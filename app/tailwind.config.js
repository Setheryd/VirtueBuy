/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
      extend: {
        boxShadow: {
          'neon': '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)',
          'neon-dark': '0 0 10px rgba(147, 51, 234, 0.8), 0 0 20px rgba(147, 51, 234, 0.6), 0 0 30px rgba(147, 51, 234, 0.4)',
        },
        animation: {
          'pulse-glow': 'pulse-glow 2s infinite',
          'fade-slide': 'fade-slide 1s ease-out',
        },
        keyframes: {
          'pulse-glow': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.7 },
          },
          'fade-slide': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  };