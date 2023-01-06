import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 4rem;
  padding-top: 1rem;
  margin-top: 0.8rem;
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
