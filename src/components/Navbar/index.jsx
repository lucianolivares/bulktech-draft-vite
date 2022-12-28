import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
  BurgerIcon,
  FlexContainer,
  FontLogo,
  LinksLabel,
  NavbarContainer,
  NavMenu
} from './styles'

function Navbar () {
  const [showNavMenu, setShowNavMenu] = useState(false)

  const handleClick = () => setShowNavMenu(!showNavMenu)

  return (
    <NavbarContainer>
      <FlexContainer>
        <LinksLabel to='/'>
          <FontLogo>BulkTech</FontLogo>
          {/* <Logo src={logoBlanco} alt='Logo' /> */}
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
            <LinksLabel to='community-link'>CommunityLink</LinksLabel>
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
