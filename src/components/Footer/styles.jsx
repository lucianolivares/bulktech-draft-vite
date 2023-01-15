import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.navcolor};
  padding-block: 1rem 1rem;
  padding-inline: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`

export const FooterContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 768px) {
    justify-content: end;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoStyled = styled(Logo)`
  height: 40px;
  width: 38px;
  fill: ${({ theme }) => theme.colors.white};
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const Title = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Unbounded', cursive;
  font-weight: 400;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  opacity: 0.8;
  text-decoration: none;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 0.8rem;
  b {
    font-family: 'Unbounded', cursive;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
  }
`
