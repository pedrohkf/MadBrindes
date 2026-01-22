export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F4EFEA'
    })
  },
  plugins: [],
}