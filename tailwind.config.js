/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1F1F1F", //document component bg
          secondary: "#171717", //specific component bg
          //buttons
        },
        "btn-blue": "#004CBB",
        //btn for dark mode
        formLightBorder: "DADCE0",
        //dark form border
      },

      width: {
        "dark-roast": "32rem",
        "medium-roast": "24rem",
        "light-roast": "16rem",
        "espresso-roast": "14rem",
      },
    },
  },
  plugins: [],
};
