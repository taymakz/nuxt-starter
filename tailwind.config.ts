import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1380px',
      },
      boxShadow: {
        base: '0px 1px 10px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        25: '6.25rem',
        50: '12.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem',
        },
      },
      animation: {
        'border-width': 'border-width 1s forwards',
        'border-width-reverse': 'border-width-reverse 1s forwards',
      },
      keyframes: {
        'border-width': {
          from: {
            width: '0',
            opacity: '0',
          },
          to: {
            width: '100%',
            opacity: '1',
          },
        },
        'border-width-reverse': {
          from: {
            width: '100%',
            opacity: '1',
          },
          to: {
            width: '0',
            opacity: '0',
          },
        },

      },
      colors: {
        white: '#FEFEFF',
        black: '#0D0D0D',
      },
      fontFamily: {
        iranyekan: 'IRANYekan',
      },
    },
  },
}
