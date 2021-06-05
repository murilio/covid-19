import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-purple: #6236FF;
    --color-red: #F9345E;
    --color-green: #1CB142;
    --color-orange: #FA6400;
    --color-blue-dark: #1A1053;
    --color-gray-dark: #917C9B;
    --color-gray: #F1F3FB;
    --color-white: #FFF;
  }
  ::selection {
    background: var(--color-purple);
    color: var(--color-gray);
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--color-white);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-red);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-purple);
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  html, body, #__next {
    min-height: 100vh;
    scrollbar-width: thin;
    scroll-behavior: smooth;
    background-color: var(--color-gray);
    scrollbar-color: var(--color-red) transparent;
  }
  body {
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: var(--color-blue-dark);
  }
  input, button, textarea {
    font-family: 'Poppins', sans-serif;
  }
  a {
    text-decoration: none;
    color: var(--color-purple);
  }
`
