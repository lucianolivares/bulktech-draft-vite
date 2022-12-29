import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 4vw;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.gray};
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: transparent;
  h1 {
    color: black;
  }

  li {
    height: 100%;
    font-weight: 400;
    text-align: center;
    font-size: 1.6rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
      &:hover {
        border: none;
      }
    }
  }
`

export const NavMenu = styled.ul`
  font-size: 1rem;
  display: flex;
  gap: 1em;
  transition: all 0.3s linear;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    width: 50%;
    top: 5rem;
    position: absolute;
    right: ${({ showNavMenu }) => (showNavMenu ? '0%' : '-50%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.colors.bg_color};
  }
`

export const Logo = styled.img`
  height: 3.5rem;
  object-fit: scale-down;
`
export const FontLogo = styled.h2`
  cursor: pointer;
  color: #000;
`

export const LinksLabel = styled(NavLink)`
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: #000;
  font-size: 1.3rem;
  &.active {
    color: ${({ theme }) => theme.colors.seguridad};
    transition: 0.1s ease-in-out;
  }
  :hover {
    color: ${({ theme }) => theme.colors.seguridad};
  }
`

export const BurgerIcon = styled.div`
  color: #000;
  display: none;
  :hover {
    color: ${({ theme }) => theme.colors.seguridad};
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    display: flex;
    cursor: pointer;
  }
`
