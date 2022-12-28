import { useState } from 'react'
import { Link } from 'wouter'
import { FaHamburger, FaTimes } from 'react-icons/fa'
import {
  BurgerIcon,
  FlexContainer,
  FontLogo,
  LinksLabel,
  Logo,
  NavbarContainer,
  NavMenu
} from './styles'
import logoBlanco from '../../assets/logoBlanco.png'

function Navbar () {
  const [showNavMenu, setShowNavMenu] = useState(false)

  const handleClick = () => setShowNavMenu(!showNavMenu)

  return (
    <NavbarContainer>
      <FlexContainer>
        <Link to='/'>
          <FontLogo>BulkTech</FontLogo>
          {/* <Logo src={logoBlanco} alt='Logo' /> */}
        </Link>
      </FlexContainer>

      <FlexContainer>
        <BurgerIcon onClick={handleClick}>
          {showNavMenu ? <FaTimes /> : <FaHamburger />}
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
            <LinksLabel to='/community-link'>CommunityLink</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/overwatch'>Overwatch</LinksLabel>
          </li>
          <li>
            <LinksLabel to='/smart-ya'>SmartYa</LinksLabel>
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
