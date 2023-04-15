/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'amkz-yellow': '#F6E71D',
      }

    }
  },
  plugins: [],
}

