/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ===== The Impalia Project Brand Colors =====
        primary: {
          DEFAULT: '#FFFFFF', // Pure white as primary
          50: '#FFFFFF',
          100: '#FEFEFE',
          200: '#FDFDFD',
          300: '#FCFCFC',
          400: '#FAFAFA',
          500: '#FFFFFF',
          600: '#F5F5F5',
          700: '#E5E5E5',
          800: '#D4D4D4',
          900: '#A3A3A3',
          dark: '#F8F8F8', // Slightly off-white for contrast
          light: '#FFFFFF',
          hover: '#F9F9F9'
        },
        secondary: {
          DEFAULT: '#F11E7D', // Impalia pink
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#F11E7D',
          600: '#E91E63',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
          dark: '#C2185B',
          light: '#F472B6',
          hover: '#E91E63'
        },
        // ===== Neutral Colors for Text & Backgrounds =====
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        // ===== Legacy Colors (for reference) =====
        'impalia-legacy-primary': {
          DEFAULT: '#1F3A8A',
          light: '#3651A5',
          dark: '#152970',
          hover: '#18307A'
        },
        'impalia-legacy-secondary': {
          DEFAULT: '#3B81F6',
          light: '#5C97F8',
          dark: '#2A6BD7',
          hover: '#2A70E5'
        }
      },
      // ===== Ghana-Specific Spacing (Touch-Optimized) =====
      spacing: {
        'touch-min': '3rem', // 48px - minimum touch target
        'touch-safe': '4rem' // 64px - comfortable touch area
      },
      // ===== Impalia Project Styling =====
      borderRadius: {
        'impalia': '0.5rem' // Slightly more rounded for modern look
      },
      fontFamily: {
        'impalia': ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}