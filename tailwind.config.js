module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#f3f4f6',
        'secondary': '#e5e7eb',
        'accent': '#1f2937',
        'light': '#ffffff',
        'dark': '#000000'
      },
      boxShadow: {
        'glass': '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)'
      },
      fontFamily: {
        'sans': ['UI-Sans-Serif', 'system-ui']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
}