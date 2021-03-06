import Head from 'next/head'

import CardCases from './CardCases'
import Title from './Title'

import styled from 'styled-components'

export default function Header () {
  return (
    <>
      <Head>
        <title>Covid 19 | Murilio dev</title>

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
      </Head>

      <Container>
        <Title />
        <CardCases />
      </Container>
    </>
  )
}

export const Container = styled.section`
  display: grid;
  gap: 50px;
`
