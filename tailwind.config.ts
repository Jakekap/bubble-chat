import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'red': '#F45F5F',
      'yellow': '#FFCC2B',
      'green-light': '#7ED321',
      'green': '#2ECC71',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': {
        'light': '#FAFAFC',
        'border': '#F3F3F7',
        'bubble': '#EFEFF4',
        'hover': '#696969',
        DEFAULT: '#AAAAAA',
      },
      'purple': '#8E44AD',
      'orange': '#E67E22',
      'blue': '#3498DB',
      'light-blue': '#EEF6FE',
      'dark-blue': '#34495e',
      'transparent-gray': 'rgba(105, 105, 105, 0.72)',
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
