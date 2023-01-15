import styled from 'styled-components'

export const PageContainer = styled.div`
  display: grid;
  min-height: 80vh;
  width: 100%;
  background-color: white;
  padding-top: 48px;
  .working {
    text-align: center;
  }
`

export const Title = styled.h1`
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43); 
  font-weight: 500;
  font-size: clamp(2rem, 8vw, 3.5rem);
  padding: 1rem;
  line-height: 100%;
  text-align: center;
`
