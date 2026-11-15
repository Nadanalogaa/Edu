/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./main.tsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // The school's brand colour (see utils/brand.ts); defaults are Tailwind's indigo, violet and fuchsia
        indigo: { 50: 'rgb(var(--brand-50) / <alpha-value>)', 100: 'rgb(var(--brand-100) / <alpha-value>)', 200: 'rgb(var(--brand-200) / <alpha-value>)', 300: 'rgb(var(--brand-300) / <alpha-value>)', 400: 'rgb(var(--brand-400) / <alpha-value>)', 500: 'rgb(var(--brand-500) / <alpha-value>)', 600: 'rgb(var(--brand-600) / <alpha-value>)', 700: 'rgb(var(--brand-700) / <alpha-value>)', 800: 'rgb(var(--brand-800) / <alpha-value>)', 900: 'rgb(var(--brand-900) / <alpha-value>)', 950: 'rgb(var(--brand-950) / <alpha-value>)' },
        violet: { 50: 'rgb(var(--accent-50) / <alpha-value>)', 100: 'rgb(var(--accent-100) / <alpha-value>)', 200: 'rgb(var(--accent-200) / <alpha-value>)', 300: 'rgb(var(--accent-300) / <alpha-value>)', 400: 'rgb(var(--accent-400) / <alpha-value>)', 500: 'rgb(var(--accent-500) / <alpha-value>)', 600: 'rgb(var(--accent-600) / <alpha-value>)', 700: 'rgb(var(--accent-700) / <alpha-value>)', 800: 'rgb(var(--accent-800) / <alpha-value>)', 900: 'rgb(var(--accent-900) / <alpha-value>)', 950: 'rgb(var(--accent-950) / <alpha-value>)' },
        fuchsia: { 50: 'rgb(var(--pop-50) / <alpha-value>)', 100: 'rgb(var(--pop-100) / <alpha-value>)', 200: 'rgb(var(--pop-200) / <alpha-value>)', 300: 'rgb(var(--pop-300) / <alpha-value>)', 400: 'rgb(var(--pop-400) / <alpha-value>)', 500: 'rgb(var(--pop-500) / <alpha-value>)', 600: 'rgb(var(--pop-600) / <alpha-value>)', 700: 'rgb(var(--pop-700) / <alpha-value>)', 800: 'rgb(var(--pop-800) / <alpha-value>)', 900: 'rgb(var(--pop-900) / <alpha-value>)', 950: 'rgb(var(--pop-950) / <alpha-value>)' },
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      animation: {
        'blob': 'blob 20s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -50px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '75%': {
            transform: 'translate(50px, 50px) scale(1.05)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
