import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Covid 19 | Murilio dev</title>

          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="hostname" content="covid.murilio.com.br" />
          <meta name="author" content="Murilio dev" />
          <meta name="description" content="Acompanhe em tempo real o avanço do covid pelo mundo e a vacinação contra ele" />
          <meta name="google" content="notranslate" />
          <meta name="keywords" content="React, Node JS, JavaScript" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="image" content="https://covid.murilio.com.br/covid.jpg" />

          <meta property="og:url" content="https://covid.murilio.com.br" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Covid 19 | Murilio dev" />
          <meta property="og:description" content="Acompanhe em tempo real o avanço do covid pelo mundo e a vacinação contra ele" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Murilio Dev" />
          <meta property="og:image" content="https://covid.murilio.com.br/covid.jpg" />
          <meta property="og:image:secure_url" content="https://covid.murilio.com.br/covid.jpg" />
          <meta property="og:image:alt" content="Acompanhe em tempo real o avanço do covid pelo mundo e a vacinação contra ele" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="600" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Covid 19 | Murilio dev" />
          <meta name="twitter:site" content="@Murilio20" />
          <meta name="twitter:creator" content="@Murilio20" />
          <meta name="twitter:image" content="https://covid.murilio.com.br/covid.jpg" />
          <meta name="twitter:image:src" content="https://covid.murilio.com.br/covid.jpg" />
          <meta name="twitter:image:alt" content="title" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:description" content="Acompanhe em tempo real o avanço do covid pelo mundo e a vacinação contra ele" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
            rel="stylesheet"
            as="style"
            // @ts-ignore
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" /></noscript>

          <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=swap"
            rel="stylesheet"
            // @ts-ignore
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=swap" /></noscript>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src='https://www.googletagmanager.com/gtag/js?id=G-058EHNM41T' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-058EHNM41T', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
