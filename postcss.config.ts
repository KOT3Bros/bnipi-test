import type { Config } from 'postcss-load-config'

export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'autoprefixer': {},
  },
} satisfies Config
