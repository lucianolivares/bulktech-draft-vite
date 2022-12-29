import styled from 'styled-components'

export const PageContainer = styled.div`
  display: grid;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  padding-top: 4rem;
  }
`
export const Title = styled.h1`
  font-size: clamp(3rem, 4vw + 1rem, 5rem);
  text-align: center;
`

export const SubTitle = styled.h3`
  font-size: clamp(1.8rem, 4vw + 0.5rem, 3rem);
  color: white;
  text-align: center;
`

export const GridContainer = styled.div`
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin: 0 3rem 3rem 3rem;
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 0.5rem;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: fit;
    background-color: black;
  }
  p {
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    width: 15ch;
    text-align: center;
  }
  span {
    text-align: center;
  }
  button {
    background: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    padding: 0 1.5em;
    margin: 1rem 0;
    border: none;
    color: black;
    cursor: pointer;
    border-radius: 0.2rem;
    /* box-shadow: 1rem 1rem 2rem #000000; */
    :hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  font-size: clamp(1.2rem, 1vw + 0.2rem, 1.8rem);
  padding: 0 1.2em;
  border: none;
  color: black;
  cursor: pointer;
  margin: 1rem 0 1rem 0;
  border-radius: 0.2rem;
  /* box-shadow: 1rem 1rem 2rem #000000; */
  :hover {
    background: ${({ theme, white }) =>
      white ? 'white' : theme.colors.secondary};
    img {
    }
  }
`

export const FlexLayout = styled.div`
  margin: 1rem 0 0 0;
  line-height: 1;
  display: flex;
  gap: 1rem;
  svg {
    font-size: 1.5rem;
  }
`
