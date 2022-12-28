import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Unbounded', cursive;
    color: black;
    scroll-behavior: smooth;
  } 

  h1,
  button {
    color: black;
  }

  p, span, {
      font-family: 'Poppins', sans-serif;
      color: white;
  }
  `
export default GlobalStyle
