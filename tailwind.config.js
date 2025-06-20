// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",      
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1959AC",
        secondary: "#0546D2",
        text: "#222222",
      },
      fontFamily: {
        heading: ["Roboto Condensed", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
