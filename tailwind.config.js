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
          50: '#f0f9fb',
          100: '#daf0f4',
          200: '#b8e3ec',
          300: '#88cedd',
          400: '#52b1c7',
          500: '#2f94ad',
          600: '#22778f',
          700: '#1f6074',
          800: '#1f4f60',
          900: '#1c4352',
          950: '#0e2a35',
        },
        teal: {
          50: '#eefcfa',
          100: '#d4f7f1',
          200: '#aaeee3',
          300: '#73dfd1',
          400: '#3fc6b8',
          500: '#22a99c',
          600: '#19897f',
          700: '#196e67',
          800: '#195854',
          900: '#184a47',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(20, 80, 100, 0.08)',
        card: '0 8px 30px -8px rgba(20, 80, 100, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
