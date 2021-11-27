module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      background: {
        "gradientPrimary": "linear-gradient(to right, #33ccff, #ff99cc)",
      },
      borderColor: {
        "primary1": "#14c49b",
        "primary2": "#7d55ff",
        "secondary1": "#ffd603",
        "secondary2": "#ff4560",
        "secondary3": "#ff28a6",
        "secondary4": "#2641f1",
        "subHeader": "#131416",
      },
      colors: {
        "body": "#263238",
        "boxBody": "#263238",
        "boxSubHeader": "#263238",
        "heroBody": "#263238",
        "heroHeader": "#131416",
        "footerMenu": "#263238",
        "primary1": "#14c49b",
        "primary2": "#7d55ff",
        "secondary1": "#ffd603",
        "secondary2": "#ff4560",
        "secondary3": "#ff28a6",
        "secondary4": "#2641f1",
        "subHeader": "#131416",
      },
      fontFamily: {
        "primary": ['karla']
      },
      fontSize: {
        "fs-body": "24px",
        "fs-bodySM": "18px",
        "fs-bodyXXXS": "12px",
        "fs-bodyXS": "16px",
        "fs-boxBody": "20px",
        "fs-boxSubHeader": "32px",
        "fs-button": "14px",
        "fs-buttonLg": "20px",
        "fs-footerMenu": "16px",
        "fs-heroBody": "20px",
        "fs-heroHeader": "64px",
        "fs-heroHeaderSM": "40px",
        "fs-mainMenu": "16px",
        "fs-subHeader": "48px",
        "fs-subHeaderSM": "38px"
      },
      height: {
        "banner": "calc(100vh - (90px + 64px))",
        "buttonLg": "64px", 
        "header": "90px",
        "imageBoxMD": "242px",
        "imageBox": "310px"
      },
      maxWidth: {
        "127px": "127px",
        "narrowXS": "310px",
        "narrowSM": "464px"
      },
      minHeight: {
        "header": "90px",
        "boxXL": "550px"
      },
      screens: {
        "header": "1040px"
      },
      spacing: {
        "32px": "32px"
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['active'],
      filter: ['hover'],
      transitionProperty: ['hover']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
