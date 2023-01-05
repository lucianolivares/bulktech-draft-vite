import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 4rem;
  padding-top: 4rem;
  @media screen and (max-width: 920px) {
    padding-inline: 0;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const TextWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 920px) {
    padding-inline: 2rem;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: clamp(2.5rem, 12vw, 5rem);
  padding-bottom: 1rem;
  padding-top: 1rem;
  line-height: 100%;
  text-align: center;
  `

export const Description = styled.p`
  display: flex;
  font-size: 1.1rem;
  padding-bottom: 1rem;
  max-width: 30rem;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 920px) {
    font-size: 1rem;
  }
  `

export const LinkLabel = styled(NavLink)`
  color: blue;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration:underline;
  }
  `

export const ImgWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
  `
export const Img = styled.img`
    max-height: 25rem;
    max-width: 100%;
    object-fit: scale-down;
  `
