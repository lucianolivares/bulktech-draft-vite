import {
  LinksLabel,
  LogoStyled,
  NavbarContainer
} from './styles'
import Burger from './Burger'

function Navbar () {
  return (
    <NavbarContainer>
      <LinksLabel to='/'>
        <LogoStyled />
      </LinksLabel>
      <Burger />
    </NavbarContainer>
  )
}

export default Navbar
