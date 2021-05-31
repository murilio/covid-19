import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #f14d9c;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(83, 76, 206);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
    height: 100%;
  }

  body {
    font-family: 'Mukta', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #333;
  }

  input, button, textarea {
    font-family: 'Mukta', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
