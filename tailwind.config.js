/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wwdark: '#140033',
        wwpurple: '#827191',
        wwlight: '#e6e6ff',
      },
      height: {
        "1/7": "14.3%",
        "1/8": "12.5%",
        "5/7": "70%"
      },
      fontSize: {
        "1-1/2rem": "1.75rem"
      },
      borderRadius: {
        "15px": "15px"
      },
      borderWidth: {
        "3": "3px"
      }
    },
  },
  plugins: [],
}

