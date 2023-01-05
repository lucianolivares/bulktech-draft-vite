import {
  Logo,
  LinksLabel,
  NavbarContainer
} from './styles'
import logo from '../../assets/logo_ia.png'
import Burger from './Burger'

function Navbar () {
  return (
    <NavbarContainer>
      <LinksLabel to='/'>
        <Logo src={logo} alt='Logo' />
      </LinksLabel>
      <Burger />
    </NavbarContainer>
  )
}

export default Navbar
