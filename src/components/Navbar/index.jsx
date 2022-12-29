import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
  BurgerIcon,
  FlexContainer,
  Logo,
  LinksLabel,
  NavbarContainer,
  NavMenu
} from './styles'
import logo from '../../assets/logo_ia.png'

function Navbar () {
  const [showNavMenu, setShowNavMenu] = useState(false)

  const handleClick = () => setShowNavMenu(!showNavMenu)

  return (
    <NavbarContainer>
      <FlexContainer>
        <LinksLabel to='/'>
          <Logo src={logo} alt='Logo' />
        </LinksLabel>
      </FlexContainer>

      <FlexContainer>
        <BurgerIcon onClick={handleClick}>
          {showNavMenu ? <FaTimes /> : <RxHamburgerMenu />}
        </BurgerIcon>
        <NavMenu
          showNavMenu={showNavMenu}
          onClick={handleClick}
          activeClass='activate'
        >
          <li>
            <LinksLabel to='/'>Inicio</LinksLabel>
          </li>
          <li>
            <LinksLabel to='conectividad'>Conectividad</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/seguridad'>Seguridad</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/domotica'>Domótica</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/contacto'>Contacto</LinksLabel>
          </li>
        </NavMenu>
      </FlexContainer>
    </NavbarContainer>
  )
}

export default Navbar
