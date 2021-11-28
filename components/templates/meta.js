import Head from 'next/head'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_IMAGE_DEFAULT } from '../../config/constants'

export default function Meta({ title, description, image }){
  return(
    <Head>

      {/**
       * 
       * Google tag manager implementation
       * There's another inside /_document.js
       * 
       */}
      {/* <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXX');`}} /> */}

      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>{ title ? title.replace(/&amp;/gi, "&" ) : SITE_TITLE }</title>
      <meta name="description" content={description || SITE_DESCRIPTION} />

      <link rel="shortcut icon" type="image/png" href="/favicon.png"/>

      <meta property="og:type" content="website" />
      <meta property="og:title" content={ title ? title.replace(/&amp;/gi, "&" ) : SITE_TITLE } />
      <meta property="og:description" content={description || SITE_DESCRIPTION} />
      <meta property="og:image" content={image || SITE_IMAGE_DEFAULT} />

    </Head>

  )
}