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
        'yellow-primary': '#F8E620',
        'content-black':'#1C1E1F',
        'frame-black':'#28272A',
        'primary-blue':'#035BBC'

      }

    }
  },
  plugins: [],
}

