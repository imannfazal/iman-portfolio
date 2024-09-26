/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'regal-blue': '#243c5a',
      'second': '#380733',
      'first': '#7F7070',

    },
    // fontFamily: {
    //   'sans': ['ui-sans-serif', 'system-ui',],
    //   'serif': ['ui-serif', 'Georgia', ],
    //   'mono': ['ui-monospace', 'SFMono-Regular'],
    //   'display': ['Oswald'],
    //   'body': ['"Open Sans"'],
    // },
    extend: {},
  },
  plugins: [],
}
