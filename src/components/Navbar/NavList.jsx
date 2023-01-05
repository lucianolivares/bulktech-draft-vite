import { NavMenu, LinksLabel } from './styles'

const NavList = ({ open, action }) => {
  return (
    <NavMenu open={open} onClick={() => action(!open)}>
      <li>
        <LinksLabel to='/conectividad'>Conectividad</LinksLabel>
      </li>
      <li>
        <LinksLabel to='/seguridad'>Seguridad</LinksLabel>
      </li>
      <li>
        <LinksLabel to='/domotica'>Domótica</LinksLabel>
      </li>
      <li>
        <LinksLabel to='/nosotros'>Nosotros</LinksLabel>
      </li>
    </NavMenu>
  )
}

export default NavList
