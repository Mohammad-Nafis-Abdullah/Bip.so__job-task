module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:'#161b1d'
      }
    },
  },
  plugins: [require("daisyui")],
}