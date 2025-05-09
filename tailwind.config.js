/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        'gray-950': '#111111',
        'gray-900': '#151515',
        'gray-800': '#1E1E1E',
        'gray-700': '#2D2D2D',
        'gray-600': '#3D3D3D',
        'gray-500': '#646464',
        'gray-400': '#969696',
        'gray-300': '#CFCFCF',
        'gray-200': '#E8E8E8',
        'gray-100': '#F5F5F5',
        primary: '#6E56F5',
        secondary: '#14B8A6',
        accent: '#F13C77',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      gridTemplateColumns: {
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};