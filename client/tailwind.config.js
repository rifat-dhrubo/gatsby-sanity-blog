/* eslint-disable global-require */
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--color-primary)',
        neonPink: 'var(--neon-pink)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--color-primary)',
        neonPink: 'var(--neon-pink)',
      },
      colors: {
        neonPink: 'var(--neon-pink)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
