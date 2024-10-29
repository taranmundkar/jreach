import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'beige': {
          '50': '#FDFBF7',
          '100': '#F9F5E8',
          '200': '#F2E9CC',
          '300': '#EBDDB0',
          '400': '#E4D194',
          '500': '#DDC578',
          '600': '#D6B95C',
          '700': '#CFAD40',
          '800': '#C8A124',
          '900': '#AC8B1F',
        },
        'yellow': {
          '50': '#FFFDF5',
          '100': '#FFFBE6',
          '200': '#FFF7CC',
          '300': '#FFF2B3',
          '400': '#FFEE99',
          '500': '#FFE980',
          '600': '#FFE566',
          '700': '#FFE04D',
          '800': '#FFDC33',
          '900': '#FFD700',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

export default config