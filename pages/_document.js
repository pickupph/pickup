import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html prefix="og: https://ogp.me/ns#" lang="en">
        <Head />
        <body>

          {/**
           * 
           * Google tag manager implementation
           * There's another inside /components/templates/meta.js
           * 
           */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument