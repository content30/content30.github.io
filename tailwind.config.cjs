/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Direct hex code mappings requested
        'primary_dark_green': '#1D4533',
        'background_cream': '#F7EAE0',
        'accent_peach': '#F9D2BA',
        'secondary_brown': '#5E3122',

        // Clean shorthand names
        'dark-green': '#1D4533',
        'cream': '#F7EAE0',
        'peach': '#F9D2BA',
        'brown': '#5E3122',

        // Comprehensive design system tokens
        c30: {
          green: '#1D4533',
          greenHover: '#163628',
          greenLight: '#2A5E46',
          cream: '#F7EAE0',
          creamDark: '#EDE0D5',
          creamLight: '#FCF8F5',
          peach: '#F9D2BA',
          peachHover: '#F4BE9F',
          peachLight: '#FDF2EB',
          peachDark: '#E4B598',
          brown: '#5E3122',
          brownHover: '#4C271B',
          brownLight: '#7E422F',
          // Dark mode inverted palette
          dark: {
            bg: '#0F1D16',
            surface: '#172C22',
            card: '#1F3A2E',
            cardHover: '#264839',
            border: '#2A4E3E',
            text: '#F7EAE0',
            textMuted: '#B8C9C1',
            accent: '#F9D2BA'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'clean': '0 2px 10px rgba(29, 69, 51, 0.06)',
        'clean-hover': '0 8px 24px rgba(29, 69, 51, 0.12)',
        'dark-clean': '0 4px 20px rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
};
