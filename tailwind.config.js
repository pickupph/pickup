module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        body: "#263238",
        boxBody: "#263238",
        boxSubHeader: "#263238",
        heroBody: "#263238",
        heroHeader: "#131416",
        footerMenu: "#263238",
        primary1: "#14c49b",
        primary2: "#7d55ff",
        secondary1: "#ffd603",
        secondary2: "#ff4560",
        secondary3: "#ff28a6",
        secondary4: "#2641f1",
        subHeader: "#131416",
      },
      fontFamily: {
        primary: ['karla']
      },
      fontSize: {
        body: "24px",
        boxBody: "20px",
        boxSubHeader: "32px",
        button: "14px",
        footerMenu: "16px",
        heroBody: "20px",
        heroHeader: "64px",
        mainMenu: "16px",
        subHeader: "48px"
      },
      height: {
        header: "90px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
