import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        paper: '#f0efe9',
        ink: {
          DEFAULT: '#1a1a18',
          muted: '#6b6b63',
          faint: '#c4c3bb',
        },
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 5rem)', { fontWeight: '900' }],
      },
    },
  },
} satisfies Config
