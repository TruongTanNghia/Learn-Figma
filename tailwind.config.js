module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f5f5f5",
          400: "#b6b6b6",
          500: "#9b9b9b",
          600: "#707070",
        },
        black: { 900: "#000000", "900_42": "#00000042" },
        blue: { 800: "#1b78ba", A200: "#4285f4", "800_01": "#1979bb" },
        white: { A700: "#ffffff" },
        indigo: { 600: "#3c5a9a" },
      },
      fontFamily: { cocogoose: "COCOGOOSE", sourcesanspro: "Source Sans Pro" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
