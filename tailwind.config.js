module.exports = {
  purge: {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js',
      './plugins/**/*.ts',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Nunito', sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
}
