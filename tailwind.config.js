module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        gradientPrimary: "linear-gradient(to right, #33ccff 0%, #ff99cc 100%)",
        primary1: "#14c49b",
        primary2: "#7d55ff",
        secondary1: "#ffd603",
        secondary2: "#ff4560",
        secondary3: "#ff28a6",
        secondary4: "#2641f1",
        subHeader: "#131416",
      },
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
        bodySM: "18px",
        boxBody: "20px",
        boxSubHeader: "32px",
        button: "14px",
        buttonLg: "20px",
        footerMenu: "16px",
        heroBody: "20px",
        heroHeader: "64px",
        heroHeaderSM: "40px",
        mainMenu: "16px",
        subHeader: "48px",
        subHeaderSM: "38px"
      },
      height: {
        banner: "calc(100vh - (90px + 64px))",
        buttonLg: "64px", 
        header: "90px",
        imageBoxMD: "242px",
        imageBox: "310px"
      },
      maxWidth: {
        "127px": "127px",
        "narrowXS": "310px",
        "narrowSM": "464px"
      },
      minHeight: {
        header: "90px",
        boxXL: "550px"
      },
      screens: {
        header: "1040px"
      },
      spacing: {
        "32px": "32px"
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['active'],
    },
  },
  plugins: [],
}
