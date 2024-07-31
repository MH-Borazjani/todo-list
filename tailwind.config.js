/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        anton:["Anton", "sans-serif"],
        roboto:["Roboto", "sans-serif"]
      },
      colors:{
        "white-project":"#F7F7F7",
        "purple-project":"#6C63FF"
      }
    },
    container:{
      center:true
    }
  },
  plugins: [],
}

