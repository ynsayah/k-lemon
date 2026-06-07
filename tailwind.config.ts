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
        calamansi: {
          50:  '#f7fce8',
          100: '#ecf6c7',
          200: '#d5ec92',
          300: '#b8dd55',
          400: '#9bcc25',
          500: '#7aad16',
          600: '#5d8910',
          700: '#476a0f',
          800: '#3a5411',
          900: '#314712',
          950: '#172706',
        },
        citron: {
          50:  '#fefde8',
          100: '#fffac2',
          200: '#fff287',
          300: '#ffe443',
          400: '#ffd010',
          500: '#f0b804',
          600: '#cf8e01',
          700: '#a46504',
          800: '#874f0b',
          900: '#73410f',
          950: '#432204',
        },
        terre: {
          50:  '#faf7f2',
          100: '#f2ece0',
          200: '#e3d5bc',
          300: '#d0b992',
          400: '#be9a6a',
          500: '#b0834f',
          600: '#9a6d43',
          700: '#7f5739',
          800: '#684834',
          900: '#573d2d',
          950: '#2e1e16',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'slide-in':   'slideIn 0.5s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideIn: { from: { opacity: '0', transform: 'translateX(-20px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      typography: (theme: (arg: string) => string) => ({
        calamansi: {
          css: {
            '--tw-prose-body':         theme('colors.terre.800'),
            '--tw-prose-headings':     theme('colors.terre.900'),
            '--tw-prose-links':        theme('colors.calamansi.600'),
            '--tw-prose-bold':         theme('colors.terre.900'),
            '--tw-prose-quotes':       theme('colors.terre.700'),
            '--tw-prose-quote-borders':theme('colors.calamansi.300'),
            '--tw-prose-code':         theme('colors.calamansi.700'),
            h1: { fontFamily: (theme('fontFamily.display') as unknown as string[]).join(', '), fontWeight: '700' },
            h2: { fontFamily: (theme('fontFamily.display') as unknown as string[]).join(', '), fontWeight: '600' },
            h3: { fontFamily: (theme('fontFamily.display') as unknown as string[]).join(', '), fontWeight: '600' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
