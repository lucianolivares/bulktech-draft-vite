import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: black;
    scroll-behavior: smooth;
  } 

  h1, h2{
    font-family: 'Unbounded', cursive;
  }
  `
export default GlobalStyle
