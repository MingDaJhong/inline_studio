/** @type {import('tailwindcss').Config} */
// get space unit
const space = () => {
  const unit = 2.5
  const result = {}

  for (let i = 1; i <= 100; i++) {
    result[i] = `${unit * i}px`
  }

  return result
}

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      'dark-gray': '#D6D0D0',
      'light-gray': '##C7C7C7',
      blue: '#E0E5EE',
      error: '#DD6262'
    },
    borderRadius: {
      sm: '5px',
      DEFAULT: '10px',
      medium: '20px',
      large: '30px',
      full: '50%'
    },
    extend: {
      margin: space(),
      space: space(),
      spacing: space(),
      boxShadow: {
        DEFAULT: '0 0 4px 0 #ebd9c0'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
      '4xl': '2300px'
    }
  },
  // default load class
  safelist: [
    {
      pattern: /(grid-rows|grid-cols)-(1|2|3|4)/
    },
    {
      pattern: /(bg|text)-(.*)/
    }
  ],
  plugins: []
}
