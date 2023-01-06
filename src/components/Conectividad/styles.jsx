import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 4rem;
  margin-top: 0.8rem;
  padding-top: 1rem;
  background: rgb(1,2,26);
  background: linear-gradient(90deg, rgba(1,2,26,1) 0%, rgba(2,6,86,1) 50%, rgba(1,2,26,1) 100%);
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
    padding-inline: 2rem;
  }
  `

export const Description = styled.p`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  max-width: 25rem;
  font-weight: 400;
  text-align: center;
  `

export const LinkLabel = styled(NavLink)`
  color: ${({ theme }) => theme.colors.links};
  text-decoration: none;
  padding-bottom: 2rem;
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
    height: 320px;
    object-fit: scale-down;
    @media screen and (max-width: 768px) {
      height: 180px;
    }
  `
export const GradientTitle = styled.h1`
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43); 
  font-weight: 500;
  font-size: clamp(2rem, 8vw, 3.5rem);
  padding-bottom: 1rem;
  padding-top: 1rem;
  line-height: 100%;
  text-align: center;
`
