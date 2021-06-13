import { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/Global'

export default function Application ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
