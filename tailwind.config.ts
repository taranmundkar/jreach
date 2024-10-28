import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDFBF7',
          100: '#F9F5E8',
        },
        yellow: {
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
        },
      },
    },
  },
  plugins: [],
}

export default config