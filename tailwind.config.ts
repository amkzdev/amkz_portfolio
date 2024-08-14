/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  variants: ['dark'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Montserrat'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        'dark-primary': '#F8E620',
        'content-dark':'#1C1E1F',
        'frame-dark':'#28272A',
        'primary-blue-old':'#035BBC',

        'content-light':'#fff',
        'light-primary':'#005B96',
        'frame-light':'#f4f2ee',
        'blue-1':'#03396C',
        'blue-2':'#011F4B'

      }

    }
  },
  plugins: [],
}

