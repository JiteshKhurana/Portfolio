import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#dfe5f2',
        main: '#88aaee',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        base: '4px -4px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '-4px',
      },
      fontWeight: {
        base: '400',
        heading: '600',
      },
      screens: {
        w450: { raw: '(max-width: 450px)' },
      },
    },
  },
  plugins: [],
}
export default config
